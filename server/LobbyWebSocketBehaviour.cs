using Newtonsoft.Json;
using WebSocketSharp;
using WebSocketSharp.Server;

namespace OmduLobby
{
    public class LobbyWebSocketBehaviour : WebSocketBehavior
    {
        protected override void OnOpen()
        {
            Logger.LogInfo($"Opened connection {ID}");

            // Try to reserve a player slot for the new connection
            int? slot = null;
            if (Context.IsLocal) slot = Lobby.Singleton.ReserveHostPlayerSlot(ID); // Only the local machine can be the host
            slot ??= Lobby.Singleton.ReservePlayerSlot(ID);

            if (!slot.HasValue)
            {
                Logger.LogWarning("Player rejected");
                Sessions.CloseSession(ID);
            }
            else
            {
                // Let the connection know which player slot was assigned to them
                SendPlayerSlotAssignment(slot.Value);

                // Get the new connection up to speed with the current state of the lobby
                BroadcastLobbyUpdate();
            }
        }

        protected override void OnMessage(MessageEventArgs e)
        {
            Logger.LogDebug($"Message received from {ID} {e.Data}");

            WebSocketMessage? data = JsonConvert.DeserializeObject<WebSocketMessage>(e.Data);
            if (!data.HasValue)
            {
                Logger.LogWarning("Message invalid (null)");
                return;
            }
            WebSocketMessage message = data.Value;

            if (Lobby.Singleton.IsHost(ID) && message.Type == "update-battleground")
            {
                Lobby.Singleton.BattlegroundId = message.Value == null ? null : int.Parse(message.Value);
            }
            else if (message.Type == "update-loadout")
            {
                Lobby.Singleton.UpdatePlayerLoadout(ID, message.Value);
            }
            else
            {
                Logger.LogWarning("Message invalid (unknown)");
                return;
            }

            BroadcastLobbyUpdate();
        }

        protected override void OnClose(CloseEventArgs e)
        {
            Logger.LogInfo($"Closed connection {ID}");

            Lobby.Singleton.ReleasePlayerSlot(ID);

            BroadcastLobbyUpdate();
        }

        protected override void OnError(WebSocketSharp.ErrorEventArgs e)
        {
            Logger.LogError(e.Message);
        }

        private void SendPlayerSlotAssignment(int slot)
        {
            Send(JsonConvert.SerializeObject(new
            {
                type = "assigned-player-slot",
                playerSlot = slot,
            }));
        }

        private void BroadcastLobbyUpdate()
        {
            Sessions.Broadcast(JsonConvert.SerializeObject(new
            {
                type = "updated-lobby",
                lobby = Lobby.Singleton.GetData()
            }));
        }
    }
}
