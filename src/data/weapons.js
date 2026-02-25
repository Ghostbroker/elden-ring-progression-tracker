// Complete Elden Ring weapons data — base game + Shadow of the Erdtree DLC
// IDs are EquipParamWeapon row IDs (decimal param IDs ending in 0000 for base variants)
// Sources: Deskete/EldenRingResources, veeenu/eldenring-practice-tool, Fextralife wiki
//
// Base game IDs verified against Deskete item list and practice-tool codegen YAML.
// DLC weapon IDs follow the same EquipParamWeapon row pattern, continuing the
// numbering within each category prefix for weapons added to existing categories,
// and using new category prefixes (25–29, 35–37) for DLC-only weapon types.

export const WEAPON_CATEGORIES = [
  'Dagger',
  'Straight Sword',
  'Greatsword',
  'Colossal Sword',
  'Thrusting Sword',
  'Heavy Thrusting Sword',
  'Curved Sword',
  'Curved Greatsword',
  'Katana',
  'Twinblade',
  'Hammer',
  'Great Hammer',
  'Flail',
  'Axe',
  'Greataxe',
  'Spear',
  'Great Spear',
  'Halberd',
  'Scythe',
  'Whip',
  'Fist',
  'Claw',
  'Colossal Weapon',
  'Light Greatsword',
  'Great Katana',
  'Hand-to-Hand Art',
  'Backhand Blade',
  'Perfume Bottle',
  'Thrusting Shield',
  'Throwing Blade',
  'Beast Claw',
  'Small Shield',
  'Medium Shield',
  'Greatshield',
  'Staff',
  'Sacred Seal',
  'Bow',
  'Light Bow',
  'Greatbow',
  'Crossbow',
  'Ballista',
  'Torch',
]

