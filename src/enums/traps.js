import DamageType from './damageType';
import TrapPartSlot from './trapPartSlot';
import Placement from './placement';

const Traps = Object.freeze([
	{
		id: 100,
		name: "Arcane Bowling Ball",
		description: "Fires an orb in a straight line, dealing arcane damage. The orb's damage causes subsequent Arcane attacks to deal more damage. +25% damage when used by Stinkeye.",
		trapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Spring, TrapPartSlot.Components],
		image: "images/traps/Arcane_Bowling_Ball_wood_image.webp",
		placement: Placement.Walls,
		cost: 1000,
		damageType: DamageType.Arcane,
		range: 20,
		size: [1, 1],
		max: 6
	},
	{
		id: 101,
		name: "Arcane Phaser",
		description: "Emits a cloud of Arcane energy when triggered, dealing Arcane damage to enemies that walk across it. Trap expires after firing 9 times.",
		trapPartSlots: [TrapPartSlot.Components, TrapPartSlot.Field, TrapPartSlot.Resonator],
		image: "images/traps/Arcane_Phaser_wood_image.webp",
		placement: Placement.Floor,
		cost: 250,
		damageType: DamageType.Arcane,
		size: [1, 1]
	},
	{
		id: 102,
		name: "Arrow Wall",
		description: "Fires a barrage of arrows in a straight line when triggered, dealing Physical damage.",
		trapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Spring, TrapPartSlot.Trigger],
		image: "images/traps/Arrow_Wall_wood_image.webp",
		placement: Placement.Walls,
		cost: 500,
		damageType: DamageType.Physical,
		range: 3,
		size: [1, 1]
	},
	{
		id: 103,
		name: "Big Game Hunting Arrow Wall",
		description: "ONLY attacks Hunter Minions, Bosses and Mercenaries. Fires a barrage of magical, mercenary and boss seeking arrows, dealing a portion of the target's max health and a bonus as damage.",
		trapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Spring, TrapPartSlot.Components],
		image: "images/traps/Big_Game_Hunting_Arrow_Wall_wood_image.webp",
		placement: Placement.Walls,
		cost: 1000,
		damageType: DamageType.Physical,
		range: 3,
		size: [1, 1]
	},
	{
		id: 104,
		name: "Ceiling Ballista",
		description: "Fires long-range arrows radially from above when triggered, dealing Physical damage. It also targets Unstable Rifts but deals very low damage to them opposed to the Big Game Hunting Ballista. Ballistas, activation range is lengthened / shortened by Line of Sight (LoS). So if minions come around a corner, the activation range is changed based on the trap's LoS and any Triggers would activate at that point.",
		trapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Spring, TrapPartSlot.Trigger],
		image: "images/traps/Ceiling_Ballista_wood_image.webp",
		placement: Placement.Ceiling,
		cost: 1000,
		damageType: DamageType.Physical,
		range: 5,
		size: [0.5, 0.5]

	},
	{
		id: 105,
		name: "Dragons Lance",
		description: "Fires a magical lance when triggered, dealing Arcane damage. Lance casts a debuff, causing Arcane attacks to deal more damage. Dragon's Lance, activation range is lengthened / shortened by Line of Sight (LoS). So if minions come around a corner, the activation range is changed based on the trap's LoS and any Triggers would activate at that point.",
		trapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Spring, TrapPartSlot.Trigger],
		image: "images/traps/Dragon's_Lance_wood_image.webp",
		placement: Placement.Ceiling,
		cost: 1025,
		damageType: DamageType.Arcane,
		range: 5,
		size: [0.5, 0.5]
	},
	{
		id: 106,
		name: "Big Game Hunting Ceiling Ballista",
		description: "ONLY attacks Hunter Minions, Bosses and Mercenaries. Also attacks Unstable Rifts Fires Mercenary and Boss seeking arrows, dealing a portion of the target's max health plus a bonus as damage.",
		trapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Spring, TrapPartSlot.Components],
		image: "images/traps/Big_Game_Hunting_Ballista_wood_image.webp",
		placement: Placement.Ceiling,
		cost: 1000,
		damageType: DamageType.Physical,
		range: 5,
		size: [0.5, 0.5]
	},
	{
		id: 107,
		name: "Barricade",
		description: "Blocks and redirects Minion paths. Useful for forcing Minions into Traps.",
		trapPartSlots: [TrapPartSlot.Cladding, TrapPartSlot.Components, TrapPartSlot.Frame],
		image: "images/traps/Barricade_wood_image.webp",
		placement: Placement.Floor,
		cost: 1000,
		size: [1, 1]
	},
	{
		id: 108,
		name: "Great Wall Barricade",
		description: "Blocks and redirects minions. The Great Wall Barricade is a longer version of the Barricade.",
		trapPartSlots: [TrapPartSlot.Cladding, TrapPartSlot.Components, TrapPartSlot.Frame],
		image: "images/traps/Great_Wall_Barricade_wood_image.webp",
		placement: Placement.Floor,
		cost: 1750,
		size: [2, 1]
	},
	{
		id: 109,
		name: "Boom Barrel",
		description: "Explodes when hit, dealing damage in a small area. -20% cost when used by Deadeye.",
		trapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Components, TrapPartSlot.Resonator],
		image: "images/traps/Boom_Barrel_wood_image.webp",
		placement: Placement.Floor,
		cost: 300,
		damageType: DamageType.Physical
	},
	{
		id: 110,
		name: "Boom Barrel Roller",
		description: "Occasionally rolls out Boom Barrels which explode when hit, dealing damage in a small area.",
		trapPartSlots: [TrapPartSlot.Coil, TrapPartSlot.Components, TrapPartSlot.Coil],
		image: "images/traps/Boom_Barrel_Roller_wood_image.webp",
		placement: Placement.Walls,
		cost: 1000,
		damageType: DamageType.Physical,
		size: [1, 1]
	},
	{
		id: 111,
		name: "Boulder Chute",
		description: "Drops boulders on Enemies when shot by a hero. Boulders deal Physical damage.",
		trapPartSlots: [TrapPartSlot.Components, TrapPartSlot.Resonator, TrapPartSlot.Spring],
		image: "images/traps/Boulder_Chute_wood_image.webp",
		placement: Placement.Ceiling,
		cost: 0,
		damageType: DamageType.Physical,
		range: 10,
		size: [1, 1],
		max: 4
	},
	{
		id: 112,
		name: "Icicle Impaler",
		description: "Drops sharp icicles when shot by a Hero, dealing Frost damage and casting Chilled on Enemies.",
		trapPartSlots: [TrapPartSlot.Components, TrapPartSlot.Resonator, TrapPartSlot.Spring],
		image: "images/traps/Icicle_Impaler_wood_image.webp",
		placement: Placement.Ceiling,
		cost: 500,
		damageType: DamageType.Frost,
		range: 10,
		size: [1, 1],
		max: 4
	},
	{
		id: 113,
		name: "Brimstone",
		description: "Burns Enemies that walk across its embers, dealing Fire damage over time. Fire damage from multiple brimstones does not stack.",
		trapPartSlots: [TrapPartSlot.Field, TrapPartSlot.Resonator, TrapPartSlot.Spring],
		image: "images/traps/Brimstone_wood_image.webp",
		placement: Placement.Floor,
		cost: 1500,
		damageType: DamageType.Fire,
		size: [1, 1]
	},
	{
		id: 114,
		name: "Coin Forge",
		description: "Enemies are worth 64% additional coin if they are killed on this trap. +10% additional coin when used by Dobbin.",
		trapPartSlots: [TrapPartSlot.Field, TrapPartSlot.Field, TrapPartSlot.Field],
		image: "images/traps/Coin_Forge_wood_image.webp",
		placement: Placement.Floor,
		cost: 0,
		size: [2, 2],
		max: 2
	},
	{
		id: 115,
		name: "Cursed Ground",
		description: "Deals Arcane damage that increases as Enemies stay on this tile. Also causes subsequent Arcane attacks to deal more damage. +25% damage when used by Oziel.",
		trapPartSlots: [TrapPartSlot.Field, TrapPartSlot.Resonator, TrapPartSlot.Spring],
		image: "images/traps/Cursed_Ground_wood_image.webp",
		placement: Placement.Floor,
		cost: 1500,
		damageType: DamageType.Arcane,
		size: [1, 1]
	},
	{
		id: 116,
		name: "Decoy",
		description: "Attracts Enemies to attack it until it is destroyed. The decoy does not respawn and must be replaced. Trap expires after being attacked 10 times. Enemies that attack the decoy are debuffed to take 15% more damage from all sources.",
		trapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Components, TrapPartSlot.Components],
		image: "images/traps/Decoy_wood_image.webp",
		placement: Placement.Floor,
		cost: 300,
		max: 10
	},
	{
		id: 117,
		name: "Spitfire Wall",
		description: "Spits fireballs at Enemies, dealing Fire damage over time. Fire damage from multiple spitfire walls does not stack.",
		trapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Spring, TrapPartSlot.Trigger],
		image: "images/traps/Spitfire_Wall_wood_image.webp",
		placement: Placement.Walls,
		cost: 1000,
		damageType: DamageType.Fire,
		size: [1, 1],
		range: 3
	},
	{
		id: 118,
		name: "Fire Cracker",
		description: "Emits a fiery mist, dealing Fire damage over time when triggered. Fire damage from multiple fire crackers does not stack.",
		trapPartSlots: [TrapPartSlot.Field, TrapPartSlot.Resonator, TrapPartSlot.Spring],
		image: "images/traps/Fire_Cracker_wood_image.webp",
		placement: Placement.Floor,
		cost: 500,
		damageType: DamageType.Fire,
		size: [3, 0.5]
	},
	{
		id: 119,
		name: "Flip Trap",
		description: "Flips enemies into the air when triggered. This trap is useful for propelling Enemies into other traps.",
		trapPartSlots: [TrapPartSlot.Accumulator, TrapPartSlot.Spring, TrapPartSlot.Trigger],
		image: "images/traps/Flip_Trap_wood_image.webp",
		placement: Placement.Floor,
		cost: 600,
		damageType: DamageType.Physical,
		size: [1, 1]
	},
	{
		id: 120,
		name: "Floor Scorcher",
		description: "Scorches Enemies when triggered, dealing Fire damage over time. Fire damage from multiple floor scorchers does not stack.",
		trapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Spring, TrapPartSlot.Trigger],
		image: "images/traps/Floor_Scorcher_wood_image.webp",
		placement: Placement.Floor,
		cost: 1000,
		damageType: DamageType.Fire,
		size: [1, 1],
		range: 3
	},
	{
		id: 121,
		name: "Temple Alarm Gong",
		description: "This ancient gong sounds an alarm when Enemies approach and slows them by 70%. -20% cooldown when used by Yi-Lin.",
		trapPartSlots: [TrapPartSlot.Field, TrapPartSlot.Spring, TrapPartSlot.Trigger],
		image: "images/traps/Temple_Alarm_Gong_wood_image.webp",
		placement: Placement.Ceiling,
		cost: 1000,
		size: [3, 1],
		count: 2
	},
	{
		id: 122,
		name: "Grinder",
		description: "Grinds up Enemies walking past it, dealing Physical damage until it jams. After jamming, the Grinder must cooldown to reset.",
		trapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Spring, TrapPartSlot.Components],
		image: "images/traps/Grinder_wood_image.webp",
		placement: Placement.Walls,
		cost: 1350,
		damageType: DamageType.Physical,
		size: [1, 1]
	},
	{
		id: 123,
		name: "Quarter Pounder",
		description: "Pounds one quarter of the trap area when triggered, dealing high Physical damage and stunning Minions.",
		trapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Spring, TrapPartSlot.Trigger],
		image: "images/traps/Quarter_Pounder_wood_image.webp",
		placement: Placement.Ceiling,
		cost: 750,
		damageType: DamageType.Physical,
		size: [2, 2]
	},
	{
		id: 124,
		name: "Haymaker",
		description: "Descends from the ceiling and spins when triggered, knocking Enemies around and dealing Physical damage.",
		trapPartSlots: [TrapPartSlot.Accumulator, TrapPartSlot.Spring, TrapPartSlot.Trigger],
		image: "images/traps/Haymaker_wood_image.webp",
		placement: Placement.Ceiling,
		cost: 1500,
		damageType: DamageType.Physical,
		size: [1, 1]
	},
	{
		id: 125,
		name: "Healing Well",
		description: "Casts a health regeneration buff on an ally. The buff is dispelled upon taking damage. Once used, it must reset.",
		trapPartSlots: [TrapPartSlot.Attuner, TrapPartSlot.Coil, TrapPartSlot.Components],
		image: "images/traps/Healing_Well_wood_image.webp",
		placement: Placement.Walls,
		cost: 1000,
		size: [0.5, 1]
	},
	{
		id: 126,
		name: "Ice Shard",
		description: "Cuts enemies, dealing Frost damage and casting Chilled on them. Enemies are frozen after multiple stacks of Chilled (5 stacks).",
		trapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Spring, TrapPartSlot.Trigger],
		image: "images/traps/Ice_Shard_wood_image.webp",
		placement: Placement.Floor,
		cost: 250,
		damageType: DamageType.Frost,
		size: [0.5, 0.5]
	},
	{
		id: 127,
		name: "Ice Vent",
		description: "Emits icy mist that deals Frost damage and casts Chilled on enemies. Enemies are frozen after multiple stacks of Chilled (5 stacks). +25% damage when used by Hogarth.",
		trapPartSlots: [TrapPartSlot.Field, TrapPartSlot.Resonator, TrapPartSlot.Spring],
		image: "images/traps/Ice_Vent_wood_image.webp",
		placement: Placement.Floor,
		cost: 1500,
		damageType: DamageType.Frost,
		size: [2, 2]
	},
	{
		id: 128,
		name: "Lightning Rod",
		description: "Shocks Enemies beneath it with lightning when triggered. Every few times this trap fires, it becomes more powerful, allowing its attack to chain to additional Enemies.",
		trapPartSlots: [TrapPartSlot.Components, TrapPartSlot.Spring, TrapPartSlot.Trigger],
		image: "images/traps/Lightning_Rod_wood_image.webp",
		placement: Placement.Ceiling,
		cost: 500,
		damageType: DamageType.Lightning,
		size: [0.5, 0.5]
	},
	{
		id: 129,
		name: "Mana Well",
		description: "Grants a mana regeneration buff to a nearby ally. Buff is lost upon taking damage. Once used, the Mana Well must reset.",
		trapPartSlots: [TrapPartSlot.Attuner, TrapPartSlot.Coil, TrapPartSlot.Components],
		image: "images/traps/Mana_Well_wood_image.webp",
		placement: Placement.Walls,
		cost: 1000,
		size: [0.5, 1]
	},
	{
		id: 130,
		name: "Summoner Trap",
		description: "Calls a ghostly summoned retainer to fight for the Hero. If it is killed, the trap must reset. Limit 2 at a time. +25 trap health if used by Gabriella. Revenge Rune and Reusable Shielding have a cooldown of 300 seconds (5 minutes) when used in Summoner Trap.",
		trapPartSlots: [TrapPartSlot.Cladding, TrapPartSlot.Components, TrapPartSlot.Frame],
		image: "images/traps/Summoner_Trap_wood_image.webp",
		placement: Placement.Floor,
		cost: 2000,
		damageType: DamageType.Arcane,
		size: [1, 1],
		max: 2,
		range: 3
	},
	{
		id: 131,
		name: "Naphtha Sprayer",
		description: "Sprays enemies with naphtha when triggered. Naphtha causes Enemies to take 37.5% increased Fire damage. Trap is free when used by Smolder.",
		trapPartSlots: [TrapPartSlot.Components, TrapPartSlot.Field, TrapPartSlot.Trigger],
		image: "images/traps/Naphtha_Sprayer_wood_image.webp",
		placement: Placement.Walls,
		cost: 1000,
		size: [1, 1],
		max: 6,
		range: 3
	},
	{
		id: 132,
		name: "Overload Trap",
		description: "Overloads traps, dealing damage when triggered and disabling floor traps that deal damage. +25% damage when used by Zoey.",
		trapPartSlots: [TrapPartSlot.Components, TrapPartSlot.Resonator, TrapPartSlot.Spring],
		image: "images/traps/Overload_Trap_wood_image.webp",
		placement: Placement.Ceiling,
		cost: 1250,
		damageType: DamageType.Physical,
		size: [1, 1],
		max: 6,
	},
	{
		id: 133,
		name: "Powerup Damage",
		description: "Drops a Powerup that boosts player damage by 20% for 24 seconds.",
		trapPartSlots: [TrapPartSlot.Attuner, TrapPartSlot.Coil, TrapPartSlot.Components],
		image: "images/traps/Powerup_Damage_wood_image.webp",
		placement: Placement.Ceiling,
		cost: 1500,
		size: [1, 1]
	},
	{
		id: 134,
		name: "Pounder",
		description: "Pounds Enemies that pass beneath it when triggered, dealing Physical damage.",
		trapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Spring, TrapPartSlot.Trigger],
		image: "images/traps/Pounder_wood_image.webp",
		placement: Placement.Ceiling,
		cost: 400,
		damageType: DamageType.Physical,
		size: [1, 1],
	},
	{
		id: 135,
		name: "Concussive Pounder",
		description: "Pounds Enemies into the ground when triggered, stunning them. Deals no damage.",
		TrapPartSlots: [TrapPartSlot.Coil, TrapPartSlot.Components, TrapPartSlot.Trigger],
		image: "images/traps/Concussive_Pounder_bronze_image.webp",
		placement: Placement.Ceiling,
		cost: 350,
		size: [1, 1],
		range: 1.5
	},
	{
		id: 136,
		name: "Power Generator",
		description: "Generates coin for the owner if Enemies walk in front of it. Loses health each time it generates coin. Doesn't return coin when sold. Note: Generates 468 coins per wave at Tier 7.",
		TrapPartSlots: [TrapPartSlot.Field, TrapPartSlot.Components, TrapPartSlot.Field],
		image: "images/traps/Power_Generator_wood_image.webp",
		placement: Placement.Walls,
		cost: 1000,
		size: [1, 1],
	},
	{
		id: 137,
		name: "Push Trap",
		description: "Shoves Enemies when triggered, pushing them away and dealing Physical damage.",
		TrapPartSlots: [TrapPartSlot.Accumulator, TrapPartSlot.Spring, TrapPartSlot.Trigger],
		image: "images/traps/Push_Trap_wood_image.webp",
		placement: Placement.Walls,
		cost: 400,
		damageType: DamageType.Physical,
		size: [1, 1],
		range: 1.5
	},
	{
		id: 138,
		name: "Saw Of Arctos",
		description: "Slices through Enemies with an ice blade, dealing Frost damage and casting Chilled on them. Enemies are frozen with 5 Chilled Stacks. + 25% damage when used by Tundra.",
		TrapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Spring, TrapPartSlot.Trigger],
		image: "images/traps/Saw_Of_Arctos_wood_image.webp",
		placement: Placement.Floor,
		cost: 1000,
		damageType: DamageType.Frost,
		size: [4, 0.5],
		max: 6
	},
	{
		id: 139,
		name: "Shield Powerup",
		description: "Drops a Powerup for Heroes that temporarily reduces damage taken by 30% for 24 seconds.",
		TrapPartSlots: [TrapPartSlot.Attuner, TrapPartSlot.Coil, TrapPartSlot.Components],
		image: "images/traps/Shield_Powerup_wood_image.webp",
		placement: Placement.Ceiling,
		cost: 1500,
		size: [1, 1],
	},
	{
		id: 140,
		name: "Speed Pad",
		description: "Increases the movement speed of a Hero crossing it by 50-110% for 3 seconds. Pad must reset after use.",
		TrapPartSlots: [TrapPartSlot.Attuner, TrapPartSlot.Coil, TrapPartSlot.Components],
		image: "images/traps/Speed_Pad_wood_image.webp",
		placement: Placement.Floor,
		cost: 3500,
		size: [1, 1]
	},
	{
		id: 141,
		name: "Floor Spikes",
		description: "Skewers Enemies from below when triggered, dealing Physical damage.",
		TrapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Spring, TrapPartSlot.Trigger],
		image: "images/traps/Floor_Spikes_wood_image.webp",
		placement: Placement.Floor,
		cost: 500,
		damageType: DamageType.Physical,
		size: [1, 1]
	},
	{
		id: 142,
		name: "Spike Wall",
		description: "Swings a wall of spikes at Enemies when triggered, knocking them back and dealing Physical damage.",
		TrapPartSlots: [TrapPartSlot.Accumulator, TrapPartSlot.Spring, TrapPartSlot.Trigger],
		image: "images/traps/Spike_Wall_wood_image.webp",
		placement: Placement.Walls,
		cost: 1500,
		damageType: DamageType.Physical,
		size: [1.5, 1],
		range: 1
	},
	{
		id: 143,
		name: "Steam Vent",
		description: "Blows small and normal-sized Minions into the air when triggered. Slows large Minions by 25%. Trap deals no damage.",
		TrapPartSlots: [TrapPartSlot.Coil, TrapPartSlot.Components, TrapPartSlot.Trigger],
		image: "images/traps/Steam_Vent_wood_image.webp",
		placement: Placement.Floor,
		cost: 500,
		size: [1, 1]
	},
	{
		id: 144,
		name: "Swinging Mace",
		description: "Continuously swings a large mace, pummeling enemies that pass beneath it and dealing Physical damage.",
		TrapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Spring, TrapPartSlot.Components],
		image: "images/traps/Swinging_Mace_wood_image.webp",
		placement: Placement.Ceiling,
		cost: 2000,
		damageType: DamageType.Physical,
		size: [3, 1],
		range: 1.5
	},
	{
		id: 145,
		name: "Tar Trap",
		description: "Tars the feet of Enemies crossing it, causing them to be slowed by 40-61% while on the trap.",
		TrapPartSlots: [TrapPartSlot.Field, TrapPartSlot.Components, TrapPartSlot.Field],
		image: "images/traps/Tar_Trap_wood_image.webp",
		placement: Placement.Floor,
		cost: 500,
		size: [1, 1]
	},
	{
		id: 146,
		name: "Viscous Tar",
		description: "Tars the feet of Enemies crossing it, causing them to be slowed by 40-61% while on the trap and for 1.75-2.12 seconds afterwards.",
		TrapPartSlots: [TrapPartSlot.Field, TrapPartSlot.Components, TrapPartSlot.Field],
		image: "images/traps/Viscous_Tar_wood_image.webp",
		placement: Placement.Floor,
		cost: 1500,
		size: [1, 1]
	},
	{
		id: 147,
		name: "Shock Zapper",
		description: "Zaps enemies with Lightning, dealing Lightning damage. Enemies killed by Lightning explode, dealing damage in an area.",
		TrapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Spring, TrapPartSlot.Trigger],
		image: "images/traps/Shock_Zapper_wood_image.webp",
		placement: Placement.Ceiling,
		cost: 2000,
		damageType: DamageType.Lightning,
		size: [1, 1],
		range: 1.5
	},
	{
		id: 148,
		name: "Big Game Hunting Zapper",
		description: "ONLY attacks Hunter Minions, Bosses and Mercenaries. Zaps Mercenaries and Bosses with Lightning, dealing a portion of targets' max health as damage plus a bonus.",
		TrapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Spring, TrapPartSlot.Components],
		image: "images/traps/Big_Game_Hunting_Zapper_wood_image.webp",
		placement: Placement.Ceiling,
		cost: 500,
		damageType: DamageType.Lightning,
		size: [1, 1],
		range: 20
	},
	{
		id: 149,
		name: "Trip Wire",
		description: "When a Minion 'trips' on the trip wire, it triggers nearby Traps. Wire is destroyed on use. -20% trap cost when used by Midnight.",
		TrapPartSlots: [TrapPartSlot.Components, TrapPartSlot.Trigger, TrapPartSlot.Field],
		image: "images/traps/Trip_Wire_wood_image.webp",
		placement: Placement.Floor,
		cost: [1000, 950, 850, 800, 750, 700],
		size: [2, 0.5]
	},
	{
		id: 150,
		name: "Wall Blades",
		description: "Slices and dices Enemies when triggered, dealing Physical damage.",
		TrapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Spring, TrapPartSlot.Trigger],
		image: "images/traps/Wall_Blades_wood_image.webp",
		placement: Placement.Walls,
		cost: 750,
		damageType: DamageType.Physical,
		size: [1, 1],
		range: 1.5
	},
	{
		id: 151,
		name: "Wall Charger",
		description: "Shocks Enemies that walk by it, dealing Lightning damage. Enemies killed by Lightning explode, dealing damage in an area.",
		TrapPartSlots: [TrapPartSlot.Resonator, TrapPartSlot.Spring, TrapPartSlot.Trigger],
		image: "images/traps/Wall_Charger_wood_image.webp",
		placement: Placement.Walls,
		cost: 1250,
		damageType: DamageType.Lightning,
		size: [1, 1],
		range: 1.5
	},
	{
		id: 152,
		name: "Web Spinner",
		description: "Spins a web around Enemies when triggered, slowing their attack speed and movement speed by 25-55% for 2 seconds.",
		TrapPartSlots: [TrapPartSlot.Components, TrapPartSlot.Field, TrapPartSlot.Trigger],
		image: "images/traps/Web_Spinner_wood_image.webp",
		placement: Placement.Walls,
		cost: 500,
		size: [1, 1]
	}
]);
export default Traps;