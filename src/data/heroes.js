import Range from '../enums/range.js';
import DamageType from '../enums/damageType.js';

const heroes = Object.freeze([
    {
        id: 1,
        name: "Bionka",
        hp: 625,
        mana: 130,
        range: Range.Melee,
        damageType: DamageType.Physical,
        trapAffinity: null,
        abilities: {
            passive: {
                name: "Queen Of The Unchained",
                icon: "images/abilities/Queen_Of_The_Unchained_icon.webp",
                description: "Killing large minions fills Bionka's Unchained meter even if she has not earned a combo.",
                cooldown: null,
                cost: null
            },
            primary: {
                name: "Mace To Face",
                icon: "images/abilities/Mace_To_Face_icon.webp",
                description: "Bionka swings her flail in a wide melee attack.",
                cooldown: null,
                cost: null
            },
            secondary: {
                name: "Slam it Down",
                icon: "images/abilities/Slam_it_Down_icon.webp",
                description: "Bionka slams the ground with her flail dealing heavy damage.",
                cooldown: 10,
                cost: 35
            },
            third: {
                name: "Bionka Bounce",
                icon: "images/abilities/Bionka_Bounce_icon.webp",
                description: "Bionka jumps up and bounces on the ground, knocking enemies up into the air in a radius.",
                cooldown: 11,
                cost: 30
            },
            forth: {
                name: "Beat Dem Back",
                icon: "images/abilities/Beat_Dem_Back_icon.webp",
                description: "Bionka winds up her flail to unleash a devastating medium range attack. Attack causes a heavy knockback.",
                cooldown: 40,
                cost: 50
            }
        },
        upgrades: {
            tier1: [
                {
                    name: "Love My Mace",
                    description: "Dealing damage to an enemy with Slam it Down reduces the cooldown of Beat Dem Back by 5s.",
                    icon: "images/abilities/Slam_it_Down_icon.webp"
                },
                {
                    name: "Love Da Unchained",
                    description: "Increases Unchained energy from Unchained drops by 50%.",
                    icon: "images/upgrades/Love_Da_Unchained_icon.webp"
                },
                {
                    name: "Love My Armor",
                    description: "Reduces damage taken from orcs by 50%.",
                    icon: "images/abilities/Queen_Of_The_Unchained_icon.webp"
                }
            ],
            tier2: [
                {
                    name: "Unchained Momma",
                    description: "Increases the duration of Unchained by 25%.",
                    icon: "images/upgrades/Unchained_Momma_icon.webp"
                },
                {
                    name: "Bouncy Momma",
                    description: "Increases the height of Bionka Bounce's knockup by 50%.",
                    icon: "images/abilities/Bionka_Bounce_icon.webp"
                },
                {
                    name: "Mean Momma",
                    description: "Reduces the mana cost of Beat Dem Back by 35%.",
                    icon: "images/abilities/Beat_Dem_Back_icon.webp"
                }
            ],
            tier3: [
                {
                    name: "Make Dem Stop",
                    description: "Bionka Bounce slows enemies by 40% for 5s when they land from its knockup.",
                    icon: "images/abilities/Bionka_Bounce_icon.webp"
                },
                {
                    name: "Make Dem Work",
                    description: "Grants Bionka Bounce a 50% chance to trigger traps in its area.",
                    icon: "images/abilities/Bionka_Bounce_icon.webp"
                },
                {
                    name: "Make Dem Ded",
                    description: "Enemies landing from Bionka Bounce knockup are dealt damage. Damage scales with level.",
                    icon: "images/abilities/Bionka_Bounce_icon.webp"
                }
            ],
            tier4: [
                {
                    name: "Queen of Hurt",
                    description: "Slam it Down leaves a crater that slows enemies by 40%.",
                    icon: "images/abilities/Slam_it_Down_icon.webp"
                },
                {
                    name: "Queen of Speed",
                    description: "Increases Bionka's movement speed during Unchained by 50%.",
                    icon: "images/upgrades/Queen_of_Speed_icon.webp"
                },
                {
                    name: "Queen of Heals",
                    description: "Health below 10% triggers a shield worth 40% of Bionka's max health. Lasts 5s. 180s cooldown.",
                    icon: "images/upgrades/Queen_of_Heals_icon.webp"
                }
            ],
        },
        skins: [
            {
                id: 9,
                name: "Queen Momma",
                image: "images/heroes/Bionka.webp"
            },
            {
                id: 10,
                name: "Lizard Queen",
                image: "images/skins/Bionka_Lizard_Queen_background.webp"
            },
            {
                id: 11,
                name: "Fluffalump",
                image: "images/skins/Bionka_Fluffalump_background.webp"
            },
            {
                id: 12,
                name: "Bunny",
                image: "images/skins/Bionka_Bionka_Bunny_background.webp"
            }
        ],
        icon: "images/hero-icons/Bionka.webp"
    },
    {
        id: 2,
        name: "Blackpaw",
        hp: 341,
        mana: 175,
        range: Range.Melee,
        damageType: DamageType.Physical,
        trapAffinity: null,
        abilities: {
            passive: {
                name: "Pounce",
                icon: "images/abilities/Pounce_icon.webp",
                description: "Blackpaw can double jump to leap forward. This ability costs mana.",
                cooldown: null,
                cost: 15
            },
            primary: {
                name: "Slashing Claws",
                icon: "images/abilities/Slashing_Claws_icon.webp",
                description: "Blackpaw slashes enemies with a melee attack that deals physical damage in an arc.",
                cooldown: null,
                cost: null
            },
            secondary: {
                name: "Wound the Prey",
                icon: "images/abilities/Wound_the_Prey_icon.webp",
                description: "Blackpaw wounds the enemy. Blackpaw deals +250% damage until the Wound debuff expires.",
                cooldown: 5,
                cost: 15
            },
            third: {
                name: "Call to the Beyond",
                icon: "images/abilities/Call_to_the_Beyond_icon.webp",
                description: "Summons 2 undead gnolls that target enemies and prioritize those that are wounded.",
                cooldown: 70,
                cost: 50
            },
            forth: {
                name: "Go for the Throat",
                icon: "images/abilities/Go_for_the_Throat_icon.webp",
                description: "Blackpaw bites an enemy, dealing high damage and recovering health.",
                cooldown: 6,
                cost: 15
            }
        },
        upgrades: {
            tier1: [
                {
                    name: "Cutting Deep",
                    description: "Increases the duration of Wound the Prey by 1.5s.",
                    icon: "images/abilities/Wound_the_Prey_icon.webp"
                },
                {
                    name: "Feral Fitness",
                    description: "Increases Blackpaw's health regeneration by 1.5% of his max health per second.",
                    icon: "images/upgrades/Feral_Fitness_icon.webp"
                },
                {
                    name: "Sharper Claws",
                    description: "Increases damage to large minions by 15%.",
                    icon: "images/abilities/Slashing_Claws_icon.webp"
                }
            ],
            tier2: [
                {
                    name: "Hungry Wolf",
                    description: "Reduces the cooldown of Go for the Throat by 2s.",
                    icon: "images/upgrades/Hungry_Wolf_icon.webp"
                },
                {
                    name: "Thin the Herd",
                    description: "Adds a 2s slow to Wound the Prey.",
                    icon: "images/abilities/Wound_the_Prey_icon.webp"
                },
                {
                    name: "Spirit Animal",
                    description: "Increases Blackpaw's max mana by +40.",
                    icon: "images/upgrades/Spirit_Animal_icon.webp"
                }
            ],
            tier3: [
                {
                    name: "Kindred Souls",
                    description: "Increases damage dealt by Blackpaw's spirit gnolls by 16.6%.",
                    icon: "images/abilities/Call_to_the_Beyond_icon.webp"
                },
                {
                    name: "Heal, Boy, Heal",
                    description: "Increases health regenerated by Go for the Throat by 30%.",
                    icon: "images/abilities/Go_for_the_Throat_icon.webp"
                },
                {
                    name: "Jumpy Wolf",
                    description: "Removes the mana cost of Pounce.",
                    icon: "images/upgrades/Jumpy_Wolf_icon.webp"
                }
            ],
            tier4: [
                {
                    name: "Vengeful Vigor",
                    description: "Increases Blackpaw's damage as his health decreases (up to 35%).",
                    icon: "images/upgrades/Vengeful_Vigor_icon.webp"
                },
                {
                    name: "Take What Is Owed",
                    description: "Slashing Claws restores 2% of Blackpaw's max health on hit.",
                    icon: "images/upgrades/Take_What_Is_Owed_icon.webp"
                },
                {
                    name: "Call of the Wild",
                    description: "Adds +1 additional undead gnoll to Call to the Beyond.",
                    icon: "images/upgrades/Call_of_the_Wild_icon.webp"
                }
            ],
        },
        skins: [
            {
                id: 15,
                name: "Vindicator of the Dead",
                image: "images/heroes/Blackpaw.webp"
            },
            {
                id: 13,
                name: "Enchanted Armor",
                image: "images/skins/Blackpaw_Enchanted_Armor_background.webp"
            },
            {
                id: 14,
                name: "Paw of the Dead",
                image: "images/skins/Blackpaw_Paw_of_the_Dead_background.webp"
            },
            {
                id: 16,
                name: "Tutu D'Loo",
                image: "images/skins/Blackpaw_Tutu_D'Loo_background.webp"
            },
            {
                id: 17,
                name: "Pride of the Pack",
                image: "images/skins/Blackpaw_Pride_of_the_Pack_background.webp"
            },
            {
                id: 18,
                name: "Runeclaw",
                image: "images/skins/Blackpaw_Runeclaw_background.webp"
            },
            {
                id: 19,
                name: "Blackscale",
                image: "images/skins/Blackpaw_Blackscale_background.webp"
            },
            {
                id: 20,
                name: "Dragon Thrall",
                image: "images/skins/Blackpaw_Dragon_Thrall_background.webp"
            },
        ],
        icon: "images/hero-icons/Blackpaw.webp"
    },
    {
        id: 3,
        name: "Bloodspike",
        hp: 600,
        mana: 185,
        range: Range.Melee,
        damageType: DamageType.Physical,
        trapAffinity: null,
        abilities: {
            passive: {
                name: "Bloodhungry",
                icon: "images/abilities/Bloodhungry_icon.webp",
                description: "When Bloodspike kills a minion, they occasionally drop Delicious Meals which restore Bloodspike's health and reduce his cooldowns.",
                cooldown: null,
                cost: null
            },
            primary: {
                name: "Brutal Axe",
                icon: "images/abilities/Brutal_Axe_icon.webp",
                description: "Bloodspike swings one of his axes, damaging enemies in front of him.",
                cooldown: null,
                cost: null
            },
            secondary: {
                name: "Bloodbath",
                icon: "images/abilities/Bloodbath_icon.webp",
                description: "A melee attack that grants a Bloodbath stack for each enemy hit. Each stack buffs Bloodspike's attacks with +8% damage. Max 50 stacks.",
                cooldown: 4,
                cost: 8
            },
            third: {
                name: "Stunning Execution",
                icon: "images/abilities/Stunning_Execution_icon.webp",
                description: "Executes a minion who then drops a Delicious Meal. Enemies in a radius around the execution are stunned.",
                cooldown: 25,
                cost: 50
            },
            forth: {
                name: "Maiming Blow",
                icon: "images/abilities/Maiming_Blow_icon.webp",
                description: "Bloodspike slams down both axes, sending out a saw-like shockwave that damages enemies in front of him.",
                cooldown: 11,
                cost: 40
            },
            fifth: {
                name: "Homicidal Frenzy",
                icon: "images/abilities/Homicidal_Frenzy_icon.webp",
                description: "A battle cry temporarily buffs Bloodspike with +50% attack and movement speed. It also increases his health.",
                cooldown: 35,
                cost: 30
            }
        },
        upgrades: {
            tier1: [
                {
                    name: "Buzz Kill",
                    description: "Increases the range of Maiming Blow by 33%.",
                    icon: "images/abilities/Maiming_Blow_icon.webp"
                },
                {
                    name: "Finer Dining",
                    description: "Increases the drop rate of Delicious Meals by 50%.",
                    icon: "images/abilities/Bloodhungry_icon.webp"
                },
                {
                    name: "Blood in Their Eyes",
                    description: "Increases the duration of Stunning Execution's stun by 40%.",
                    icon: "images/abilities/Stunning_Execution_icon.webp"
                }
            ],
            tier2: [
                {
                    name: "Sea of Blood",
                    description: "Increases the duration of Bloodbath stacks by 4s.",
                    icon: "images/abilities/Bloodbath_icon.webp"
                },
                {
                    name: "Fortified Meals",
                    description: "Delicious Meals increase Bloodspike's max health by 0.7%.",
                    icon: "images/abilities/Bloodhungry_icon.webp"
                },
                {
                    name: "Sustained Frenzy",
                    description: "Increases the duration of Homicidal Frenzy by 50%.",
                    icon: "images/abilities/Homicidal_Frenzy_icon.webp"
                }
            ],
            tier3: [
                {
                    name: "Cheap Shot",
                    description: "Reduces the mana cost of Maiming Blow by 50%.",
                    icon: "images/abilities/Maiming_Blow_icon.webp"
                },
                {
                    name: "Extreme Execution",
                    description: "Reduces the cooldown of Stunning Execution by 33%.",
                    icon: "images/abilities/Stunning_Execution_icon.webp"
                },
                {
                    name: "Energy Snack",
                    description: "Delicious Meals increase Bloodspike's movement speed by 20% for 5s.",
                    icon: "images/abilities/Bloodhungry_icon.webp"
                }
            ],
            tier4: [
                {
                    name: "Shock Value",
                    description: "Stunning Execution now deals lightning damage in an area. Damage scales with level.",
                    icon: "images/abilities/Stunning_Execution_icon.webp"
                },
                {
                    name: "Serrated Edges",
                    description: "Causes Brutal Axe to cast a 5s bleed debuff on targets during Homicidal Frenzy. Damage scales with level.",
                    icon: "images/abilities/Homicidal_Frenzy_icon.webp"
                },
                {
                    name: "Devastating Assault",
                    description: "Maiming Blow's cooldown instantly refreshes upon killing a large minion or boss.",
                    icon: "images/abilities/Maiming_Blow_icon.webp"
                }
            ],
        },
        skins: [
            {
                id: 21,
                name: "The Brutal",
                image: "images/heroes/Bloodspike.webp"
            },
            {
                id: 22,
                name: "Grizzly Kill",
                image: "images/skins/Bloodspike_Grizzly_Kill_background.webp"
            },
            {
                id: 23,
                name: "Breaker of Molds",
                image: "images/skins/Bloodspike_Breaker_of_Molds_background.webp"
            },
            {
                id: 24,
                name: "Blood Appetit",
                image: "images/skins/Bloodspike_Blood_Appetit_background.webp"
            },
            {
                id: 25,
                name: "Green Guillotine",
                image: "images/skins/Bloodspike_Green_Guillotine_background.webp"
            },
            {
                id: 26,
                name: "Laughing to Death",
                image: "images/skins/Bloodspike_Laughing_to_Death_background.webp"
            },
        ],
        icon: "images/hero-icons/Bloodspike.webp"
    },
    {
        id: 4,
        name: "Brass",
        hp: 350,
        mana: 100,
        range: Range.Ranged,
        damageType: DamageType.Physical,
        trapAffinity: null,
        abilities: {
            passive: {
                name: "Short Stack & Scrap",
                icon: "images/abilities/Short_Stack_&_Scrap_icon.webp",
                description: "Brass is too short for large minions to see, so they will never attack her. Brass also collects scrap that drops from minions.",
                cooldown: null,
                cost: null
            },
            primary: {
                name: "Blunderbuss",
                icon: "images/abilities/Blunderbuss_icon.webp",
                description: "Brass shoots a shotgun-style spread shot from her Blunderbuss. The closer to your target the more damage possible. The blunderbuss also has a powerful knockback.",
                cooldown: null,
                cost: null
            },
            secondary: {
                name: "Cannonball Shot",
                icon: "images/abilities/Cannonball_Shot_icon.webp",
                description: "Brass shoots a giant cannonball from her Blunderbuss that damages her target and explodes. The explosion also provides an area damage effect.",
                cooldown: 6,
                cost: null
            },
            third: {
                name: "Swiss Army Wrench",
                icon: "images/abilities/Swiss_Army_Wrench_icon.webp",
                description: "Brass can use this ability to repair and upgrade her turret as well as damage minions. Any wrench attack on a minion guarantees a scrap drop.",
                cooldown: null,
                cost: null
            },
            forth: {
                name: "Brass Bombs",
                icon: "images/abilities/Brass_Bombs_icon.webp",
                description: "Brass can place a land mine that explodes in an area when minions are nearby. Brass bombs cost scrap to place and she can only have 15 out at a time.",
                cooldown: null,
                cost: 15
            },
            fifth: {
                name: "Dwarven Turret",
                icon: "images/abilities/Dwarven_Turret_icon.webp",
                description: "Brass places a ranged turret that attacks passing minions. She can use scrap to heal and upgrade the turret with her Swiss Army Wrench ability.",
                cooldown: null,
                cost: null
            }
        },
        upgrades: {
            tier1: [
                {
                    name: "Turret Feature v.1",
                    description: "Increases the health of the Dwarven Turret by 30%.",
                    icon: "images/abilities/Dwarven_Turret_icon.webp"
                },
                {
                    name: "Brass Bomb Cache",
                    description: "Reduces the scrap cost of Brass Bombs by 50%.",
                    icon: "images/abilities/Brass_Bombs_icon.webp"
                },
                {
                    name: "Scrap Pile",
                    description: "Increases the amount of scrap that Brass can carry by +50.",
                    icon: "images/abilities/Short_Stack_&_Scrap_icon.webp"
                }
            ],
            tier2: [
                {
                    name: "Stunning Cannonball",
                    description: "When the Cannonball Shot explodes minions are stunned for 1 second.",
                    icon: "images/abilities/Cannonball_Shot_icon.webp"
                },
                {
                    name: "Turret Feature v.2",
                    description: "The tier 2 upgrade of the turret reflects damage in an AoE.",
                    icon: "images/abilities/Dwarven_Turret_icon.webp"
                },
                {
                    name: "Scrapuum",
                    description: "Brass is able to pickup scrap in a radius around her.",
                    icon: "images/abilities/Short_Stack_&_Scrap_icon.webp"
                }
            ],
            tier3: [
                {
                    name: "Turret Feature v.3",
                    description: "Increases the damage of Dwarven Turret by 50%.",
                    icon: "images/abilities/Dwarven_Turret_icon.webp"
                },
                {
                    name: "Mrs. Boom",
                    description: "Increases the damage of Brass Bombs by 25%.",
                    icon: "images/abilities/Brass_Bombs_icon.webp"
                },
                {
                    name: "Thrifty Scrapper",
                    description: "Increases the amount of scrap Brass picks up by +10.",
                    icon: "images/abilities/Short_Stack_&_Scrap_icon.webp"
                }
            ],
            tier4: [
                {
                    name: "Cannonball Coming!",
                    description: "Reduces the cooldown of Cannonball by 33%.",
                    icon: "images/abilities/Cannonball_Shot_icon.webp"
                },
                {
                    name: "Junk Yard",
                    description: "Brass generates 2 scrap per second.",
                    icon: "images/abilities/Short_Stack_&_Scrap_icon.webp"
                },
                {
                    name: "Turret Feature v.4",
                    description: "Heroes regenerate health and mana near the turret.",
                    icon: "images/abilities/Dwarven_Turret_icon.webp"
                }
            ],
        },
        skins: [
            {
                id: 27,
                name: "The Master Engineer",
                image: "images/heroes/Brass.webp"
            },
            {
                id: 28,
                name: "Guns, Gears, 'n Lace",
                image: "images/skins/Brass_Guns,_Gears,_'n_Lace_background.webp"
            },
            {
                id: 29,
                name: "Bombshell Battalion",
                image: "images/skins/Brass_Bombshell_Battalion_background.webp"
            },
        ],
        icon: "images/hero-icons/Brass.webp"
    },
    {
        id: 5,
        name: "Cygnus",
        hp: 215,
        mana: 320,
        range: Range.Ranged,
        damageType: DamageType.Lightning,
        trapAffinity: null,
        abilities: {
            passive: {
                name: "Rift Lord",
                icon: "images/abilities/Rift_Lord_(Ability)_icon.webp",
                description: "Increases Cygnus's damage dealt when he is fighting near an allied rift.",
                cooldown: null,
                cost: null
            },
            primary: {
                name: "Voltaic Charge",
                icon: "images/abilities/Voltaic_Charge_icon.webp",
                description: "Cygnus fires a slow-moving lightning projectile from his staff.",
                cooldown: null,
                cost: 6
            },
            secondary: {
                name: "Chain Lightning",
                icon: "images/abilities/Chain_Lightning_icon.webp",
                description: "Cygnus fires a lightning blast that chains from its target to other enemy targets within a short distance.",
                cooldown: 4,
                cost: 12
            },
            third: {
                name: "Phylactery Pylon",
                icon: "images/abilities/Phylactery_Pylon_icon.webp",
                description: "Cygnus conjures a pylon that increases the damage of traps around it by 15%.",
                cooldown: 10,
                cost: 50
            },
            forth: {
                name: "Rift Shard",
                icon: "images/abilities/Rift_Shard_icon.webp",
                description: "Creates a rift that heals and regenerates mana for its allies. Activates Rift Lord passive when nearby.",
                cooldown: 30,
                cost: null
            }
        },
        upgrades: {
            tier1: [
                {
                    name: "Buff, Old Man",
                    description: "Increases the Phylactery Pylon's benefits by 10%.",
                    icon: "images/abilities/Phylactery_Pylon_icon.webp"
                },
                {
                    name: "Silver Streak",
                    description: "Reduces the cooldown of Chain Lightning by 1s.",
                    icon: "images/abilities/Chain_Lightning_icon.webp"
                },
                {
                    name: "Experienced",
                    description: "Reduces summoning time of Rift Shard by 75%.",
                    icon: "images/abilities/Rift_Shard_icon.webp"
                }
            ],
            tier2: [
                {
                    name: "Paternal Instinct",
                    description: "Increases the duration of Rift Shard by 20%.",
                    icon: "images/abilities/Rift_Shard_icon.webp"
                },
                {
                    name: "Mana Miser",
                    description: "Eliminates the mana cost of Voltaic Charge when Rift Lord is active.",
                    icon: "images/abilities/Voltaic_Charge_icon.webp"
                },
                {
                    name: "Mini-Master",
                    description: "Rift Shard attacks up to 3 targets, dealing lightning damage. Rift Shard cannot heal simultaneously.",
                    icon: "images/abilities/Rift_Shard_icon.webp"
                }
            ],
            tier3: [
                {
                    name: "Pylon Patriarch",
                    description: "Causes Phylactery Pylon to activate all damaging traps in its range.",
                    icon: "images/abilities/Phylactery_Pylon_icon.webp"
                },
                {
                    name: "Tough Old Geezer",
                    description: "Adds 50% damage reduction to Rift Lord.",
                    icon: "images/abilities/Rift_Lord_(Ability)_icon.webp"
                },
                {
                    name: "Ornery Oldtimer",
                    description: "Increases damage to bosses and large minions by 15%.",
                    icon: "images/upgrades/Ornery_Oldtimer_icon.webp"
                }
            ],
            tier4: [
                {
                    name: "Enlightening Education",
                    description: "Damage from Chain Lightning increases by 10% with each enemy it hits.",
                    icon: "images/abilities/Chain_Lightning_icon.webp"
                },
                {
                    name: "Get Off His Lawn",
                    description: "Chain Lightning hits +3 additional targets when Rift Lord is active.",
                    icon: "images/abilities/Chain_Lightning_icon.webp"
                },
                {
                    name: "Maniacal Master",
                    description: "Chain Lightning stuns enemies for 2s.",
                    icon: "images/abilities/Chain_Lightning_icon.webp"
                }
            ],
        },
        skins: [
            {
                id: 97,
                name: "The Master of the Order",
                image: "images/heroes/Cygnus.webp"
            },
            {
                id: 98,
                name: "Adventurer",
                image: "images/skins/Cygnus_Adventurer_background.webp"
            },
            {
                id: 101,
                name: "Old Codger",
                image: "images/skins/Cygnus_Old_Codger_background.webp"
            },
            {
                id: 102,
                name: "Road Master",
                image: "images/skins/Cygnus_Road_Master_background.webp"
            },
        ],
        icon: "images/hero-icons/Cygnus.webp"
    },
    {
        id: 6,
        name: "Deadeye",
        hp: 219,
        mana: 200,
        range: Range.Ranged,
        damageType: DamageType.Physical,
        trapAffinity: "-20% cost to Boom Barrel",
        abilities: {
            passive: {
                name: "Infamous",
                icon: "images/abilities/Infamous_icon.webp",
                description: "Killing enemies increases Deadeye's infamy, adding an infamy stack. When Deadeye acquires 12 stacks, primary attack (Fill 'Em with Holes) deals damage in a small target area. All infamy is lost after 10s.",
                cooldown: null,
                cost: null
            },
            primary: {
                name: "Fill 'Em with Holes",
                icon: "images/abilities/Fill_'Em_with_Holes_icon.webp",
                description: "Fires 2 rapid-fire shots from her crossbows.",
                cooldown: null,
                cost: null
            },
            secondary: {
                name: "Bouncing Bomb",
                icon: "images/abilities/Bouncing_Bomb_icon.webp",
                description: "Deadeye fires a bouncing bomb that detonates after 3s or when it hits an enemy.",
                cooldown: 9,
                cost: 30
            },
            third: {
                name: "Elven Razorweed",
                icon: "images/abilities/Elven_Razorweed_icon.webp",
                description: "Razor-sharp brambles grow in an area in front of Deadeye. Enemies are damaged and slowed when they step on them.",
                cooldown: 12,
                cost: 20
            },
            forth: {
                name: "Ready, Steady, Fire",
                icon: "images/abilities/Ready,_Steady,_Fire_icon.webp",
                description: "Deadeye takes a knee and shoots rapid-fire shots for 5s. Can be canceled with movement after 1s of use.",
                cooldown: 60,
                cost: 50
            },
            fifth: {
                name: "Outta the Way",
                icon: "images/abilities/Outta_the_Way_icon.webp",
                description: "Deadeye dives in the direction of her movement. After diving, Deadeye gains the Hip Shot buff which increases the damage of her primary attack by +50% while active.",
                cooldown: 60,
                cost: 50
            }
        },
        upgrades: {
            tier1: [
                {
                    name: "Spring-Loaded",
                    description: "Increases attack speed of Fill 'Em with Holes by 15%.",
                    icon: "images/abilities/Fill_'Em_with_Holes_icon.webp"
                },
                {
                    name: "Deadlier-Eye",
                    description: "Increases the damage of Hip Shot gained from primary attack (Outta the Way) by 50%.",
                    icon: "images/abilities/Fill_'Em_with_Holes_icon.webp"
                },
                {
                    name: "Hold 'Em Back",
                    description: "Increases the movement speed slowed by Elven Razorweed by 15%.",
                    icon: "images/abilities/Elven_Razorweed_icon.webp"
                }
            ],
            tier2: [
                {
                    name: "Razorweed Rend",
                    description: "Causes enemies that walk through Deadeye's Elven Razorweed to bleed for 5s.",
                    icon: "images/abilities/Elven_Razorweed_icon.webp"
                },
                {
                    name: "Goin' Down in Infamy",
                    description: "Reduces Infamy stacks needed to activate Infamous by -4.",
                    icon: "images/abilities/Infamous_icon.webp"
                },
                {
                    name: "Spurred Boots",
                    description: "Outta the Way damages the enemies Deadeye rolls through.",
                    icon: "images/abilities/Outta_the_Way_icon.webp"
                }
            ],
            tier3: [
                {
                    name: "Burnin' Hate",
                    description: "Bouncing Bomb sets fire to an area that damages enemies who cross it over time.",
                    icon: "images/abilities/Bouncing_Bomb_icon.webp"
                },
                {
                    name: "Hard Knocks",
                    description: "Stuns enemies hit and blown up by Bouncing Bomb.",
                    icon: "images/abilities/Bouncing_Bomb_icon.webp"
                },
                {
                    name: "Fistful of Brambles",
                    description: "Adds a bramble drop to Outta the Way.",
                    icon: "images/abilities/Outta_the_Way_icon.webp"
                }
            ],
            tier4: [
                {
                    name: "Clear 'Em Out",
                    description: "Arrows fired by Ready, Steady, Fire pierce through targets to hit multiple enemies.",
                    icon: "images/abilities/Ready,_Steady,_Fire_icon.webp"
                },
                {
                    name: "More Misdeeds",
                    description: "Arrows from Fill 'Em with Holes pierce targets to hit up to 2 enemies.",
                    icon: "images/abilities/Fill_'Em_with_Holes_icon.webp"
                },
                {
                    name: "Bramble Barricade",
                    description: "While Ready, Steady, Fire is active, Deadeye reflects 400% of her damage taken back on her attackers.",
                    icon: "images/abilities/Ready,_Steady,_Fire_icon.webp"
                }
            ],
        },
        skins: [
            {
                id: 41,
                name: "The Eight Groves Most Wanted",
                image: "images/heroes/Deadeye.webp"
            },
            {
                id: 42,
                name: "Pretty Punk",
                image: "images/skins/Deadeye_Pretty_Punk_background.webp"
            },
            {
                id: 43,
                name: "The Good, the Bad, and the Deadeye",
                image: "images/skins/Deadeye_The_Good,_the_Bad,_and_the_Deadeye_background.webp"
            },
        ],
        icon: "images/hero-icons/Deadeye.webp"
    },
    {
        id: 7,
        name: "Dobbin",
        hp: 500,
        mana: 200,
        range: Range.Melee,
        damageType: DamageType.Physical,
        trapAffinity: "+10% additional coins from Coinforge",
        abilities: {
            passive: {
                name: "Short Stack",
                icon: "images/abilities/Short_Stack_icon.webp",
                description: "Dobbin is too short for large minions to see, so they will never attack him.",
                cooldown: null,
                cost: null
            },
            primary: {
                name: "Shovel Swat",
                icon: "images/abilities/Shovel_Swat_icon.webp",
                description: "Dobbin swings his shovel in a wide arc, dealing melee, physical damage to enemies.",
                cooldown: null,
                cost: null
            },
            secondary: {
                name: "Dust Devil",
                icon: "images/abilities/Dust_Devil_icon.webp",
                description: "Creates a dust cloud that slows enemies and reduces their Physical Armor. Enemies hit in the cloud have a 20% chance to drop a bag of coin.",
                cooldown: 15,
                cost: 40
            },
            third: {
                name: "Mineshaft Shortcut",
                icon: "images/abilities/Mineshaft_Shortcut_icon.webp",
                description: "Dobbin digs a tunnel when the ability's button is held. Allies can activate the tunnel to teleport to its exit. If a tunnel is destroyed, the ability is unusable for 90 seconds.",
                cooldown: 5,
                cost: 80
            },
            forth: {
                name: "Spare Dynamite",
                icon: "images/abilities/Spare_Dynamite_icon.webp",
                description: "Dobbin throws dynamite that explodes in a radius. Enemies caught in its explosion have a 25% chance to drop a bag of coin.",
                cooldown: 6,
                cost: 30
            }
        },
        upgrades: {
            tier1: [
                {
                    name: "Rich Vein",
                    description: "Increases the value of coin bags by 1.5x.",
                    icon: "images/upgrades/Rich_Vein_icon.webp"
                },
                {
                    name: "Stockpile",
                    description: "Reduces the mana cost of Spare Dynamite by -10.",
                    icon: "images/abilities/Spare_Dynamite_icon.webp"
                },
                {
                    name: "Iron Shovel",
                    description: "Increases damage to minions by 12%.",
                    icon: "images/upgrades/Iron_Shovel_icon.webp"
                }
            ],
            tier2: [
                {
                    name: "Short Fuse",
                    description: "Reduces the cooldown of Spare Dynamite by 1.5s.",
                    icon: "images/abilities/Spare_Dynamite_icon.webp"
                },
                {
                    name: "Strike It Rich",
                    description: "Increases the chance that enemies drop bags of coin by 10%.",
                    icon: "images/upgrades/Strike_It_Rich_icon.webp"
                },
                {
                    name: "Devilish Digger",
                    description: "Increases the movement speed slowed by Dust Devil by 25%.",
                    icon: "images/abilities/Dust_Devil_icon.webp"
                }
            ],
            tier3: [
                {
                    name: "Diamond Armor",
                    description: "Allies using Mineshaft Shortcut gain a temporary shield worth 20% of their max health.",
                    icon: "images/abilities/Mineshaft_Shortcut_icon.webp"
                },
                {
                    name: "Gold Rush",
                    description: "Grants a one-time drop of 8,000 coin.",
                    icon: "images/upgrades/Gold_Rush_icon.webp"
                },
                {
                    name: "Extra Powder",
                    description: "Increases the radius of Spare Dynamite by 20%.",
                    icon: "images/abilities/Spare_Dynamite_icon.webp"
                }
            ],
            tier4: [
                {
                    name: "Jury Rigged",
                    description: "Increases health regeneration by +15 per second near traps.",
                    icon: "images/upgrades/Jury_Rigged_icon.webp"
                },
                {
                    name: "Kick 'Em in the Knees",
                    description: "Increases damage to large minions by 30%.",
                    icon: "images/upgrades/Kick_'Em_in_the_Knees_icon.webp"
                },
                {
                    name: "Shrapnel Storm",
                    description: "Dust Devil deals damage that scales with level (min +4 per second).",
                    icon: "images/abilities/Dust_Devil_icon.webp"
                }
            ],
        },
        skins: [
            {
                id: 50,
                name: "Claim Jumper",
                image: "images/heroes/Dobbin.webp"
            },
            {
                id: 51,
                name: "Gold Rush",
                image: "images/skins/Dobbin_Gold_Rush_background.webp"
            },
            {
                id: 53,
                name: "El Cavador",
                image: "images/skins/Dobbin_El_Cavador_background.webp"
            },
            {
                id: 54,
                name: "Santa's Little Helper",
                image: "images/skins/Dobbin_Santa's_Little_Helper_background.webp"
            },
        ],
        icon: "images/hero-icons/Dobbin.webp"
    },
    {
        id: 8,
        name: "Gabriella",
        hp: 200,
        mana: 215,
        range: Range.Ranged,
        damageType: DamageType.Arcane,
        trapAffinity: "+25 HP for Summoner Trap",
        abilities: {
            passive: {
                name: "Limitless Magic",
                icon: "images/abilities/Limitless_Magic_icon.webp",
                description: "Increases Gabriella's Unchained duration by 50%.",
                cooldown: null,
                cost: null
            },
            primary: {
                name: "Thorn of Arcana",
                icon: "images/abilities/Thorn_of_Arcana_icon.webp",
                description: "Fires rapid bolts of arcane magic.",
                cooldown: null,
                cost: null
            },
            secondary: {
                name: "Kinetic Pulse",
                icon: "images/abilities/Kinetic_Pulse_icon.webp",
                description: "Fires a blast of kinetic energy that deals damage to and knocks back enemies while instantly activating all traps in a cone in front of her.",
                cooldown: 16,
                cost: 65
            },
            third: {
                name: "Blink",
                icon: "images/abilities/Blink_icon.webp",
                description: "Gabriella teleports in the direction she is moving, removing control effects on her. Heals Gabriella for 65% of her health.",
                cooldown: 10,
                cost: 50
            },
            forth: {
                name: "Devious Allure",
                icon: "images/abilities/Devious_Allure_icon.webp",
                description: "Stops nearby enemies, putting them in a trance. Taking damage snaps them out of it, applying a slow instead.",
                cooldown: 12,
                cost: 50
            }
        },
        upgrades: {
            tier1: [
                {
                    name: "Scared Stiff",
                    description: "Blink immobilizes nearby enemies on activation.",
                    icon: "images/upgrades/Scared_Stiff_icon.webp"
                },
                {
                    name: "Concussive Strike",
                    description: "Kinetic Pulse stuns heavy minions for 2s.",
                    icon: "images/abilities/Kinetic_Pulse_icon.webp"
                },
                {
                    name: "Wand Polish",
                    description: "Increases Thorn of Arcana's attack speed by 15%.",
                    icon: "images/upgrades/Wand_Polish_icon.webp"
                }
            ],
            tier2: [
                {
                    name: "Old Habits",
                    description: "Increases the duration of Devious Allure by 2s.",
                    icon: "images/upgrades/Old_Habits_icon.webp"
                },
                {
                    name: "Loving Glow",
                    description: "Mesmerized enemies heal nearby heroes for 9% of their max health.",
                    icon: "images/abilities/Devious_Allure_icon.webp"
                },
                {
                    name: "Power from Control",
                    description: "Increases Gabriella's damage 3% for each minion mesmerized (max 30%).",
                    icon: "images/upgrades/Power_from_Control_icon.webp"
                }
            ],
            tier3: [
                {
                    name: "Power Word",
                    description: "Increases damage dealt by Kinetic Pulse by 100%.",
                    icon: "images/upgrades/Power_Word_icon.webp"
                },
                {
                    name: "Mana Drain",
                    description: "Regenerates +2 mana for each enemy hit with Thorn of Arcana.",
                    icon: "images/upgrades/Mana_Drain_(Hero_Upgrade)_icon.webp"
                },
                {
                    name: "Extra Commandments",
                    description: "Reduces the cooldown of Kinetic Pulse by 3s.",
                    icon: "images/upgrades/Extra_Commandments_icon.webp"
                }
            ],
            tier4: [
                {
                    name: "Slippery Witch",
                    description: "Grants +1 Blink without mana cost if activated within 3s of its 1st use.",
                    icon: "images/abilities/Blink_icon.webp"
                },
                {
                    name: "Enthralled",
                    description: "Reduces the duration of Devious Allure by 30%, but effect persists through damage.",
                    icon: "images/upgrades/Old_Habits_icon.webp"
                },
                {
                    name: "Retaliate",
                    description: "Minions that touch Gabriella are knocked into the air and giblitized (15s cooldown).",
                    icon: "images/upgrades/Retaliate_icon.webp"
                }
            ],
        },
        skins: [
            {
                id: 76,
                name: "The Redeemed Sorceress",
                image: "images/heroes/Gabriella.webp"
            },
            {
                id: 73,
                name: "Violent Vintage",
                image: "images/skins/Gabriella_Violet_Vintage_background.webp"
            },
            {
                id: 74,
                name: "Enchanted Armor",
                image: "images/skins/Gabriella_Enchanted_Armor_background.webp"
            },
            {
                id: 75,
                name: "Blood Queen",
                image: "images/skins/Gabriella_Blood_Queen_background.webp"
            },
            {
                id: 77,
                name: "Frightfully Delightful",
                image: "images/skins/Gabriella_Frightfully_Delightful_background.webp"
            },
            {
                id: 79,
                name: "Life in Plastic",
                image: "images/skins/Gabriella_Life_in_Plastic_background.webp"
            },
            {
                id: 80,
                name: "Archmage of the Order",
                image: "images/skins/Gabriella_Archmage_of_the_Order_background.webp"
            },
            {
                id: 81,
                name: "Mistress of Illusion",
                image: "images/skins/Gabriella_Mistress_of_Illusion_background.webp"
            },
            {
                id: 82,
                name: "Promising Prodigy",
                image: "images/skins/Gabriella_Promising_Prodigy_background.webp"
            },
            {
                id: 83,
                name: "I Dream of Gabby",
                image: "images/skins/Gabriella_I_Dream_of_Gabby_background.webp"
            },
            {
                id: 84,
                name: "Miracle Worker",
                image: "images/skins/Gabriella_Miracle_Worker_background.webp"
            },
            {
                id: 85,
                name: "Winter Witch",
                image: "images/skins/Gabriella_Winter_Witch_background.webp"
            },
            {
                id: 86,
                name: "Skull Ninja",
                image: "images/skins/Gabriella_Skull_Ninja_background.webp"
            },
            {
                id: 87,
                name: "Evil Ways",
                image: "images/skins/Gabriella_Evil_Ways_background.webp"
            },
            {
                id: 88,
                name: "Dragon Charmer",
                image: "images/skins/Gabriella_Dragon_Charmer_background.webp"
            },
        ],
        icon: "images/hero-icons/Gabriella.webp"
    },
    {
        id: 9,
        name: "Hogarth",
        hp: 950,
        mana: 125,
        range: Range.Melee,
        damageType: DamageType.Frost,
        trapAffinity: "+25% damage from Ice Vent",
        abilities: {
            passive: {
                name: "ANGRY!",
                icon: "images/abilities/ANGRY!_icon.webp",
                description: "When Hogarth deals damage, his damage increases by 1% for 8s. Ability stacks up to 50x.",
                cooldown: null,
                cost: null
            },
            primary: {
                name: "SWING!",
                icon: "images/abilities/SWING!_icon.webp",
                description: "Hogarth swings his axe, dealing frost damage to all enemies he hits.",
                cooldown: null,
                cost: null
            },
            secondary: {
                name: "CATCH!",
                icon: "images/abilities/CATCH!_icon.webp",
                description: "Hogarth throws his axe, dealing frost damage and slowing the first enemy it hits. Damage increases with target distance.",
                cooldown: 8,
                cost: 30
            },
            third: {
                name: "SHIELD!",
                icon: "images/abilities/SHIELD!_icon.webp",
                description: "Hogarth's shield ices over, protecting him from damage and slowing nearby enemies.",
                cooldown: 25,
                cost: 30
            },
            forth: {
                name: "AMBUSH!",
                icon: "images/abilities/AMBUSH!_icon.webp",
                description: "Hogarth leaps forward, slamming the ground, dealing frost damage and casting an extra stack of Chilled on nearby enemies.",
                cooldown: 10,
                cost: 30
            }
        },
        upgrades: {
            tier1: [
                {
                    name: "HELP HIMS!",
                    description: "Increases the damage reduction of SHIELD! by 100%.",
                    icon: "images/abilities/SHIELD!_icon.webp"
                },
                {
                    name: "SNOW NOW!",
                    description: "SHIELD! slows fast enemies by twice as much.",
                    icon: "images/abilities/SHIELD!_icon.webp"
                },
                {
                    name: "FLASH FREEZE!",
                    description: "Enemies that attack during SHIELD! generate +1 frost stack.",
                    icon: "images/abilities/SHIELD!_icon.webp"
                }
            ],
            tier2: [
                {
                    name: "MUSCLES!",
                    description: "Killing a minion increases max health by +2.",
                    icon: "images/upgrades/MUSCLES!_icon.webp"
                },
                {
                    name: "SURPRISES!",
                    description: "Reduces the cooldown of AMBUSH! by 5s.",
                    icon: "images/abilities/AMBUSH!_icon.webp"
                },
                {
                    name: "STAY!",
                    description: "Crowd control spell durations increased by 20%.",
                    icon: "images/upgrades/STAY!_icon.webp"
                }
            ],
            tier3: [
                {
                    name: "THROW HARD!",
                    description: "CATCH! pierces its target to hit +2 additional targets.",
                    icon: "images/abilities/CATCH!_icon.webp"
                },
                {
                    name: "HIMS NOT AFRAID!",
                    description: "SHIELD! increases Hogarth's aggro by 40%.",
                    icon: "images/abilities/SHIELD!_icon.webp"
                },
                {
                    name: "GOOD CATCH!",
                    description: "Reduces the cooldown of CATCH! by 3s.",
                    icon: "images/abilities/CATCH!_icon.webp"
                }
            ],
            tier4: [
                {
                    name: "MORE AXE!",
                    description: "Adds +2 projectiles to CATCH!",
                    icon: "images/abilities/CATCH!_icon.webp"
                },
                {
                    name: "HIMS PUT ON FEW POUNDS!",
                    description: "AMBUSH! deals 2x damage when Hogarth lands.",
                    icon: "images/abilities/AMBUSH!_icon.webp"
                },
                {
                    name: "FEEL GOOD!",
                    description: "Regenerates 4% max health per second when out of combat.",
                    icon: "images/upgrades/FEEL_GOOD!_icon.webp"
                }
            ],
        },
        skins: [
            {
                id: 32,
                name: "Frozen Shield of Deg Itan",
                image: "images/heroes/Hogarth.webp"
            },
            {
                id: 30,
                name: "Enchanted Armor",
                image: "images/skins/Hogarth_Enchanted_Armor_background.webp"
            },
            {
                id: 31,
                name: "God of Plunder",
                image: "images/skins/Hogarth_God_of_Plunder_background.webp"
            },
            {
                id: 33,
                name: "Lumbering Jack",
                image: "images/skins/Hogarth_Lumbering_Jack_background.webp"
            },
            {
                id: 35,
                name: "Ice Armor",
                image: "images/skins/Hogarth_Ice_Armor_background.webp"
            },
            {
                id: 36,
                name: "Imperial Golden Warrior",
                image: "images/skins/Hogarth_Imperial_Golden_Warrior_background.webp"
            },
            {
                id: 37,
                name: "Beached Bod",
                image: "images/skins/Hogarth_Beached_Bod_background.webp"
            },
            {
                id: 38,
                name: "Black Thane",
                image: "images/skins/Hogarth_Black_Thane_background.webp"
            },
            {
                id: 39,
                name: "The Schling",
                image: "images/skins/Hogarth_The_Schling_background.webp"
            },
            {
                id: 40,
                name: "Dragon Ward",
                image: "images/skins/Hogarth_Dragon_Ward_background.webp"
            },
        ],
        icon: "images/hero-icons/Hogarth.webp"
    },
    {
        id: 10,
        name: "Ivy",
        hp: 162,
        mana: 200,
        range: Range.Ranged,
        damageType: DamageType.Physical,
        trapAffinity: null,
        abilities: {
            passive: {
                name: "Elven Swiftboots",
                icon: "images/abilities/Elven_Swiftboots_icon.webp",
                description: "Ivy gains a tremendous movespeed boost whenever she spawns or respawns.",
                cooldown: null,
                cost: null
            },
            primary: {
                name: "Ilyian Longbow",
                icon: "images/abilities/Ilyian_Longbow_icon.webp",
                description: "Ivy fires an arrow, dealing ranged, physical damage to enemies.",
                cooldown: null,
                cost: null
            },
            secondary: {
                name: "Penetrating Arrow",
                icon: "images/abilities/Penetrating_Arrow_icon.webp",
                description: "Ivy fires a powerful, piercing arrow that deals ranged, physical damage and knocks back enemies.",
                cooldown: 4,
                cost: 25
            },
            third: {
                name: "Life Current",
                icon: "images/abilities/Life_Current_icon.webp",
                description: "Heals all nearby allies for several seconds.",
                cooldown: 20,
                cost: 45
            },
            forth: {
                name: "Reach of Roots",
                icon: "images/abilities/Reach_of_Roots_icon.webp",
                description: "Roots entangle enemies, immobilizing them and decreasing their Physical Armor by -50. Immobilized enemies cannot move but can still use their abilities.",
                cooldown: 14,
                cost: 50
            }
        },
        upgrades: {
            tier1: [
                {
                    name: "Precision",
                    description: "Increases damage dealt by Ilyian Longbow by 15%.",
                    icon: "images/abilities/Ilyian_Longbow_icon.webp"
                },
                {
                    name: "Celerity",
                    description: "Increases Ivy's movement speed by 15%.",
                    icon: "images/upgrades/Celerity_icon.webp"
                },
                {
                    name: "Forgiveness",
                    description: "Reduces the cooldown of Life Current by 4s.",
                    icon: "images/abilities/Life_Current_icon.webp"
                }
            ],
            tier2: [
                {
                    name: "Nature's Grasp",
                    description: "Increases the root duration of Reach of Roots by 25%.",
                    icon: "images/abilities/Reach_of_Roots_icon.webp"
                },
                {
                    name: "Nature's Ire",
                    description: "Increases the damage dealt by Penetrating Arrow by 15%.",
                    icon: "images/abilities/Penetrating_Arrow_icon.webp"
                },
                {
                    name: "Nature's Swiftness",
                    description: "Life Current grants Ivy and nearby allies 30% movement speed.",
                    icon: "images/abilities/Life_Current_icon.webp"
                }
            ],
            tier3: [
                {
                    name: "Arrow Affinity",
                    description: "Reduces the cooldown of Penetrating Arrow by 25%.",
                    icon: "images/abilities/Penetrating_Arrow_icon.webp"
                },
                {
                    name: "Natural Knack",
                    description: "Reduces the cooldown of Reach of Roots by 15%.",
                    icon: "images/abilities/Reach_of_Roots_icon.webp"
                },
                {
                    name: "Mana Mastery",
                    description: "Life Current grants Ivy and nearby allies +15 mana per second.",
                    icon: "images/abilities/Life_Current_icon.webp"
                }
            ],
            tier4: [
                {
                    name: "Warden's Wrath",
                    description: "Reach of Roots now deals physical damage over time. Damage scales with level.",
                    icon: "images/abilities/Reach_of_Roots_icon.webp"
                },
                {
                    name: "Warden's Tutelage",
                    description: "Reduces the mana cost of Penetrating Arrow by -20.",
                    icon: "images/abilities/Penetrating_Arrow_icon.webp"
                },
                {
                    name: "Warden's Blessing",
                    description: "Life Current grants Ivy and nearby allies 15% damage.",
                    icon: "images/upgrades/Warden's_Blessing_icon.webp"
                }
            ],
        },
        skins: [
            {
                id: 58,
                name: "Warden of the First Grove",
                image: "images/heroes/Ivy.webp"
            },
            {
                id: 56,
                name: "Enchanted Armor",
                image: "images/skins/Ivy_Enchanted_Armor_background.webp"
            },
            {
                id: 57,
                name: "Valkyrie",
                image: "images/skins/Ivy_Valkyrie_background.webp"
            },
            {
                id: 59,
                name: "Flower Friend",
                image: "images/skins/Ivy_Flower_Friend_background.webp"
            },
            {
                id: 61,
                name: "Imperial Ruby Archer",
                image: "images/skins/Ivy_Imperial_Ruby_Archer_background.webp"
            },
            {
                id: 62,
                name: "Wicked Warden",
                image: "images/skins/Ivy_Wicked_Warden_background.webp"
            },
            {
                id: 63,
                name: "Grovewatch",
                image: "images/skins/Ivy_Grovewatch_background.webp"
            },
            {
                id: 64,
                name: "Dragon Tamer",
                image: "images/skins/Ivy_Dragon_Tamer_background.webp"
            },
        ],
        icon: "images/hero-icons/Ivy.webp"
    },
    {
        id: 11,
        name: "Maximilian",
        hp: 206,
        mana: 280,
        range: Range.Ranged,
        damageType: DamageType.Lightning,
        trapAffinity: "Decoys are free",
        abilities: {
            passive: {
                name: "Close Enough",
                icon: "images/abilities/Close_Enough_icon.webp",
                description: "Maximilian spends 15% less coins when placing traps.",
                cooldown: null,
                cost: null
            },
            primary: {
                name: "Shock Bolt",
                icon: "images/abilities/Shock_Bolt_icon.webp",
                description: "Fires lightning-charged crossbow bolts.",
                cooldown: null,
                cost: null
            },
            secondary: {
                name: "Absolutely Stunning Bolt",
                icon: "images/abilities/Absolutely_Stunning_Bolt_icon.webp",
                description: "Fires a lightning-charged crossbow bolt that explodes on impact, stunning nearby enemies.",
                cooldown: 12,
                cost: 50
            },
            third: {
                name: "Can't Touch This",
                icon: "images/abilities/Can't_Touch_This_icon.webp",
                description: "Creates a temporary lightning shield around Maximilian that reduces damage taken and reflects it back on his attackers.",
                cooldown: 16,
                cost: 40
            },
            forth: {
                name: "In Your Faces",
                icon: "images/abilities/In_Your_Faces_icon.webp",
                description: "Fires a crossbow bolt that deals massive damage to its first target and deals area lightning damage to enemies behind it.",
                cooldown: 13,
                cost: 50
            }
        },
        upgrades: {
            tier1: [
                {
                    name: "Aim To Please",
                    description: "Increases the accuracy of Maximilian's Shock Bolt. Reticule expands less and resets more quickly.",
                    icon: "images/abilities/Shock_Bolt_icon.webp"
                },
                {
                    name: "Endorsements",
                    description: "Maximilian generates +3 coin per second.",
                    icon: "images/upgrades/Rich_Vein_icon.webp"
                },
                {
                    name: "Star-Struck",
                    description: "Can't Touch This reduces enemy movement speed around Maximilian by 80%.",
                    icon: "images/abilities/Can't_Touch_This_icon.webp"
                }
            ],
            tier2: [
                {
                    name: "Greased Lightning",
                    description: "Increases movement speed by 50% for 5s after Can't Touch This.",
                    icon: "images/abilities/Can't_Touch_This_icon.webp"
                },
                {
                    name: "Lucky Shot",
                    description: "Increases radius of Absolutely Stunning Bolt by 75% and increases its duration by 0.5s.",
                    icon: "images/abilities/Absolutely_Stunning_Bolt_icon.webp"
                },
                {
                    name: "In the Kisser",
                    description: "Increases the initial damage of In Your Faces by 1.5x.",
                    icon: "images/abilities/In_Your_Faces_icon.webp"
                }
            ],
            tier3: [
                {
                    name: "Killing It",
                    description: "Killing a minion heals Maximilian for 2% of his max health.",
                    icon: "images/upgrades/Killing_It_icon.webp"
                },
                {
                    name: "So Beautiful It Hurts",
                    description: "Increases damage to stunned minions by 35%.",
                    icon: "images/abilities/Absolutely_Stunning_Bolt_icon.webp"
                },
                {
                    name: "Bad at Self-Reflection",
                    description: "Increases damage reflection from Can't Touch This by 700%.",
                    icon: "images/abilities/Can't_Touch_This_icon.webp"
                }
            ],
            tier4: [
                {
                    name: "Persistent",
                    description: "30% of Shock Bolt damage chains to +1 additional target.",
                    icon: "images/abilities/Shock_Bolt_icon.webp"
                },
                {
                    name: "Overpowered",
                    description: "Slows minions affected by In Your Faces by 50% for 5s.",
                    icon: "images/abilities/In_Your_Faces_icon.webp"
                },
                {
                    name: "Entourage",
                    description: "Extends damage reflection from Can't Touch This to nearby heroes.",
                    icon: "images/abilities/Can't_Touch_This_icon.webp"
                }
            ],
        },
        skins: [
            {
                id: 111,
                name: "The War Mage",
                image: "images/heroes/Maximilian.webp"
            },
            {
                id: 108,
                name: "Lucky Tunic",
                image: "images/skins/Maximilian_Lucky_Tunic_background.webp"
            },
            {
                id: 109,
                name: "Enchanted Armor",
                image: "images/skins/Maximilian_Enchanted_Armor_background.webp"
            },
            {
                id: 110,
                name: "Knights Watch",
                image: "images/skins/Maximilian_Knight's_Watch_background.webp"
            },
            {
                id: 112,
                name: "Orc Slayer",
                image: "images/skins/Maximilian_Orc_Slayer_background.webp"
            },
            {
                id: 113,
                name: "Cardboard Samurai",
                image: "images/skins/Maximilian_Cardboard_Samurai_background.webp"
            },
            {
                id: 114,
                name: "Scared-Crow",
                image: "images/skins/Maximilian_Scared-Crow_background.webp"
            },
            {
                id: 115,
                name: "Lion Heart",
                image: "images/skins/Maximilian_Lion_Heart_background.webp"
            },
            {
                id: 116,
                name: "Robin Hood",
                image: "images/skins/Maximilian_Robin_Hood_background.webp"
            },
            {
                id: 117,
                name: "Paximillian",
                image: "images/skins/Maximilian_PAXimilian_background.webp"
            },
            {
                id: 119,
                name: "Champion of the Order",
                image: "images/skins/Maximilian_Champion_of_the_Order_background.webp"
            },
            {
                id: 120,
                name: "Jamez Ripher",
                image: "images/skins/Maximilian_Jamez_Ripher_background.webp"
            },
            {
                id: 121,
                name: "Winter Warrior",
                image: "images/skins/Maximilian_Winter_Warrior_background.webp"
            },
            {
                id: 122,
                name: "Boomstick",
                image: "images/skins/Maximilian_Boomstick_background.webp"
            },
            {
                id: 123,
                name: "Backdraft",
                image: "images/skins/Maximilian_Backdraft_background.webp"
            },
            {
                id: 124,
                name: "Dragon Slayer",
                image: "images/skins/Maximilian_Dragon_Slayer_background.webp"
            },
            {
                id: 125,
                name: "Summer of Stunning",
                image: "images/skins/Maximilian_Summer_of_Stunning_background.webp"
            },
        ],
        icon: "images/hero-icons/Maximilian.webp"
    },
    {
        id: 12,
        name: "Midnight",
        hp: 220,
        mana: 190,
        range: Range.Melee,
        damageType: DamageType.Physical,
        trapAffinity: "15% discount on Trip Wire",
        abilities: {
            passive: {
                name: "Sucker Punch",
                icon: "images/abilities/Sucker_Punch_icon.webp",
                description: "Midnight deals 50% more damage to stunned targets.",
                cooldown: null,
                cost: null
            },
            primary: {
                name: "Shadow Swipe",
                icon: "images/abilities/Shadow_Swipe_icon.webp",
                description: "Midnight slashes with her dagger, dealing damage. Attack deals extra damage to immobilized, or stunned enemies.",
                cooldown: null,
                cost: null
            },
            secondary: {
                name: "Vital Strike",
                icon: "images/abilities/Vital_Strike_icon.webp",
                description: "Midnight executes an acrobatic melee attack that deals heavy damage to its target and deals damage over time.",
                cooldown: 4,
                cost: null
            },
            third: {
                name: "Dash and Slash",
                icon: "images/abilities/Dash_and_Slash_icon.webp",
                description: "Midnight dashes forward, slashing every enemy she passes through.",
                cooldown: 10,
                cost: null
            },
            forth: {
                name: "Prowl",
                icon: "images/abilities/Prowl_icon.webp",
                description: "Midnight slips into the shadows, dropping all aggro and moving at increased speed. If she attacks, she reappears and her attack stuns its target while dealing 50% more damage.",
                cooldown: 3,
                cost: {
                    base: 15,
                    perSecond: 3
                }
            }
        },
        upgrades: {
            tier1: [
                {
                    name: "Prolonged Prowl",
                    description: "Removes the activation mana cost of Prowl.",
                    icon: "images/abilities/Prowl_icon.webp"
                },
                {
                    name: "Hardened Killer",
                    description: "Increases health regeneration by 1.5% of max health per second.",
                    icon: "images/upgrades/Feral_Fitness_icon.webp"
                },
                {
                    name: "Feeling Frisky",
                    description: "Reduces respawn time to 1.5s.",
                    icon: "images/upgrades/Feeling_Frisky_icon.webp"
                }
            ],
            tier2: [
                {
                    name: "Nimble as the Night",
                    description: "Increases movement speed by 66% during Prowl.",
                    icon: "images/abilities/Prowl_icon.webp"
                },
                {
                    name: "Sa-meow-rai Armor",
                    description: "Increases Midnight's Physical Armor by +25. (Reduces damage by 20%)",
                    icon: "images/upgrades/Sa-meow-rai_Armor_icon.webp"
                },
                {
                    name: "Catpurse",
                    description: "Grants up to 4 coin per second from attacks on minions.",
                    icon: "images/abilities/Shadow_Swipe_icon.webp"
                }
            ],
            tier3: [
                {
                    name: "Poison Paw",
                    description: "Slows enemies by 50% and damages them on contact during Prowl. Damage scales with level.",
                    icon: "images/abilities/Prowl_icon.webp"
                },
                {
                    name: "Slash-N-Dash",
                    description: "Increases the damage of Dash and Slash by 50%.",
                    icon: "images/abilities/Dash_and_Slash_icon.webp"
                },
                {
                    name: "Feline Fugitive",
                    description: "Reduces control effects on Midnight by 35% and increases Midnight's control effects by 25%.",
                    icon: "images/upgrades/Feline_Fugitive_icon.webp"
                }
            ],
            tier4: [
                {
                    name: "Thrill of the Kill",
                    description: "Killing a minion restores 5% max health.",
                    icon: "images/upgrades/Red-Headed_icon.webp"
                },
                {
                    name: "Sharing the Shadow",
                    description: "Activating Prowl causes neaby allies to also enter Prowl for 5s.",
                    icon: "images/upgrades/Sharing_the_Shadow_icon.webp"
                },
                {
                    name: "Kitty Overkill",
                    description: "Explodes enemies killed by Vital Strike, knocking them back in a radius. Explosion scales with enemy size.",
                    icon: "images/abilities/Vital_Strike_icon.webp"
                }
            ],
        },
        skins: [
            {
                id: 44,
                name: "Twilight's Razor",
                image: "images/heroes/Midnight.webp"
            },
            {
                id: 45,
                name: "Hidden Tiger",
                image: "images/skins/Midnight_Hidden_Tiger_background.webp"
            },
            {
                id: 47,
                name: "Cat Burglar",
                image: "images/skins/Midnight_Cat_Burglar_background.webp"
            },
            {
                id: 48,
                name: "Shiver Me Whiskers",
                image: "images/skins/Midnight_Shiver_Me_Whiskers_background.webp"
            },
            {
                id: 49,
                name: "Wu Xing Azure Assassin",
                image: "images/skins/Midnight_Wu_Xing_Azure_Assassin_background.webp"
            },
        ],
        icon: "images/hero-icons/Midnight.webp"
    },
    {
        id: 13,
        name: "Oziel",
        hp: 200,
        mana: 160,
        range: Range.Ranged,
        damageType: DamageType.Arcane,
        trapAffinity: "+25% dmg from Cursed Ground",
        abilities: {
            passive: {
                name: "Soul Harvest",
                icon: "images/abilities/Soul_Harvest_icon.webp",
                description: "Oziel collects a soul for each nearby minion death, also gains 5% bonus to max mana each time he gains a battle level.",
                cooldown: null,
                cost: null
            },
            primary: {
                name: "Vampiric Slash",
                icon: "images/abilities/Vampiric_Slash_icon.webp",
                description: "A slashing, ranged attack that lifesteals from enemies. Life stolen is 4% of Oziel's max health.",
                cooldown: null,
                cost: null
            },
            secondary: {
                name: "Wraith Surge",
                icon: "images/abilities/Wraith_Surge_icon.webp",
                description: "Oziel fires a bolt of energy. If it deals damage, a buff causes the next Wraith Surge to deal 40% more damage and cost more mana.",
                cooldown: 3,
                cost: [30, 50, 80, 80]
            },
            third: {
                name: "Desecrated Ground",
                icon: "images/abilities/Desecrated_Ground_icon.webp",
                description: "A jar of souls desecrates the ground in a radius, slowing and applying arcane damage over time to enemies.",
                cooldown: 16,
                cost: 50
            },
            forth: {
                name: "Haunting Spirits",
                icon: "images/abilities/Haunting_Spirits_icon.webp",
                description: "Consume 75 souls to activate, causing the souls to haunt nearby enemies. If Oziel attacks a haunted enemy, the spirit explodes and deals damage.",
                cooldown: null,
                cost: null
            },
            fifth: {
                name: "Essence Siphon",
                icon: "images/abilities/Essence_Siphon_icon.webp",
                description: "Converts a portion of his health into mana when button is held. Ability cannot kill Oziel.",
                cooldown: null,
                cost: null
            }
        },
        upgrades: {
            tier1: [
                {
                    name: "Defiled Essence",
                    description: "Reduces damage taken from Essence Siphon by 25%.",
                    icon: "images/abilities/Essence_Siphon_icon.webp"
                },
                {
                    name: "Consecration",
                    description: "Soul Harvest always yields soul stacks from deaths on Desecrated Ground, even when Oziel is not around.",
                    icon: "images/abilities/Soul_Harvest_icon.webp"
                },
                {
                    name: "Dark Urges",
                    description: "Reduces the cooldown of Desecrated Ground by 25%.",
                    icon: "images/abilities/Desecrated_Ground_icon.webp"
                }
            ],
            tier2: [
                {
                    name: "Jagged Shards",
                    description: "Increases the initial damage of Desecrated Ground by +40. Damage scales with level.",
                    icon: "images/abilities/Desecrated_Ground_icon.webp"
                },
                {
                    name: "Spiritual Connection",
                    description: "Damaging a Haunted enemy with Vampiric Slash regenerates 5% of Oziel's max mana.",
                    icon: "images/abilities/Haunting_Spirits_icon.webp"
                },
                {
                    name: "Vampiric Soul",
                    description: "Adds 10% lifesteal to Vampiric Slash.",
                    icon: "images/abilities/Vampiric_Slash_icon.webp"
                }
            ],
            tier3: [
                {
                    name: "Unholy Mire",
                    description: "Slows Haunted minions by 40%.",
                    icon: "images/abilities/Haunting_Spirits_icon.webp"
                },
                {
                    name: "Profane Healing",
                    description: "Stealing souls heals in a small radius. Healing is based on Oziel's max mana and scales with level.",
                    icon: "images/upgrades/Profane_Healing_icon.webp"
                },
                {
                    name: "Vexing Surge",
                    description: "Hitting an enemy with Wraith Surge provides 1 soul stack.",
                    icon: "images/abilities/Haunting_Spirits_icon.webp"
                }
            ],
            tier4: [
                {
                    name: "Ectoplasmic Explosion",
                    description: "Hitting a Haunted enemy deals damage in a small radius. Damage scales with level.",
                    icon: "images/abilities/Haunting_Spirits_icon.webp"
                },
                {
                    name: "Diabolic Efficiency",
                    description: "Reduces the mana cost of Wraith Surge by 50%. Increases buff's duration 2x.",
                    icon: "images/abilities/Wraith_Surge_icon.webp"
                },
                {
                    name: "Reaper",
                    description: "Soul Harvest yields +1 additional soul stack with each nearby death.",
                    icon: "images/abilities/Soul_Harvest_icon.webp"
                }
            ],
        },
        skins: [
            {
                id: 1,
                name: "The Soul Thief",
                image: "images/heroes/Oziel.webp"
            },
            {
                id: 2,
                name: "Blood Rune",
                image: "images/skins/Oziel_Blood_Rune_background.webp"
            },
            {
                id: 3,
                name: "String Theory",
                image: "images/skins/Oziel_String_Theory_background.webp"
            },
            {
                id: 4,
                name: "Knight Walker",
                image: "images/skins/Oziel_Knight_Walker_background.webp"
            },
        ],
        icon: "images/hero-icons/Oziel.webp"
    },
    {
        id: 14,
        name: "Smolder",
        hp: 313,
        mana: 290,
        range: Range.Ranged,
        damageType: DamageType.Fire,
        trapAffinity: "Naphtha Sprayer are free (max 6)",
        abilities: {
            passive: {
                name: "From the Ashes",
                icon: "images/abilities/From_the_Ashes_icon.webp",
                description: "Smolder explosively resurrects after death, dealing fire damage in a radius and regaining 40% max health and 50% max mana.",
                cooldown: 90,
                cost: null
            },
            primary: {
                name: "Fireball",
                icon: "images/abilities/Fireball_icon.webp",
                description: "Smolder fires a ranged, slow-moving ball of fire.",
                cooldown: null,
                cost: null
            },
            secondary: {
                name: "Dragon's Breath",
                icon: "images/abilities/Dragon's_Breath_icon.webp",
                description: "Smolder channels fire at her enemies, dealing damage. Ability is active as long as the button is held or until she is out of mana.",
                cooldown: null,
                cost: {
                    perSecond: 15
                }
            },
            third: {
                name: "Heart of Flame",
                icon: "images/abilities/Heart_of_Flame_icon.webp",
                description: "A flaming Smolder deals fire damage in a radius around her and moves 15% faster until out of mana. Can be deactivated.",
                cooldown: 3,
                cost: {
                    perSecond: 10
                }
            },
            forth: {
                name: "Incinerate",
                icon: "images/abilities/Incinerate_icon.webp",
                description: "A fiery tornado deals damage to nearby burning enemies. A damage bonus is applied as Smolder levels.",
                cooldown: 10,
                cost: 30
            }
        },
        upgrades: {
            tier1: [
                {
                    name: "Hot Foot",
                    description: "Increases the movement speed bonus granted by Heart of Flame by 50%.",
                    icon: "images/abilities/Heart_of_Flame_icon.webp"
                },
                {
                    name: "Flame Thrower",
                    description: "Increases Fireball's damage by +10% and its projectile speed by 20%.",
                    icon: "images/abilities/Fireball_icon.webp"
                },
                {
                    name: "Fuel Reserves",
                    description: "Increases Smolder's max mana by +40.",
                    icon: "images/upgrades/Fuel_Reserves_icon.webp"
                }
            ],
            tier2: [
                {
                    name: "Endothermia",
                    description: "Reduces the sustained mana cost of Dragon's Breath by -3 mana per second.",
                    icon: "images/abilities/Dragon's_Breath_icon.webp"
                },
                {
                    name: "Phoenix Heart",
                    description: "Reduces the cooldown of From the Ashes by 60s.",
                    icon: "images/abilities/From_the_Ashes_icon.webp"
                },
                {
                    name: "Red-Headed",
                    description: "Increases Smolder's max health by 12%.",
                    icon: "images/upgrades/Red-Headed_icon.webp"
                }
            ],
            tier3: [
                {
                    name: "Resilient",
                    description: "Increases health and mana returned by From the Ashes by 100%.",
                    icon: "images/abilities/From_the_Ashes_icon.webp"
                },
                {
                    name: "Belligerent",
                    description: "Increases the damage of Dragon's Breath by 10%.",
                    icon: "images/abilities/Dragon's_Breath_icon.webp"
                },
                {
                    name: "Passionate",
                    description: "Reduces the cooldown of Incinerate by 3s.",
                    icon: "images/abilities/Incinerate_icon.webp"
                }
            ],
            tier4: [
                {
                    name: "Spontaneous Combustion",
                    description: "Eliminates the mana cost of Heart of Flame.",
                    icon: "images/abilities/Heart_of_Flame_icon.webp"
                },
                {
                    name: "Wildfire",
                    description: "Smolder becomes immune to control effects during Heart of Flame.",
                    icon: "images/abilities/Heart_of_Flame_icon.webp"
                },
                {
                    name: "Smoldering icon     Smoldering",
                    description: "Incinerate slows enemies by 35%.",
                    icon: "images/abilities/Incinerate_icon.webp"
                }
            ],
        },
        skins: [
            {
                id: 65,
                name: "The Fireborn",
                image: "images/heroes/Smolder.webp"
            },
            {
                id: 66,
                name: "Helter Swelter",
                image: "images/skins/Smolder_Helter_Swelter_background.webp"
            },
            {
                id: 69,
                name: "Kill-auea",
                image: "images/skins/Smolder_Kill-auea_background.webp"
            },
            {
                id: 70,
                name: "Five-Alarm Femme",
                image: "images/skins/Smolder_Five-Alarm_Femme_background.webp"
            },
            {
                id: 71,
                name: "Firestarter",
                image: "images/skins/Smolder_Firestarter_background.webp"
            },
            {
                id: 72,
                name: "Wu Xing Dragon Mage",
                image: "images/skins/Smolder_Wu_Xing_Dragon_Mage_background.webp"
            },
        ],
        icon: "images/hero-icons/Smolder.webp"
    },
    {
        id: 15,
        name: "Stinkeye",
        hp: 356,
        mana: 200,
        range: Range.Ranged,
        damageType: DamageType.Arcane,
        trapAffinity: "+25% damage from Arcane Bowling Ball",
        abilities: {
            passive: {
                name: "Shaman's Blessing",
                icon: "images/abilities/Shaman's_Blessing_icon.webp",
                description: "After a totem expires, Mana Orbs appear at the totem's previous location.",
                cooldown: null,
                cost: null
            },
            primary: {
                name: "Prestidigitized Projectile",
                icon: "images/abilities/Prestidigitized_Projectile_icon.webp",
                description: "Stinkeye fires ranged arcane projectiles from his staff.",
                cooldown: null,
                cost: null
            },
            secondary: {
                name: "Arcane Anomaly",
                icon: "images/abilities/Arcane_Anomaly_icon.webp",
                description: "Conjures an orb of arcane energy that charges and then detonates, dealing arcane damage in a radius.",
                cooldown: 6,
                cost: 65
            },
            third: {
                name: "Wrath of Oasis",
                icon: "images/abilities/Wrath_of_Oasis_icon.webp",
                description: "Summons a totem that when shot with primary attack (Prestidigitized Projectile), shoots 3 projectiles at nearby enemies. Lasts 20s.",
                cooldown: 10,
                cost: 25
            },
            forth: {
                name: "Zephyr of Oasis",
                icon: "images/abilities/Zephyr_of_Oasis_icon.webp",
                description: "Summons a totem that increases the movement speed of allies and slows the movement speed of enemies. Destroying the totem stuns enemies for 3s.",
                cooldown: 18,
                cost: 25
            }
        },
        upgrades: {
            tier1: [
                {
                    name: "Psalm of Speed",
                    description: "Increases Zephyr of Oasis's area of effect by 35%.",
                    icon: "images/abilities/Zephyr_of_Oasis_icon.webp"
                },
                {
                    name: "Acolyte Advantage",
                    description: "Allies and totems grant Stinkeye a significant health regeneration buff. Buff scales with level.",
                    icon: "images/upgrades/Acolyte_Advantage_icon.webp"
                },
                {
                    name: "Distant Doctrine",
                    description: "Increases the placement range of totems by 35%.",
                    icon: "images/upgrades/Distant_Doctrine_icon.webp"
                }
            ],
            tier2: [
                {
                    name: "Godly Grief",
                    description: "Forms Tears of Oasis on Shaman's Blessing totem expiration. Tears equal 1 health, 1 mana, and 0.5 Unchained drops.",
                    icon: "images/abilities/Shaman's_Blessing_icon.webp"
                },
                {
                    name: "Anomaly Awe",
                    description: "Arcane Anomaly stuns minions for 1s.",
                    icon: "images/abilities/Arcane_Anomaly_icon.webp"
                },
                {
                    name: "Divine Demotivation",
                    description: "Increases Zephyr of Oasis totem's slow by 10%.",
                    icon: "images/abilities/Zephyr_of_Oasis_icon.webp"
                }
            ],
            tier3: [
                {
                    name: "Booming Benediction",
                    description: "Reduces the cooldown of Arcane Anomaly by 33%.",
                    icon: "images/abilities/Arcane_Anomaly_icon.webp"
                },
                {
                    name: "Skull Saviors",
                    description: "Reduces the cooldown of totem abilities by 30%.",
                    icon: "images/upgrades/Skull_Saviors_icon.webp"
                },
                {
                    name: "Totem Testament",
                    description: "Adds +1 projectile to the Wrath of Oasis totem when shot by Stinkeye.",
                    icon: "images/abilities/Wrath_of_Oasis_icon.webp"
                }
            ],
            tier4: [
                {
                    name: "Angry Oasis",
                    description: "Allows Stinkeye to place +1 additional Wrath of Oasis totem.",
                    icon: "images/upgrades/Angry_Oasis_icon.webp"
                },
                {
                    name: "Arcane Apocalypse",
                    description: "Forms a small Arcane Anomaly when an enemy is killed by Arcane Anomaly.",
                    icon: "images/abilities/Arcane_Anomaly_icon.webp"
                },
                {
                    name: "Sermon of Speed",
                    description: "When Zephyr of Oasis is detonated and the stun has dissipated, minions affected are slowed by 50% for 3 seconds.",
                    icon: "images/upgrades/Sermon_of_Speed_icon.webp"
                }
            ],
        },
        skins: [
            {
                id: 90,
                name: "Shaman of Oasis",
                image: "images/heroes/Stinkeye.webp"
            },
            {
                id: 89,
                name: "First Eye Blind",
                image: "images/skins/Stinkeye_First_Eye_Blind_background.webp"
            },
            {
                id: 92,
                name: "Enfant Terrible",
                image: "images/skins/Stinkeye_Enfant_Terrible_background.webp"
            },
            {
                id: 93,
                name: "Floaty Fun",
                image: "images/skins/Stinkeye_Floaty_Fun_background.webp"
            },
        ],
        icon: "images/hero-icons/Stinkeye.webp"
    },
    {
        id: 16,
        name: "Temper",
        hp: 500,
        mana: 0,
        range: Range.Melee,
        damageType: DamageType.Physical,
        trapAffinity: null,
        abilities: {
            passive: {
                name: "Rage of the Forge",
                icon: "images/abilities/Rage_of_the_Forge_icon.webp",
                description: "Temper gains strength as he builds rage, exploding at max rage and damaging and knocking back enemies.",
                cooldown: null,
                cost: 250
            },
            primary: {
                name: "Swing! Punch! Smash!",
                icon: "images/abilities/Swing!_Punch!_Smash!_icon.webp",
                description: "If used in quick succession, Temper anvil punches, swings his hammer, and delivers an uppercut, building his rage.",
                cooldown: null,
                cost: null
            },
            secondary: {
                name: "Exploding Hammer",
                icon: "images/abilities/Exploding_Hammer_icon.webp",
                description: "Temper throws his hammer. On impact, it knocks back and damages enemies over time in its radius.",
                cooldown: 8,
                cost: null
            },
            third: {
                name: "Happy Place",
                icon: "images/abilities/Happy_Place_icon.webp",
                description: "Temper soothes himself, converting rage into health and a movement speed boost. Attacking cancels ability.",
                cooldown: null,
                cost: {
                    perSecond: 18
                }
            },
            forth: {
                name: "Hammer Slam",
                icon: "images/abilities/Hammer_Slam_icon.webp",
                description: "Temper brings both weapons down in front of him, setting the surrounding area on fire.",
                cooldown: 7,
                cost: 36
            },
            fifth: {
                name: "Bull Rush",
                icon: "images/abilities/Bull_Rush_icon.webp",
                description: "Temper charges forward, knocking back enemies in his path.",
                cooldown: 12,
                cost: 36
            }
        },
        upgrades: {
            tier1: [
                {
                    name: "Anger Loves Company",
                    description: "Increases the enemies aggroed while enraged during Rage of the Forge 3x.",
                    icon: "images/upgrades/Anger_Loves_Company_icon.webp"
                },
                {
                    name: "Seeing Red",
                    description: "Bull Rush stuns heavy minions for 2s.",
                    icon: "images/abilities/Bull_Rush_icon.webp"
                },
                {
                    name: "Moment of Zen",
                    description: "Temper no longer aggros enemies during Happy Place.",
                    icon: "images/abilities/Happy_Place_icon.webp"
                }
            ],
            tier2: [
                {
                    name: "Happy Hooves",
                    description: "Increases Happy Place's speed bonus by 100%.",
                    icon: "images/abilities/Happy_Place_icon.webp"
                },
                {
                    name: "Blow His Top",
                    description: "Decreases the amount of rage consumed by Rage of the Forge by 20%.",
                    icon: "images/upgrades/Blow_His_Top_icon.webp"
                },
                {
                    name: "Rage Machine",
                    description: "Removes rage decay.",
                    icon: "images/upgrades/Anger_Loves_Company_icon.webp"
                }
            ],
            tier3: [
                {
                    name: "Hammered",
                    description: "Exploding Hammer deals 3x damage to enemies it directly hits.",
                    icon: "images/abilities/Exploding_Hammer_icon.webp"
                },
                {
                    name: "Set Off",
                    description: "Hammer Slam sets off nearby floor traps.",
                    icon: "images/abilities/Hammer_Slam_icon.webp"
                },
                {
                    name: "Kicking Mad",
                    description: "Increases the knockback of Bull Rush.",
                    icon: "images/abilities/Bull_Rush_icon.webp"
                }
            ],
            tier4: [
                {
                    name: "Happier Place",
                    description: "Reduces the rage cost of Happy Place by 75%.",
                    icon: "images/abilities/Happy_Place_icon.webp"
                },
                {
                    name: "Explosive Anger",
                    description: "Increases the damage of Rage of the Forge explosions by 25%.",
                    icon: "images/upgrades/Blow_His_Top_icon.webp"
                },
                {
                    name: "Stompin' Mad",
                    description: "Bull Rush deals 2x damage.",
                    icon: "images/abilities/Bull_Rush_icon.webp"
                }
            ],
        },
        skins: [
            {
                id: 94,
                name: "Rage of the Forge",
                image: "images/heroes/Temper.webp"
            },
            {
                id: 95,
                name: "Forged Fury",
                image: "images/skins/Temper_Forged_Fury_background.webp"
            },
            {
                id: 96,
                name: "Prized Cow",
                image: "images/skins/Temper_Prized_Cow_background.webp"
            },
        ],
        icon: "images/hero-icons/Temper.webp"
    },
    {
        id: 17,
        name: "Tundra",
        hp: 625,
        mana: 225,
        range: Range.Melee,
        damageType: DamageType.Frost,
        trapAffinity: "+25% damage from Saw Of Arctos",
        abilities: {
            passive: {
                name: "Permafrost",
                icon: "images/abilities/Permafrost_icon.webp",
                description: "Frozen minions take more damage from Tundra and remain frozen longer. +100% to damage and debuff duration to Frozen-affected minions.",
                cooldown: null,
                cost: null
            },
            primary: {
                name: "Glacial Sweep",
                icon: "images/abilities/Glacial_Sweep_icon.webp",
                description: "Tundra swings his scepter, dealing frost damage to the enemies it hits.",
                cooldown: null,
                cost: null
            },
            secondary: {
                name: "Icicle Burst",
                icon: "images/abilities/Icicle_Burst_icon.webp",
                description: "Tundra shoots 3 rapid-fire icicles, dealing frost damage to enemies and applying a brief slow.",
                cooldown: 4,
                cost: 25
            },
            third: {
                name: "Wall of Frost",
                icon: "images/abilities/Wall_of_Frost_icon.webp",
                description: "Creates an ice barrier in front of Tundra that blocks the movement of enemies. The wall melts after 5s.",
                cooldown: 30,
                cost: 40
            },
            forth: {
                name: "Flash Freeze",
                icon: "images/abilities/Flash_Freeze_icon.webp",
                description: "Releases a blast of ice, instantly freezing every enemy in a narrow area.",
                cooldown: 25,
                cost: 80
            },
            fifth: {
                name: "Avalanche",
                icon: "images/abilities/Avalanche_(ability)_icon.webp",
                description: "Tundra becomes a giant snowball, increasing his movement speed and dealing frost damage to enemies he rolls over.",
                cooldown: 25,
                cost: {
                    perSecond: 10
                }
            }
        },
        upgrades: {
            tier1: [
                {
                    name: "Avalanche Potential",
                    description: "Reduces the cooldown of Avalanche by 20% and removes its time limit.",
                    icon: "images/abilities/Avalanche_(ability)_icon.webp"
                },
                {
                    name: "Brittle Ice",
                    description: "Increases damage dealt to frozen targets by 25%.",
                    icon: "images/abilities/Permafrost_icon.webp"
                },
                {
                    name: "Iced Over",
                    description: "Reduces the mana cost of Icicle Burst by 15%.",
                    icon: "images/abilities/Icicle_Burst_icon.webp"
                }
            ],
            tier2: [
                {
                    name: "Frosty Aura",
                    description: "Reduces the movement speed of enemies that hit Tundra by 30% for 3s.",
                    icon: "images/upgrades/Frosty_Aura_icon.webp"
                },
                {
                    name: "Snowballing",
                    description: "Increases Avalanche's damage by 20%. It also increases its speed and maneuverability.",
                    icon: "images/abilities/Avalanche_(ability)_icon.webp"
                },
                {
                    name: "Chilled Weapons",
                    description: "Wall of Frost adds 40% frost damage to heroes primary attacks when they pass through it.",
                    icon: "images/abilities/Wall_of_Frost_icon.webp"
                }
            ],
            tier3: [
                {
                    name: "Deep Freeze",
                    description: "Increases the duration of Permafrost's Frozen debuff by 25%.",
                    icon: "images/abilities/Permafrost_icon.webp"
                },
                {
                    name: "Crushing Flow",
                    description: "Avalanche deals damage in a radius when canceled. Damage scales with level.",
                    icon: "images/abilities/Avalanche_(ability)_icon.webp"
                },
                {
                    name: "Icicle Assault",
                    description: "Adds +1 projectiles to Icicle Burst.",
                    icon: "images/abilities/Icicle_Burst_icon.webp"
                }
            ],
            tier4: [
                {
                    name: "Freezer Burn",
                    description: "Hitting an enemy with Icicle Burst reduces the remaining cooldown of Flash Freeze by 3% each hit.",
                    icon: "images/abilities/Flash_Freeze_icon.webp"
                },
                {
                    name: "Shattering Icicles",
                    description: "Each shot from Icicle Burst explodes, causing a 50% chance to deal frost damage in a small radius.",
                    icon: "images/abilities/Icicle_Burst_icon.webp"
                },
                {
                    name: "Stay Frosty",
                    description: "Flash Freeze casts a 5s damage over time spell on Frozen enemies. Damage scales with level.",
                    icon: "images/abilities/Flash_Freeze_icon.webp"
                }
            ],
        },
        skins: [
            {
                id: 103,
                name: "Oathkeeper of Arctos",
                image: "images/heroes/Tundra.webp"
            },
            {
                id: 104,
                name: "War Chief",
                image: "images/skins/Tundra_War_Chief_background.webp"
            },
            {
                id: 105,
                name: "Big Lebearski",
                image: "images/skins/Tundra_Big_Lebearski_background.webp"
            },
            {
                id: 106,
                name: "King of Arctos",
                image: "images/skins/Tundra_King_of_Arctos_background.webp"
            },
            {
                id: 107,
                name: "Imperial Golden Mage",
                image: "images/skins/Tundra_Imperial_Golden_Mage_background.webp"
            },
        ],
        icon: "images/hero-icons/Tundra.webp"
    },
    {
        id: 18,
        name: "Yi-Lin",
        hp: 250,
        mana: 40,
        range: Range.Melee,
        damageType: DamageType.Physical,
        trapAffinity: "-20% cooldown for Temple Alarm Gong",
        abilities: {
            passive: {
                name: "Moon's Reflection",
                icon: "images/abilities/Moon's_Reflection_icon.webp",
                description: "When Yi-Lin alternates her abilities while attacking, she is blessed with a small amount of healing and energy.",
                cooldown: null,
                cost: null
            },
            primary: {
                name: "Stone Lotus",
                icon: "images/abilities/Stone_Lotus_icon.webp",
                description: "Yi-Lin slashes enemies with her swords.",
                cooldown: null,
                cost: null
            },
            secondary: {
                name: "Imperial Reach",
                icon: "images/abilities/Imperial_Reach_icon.webp",
                description: "Yi-Lin crosses her blades and slashes downwards creating a longer-range attack. This attack deals more damage the lower the targets health.",
                cooldown: null,
                cost: 10
            },
            third: {
                name: "White Tiger Claw",
                icon: "images/abilities/White_Tiger_Claw_icon.webp",
                description: "Yi-Lin cuts deeply with both swords, wounding an enemy. Primary attack deals increasing damage to enemies wounded by White Tiger Claw until their wounds heal.",
                cooldown: null,
                cost: 20
            },
            forth: {
                name: "Tempest Strike",
                icon: "images/abilities/Tempest_Strike_icon.webp",
                description: "A vortex pulls enemies towards Yi-Lin's whirling blades, causing her to inflict massive damage on her enemies. Lasts 2.2s.",
                cost: 20,
                cooldown: 35
            },
            fifth: {
                name: "Jade Sentinel",
                icon: "images/abilities/Jade_Sentinel_icon.webp",
                description: "Damage dealt to Yi-Lin is reduced by 50% and movement speed is increased by 30%. Yi-Lin cannot attack or regenerate energy while ability is active. Ability costs no energy.",
                cooldown: null,
                cost: null
            }
        },
        upgrades: {
            tier1: [
                {
                    name: "Generous Moon",
                    description: "Moon's Reflection triggers in a radius around Yi-Lin.",
                    icon: "images/abilities/Moon's_Reflection_icon.webp"
                },
                {
                    name: "Inspiring Moon",
                    description: "Increases the energy regenerated by Moon's Reflection by 100%.",
                    icon: "images/abilities/Moon's_Reflection_icon.webp"
                },
                {
                    name: "Healing Moon",
                    description: "Increases the healing of Moon's Reflection by 20%.",
                    icon: "images/abilities/Moon's_Reflection_icon.webp"
                }
            ],
            tier2: [
                {
                    name: "Element of Speed",
                    description: "Increases movement speed during Jade Sentinel by 15%.",
                    icon: "images/abilities/Jade_Sentinel_icon.webp"
                },
                {
                    name: "Element of Renewal",
                    description: "Triggering Moon's Reflection reduces the cooldown of Tempest Strike by 2s.",
                    icon: "images/abilities/Tempest_Strike_icon.webp"
                },
                {
                    name: "Element of Surprise",
                    description: "Increases the width and range of Imperial Reach.",
                    icon: "images/abilities/Imperial_Reach_icon.webp"
                }
            ],
            tier3: [
                {
                    name: "Aspect of the Shadow",
                    description: "Yi-Lin drops all aggro when Jade Sentinel is active.",
                    icon: "images/abilities/Jade_Sentinel_icon.webp"
                },
                {
                    name: "Aspect of the Lotus",
                    description: "Bleeding targets take an additional 15% damage from primary attacks.",
                    icon: "images/abilities/Stone_Lotus_icon.webp"
                },
                {
                    name: "Aspect of the Tiger",
                    description: "Grants Stone Lotus a 10% chance to execute minions with health above 75%.",
                    icon: "images/abilities/Stone_Lotus_icon.webp"
                }
            ],
            tier4: [
                {
                    name: "Blessing of Skill",
                    description: "Wounds caused by White Tiger Claw decrease enemies' movement speed by 30%.",
                    icon: "images/abilities/White_Tiger_Claw_icon.webp"
                },
                {
                    name: "Blessing of Power",
                    description: "Each consecutive hit with Tempest Strike deals 15% more damage.",
                    icon: "images/abilities/Tempest_Strike_icon.webp"
                },
                {
                    name: "Blessing of Health",
                    description: "Increased health and energy regeneration for 10s when health below 20%. 60s cooldown.",
                    icon: "images/upgrades/Blessing_of_Health_icon.webp"
                }
            ],
        },
        skins: [
            {
                id: 129,
                name: "Jade Sentinel",
                image: "images/heroes/Yi-Lin.webp"
            },
            {
                id: 130,
                name: "Sentinel of the Order",
                image: "images/skins/Yi-Lin_Sentinel_of_the_Order_background.webp"
            },
            {
                id: 131,
                name: "Slaying in the Rain",
                image: "images/skins/Yi-Lin_Slaying_in_the_Rain_background.webp"
            },
            {
                id: 132,
                name: "Yule-Lin",
                image: "images/skins/Yi-Lin_Yule-Lin_background.webp"
            },
            
        ],
        icon: "images/hero-icons/Yi-Lin.webp"
    },
    {
        id: 19,
        name: "Zoey",
        hp: 275,
        mana: 225,
        range: Range.Ranged,
        damageType: DamageType.Mixed,
        trapAffinity: "+25% damage from Overload Trap",
        abilities: {
            passive: {
                name: "Feebee the Firebat",
                icon: "images/abilities/Feebee_the_Firebat_icon.webp",
                description: "Zoey's pet firebat occasionally attacks using her current school of magic. She gains an attack speed buff when her school changes.",
                cooldown: null,
                cost: null
            },
            primary: {
                name: "Chaos Tome",
                icon: "images/abilities/Chaos_Tome_icon.webp",
                description: "Fires a ranged spell that deals damage from Zoey's current magic school. Grants an attack speed buff when her school changes.",
                cooldown: null,
                cost: null
            },
            secondary: {
                name: "Book Club",
                icon: "images/abilities/Book_Club_icon.webp",
                description: "Zoey hits enemies with her book, dealing damage and knocking them aside. On hit, Zoey changes magic schools.",
                cooldown: 8,
                cost: 40
            },
            third: {
                name: "Chaos Blast",
                icon: "images/abilities/Chaos_Blast_icon.webp",
                description: "Zoey fires a powerful blast radially, and her school of magic randomly changes.",
                cooldown: 10,
                cost: 45
            },
            forth: {
                name: "Feebee's Wrath",
                icon: "images/abilities/Feebee's_Wrath_icon.webp",
                description: "Zoey jumps into her Chaos Tome, becoming invulnerable. Feebee then goes berserk, dealing massive damage to nearby enemies.",
                cooldown: 90,
                cost: 90
            },
            fifth: {
                name: "Trial and Error",
                icon: "images/abilities/Trial_and_Error_icon.webp",
                description: "Zoey casts a random buff that changes her school of magic. There is a very small chance the spell backfires, causing a debuff.",
                cooldown: 15,
                cost: 45
            }
        },
        upgrades: {
            tier1: [
                {
                    name: "Chapter 1 - Wellness from Chaos",
                    description: "Regenerates 5% of Zoey's max health when Chaos Tome changes her magic school.",
                    icon: "images/abilities/Chaos_Tome_icon.webp"
                },
                {
                    name: "Chapter 2 - Finding Inner Strength",
                    description: "Increases the knockback of Book Club by 30%.",
                    icon: "images/abilities/Book_Club_icon.webp"
                },
                {
                    name: "Chapter 3 - Mastering the Schools",
                    description: "Increases the duration of the attack speed buff granted by changing schools with Chaos Tome by 1.5s.",
                    icon: "images/abilities/Chaos_Tome_icon.webp"
                }
            ],
            tier2: [
                {
                    name: "Chapter 4 - Refreshing the Spirit",
                    description: "Regenerates 2 mana when Zoey hits an enemy with her Chaos Tome ability.",
                    icon: "images/abilities/Chaos_Tome_icon.webp"
                },
                {
                    name: "Chapter 5 - Training Familiars",
                    description: "Increases Feebee's attack speed by 2x.",
                    icon: "images/abilities/Feebee_the_Firebat_icon.webp"
                },
                {
                    name: "Chapter 6 - Spell Improvisation",
                    description: "Book Club stuns minions for 2s.",
                    icon: "images/abilities/Book_Club_icon.webp"
                }
            ],
            tier3: [
                {
                    name: "Chapter 8 - Getting More from Spells",
                    description: "Increases the duration of Trial and Error's buffs by 60%.",
                    icon: "images/abilities/Trial_and_Error_icon.webp"
                },
                {
                    name: "Chapter 9 - Death and Chaos",
                    description: "Changes Zoey's magic school when she kills an enemy.",
                    icon: "images/abilities/Chaos_Tome_icon.webp"
                },
                {
                    name: "Chapter 7 - Wielding the Power of Relics",
                    description: "Increases damage dealt by Book Club by 500%.",
                    icon: "images/abilities/Book_Club_icon.webp"
                }
            ],
            tier4: [
                {
                    name: "Chapter 10 - Advanced Familiars",
                    description: "Slows enemies damaged by Feebee by 50% for 4s.",
                    icon: "images/abilities/Feebee_the_Firebat_icon.webp"
                },
                {
                    name: "Appendix - Pulling it All Together",
                    description: "Feebee's Wrath pulls enemies in and slows them by 60% for 2s.",
                    icon: "images/abilities/Feebee's_Wrath_icon.webp"
                },
                {
                    name: "Chapter 11- Vigor from Chaos",
                    description: "Removes Chaos Tome's speed penalty when the attack speed buff from changing magic schools appears.",
                    icon: "images/abilities/Chaos_Tome_icon.webp"
                }
            ],
        },
        skins: [
            {
                id: 5,
                name: "The Chaotic Apprentice",
                image: "images/heroes/Zoey.webp"
            },
            {
                id: 6,
                name: "School Daze",
                image: "images/skins/Zoey_School_Daze_background.webp"
            },
            {
                id: 7,
                name: "Pretty Little Stitches",
                image: "images/skins/Zoey_Pretty_Little_Stitches_background.webp"
            },
            {
                id: 8,
                name: "Jurassic Journey",
                image: "images/skins/Zoey_Jurassic_Journey_background.webp"
            },
        ],
        icon: "images/hero-icons/Zoey.webp"
    }
]);
export default heroes;