export const WEAPONS = [
  // =========================================================================
  // DAGGERS (16 base + 2 DLC = 18)
  // =========================================================================
  { id: 1000000, name: 'Dagger', category: 'Dagger', dlc: false },
  { id: 1010000, name: 'Black Knife', category: 'Dagger', dlc: false },
  { id: 1020000, name: 'Parrying Dagger', category: 'Dagger', dlc: false },
  { id: 1030000, name: 'Miséricorde', category: 'Dagger', dlc: false },
  { id: 1040000, name: 'Reduvia', category: 'Dagger', dlc: false },
  { id: 1050000, name: 'Crystal Knife', category: 'Dagger', dlc: false },
  { id: 1060000, name: 'Celebrant\'s Sickle', category: 'Dagger', dlc: false },
  { id: 1070000, name: 'Glintstone Kris', category: 'Dagger', dlc: false },
  { id: 1080000, name: 'Scorpion\'s Stinger', category: 'Dagger', dlc: false },
  { id: 1090000, name: 'Great Knife', category: 'Dagger', dlc: false },
  { id: 1100000, name: 'Wakizashi', category: 'Dagger', dlc: false },
  { id: 1110000, name: 'Cinquedea', category: 'Dagger', dlc: false },
  { id: 1130000, name: 'Ivory Sickle', category: 'Dagger', dlc: false },
  { id: 1140000, name: 'Bloodstained Dagger', category: 'Dagger', dlc: false },
  { id: 1150000, name: 'Erdsteel Dagger', category: 'Dagger', dlc: false },
  { id: 1160000, name: 'Blade of Calling', category: 'Dagger', dlc: false },
  // DLC Daggers
  { id: 1170000, name: 'Main-gauche', category: 'Dagger', dlc: true },
  { id: 1180000, name: 'Fire Knight\'s Shortsword', category: 'Dagger', dlc: true },

  // =========================================================================
  // STRAIGHT SWORDS (20 base + 4 DLC = 24)
  // Note: Nox Flowing Sword is internally a Straight Sword by param ID (2080000)
  // but the game presents it as a Curved Sword in menus. We keep the param ID
  // and categorize it where the game places it in the player's inventory.
  // =========================================================================
  { id: 2000000, name: 'Longsword', category: 'Straight Sword', dlc: false },
  { id: 2010000, name: 'Short Sword', category: 'Straight Sword', dlc: false },
  { id: 2020000, name: 'Broadsword', category: 'Straight Sword', dlc: false },
  { id: 2030000, name: 'Royal Soldier Straight Sword', category: 'Straight Sword', dlc: false },
  { id: 2040000, name: 'Lordsworn\'s Straight Sword', category: 'Straight Sword', dlc: false },
  { id: 2050000, name: 'Weathered Straight Sword', category: 'Straight Sword', dlc: false },
  { id: 2060000, name: 'Ornamental Straight Sword', category: 'Straight Sword', dlc: false },
  { id: 2070000, name: 'Golden Epitaph', category: 'Straight Sword', dlc: false },
  // Note: Nox Flowing Sword (2080000) is in Straight Sword param range but displays
  // as a Curved Sword in-game menus. Listed under Curved Swords with its real ID.
  // Note: Inseparable Sword (2090000) is in Straight Sword param range but displays
  // as a Greatsword in-game menus. Listed under Greatswords with its real ID.
  { id: 2110000, name: 'Coded Sword', category: 'Straight Sword', dlc: false },
  { id: 2140000, name: 'Sword of Night and Flame', category: 'Straight Sword', dlc: false },
  { id: 2150000, name: 'Crystal Sword', category: 'Straight Sword', dlc: false },
  { id: 2180000, name: 'Carian Knight\'s Sword', category: 'Straight Sword', dlc: false },
  { id: 2190000, name: 'Sword of St. Trina', category: 'Straight Sword', dlc: false },
  { id: 2200000, name: 'Miquellan Knight\'s Sword', category: 'Straight Sword', dlc: false },
  { id: 2210000, name: 'Cane Sword', category: 'Straight Sword', dlc: false },
  { id: 2220000, name: 'Regalia of Eochaid', category: 'Straight Sword', dlc: false },
  { id: 2230000, name: 'Noble\'s Slender Sword', category: 'Straight Sword', dlc: false },
  { id: 2240000, name: 'Warhawk\'s Talon', category: 'Straight Sword', dlc: false },
  { id: 2250000, name: 'Lazuli Glintstone Sword', category: 'Straight Sword', dlc: false },
  { id: 2260000, name: 'Rotten Crystal Sword', category: 'Straight Sword', dlc: false },
  // DLC Straight Swords
  { id: 2270000, name: 'Velvet Sword of St. Trina', category: 'Straight Sword', dlc: true },
  { id: 2280000, name: 'Stone-Sheathed Sword', category: 'Straight Sword', dlc: true },
  { id: 2290000, name: 'Sword of Light', category: 'Straight Sword', dlc: true },
  { id: 2300000, name: 'Sword of Darkness', category: 'Straight Sword', dlc: true },

  // =========================================================================
  // GREATSWORDS (21 base + 3 DLC = 24)
  // =========================================================================
  { id: 2090000, name: 'Inseparable Sword', category: 'Greatsword', dlc: false },
  { id: 3000000, name: 'Bastard Sword', category: 'Greatsword', dlc: false },
  { id: 3010000, name: 'Forked Greatsword', category: 'Greatsword', dlc: false },
  { id: 3020000, name: 'Iron Greatsword', category: 'Greatsword', dlc: false },
  { id: 3030000, name: 'Lordsworn\'s Greatsword', category: 'Greatsword', dlc: false },
  { id: 3040000, name: 'Knight\'s Greatsword', category: 'Greatsword', dlc: false },
  { id: 3050000, name: 'Flamberge', category: 'Greatsword', dlc: false },
  { id: 3060000, name: 'Ordovis\'s Greatsword', category: 'Greatsword', dlc: false },
  { id: 3070000, name: 'Alabaster Lord\'s Sword', category: 'Greatsword', dlc: false },
  { id: 3080000, name: 'Banished Knight\'s Greatsword', category: 'Greatsword', dlc: false },
  { id: 3090000, name: 'Dark Moon Greatsword', category: 'Greatsword', dlc: false },
  { id: 3100000, name: 'Sacred Relic Sword', category: 'Greatsword', dlc: false },
  { id: 3130000, name: 'Helphen\'s Steeple', category: 'Greatsword', dlc: false },
  { id: 3140000, name: 'Blasphemous Blade', category: 'Greatsword', dlc: false },
  { id: 3150000, name: 'Marais Executioner\'s Sword', category: 'Greatsword', dlc: false },
  { id: 3160000, name: 'Sword of Milos', category: 'Greatsword', dlc: false },
  { id: 3170000, name: 'Golden Order Greatsword', category: 'Greatsword', dlc: false },
  { id: 3180000, name: 'Claymore', category: 'Greatsword', dlc: false },
  { id: 3190000, name: 'Gargoyle\'s Greatsword', category: 'Greatsword', dlc: false },
  { id: 3200000, name: 'Death\'s Poker', category: 'Greatsword', dlc: false },
  { id: 3210000, name: 'Gargoyle\'s Blackblade', category: 'Greatsword', dlc: false },
  // DLC Greatswords
  { id: 3220000, name: 'Lizard Greatsword', category: 'Greatsword', dlc: true },
  { id: 3230000, name: 'Greatsword of Damnation', category: 'Greatsword', dlc: true },
  { id: 3240000, name: 'Greatsword of Solitude', category: 'Greatsword', dlc: true },

  // =========================================================================
  // COLOSSAL SWORDS (11 base + 5 DLC = 16)
  // =========================================================================
  { id: 4000000, name: 'Greatsword', category: 'Colossal Sword', dlc: false },
  { id: 4010000, name: 'Watchdog\'s Greatsword', category: 'Colossal Sword', dlc: false },
  { id: 4020000, name: 'Maliketh\'s Black Blade', category: 'Colossal Sword', dlc: false },
  { id: 4030000, name: 'Troll\'s Golden Sword', category: 'Colossal Sword', dlc: false },
  { id: 4040000, name: 'Zweihander', category: 'Colossal Sword', dlc: false },
  { id: 4050000, name: 'Starscourge Greatsword', category: 'Colossal Sword', dlc: false },
  { id: 4060000, name: 'Royal Greatsword', category: 'Colossal Sword', dlc: false },
  { id: 4070000, name: 'Godslayer\'s Greatsword', category: 'Colossal Sword', dlc: false },
  { id: 4080000, name: 'Ruins Greatsword', category: 'Colossal Sword', dlc: false },
  { id: 4100000, name: 'Grafted Blade Greatsword', category: 'Colossal Sword', dlc: false },
  { id: 4110000, name: 'Troll Knight\'s Sword', category: 'Colossal Sword', dlc: false },
  // DLC Colossal Swords
  { id: 4120000, name: 'Ancient Meteoric Ore Greatsword', category: 'Colossal Sword', dlc: true },
  { id: 4130000, name: 'Fire Knight\'s Greatsword', category: 'Colossal Sword', dlc: true },
  { id: 4140000, name: 'Greatsword of Radahn (Light)', category: 'Colossal Sword', dlc: true },
  { id: 4150000, name: 'Greatsword of Radahn (Lord)', category: 'Colossal Sword', dlc: true },
  { id: 4160000, name: 'Moonrithyll\'s Knight Sword', category: 'Colossal Sword', dlc: true },

  // =========================================================================
  // THRUSTING SWORDS (7 base + 1 DLC = 8)
  // =========================================================================
  { id: 5000000, name: 'Estoc', category: 'Thrusting Sword', dlc: false },
  { id: 5010000, name: 'Cleanrot Knight\'s Sword', category: 'Thrusting Sword', dlc: false },
  { id: 5020000, name: 'Rapier', category: 'Thrusting Sword', dlc: false },
  { id: 5030000, name: 'Rogier\'s Rapier', category: 'Thrusting Sword', dlc: false },
  { id: 5040000, name: 'Antspur Rapier', category: 'Thrusting Sword', dlc: false },
  { id: 5050000, name: 'Frozen Needle', category: 'Thrusting Sword', dlc: false },
  { id: 5060000, name: 'Noble\'s Estoc', category: 'Thrusting Sword', dlc: false },
  // DLC Thrusting Swords
  { id: 5070000, name: 'Carian Sorcery Sword', category: 'Thrusting Sword', dlc: true },

  // =========================================================================
  // HEAVY THRUSTING SWORDS (4 base + 2 DLC = 6)
  // =========================================================================
  { id: 6000000, name: 'Bloody Helice', category: 'Heavy Thrusting Sword', dlc: false },
  { id: 6010000, name: 'Godskin Stitcher', category: 'Heavy Thrusting Sword', dlc: false },
  { id: 6020000, name: 'Great Épée', category: 'Heavy Thrusting Sword', dlc: false },
  { id: 6040000, name: 'Dragon King\'s Cragblade', category: 'Heavy Thrusting Sword', dlc: false },
  // DLC Heavy Thrusting Swords
  { id: 6050000, name: 'Sword Lance', category: 'Heavy Thrusting Sword', dlc: true },
  { id: 6060000, name: 'Queelign\'s Greatsword', category: 'Heavy Thrusting Sword', dlc: true },

  // =========================================================================
  // CURVED SWORDS (15 base + 4 DLC = 19)
  // =========================================================================
  { id: 7000000, name: 'Falchion', category: 'Curved Sword', dlc: false },
  { id: 7010000, name: 'Beastman\'s Curved Sword', category: 'Curved Sword', dlc: false },
  { id: 7020000, name: 'Shotel', category: 'Curved Sword', dlc: false },
  { id: 7030000, name: 'Shamshir', category: 'Curved Sword', dlc: false },
  { id: 7040000, name: 'Bandit\'s Curved Sword', category: 'Curved Sword', dlc: false },
  { id: 7050000, name: 'Magma Blade', category: 'Curved Sword', dlc: false },
  { id: 7060000, name: 'Flowing Curved Sword', category: 'Curved Sword', dlc: false },
  { id: 7070000, name: 'Wing of Astel', category: 'Curved Sword', dlc: false },
  { id: 7080000, name: 'Scavenger\'s Curved Sword', category: 'Curved Sword', dlc: false },
  { id: 7100000, name: 'Eclipse Shotel', category: 'Curved Sword', dlc: false },
  { id: 7110000, name: 'Serpent-God\'s Curved Sword', category: 'Curved Sword', dlc: false },
  { id: 7120000, name: 'Mantis Blade', category: 'Curved Sword', dlc: false },
  { id: 7140000, name: 'Scimitar', category: 'Curved Sword', dlc: false },
  { id: 7150000, name: 'Grossmesser', category: 'Curved Sword', dlc: false },
  { id: 2080000, name: 'Nox Flowing Sword', category: 'Curved Sword', dlc: false },
  // DLC Curved Swords
  { id: 7170000, name: 'Spirit Sword', category: 'Curved Sword', dlc: true },
  { id: 7180000, name: 'Falx', category: 'Curved Sword', dlc: true },
  { id: 7190000, name: 'Dancing Blade of Ranah', category: 'Curved Sword', dlc: true },
  { id: 7200000, name: 'Horned Warrior\'s Sword', category: 'Curved Sword', dlc: true },

  // =========================================================================
  // CURVED GREATSWORDS (9 base + 2 DLC = 11)
  // =========================================================================
  { id: 8010000, name: 'Onyx Lord\'s Greatsword', category: 'Curved Greatsword', dlc: false },
  { id: 8020000, name: 'Dismounter', category: 'Curved Greatsword', dlc: false },
  { id: 8030000, name: 'Bloodhound\'s Fang', category: 'Curved Greatsword', dlc: false },
  { id: 8040000, name: 'Magma Wyrm\'s Scalesword', category: 'Curved Greatsword', dlc: false },
  { id: 8050000, name: 'Zamor Curved Sword', category: 'Curved Greatsword', dlc: false },
  { id: 8060000, name: 'Omen Cleaver', category: 'Curved Greatsword', dlc: false },
  { id: 8070000, name: 'Monk\'s Flameblade', category: 'Curved Greatsword', dlc: false },
  { id: 8080000, name: 'Beastman\'s Cleaver', category: 'Curved Greatsword', dlc: false },
  { id: 8100000, name: 'Morgott\'s Cursed Sword', category: 'Curved Greatsword', dlc: false },
  // DLC Curved Greatswords
  { id: 8120000, name: 'Horned Warrior\'s Greatsword', category: 'Curved Greatsword', dlc: true },
  { id: 8130000, name: 'Freyja\'s Greatsword', category: 'Curved Greatsword', dlc: true },

  // =========================================================================
  // KATANAS (8 base + 2 DLC = 10)
  // =========================================================================
  { id: 9000000, name: 'Uchigatana', category: 'Katana', dlc: false },
  { id: 9010000, name: 'Nagakiba', category: 'Katana', dlc: false },
  { id: 9020000, name: 'Hand of Malenia', category: 'Katana', dlc: false },
  { id: 9030000, name: 'Meteoric Ore Blade', category: 'Katana', dlc: false },
  { id: 9040000, name: 'Rivers of Blood', category: 'Katana', dlc: false },
  { id: 9060000, name: 'Moonveil', category: 'Katana', dlc: false },
  { id: 9070000, name: 'Dragonscale Blade', category: 'Katana', dlc: false },
  { id: 9080000, name: 'Serpentbone Blade', category: 'Katana', dlc: false },
  // DLC Katanas
  { id: 9090000, name: 'Star-Lined Sword', category: 'Katana', dlc: true },
  { id: 9100000, name: 'Sword of Night', category: 'Katana', dlc: true },

  // =========================================================================
  // TWINBLADES (6 base + 2 DLC = 8)
  // =========================================================================
  { id: 10000000, name: 'Twinblade', category: 'Twinblade', dlc: false },
  { id: 10010000, name: 'Godskin Peeler', category: 'Twinblade', dlc: false },
  { id: 10030000, name: 'Twinned Knight Swords', category: 'Twinblade', dlc: false },
  { id: 10050000, name: 'Eleonora\'s Poleblade', category: 'Twinblade', dlc: false },
  { id: 10080000, name: 'Gargoyle\'s Twinblade', category: 'Twinblade', dlc: false },
  { id: 10090000, name: 'Gargoyle\'s Black Blades', category: 'Twinblade', dlc: false },
  // DLC Twinblades
  { id: 10100000, name: 'Black Steel Twinblade', category: 'Twinblade', dlc: true },
  { id: 10110000, name: 'Euporia', category: 'Twinblade', dlc: true },

  // =========================================================================
  // HAMMERS (15 base + 1 DLC = 16)
  // =========================================================================
  { id: 11000000, name: 'Mace', category: 'Hammer', dlc: false },
  { id: 11010000, name: 'Club', category: 'Hammer', dlc: false },
  { id: 11030000, name: 'Curved Club', category: 'Hammer', dlc: false },
  { id: 11040000, name: 'Warpick', category: 'Hammer', dlc: false },
  { id: 11050000, name: 'Morning Star', category: 'Hammer', dlc: false },
  { id: 11060000, name: 'Varré\'s Bouquet', category: 'Hammer', dlc: false },
  { id: 11070000, name: 'Spiked Club', category: 'Hammer', dlc: false },
  { id: 11080000, name: 'Hammer', category: 'Hammer', dlc: false },
  { id: 11090000, name: 'Monk\'s Flamemace', category: 'Hammer', dlc: false },
  { id: 11100000, name: 'Envoy\'s Horn', category: 'Hammer', dlc: false },
  { id: 11110000, name: 'Scepter of the All-Knowing', category: 'Hammer', dlc: false },
  { id: 11120000, name: 'Nox Flowing Hammer', category: 'Hammer', dlc: false },
  { id: 11130000, name: 'Ringed Finger', category: 'Hammer', dlc: false },
  { id: 11140000, name: 'Stone Club', category: 'Hammer', dlc: false },
  { id: 11150000, name: 'Marika\'s Hammer', category: 'Hammer', dlc: false },
  // DLC Hammers
  { id: 11170000, name: 'Flowerstone Gavel', category: 'Hammer', dlc: true },

  // =========================================================================
  // GREAT HAMMERS (14 base + 2 DLC = 16)
  // =========================================================================
  { id: 12000000, name: 'Large Club', category: 'Great Hammer', dlc: false },
  { id: 12010000, name: 'Greathorn Hammer', category: 'Great Hammer', dlc: false },
  { id: 12020000, name: 'Battle Hammer', category: 'Great Hammer', dlc: false },
  { id: 12060000, name: 'Great Mace', category: 'Great Hammer', dlc: false },
  { id: 12080000, name: 'Curved Great Club', category: 'Great Hammer', dlc: false },
  { id: 12130000, name: 'Celebrant\'s Skull', category: 'Great Hammer', dlc: false },
  { id: 12140000, name: 'Pickaxe', category: 'Great Hammer', dlc: false },
  { id: 12150000, name: 'Beastclaw Greathammer', category: 'Great Hammer', dlc: false },
  { id: 12160000, name: 'Envoy\'s Long Horn', category: 'Great Hammer', dlc: false },
  { id: 12170000, name: 'Cranial Vessel Candlestand', category: 'Great Hammer', dlc: false },
  { id: 12180000, name: 'Great Stars', category: 'Great Hammer', dlc: false },
  { id: 12190000, name: 'Brick Hammer', category: 'Great Hammer', dlc: false },
  { id: 12200000, name: 'Devourer\'s Scepter', category: 'Great Hammer', dlc: false },
  { id: 12210000, name: 'Rotten Battle Hammer', category: 'Great Hammer', dlc: false },
  // DLC Great Hammers
  { id: 12220000, name: 'Black Steel Greathammer', category: 'Great Hammer', dlc: true },
  { id: 12230000, name: 'Smithscript Greathammer', category: 'Great Hammer', dlc: true },

  // =========================================================================
  // FLAILS (5 base + 1 DLC = 6)
  // =========================================================================
  { id: 13000000, name: 'Nightrider Flail', category: 'Flail', dlc: false },
  { id: 13010000, name: 'Flail', category: 'Flail', dlc: false },
  { id: 13020000, name: 'Family Heads', category: 'Flail', dlc: false },
  { id: 13030000, name: 'Bastard\'s Stars', category: 'Flail', dlc: false },
  { id: 13040000, name: 'Chainlink Flail', category: 'Flail', dlc: false },
  // DLC Flails
  { id: 13050000, name: 'Serpent Flail', category: 'Flail', dlc: true },

  // =========================================================================
  // AXES (13 base + 4 DLC = 17)
  // =========================================================================
  { id: 14000000, name: 'Battle Axe', category: 'Axe', dlc: false },
  { id: 14010000, name: 'Forked Hatchet', category: 'Axe', dlc: false },
  { id: 14020000, name: 'Hand Axe', category: 'Axe', dlc: false },
  { id: 14030000, name: 'Jawbone Axe', category: 'Axe', dlc: false },
  { id: 14040000, name: 'Iron Cleaver', category: 'Axe', dlc: false },
  { id: 14050000, name: 'Ripple Blade', category: 'Axe', dlc: false },
  { id: 14060000, name: 'Celebrant\'s Cleaver', category: 'Axe', dlc: false },
  { id: 14080000, name: 'Icerind Hatchet', category: 'Axe', dlc: false },
  { id: 14100000, name: 'Highland Axe', category: 'Axe', dlc: false },
  { id: 14110000, name: 'Sacrificial Axe', category: 'Axe', dlc: false },
  { id: 14120000, name: 'Rosus\' Axe', category: 'Axe', dlc: false },
  // Note: 14130000 was "Burial Axe" in Deskete data — cut content, excluded
  { id: 15010000, name: 'Warped Axe', category: 'Axe', dlc: false },
  { id: 14140000, name: 'Stormhawk Axe', category: 'Axe', dlc: false },
  // DLC Axes
  { id: 14150000, name: 'Forked-Tongue Hatchet', category: 'Axe', dlc: true },
  { id: 14160000, name: 'Smithscript Axe', category: 'Axe', dlc: true },
  { id: 14170000, name: 'Messmer Soldier\'s Axe', category: 'Axe', dlc: true },
  { id: 14180000, name: 'Death Knight\'s Twin Axes', category: 'Axe', dlc: true },

  // =========================================================================
  // GREATAXES (11 base + 3 DLC = 14)
  // =========================================================================
  { id: 15000000, name: 'Greataxe', category: 'Greataxe', dlc: false },
  // Note: Warped Axe (15010000) is in Greataxe param range but displays
  // as an Axe in-game menus. Listed under Axes with its real ID.
  { id: 15020000, name: 'Great Omenkiller Cleaver', category: 'Greataxe', dlc: false },
  { id: 15030000, name: 'Crescent Moon Axe', category: 'Greataxe', dlc: false },
  { id: 15040000, name: 'Axe of Godrick', category: 'Greataxe', dlc: false },
  { id: 15050000, name: 'Longhaft Axe', category: 'Greataxe', dlc: false },
  { id: 15060000, name: 'Rusted Anchor', category: 'Greataxe', dlc: false },
  { id: 15080000, name: 'Executioner\'s Greataxe', category: 'Greataxe', dlc: false },
  { id: 15110000, name: 'Winged Greathorn', category: 'Greataxe', dlc: false },
  { id: 15120000, name: 'Butchering Knife', category: 'Greataxe', dlc: false },
  { id: 15130000, name: 'Gargoyle\'s Great Axe', category: 'Greataxe', dlc: false },
  { id: 15140000, name: 'Gargoyle\'s Black Axe', category: 'Greataxe', dlc: false },
  // DLC Greataxes
  { id: 15150000, name: 'Putrescence Cleaver', category: 'Greataxe', dlc: true },
  { id: 15160000, name: 'Death Knight\'s Longhaft Axe', category: 'Greataxe', dlc: true },
  { id: 15170000, name: 'Bonny Butchering Knife', category: 'Greataxe', dlc: true },

  // =========================================================================
  // SPEARS (16 base + 3 DLC = 19)
  // =========================================================================
  { id: 16000000, name: 'Short Spear', category: 'Spear', dlc: false },
  { id: 16010000, name: 'Spear', category: 'Spear', dlc: false },
  { id: 16020000, name: 'Crystal Spear', category: 'Spear', dlc: false },
  { id: 16030000, name: 'Clayman\'s Harpoon', category: 'Spear', dlc: false },
  { id: 16040000, name: 'Cleanrot Spear', category: 'Spear', dlc: false },
  { id: 16050000, name: 'Partisan', category: 'Spear', dlc: false },
  { id: 16060000, name: 'Celebrant\'s Rib-Rake', category: 'Spear', dlc: false },
  { id: 16070000, name: 'Pike', category: 'Spear', dlc: false },
  { id: 16080000, name: 'Torchpole', category: 'Spear', dlc: false },
  { id: 16090000, name: 'Bolt of Gransax', category: 'Spear', dlc: false },
  { id: 16110000, name: 'Cross-Naginata', category: 'Spear', dlc: false },
  { id: 16120000, name: 'Death Ritual Spear', category: 'Spear', dlc: false },
  { id: 16130000, name: 'Inquisitor\'s Girandole', category: 'Spear', dlc: false },
  { id: 16140000, name: 'Spiked Spear', category: 'Spear', dlc: false },
  { id: 16150000, name: 'Iron Spear', category: 'Spear', dlc: false },
  { id: 16160000, name: 'Rotten Crystal Spear', category: 'Spear', dlc: false },
  // DLC Spears
  { id: 16170000, name: 'Smithscript Spear', category: 'Spear', dlc: true },
  { id: 16180000, name: 'Swift Spear', category: 'Spear', dlc: true },
  { id: 16190000, name: 'Bloodfiend\'s Fork', category: 'Spear', dlc: true },

  // =========================================================================
  // GREAT SPEARS (6 base + 4 DLC = 10)
  // =========================================================================
  { id: 17010000, name: 'Mohgwyn\'s Sacred Spear', category: 'Great Spear', dlc: false },
  { id: 17020000, name: 'Siluria\'s Tree', category: 'Great Spear', dlc: false },
  { id: 17030000, name: 'Serpent-Hunter', category: 'Great Spear', dlc: false },
  { id: 17050000, name: 'Vyke\'s War Spear', category: 'Great Spear', dlc: false },
  { id: 17060000, name: 'Lance', category: 'Great Spear', dlc: false },
  { id: 17070000, name: 'Treespear', category: 'Great Spear', dlc: false },
  // DLC Great Spears
  { id: 17080000, name: 'Messmer Soldier\'s Spear', category: 'Great Spear', dlc: true },
  { id: 17090000, name: 'Barbed Staff-Spear', category: 'Great Spear', dlc: true },
  { id: 17100000, name: 'Bloodfiend\'s Sacred Spear', category: 'Great Spear', dlc: true },
  { id: 17110000, name: 'Spear of the Impaler', category: 'Great Spear', dlc: true },

  // =========================================================================
  // HALBERDS (16 base + 2 DLC = 18)
  // =========================================================================
  { id: 18000000, name: 'Halberd', category: 'Halberd', dlc: false },
  { id: 18010000, name: 'Pest\'s Glaive', category: 'Halberd', dlc: false },
  { id: 18020000, name: 'Lucerne', category: 'Halberd', dlc: false },
  { id: 18030000, name: 'Banished Knight\'s Halberd', category: 'Halberd', dlc: false },
  { id: 18040000, name: 'Commander\'s Standard', category: 'Halberd', dlc: false },
  { id: 18050000, name: 'Nightrider Glaive', category: 'Halberd', dlc: false },
  { id: 18060000, name: 'Ripple Crescent Halberd', category: 'Halberd', dlc: false },
  { id: 18070000, name: 'Vulgar Militia Saw', category: 'Halberd', dlc: false },
  { id: 18080000, name: 'Golden Halberd', category: 'Halberd', dlc: false },
  { id: 18090000, name: 'Glaive', category: 'Halberd', dlc: false },
  { id: 18100000, name: 'Loretta\'s War Sickle', category: 'Halberd', dlc: false },
  { id: 18110000, name: 'Guardian\'s Swordspear', category: 'Halberd', dlc: false },
  { id: 18130000, name: 'Vulgar Militia Shotel', category: 'Halberd', dlc: false },
  { id: 18140000, name: 'Dragon Halberd', category: 'Halberd', dlc: false },
  { id: 18150000, name: 'Gargoyle\'s Halberd', category: 'Halberd', dlc: false },
  { id: 18160000, name: 'Gargoyle\'s Black Halberd', category: 'Halberd', dlc: false },
  // DLC Halberds
  { id: 18170000, name: 'Spirit Glaive', category: 'Halberd', dlc: true },
  { id: 18180000, name: 'Poleblade of the Bud', category: 'Halberd', dlc: true },

  // =========================================================================
  // SCYTHES / REAPERS (5 base + 1 DLC = 6)
  // =========================================================================
  { id: 19000000, name: 'Scythe', category: 'Scythe', dlc: false },
  { id: 19010000, name: 'Grave Scythe', category: 'Scythe', dlc: false },
  { id: 19020000, name: 'Halo Scythe', category: 'Scythe', dlc: false },
  { id: 19050000, name: 'Heretic\'s Hook', category: 'Scythe', dlc: false },
  { id: 19060000, name: 'Winged Scythe', category: 'Scythe', dlc: false },
  // DLC Scythes
  { id: 19070000, name: 'Obsidian Lamina', category: 'Scythe', dlc: true },

  // =========================================================================
  // WHIPS (6 base + 1 DLC = 7)
  // =========================================================================
  { id: 20000000, name: 'Whip', category: 'Whip', dlc: false },
  { id: 20020000, name: 'Thorned Whip', category: 'Whip', dlc: false },
  { id: 20030000, name: 'Magma Whip Candlestick', category: 'Whip', dlc: false },
  { id: 20050000, name: 'Hoslow\'s Petal Whip', category: 'Whip', dlc: false },
  { id: 20060000, name: 'Giant\'s Red Braid', category: 'Whip', dlc: false },
  { id: 20070000, name: 'Urumi', category: 'Whip', dlc: false },
  // DLC Whips
  { id: 20080000, name: 'Tooth Whip', category: 'Whip', dlc: true },

  // =========================================================================
  // FISTS (9 base + 5 DLC = 14)
  // =========================================================================
  { id: 21000000, name: 'Caestus', category: 'Fist', dlc: false },
  { id: 21010000, name: 'Spiked Caestus', category: 'Fist', dlc: false },
  { id: 21060000, name: 'Grafted Dragon', category: 'Fist', dlc: false },
  { id: 21070000, name: 'Iron Ball', category: 'Fist', dlc: false },
  { id: 21080000, name: 'Star Fist', category: 'Fist', dlc: false },
  { id: 21100000, name: 'Katar', category: 'Fist', dlc: false },
  { id: 21110000, name: 'Clinging Bone', category: 'Fist', dlc: false },
  { id: 21120000, name: 'Veteran\'s Prosthesis', category: 'Fist', dlc: false },
  { id: 21130000, name: 'Cipher Pata', category: 'Fist', dlc: false },
  // DLC Fists
  { id: 21140000, name: 'Pata', category: 'Fist', dlc: true },
  { id: 21150000, name: 'Golem Fist', category: 'Fist', dlc: true },
  { id: 21160000, name: 'Thiollier\'s Hidden Needle', category: 'Fist', dlc: true },
  { id: 21170000, name: 'Poisoned Hand', category: 'Fist', dlc: true },
  { id: 21180000, name: 'Madding Hand', category: 'Fist', dlc: true },

  // =========================================================================
  // CLAWS (4 base + 1 DLC = 5)
  // =========================================================================
  { id: 22000000, name: 'Hookclaws', category: 'Claw', dlc: false },
  { id: 22010000, name: 'Venomous Fang', category: 'Claw', dlc: false },
  { id: 22020000, name: 'Bloodhound Claws', category: 'Claw', dlc: false },
  { id: 22030000, name: 'Raptor Talons', category: 'Claw', dlc: false },
  // DLC Claws
  { id: 22040000, name: 'Claws of Night', category: 'Claw', dlc: true },

  // =========================================================================
  // COLOSSAL WEAPONS (15 base + 5 DLC = 20)
  // =========================================================================
  { id: 23000000, name: 'Prelate\'s Inferno Crozier', category: 'Colossal Weapon', dlc: false },
  { id: 23010000, name: 'Watchdog\'s Staff', category: 'Colossal Weapon', dlc: false },
  { id: 23020000, name: 'Great Club', category: 'Colossal Weapon', dlc: false },
  { id: 23030000, name: 'Envoy\'s Greathorn', category: 'Colossal Weapon', dlc: false },
  { id: 23040000, name: 'Duelist Greataxe', category: 'Colossal Weapon', dlc: false },
  { id: 23050000, name: 'Axe of Godfrey', category: 'Colossal Weapon', dlc: false },
  { id: 23060000, name: 'Dragon Greatclaw', category: 'Colossal Weapon', dlc: false },
  { id: 23070000, name: 'Staff of the Avatar', category: 'Colossal Weapon', dlc: false },
  { id: 23080000, name: 'Fallingstar Beast Jaw', category: 'Colossal Weapon', dlc: false },
  { id: 23100000, name: 'Ghiza\'s Wheel', category: 'Colossal Weapon', dlc: false },
  { id: 23110000, name: 'Giant-Crusher', category: 'Colossal Weapon', dlc: false },
  { id: 23120000, name: 'Golem\'s Halberd', category: 'Colossal Weapon', dlc: false },
  { id: 23130000, name: 'Troll\'s Hammer', category: 'Colossal Weapon', dlc: false },
  { id: 23140000, name: 'Rotten Staff', category: 'Colossal Weapon', dlc: false },
  { id: 23150000, name: 'Rotten Greataxe', category: 'Colossal Weapon', dlc: false },
  // DLC Colossal Weapons
  { id: 23160000, name: 'Bloodfiend\'s Arm', category: 'Colossal Weapon', dlc: true },
  { id: 23170000, name: 'Anvil Hammer', category: 'Colossal Weapon', dlc: true },
  { id: 23180000, name: 'Devonia\'s Hammer', category: 'Colossal Weapon', dlc: true },
  { id: 23190000, name: 'Shadow Sunflower Blossom', category: 'Colossal Weapon', dlc: true },
  { id: 23200000, name: 'Gazing Finger', category: 'Colossal Weapon', dlc: true },

  // =========================================================================
  // TORCHES (6 base + 2 DLC = 8)
  // =========================================================================
  { id: 24000000, name: 'Torch', category: 'Torch', dlc: false },
  { id: 24020000, name: 'Steel-Wire Torch', category: 'Torch', dlc: false },
  { id: 24040000, name: 'St. Trina\'s Torch', category: 'Torch', dlc: false },
  { id: 24050000, name: 'Ghostflame Torch', category: 'Torch', dlc: false },
  { id: 24060000, name: 'Beast-Repellent Torch', category: 'Torch', dlc: false },
  { id: 24070000, name: 'Sentry\'s Torch', category: 'Torch', dlc: false },
  // DLC Torches
  { id: 24080000, name: 'Nanaya\'s Torch', category: 'Torch', dlc: true },
  { id: 24090000, name: 'Lamenting Visage', category: 'Torch', dlc: true },

  // =========================================================================
  // HAND-TO-HAND ARTS (DLC only — 2)
  // =========================================================================
  { id: 25000000, name: 'Dryleaf Arts', category: 'Hand-to-Hand Art', dlc: true },
  { id: 25010000, name: 'Dane\'s Footwork', category: 'Hand-to-Hand Art', dlc: true },

  // =========================================================================
  // PERFUME BOTTLES (DLC only — 5)
  // =========================================================================
  { id: 26000000, name: 'Firespark Perfume Bottle', category: 'Perfume Bottle', dlc: true },
  { id: 26010000, name: 'Chilling Perfume Bottle', category: 'Perfume Bottle', dlc: true },
  { id: 26020000, name: 'Frenzyflame Perfume Bottle', category: 'Perfume Bottle', dlc: true },
  { id: 26030000, name: 'Lightning Perfume Bottle', category: 'Perfume Bottle', dlc: true },
  { id: 26040000, name: 'Deadly Poison Perfume Bottle', category: 'Perfume Bottle', dlc: true },

  // =========================================================================
  // THRUSTING SHIELDS (DLC only — 2)
  // =========================================================================
  { id: 27000000, name: 'Dueling Shield', category: 'Thrusting Shield', dlc: true },
  { id: 27010000, name: 'Carian Thrusting Shield', category: 'Thrusting Shield', dlc: true },

  // =========================================================================
  // THROWING BLADES (DLC only — 1)
  // =========================================================================
  { id: 28000000, name: 'Smithscript Dagger', category: 'Throwing Blade', dlc: true },

  // =========================================================================
  // BACKHAND BLADES (DLC only — 3)
  // =========================================================================
  { id: 29000000, name: 'Backhand Blade', category: 'Backhand Blade', dlc: true },
  { id: 29010000, name: 'Smithscript Cirque', category: 'Backhand Blade', dlc: true },
  { id: 29020000, name: 'Curseblade\'s Cirque', category: 'Backhand Blade', dlc: true },

  // =========================================================================
  // SMALL SHIELDS (17 base + 2 DLC = 19)
  // =========================================================================
  { id: 30000000, name: 'Buckler', category: 'Small Shield', dlc: false },
  { id: 30010000, name: 'Perfumer\'s Shield', category: 'Small Shield', dlc: false },
  { id: 30020000, name: 'Man-Serpent\'s Shield', category: 'Small Shield', dlc: false },
  { id: 30030000, name: 'Rickety Shield', category: 'Small Shield', dlc: false },
  { id: 30040000, name: 'Pillory Shield', category: 'Small Shield', dlc: false },
  { id: 30060000, name: 'Beastman\'s Jar-Shield', category: 'Small Shield', dlc: false },
  { id: 30070000, name: 'Red Thorn Roundshield', category: 'Small Shield', dlc: false },
  { id: 30080000, name: 'Scripture Wooden Shield', category: 'Small Shield', dlc: false },
  { id: 30090000, name: 'Riveted Wooden Shield', category: 'Small Shield', dlc: false },
  { id: 30100000, name: 'Blue-White Wooden Shield', category: 'Small Shield', dlc: false },
  { id: 30110000, name: 'Rift Shield', category: 'Small Shield', dlc: false },
  { id: 30120000, name: 'Iron Roundshield', category: 'Small Shield', dlc: false },
  { id: 30130000, name: 'Gilded Iron Shield', category: 'Small Shield', dlc: false },
  { id: 30140000, name: 'Ice Crest Shield', category: 'Small Shield', dlc: false },
  { id: 30150000, name: 'Smoldering Shield', category: 'Small Shield', dlc: false },
  { id: 30190000, name: 'Spiralhorn Shield', category: 'Small Shield', dlc: false },
  { id: 30200000, name: 'Coil Shield', category: 'Small Shield', dlc: false },
  // DLC Small Shields
  { id: 30210000, name: 'Smithscript Shield', category: 'Small Shield', dlc: true },
  { id: 30220000, name: 'Shield of Night', category: 'Small Shield', dlc: true },

  // =========================================================================
  // MEDIUM SHIELDS (27 base + 4 DLC = 31)
  // =========================================================================
  { id: 31000000, name: 'Kite Shield', category: 'Medium Shield', dlc: false },
  { id: 31010000, name: 'Marred Leather Shield', category: 'Medium Shield', dlc: false },
  { id: 31020000, name: 'Marred Wooden Shield', category: 'Medium Shield', dlc: false },
  { id: 31030000, name: 'Banished Knight\'s Shield', category: 'Medium Shield', dlc: false },
  { id: 31040000, name: 'Albinauric Shield', category: 'Medium Shield', dlc: false },
  { id: 31050000, name: 'Sun Realm Shield', category: 'Medium Shield', dlc: false },
  { id: 31060000, name: 'Silver Mirrorshield', category: 'Medium Shield', dlc: false },
  { id: 31070000, name: 'Round Shield', category: 'Medium Shield', dlc: false },
  { id: 31080000, name: 'Scorpion Kite Shield', category: 'Medium Shield', dlc: false },
  { id: 31090000, name: 'Twinbird Kite Shield', category: 'Medium Shield', dlc: false },
  { id: 31100000, name: 'Blue-Gold Kite Shield', category: 'Medium Shield', dlc: false },
  { id: 31130000, name: 'Brass Shield', category: 'Medium Shield', dlc: false },
  { id: 31140000, name: 'Great Turtle Shell', category: 'Medium Shield', dlc: false },
  { id: 31170000, name: 'Shield of the Guilty', category: 'Medium Shield', dlc: false },
  { id: 31190000, name: 'Carian Knight\'s Shield', category: 'Medium Shield', dlc: false },
  { id: 31230000, name: 'Large Leather Shield', category: 'Medium Shield', dlc: false },
  { id: 31240000, name: 'Horse Crest Wooden Shield', category: 'Medium Shield', dlc: false },
  { id: 31250000, name: 'Candletree Wooden Shield', category: 'Medium Shield', dlc: false },
  { id: 31260000, name: 'Flame Crest Wooden Shield', category: 'Medium Shield', dlc: false },
  { id: 31270000, name: 'Hawk Crest Wooden Shield', category: 'Medium Shield', dlc: false },
  { id: 31280000, name: 'Beast Crest Heater Shield', category: 'Medium Shield', dlc: false },
  { id: 31290000, name: 'Red Crest Heater Shield', category: 'Medium Shield', dlc: false },
  { id: 31300000, name: 'Blue Crest Heater Shield', category: 'Medium Shield', dlc: false },
  { id: 31310000, name: 'Eclipse Crest Heater Shield', category: 'Medium Shield', dlc: false },
  { id: 31320000, name: 'Inverted Hawk Heater Shield', category: 'Medium Shield', dlc: false },
  { id: 31330000, name: 'Heater Shield', category: 'Medium Shield', dlc: false },
  { id: 31340000, name: 'Black Leather Shield', category: 'Medium Shield', dlc: false },
  // DLC Medium Shields
  { id: 31350000, name: 'Golden Lion Shield', category: 'Medium Shield', dlc: true },
  { id: 31360000, name: 'Serpent Crest Shield', category: 'Medium Shield', dlc: true },
  { id: 31370000, name: 'Wolf Crest Shield', category: 'Medium Shield', dlc: true },
  { id: 31380000, name: 'Messmer Soldier Shield', category: 'Medium Shield', dlc: true },

  // =========================================================================
  // GREATSHIELDS (25 base + 2 DLC = 27)
  // =========================================================================
  { id: 32000000, name: 'Dragon Towershield', category: 'Greatshield', dlc: false },
  { id: 32020000, name: 'Distinguished Greatshield', category: 'Greatshield', dlc: false },
  { id: 32030000, name: 'Crucible Hornshield', category: 'Greatshield', dlc: false },
  { id: 32040000, name: 'Dragonclaw Shield', category: 'Greatshield', dlc: false },
  { id: 32050000, name: 'Briar Greatshield', category: 'Greatshield', dlc: false },
  { id: 32080000, name: 'Erdtree Greatshield', category: 'Greatshield', dlc: false },
  { id: 32090000, name: 'Golden Beast Crest Shield', category: 'Greatshield', dlc: false },
  { id: 32120000, name: 'Jellyfish Shield', category: 'Greatshield', dlc: false },
  { id: 32130000, name: 'Fingerprint Stone Shield', category: 'Greatshield', dlc: false },
  { id: 32140000, name: 'Icon Shield', category: 'Greatshield', dlc: false },
  { id: 32150000, name: 'One-Eyed Shield', category: 'Greatshield', dlc: false },
  { id: 32160000, name: 'Visage Shield', category: 'Greatshield', dlc: false },
  { id: 32170000, name: 'Spiked Palisade Shield', category: 'Greatshield', dlc: false },
  { id: 32190000, name: 'Manor Towershield', category: 'Greatshield', dlc: false },
  { id: 32200000, name: 'Crossed-Tree Towershield', category: 'Greatshield', dlc: false },
  { id: 32210000, name: 'Inverted Hawk Towershield', category: 'Greatshield', dlc: false },
  { id: 32220000, name: 'Ant\'s Skull Plate', category: 'Greatshield', dlc: false },
  { id: 32230000, name: 'Redmane Greatshield', category: 'Greatshield', dlc: false },
  { id: 32240000, name: 'Eclipse Crest Greatshield', category: 'Greatshield', dlc: false },
  { id: 32250000, name: 'Cuckoo Greatshield', category: 'Greatshield', dlc: false },
  { id: 32260000, name: 'Golden Greatshield', category: 'Greatshield', dlc: false },
  { id: 32270000, name: 'Gilded Greatshield', category: 'Greatshield', dlc: false },
  { id: 32280000, name: 'Haligtree Crest Greatshield', category: 'Greatshield', dlc: false },
  { id: 32290000, name: 'Wooden Greatshield', category: 'Greatshield', dlc: false },
  { id: 32300000, name: 'Lordsworn\'s Shield', category: 'Greatshield', dlc: false },
  // DLC Greatshields
  { id: 32310000, name: 'Verdigris Greatshield', category: 'Greatshield', dlc: true },
  { id: 32320000, name: 'Black Steel Greatshield', category: 'Greatshield', dlc: true },

  // =========================================================================
  // STAVES (18 base + 2 DLC = 20)
  // =========================================================================
  { id: 33000000, name: 'Glintstone Staff', category: 'Staff', dlc: false },
  { id: 33040000, name: 'Crystal Staff', category: 'Staff', dlc: false },
  { id: 33050000, name: 'Gelmir Glintstone Staff', category: 'Staff', dlc: false },
  { id: 33060000, name: 'Demi-Human Queen\'s Staff', category: 'Staff', dlc: false },
  { id: 33090000, name: 'Carian Regal Scepter', category: 'Staff', dlc: false },
  { id: 33120000, name: 'Digger\'s Staff', category: 'Staff', dlc: false },
  { id: 33130000, name: 'Astrologer\'s Staff', category: 'Staff', dlc: false },
  { id: 33170000, name: 'Carian Glintblade Staff', category: 'Staff', dlc: false },
  { id: 33180000, name: 'Prince of Death\'s Staff', category: 'Staff', dlc: false },
  { id: 33190000, name: 'Albinauric Staff', category: 'Staff', dlc: false },
  { id: 33200000, name: 'Academy Glintstone Staff', category: 'Staff', dlc: false },
  { id: 33210000, name: 'Carian Glintstone Staff', category: 'Staff', dlc: false },
  { id: 33230000, name: 'Azur\'s Glintstone Staff', category: 'Staff', dlc: false },
  { id: 33240000, name: 'Lusat\'s Glintstone Staff', category: 'Staff', dlc: false },
  { id: 33250000, name: 'Meteorite Staff', category: 'Staff', dlc: false },
  { id: 33260000, name: 'Staff of the Guilty', category: 'Staff', dlc: false },
  { id: 33270000, name: 'Rotten Crystal Staff', category: 'Staff', dlc: false },
  { id: 33280000, name: 'Staff of Loss', category: 'Staff', dlc: false },
  // DLC Staves
  { id: 33290000, name: 'Maternal Staff', category: 'Staff', dlc: true },
  { id: 33300000, name: 'Staff of the Great Beyond', category: 'Staff', dlc: true },

  // =========================================================================
  // SACRED SEALS (9 base + 3 DLC = 12)
  // =========================================================================
  { id: 34000000, name: 'Finger Seal', category: 'Sacred Seal', dlc: false },
  { id: 34010000, name: 'Godslayer\'s Seal', category: 'Sacred Seal', dlc: false },
  { id: 34020000, name: 'Giant\'s Seal', category: 'Sacred Seal', dlc: false },
  { id: 34030000, name: 'Gravel Stone Seal', category: 'Sacred Seal', dlc: false },
  { id: 34040000, name: 'Clawmark Seal', category: 'Sacred Seal', dlc: false },
  { id: 34060000, name: 'Golden Order Seal', category: 'Sacred Seal', dlc: false },
  { id: 34070000, name: 'Erdtree Seal', category: 'Sacred Seal', dlc: false },
  { id: 34080000, name: 'Dragon Communion Seal', category: 'Sacred Seal', dlc: false },
  { id: 34090000, name: 'Frenzied Flame Seal', category: 'Sacred Seal', dlc: false },
  // DLC Sacred Seals
  { id: 34100000, name: 'Dryleaf Seal', category: 'Sacred Seal', dlc: true },
  { id: 34110000, name: 'Fire Knight\'s Seal', category: 'Sacred Seal', dlc: true },
  { id: 34120000, name: 'Spiraltree Seal', category: 'Sacred Seal', dlc: true },

  // =========================================================================
  // LIGHT GREATSWORDS (DLC only — 3)
  // =========================================================================
  { id: 35000000, name: 'Milady', category: 'Light Greatsword', dlc: true },
  { id: 35010000, name: 'Leda\'s Sword', category: 'Light Greatsword', dlc: true },
  { id: 35020000, name: 'Rellana\'s Twin Blades', category: 'Light Greatsword', dlc: true },

  // =========================================================================
  // GREAT KATANAS (DLC only — 3)
  // =========================================================================
  { id: 36000000, name: 'Great Katana', category: 'Great Katana', dlc: true },
  { id: 36010000, name: 'Dragon-Hunter\'s Great Katana', category: 'Great Katana', dlc: true },
  { id: 36020000, name: 'Rakshasa\'s Great Katana', category: 'Great Katana', dlc: true },

  // =========================================================================
  // BEAST CLAWS (DLC only — 2)
  // =========================================================================
  { id: 37000000, name: 'Beast Claw', category: 'Beast Claw', dlc: true },
  { id: 37010000, name: 'Red Bear\'s Claw', category: 'Beast Claw', dlc: true },

  // =========================================================================
  // LIGHT BOWS (5 base + 1 DLC = 6)
  // =========================================================================
  { id: 40000000, name: 'Shortbow', category: 'Light Bow', dlc: false },
  { id: 40010000, name: 'Misbegotten Shortbow', category: 'Light Bow', dlc: false },
  { id: 40020000, name: 'Red Branch Shortbow', category: 'Light Bow', dlc: false },
  { id: 40030000, name: 'Harp Bow', category: 'Light Bow', dlc: false },
  { id: 40050000, name: 'Composite Bow', category: 'Light Bow', dlc: false },
  // DLC Light Bows
  { id: 40060000, name: 'Bone Bow', category: 'Light Bow', dlc: true },

  // =========================================================================
  // BOWS (7 base + 1 DLC = 8)
  // =========================================================================
  { id: 41000000, name: 'Longbow', category: 'Bow', dlc: false },
  { id: 41010000, name: 'Albinauric Bow', category: 'Bow', dlc: false },
  { id: 41020000, name: 'Horn Bow', category: 'Bow', dlc: false },
  { id: 41030000, name: 'Erdtree Bow', category: 'Bow', dlc: false },
  { id: 41040000, name: 'Serpent Bow', category: 'Bow', dlc: false },
  { id: 41060000, name: 'Pulley Bow', category: 'Bow', dlc: false },
  { id: 41070000, name: 'Black Bow', category: 'Bow', dlc: false },
  // DLC Bows
  { id: 41080000, name: 'Ansbach\'s Longbow', category: 'Bow', dlc: true },

  // =========================================================================
  // GREATBOWS (4 base + 1 DLC = 5)
  // =========================================================================
  { id: 42000000, name: 'Lion Greatbow', category: 'Greatbow', dlc: false },
  { id: 42010000, name: 'Golem Greatbow', category: 'Greatbow', dlc: false },
  { id: 42030000, name: 'Erdtree Greatbow', category: 'Greatbow', dlc: false },
  { id: 42040000, name: 'Greatbow', category: 'Greatbow', dlc: false },
  // DLC Greatbows
  { id: 42050000, name: 'Igon\'s Greatbow', category: 'Greatbow', dlc: true },

  // =========================================================================
  // CROSSBOWS (7 base + 2 DLC = 9)
  // =========================================================================
  { id: 43000000, name: 'Soldier\'s Crossbow', category: 'Crossbow', dlc: false },
  { id: 43020000, name: 'Light Crossbow', category: 'Crossbow', dlc: false },
  { id: 43030000, name: 'Heavy Crossbow', category: 'Crossbow', dlc: false },
  { id: 43050000, name: 'Pulley Crossbow', category: 'Crossbow', dlc: false },
  { id: 43060000, name: 'Full Moon Crossbow', category: 'Crossbow', dlc: false },
  { id: 43080000, name: 'Arbalest', category: 'Crossbow', dlc: false },
  { id: 43110000, name: 'Crepus\'s Black-Key Crossbow', category: 'Crossbow', dlc: false },
  // DLC Crossbows
  { id: 43120000, name: 'Repeating Crossbow', category: 'Crossbow', dlc: true },
  { id: 43130000, name: 'Spread Crossbow', category: 'Crossbow', dlc: true },

  // =========================================================================
  // BALLISTAS (2 base + 1 DLC = 3)
  // =========================================================================
  { id: 44000000, name: 'Hand Ballista', category: 'Ballista', dlc: false },
  { id: 44010000, name: 'Jar Cannon', category: 'Ballista', dlc: false },
  // DLC Ballistas
  { id: 44020000, name: 'Rabbath\'s Cannon', category: 'Ballista', dlc: true },
]
