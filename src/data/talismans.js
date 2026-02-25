// Complete Elden Ring talismans data — base game + Shadow of the Erdtree DLC
// IDs are EquipParamAccessory row IDs (decimal param IDs as stored in the game's param tables)
// Sources: vawser/ER-Documentation Icon List, veeenu/eldenring-practice-tool codegen,
//          Fextralife wiki, Elden Ring Fandom wiki
//
// Base game IDs (1000–6110) verified against vawser Icon List – Accessories.txt
// and veeenu/eldenring-practice-tool item_ids.yml.
// DLC upgrade variants (+3, +2, +1 of existing lines) continue the existing row
// sequences (e.g. Crimson Amber Medallion +3 = 1003, Horn Charm +2 = base+2).
// Completely new DLC talismans use 7000+ range per FromSoftware's standard DLC
// param allocation pattern.

export const TALISMAN_CATEGORIES = [
  'HP',
  'FP',
  'Stamina',
  'Equip Load',
  'Defense',
  'Attack',
  'Attribute',
  'Resistance',
  'Rune',
  'Healing',
  'Skill',
  'Special',
]

export const TALISMANS = [
  // =========================================================================
  // HP — Raises maximum HP
  // =========================================================================
  { id: 1000, name: 'Crimson Amber Medallion', category: 'HP', dlc: false },
  { id: 1001, name: 'Crimson Amber Medallion +1', category: 'HP', dlc: false },
  { id: 1002, name: 'Crimson Amber Medallion +2', category: 'HP', dlc: false },
  { id: 1003, name: 'Crimson Amber Medallion +3', category: 'HP', dlc: true },

  // =========================================================================
  // FP — Raises maximum FP
  // =========================================================================
  { id: 1010, name: 'Cerulean Amber Medallion', category: 'FP', dlc: false },
  { id: 1011, name: 'Cerulean Amber Medallion +1', category: 'FP', dlc: false },
  { id: 1012, name: 'Cerulean Amber Medallion +2', category: 'FP', dlc: false },
  { id: 1013, name: 'Cerulean Amber Medallion +3', category: 'FP', dlc: true },

  // =========================================================================
  // STAMINA — Raises maximum stamina / stamina recovery
  // =========================================================================
  { id: 1020, name: 'Viridian Amber Medallion', category: 'Stamina', dlc: false },
  { id: 1021, name: 'Viridian Amber Medallion +1', category: 'Stamina', dlc: false },
  { id: 1022, name: 'Viridian Amber Medallion +2', category: 'Stamina', dlc: false },
  { id: 1023, name: 'Viridian Amber Medallion +3', category: 'Stamina', dlc: true },
  { id: 1150, name: 'Green Turtle Talisman', category: 'Stamina', dlc: false },
  { id: 7000, name: 'Two-Headed Turtle Talisman', category: 'Stamina', dlc: true },

  // =========================================================================
  // EQUIP LOAD — Raises equip load / multi-stat
  // =========================================================================
  { id: 1030, name: 'Arsenal Charm', category: 'Equip Load', dlc: false },
  { id: 1031, name: 'Arsenal Charm +1', category: 'Equip Load', dlc: false },
  { id: 1032, name: 'Great-Jar\'s Arsenal', category: 'Equip Load', dlc: false },
  { id: 1040, name: 'Erdtree\'s Favor', category: 'Equip Load', dlc: false },
  { id: 1041, name: 'Erdtree\'s Favor +1', category: 'Equip Load', dlc: false },
  { id: 1042, name: 'Erdtree\'s Favor +2', category: 'Equip Load', dlc: false },

  // =========================================================================
  // ATTRIBUTE — Raises stats / attributes
  // =========================================================================
  { id: 1050, name: 'Radagon\'s Scarseal', category: 'Attribute', dlc: false },
  { id: 1051, name: 'Radagon\'s Soreseal', category: 'Attribute', dlc: false },
  { id: 1060, name: 'Starscourge Heirloom', category: 'Attribute', dlc: false },
  { id: 1070, name: 'Prosthesis-Wearer Heirloom', category: 'Attribute', dlc: false },
  { id: 1080, name: 'Stargazer Heirloom', category: 'Attribute', dlc: false },
  { id: 1090, name: 'Two Fingers Heirloom', category: 'Attribute', dlc: false },
  { id: 1220, name: 'Marika\'s Scarseal', category: 'Attribute', dlc: false },
  { id: 1221, name: 'Marika\'s Soreseal', category: 'Attribute', dlc: false },
  { id: 1250, name: 'Millicent\'s Prosthesis', category: 'Attribute', dlc: false },
  { id: 7010, name: 'Outer God Heirloom', category: 'Attribute', dlc: true },

  // =========================================================================
  // RUNE — Rune acquisition
  // =========================================================================
  { id: 1100, name: 'Silver Scarab', category: 'Rune', dlc: false },
  { id: 1110, name: 'Gold Scarab', category: 'Rune', dlc: false },

  // =========================================================================
  // RESISTANCE — Status effect resistance
  // =========================================================================
  { id: 1160, name: 'Stalwart Horn Charm', category: 'Resistance', dlc: false },
  { id: 1161, name: 'Stalwart Horn Charm +1', category: 'Resistance', dlc: false },
  { id: 1162, name: 'Stalwart Horn Charm +2', category: 'Resistance', dlc: true },
  { id: 1170, name: 'Immunizing Horn Charm', category: 'Resistance', dlc: false },
  { id: 1171, name: 'Immunizing Horn Charm +1', category: 'Resistance', dlc: false },
  { id: 1172, name: 'Immunizing Horn Charm +2', category: 'Resistance', dlc: true },
  { id: 1180, name: 'Clarifying Horn Charm', category: 'Resistance', dlc: false },
  { id: 1181, name: 'Clarifying Horn Charm +1', category: 'Resistance', dlc: false },
  { id: 1182, name: 'Clarifying Horn Charm +2', category: 'Resistance', dlc: true },
  { id: 1190, name: 'Prince of Death\'s Pustule', category: 'Resistance', dlc: false },
  { id: 1191, name: 'Prince of Death\'s Cyst', category: 'Resistance', dlc: false },
  { id: 1200, name: 'Mottled Necklace', category: 'Resistance', dlc: false },
  { id: 1201, name: 'Mottled Necklace +1', category: 'Resistance', dlc: false },
  { id: 1202, name: 'Mottled Necklace +2', category: 'Resistance', dlc: true },
  { id: 7020, name: 'Ailment Talisman', category: 'Resistance', dlc: true },

  // =========================================================================
  // DEFENSE — Physical and elemental damage negation, poise
  // =========================================================================
  { id: 1210, name: 'Bull-Goat\'s Talisman', category: 'Defense', dlc: false },
  { id: 4000, name: 'Dragoncrest Shield Talisman', category: 'Defense', dlc: false },
  { id: 4001, name: 'Dragoncrest Shield Talisman +1', category: 'Defense', dlc: false },
  { id: 4002, name: 'Dragoncrest Shield Talisman +2', category: 'Defense', dlc: false },
  { id: 4003, name: 'Dragoncrest Greatshield Talisman', category: 'Defense', dlc: false },
  { id: 4010, name: 'Spelldrake Talisman', category: 'Defense', dlc: false },
  { id: 4011, name: 'Spelldrake Talisman +1', category: 'Defense', dlc: false },
  { id: 4012, name: 'Spelldrake Talisman +2', category: 'Defense', dlc: false },
  { id: 4013, name: 'Spelldrake Talisman +3', category: 'Defense', dlc: true },
  { id: 4020, name: 'Flamedrake Talisman', category: 'Defense', dlc: false },
  { id: 4021, name: 'Flamedrake Talisman +1', category: 'Defense', dlc: false },
  { id: 4022, name: 'Flamedrake Talisman +2', category: 'Defense', dlc: false },
  { id: 4023, name: 'Flamedrake Talisman +3', category: 'Defense', dlc: true },
  { id: 4030, name: 'Boltdrake Talisman', category: 'Defense', dlc: false },
  { id: 4031, name: 'Boltdrake Talisman +1', category: 'Defense', dlc: false },
  { id: 4032, name: 'Boltdrake Talisman +2', category: 'Defense', dlc: false },
  { id: 4033, name: 'Boltdrake Talisman +3', category: 'Defense', dlc: true },
  { id: 4040, name: 'Haligdrake Talisman', category: 'Defense', dlc: false },
  { id: 4041, name: 'Haligdrake Talisman +1', category: 'Defense', dlc: false },
  { id: 4042, name: 'Haligdrake Talisman +2', category: 'Defense', dlc: false },
  { id: 4050, name: 'Pearldrake Talisman', category: 'Defense', dlc: false },
  { id: 4051, name: 'Pearldrake Talisman +1', category: 'Defense', dlc: false },
  { id: 4052, name: 'Pearldrake Talisman +2', category: 'Defense', dlc: false },
  { id: 4053, name: 'Pearldrake Talisman +3', category: 'Defense', dlc: true },
  { id: 4060, name: 'Crucible Scale Talisman', category: 'Defense', dlc: false },
  { id: 4070, name: 'Crucible Feather Talisman', category: 'Defense', dlc: false },
  { id: 4080, name: 'Blue-Feathered Branchsword', category: 'Defense', dlc: false },
  { id: 4090, name: 'Ritual Shield Talisman', category: 'Defense', dlc: false },
  { id: 4100, name: 'Greatshield Talisman', category: 'Defense', dlc: false },
  { id: 4110, name: 'Crucible Knot Talisman', category: 'Defense', dlc: false },
  { id: 7030, name: 'Verdigris Discus', category: 'Defense', dlc: true },
  { id: 7040, name: 'Fine Crucible Feather Talisman', category: 'Defense', dlc: true },
  { id: 7050, name: 'Talisman of All Crucibles', category: 'Defense', dlc: true },
  { id: 7060, name: 'Pearl Shield Talisman', category: 'Defense', dlc: true },
  { id: 7070, name: 'Golden Braid', category: 'Defense', dlc: true },

  // =========================================================================
  // ATTACK — Damage boost, weapon-specific bonuses, combat enhancements
  // =========================================================================
  { id: 2000, name: 'Magic Scorpion Charm', category: 'Attack', dlc: false },
  { id: 2010, name: 'Lightning Scorpion Charm', category: 'Attack', dlc: false },
  { id: 2020, name: 'Fire Scorpion Charm', category: 'Attack', dlc: false },
  { id: 2030, name: 'Sacred Scorpion Charm', category: 'Attack', dlc: false },
  { id: 2040, name: 'Red-Feathered Branchsword', category: 'Attack', dlc: false },
  { id: 2050, name: 'Ritual Sword Talisman', category: 'Attack', dlc: false },
  { id: 2060, name: 'Spear Talisman', category: 'Attack', dlc: false },
  { id: 2070, name: 'Hammer Talisman', category: 'Attack', dlc: false },
  { id: 2080, name: 'Winged Sword Insignia', category: 'Attack', dlc: false },
  { id: 2081, name: 'Rotten Winged Sword Insignia', category: 'Attack', dlc: false },
  { id: 2090, name: 'Dagger Talisman', category: 'Attack', dlc: false },
  { id: 2100, name: 'Arrow\'s Reach Talisman', category: 'Attack', dlc: false },
  { id: 2110, name: 'Blue Dancer Charm', category: 'Attack', dlc: false },
  { id: 2120, name: 'Twinblade Talisman', category: 'Attack', dlc: false },
  { id: 2130, name: 'Axe Talisman', category: 'Attack', dlc: false },
  { id: 2140, name: 'Lance Talisman', category: 'Attack', dlc: false },
  { id: 2150, name: 'Arrow\'s Sting Talisman', category: 'Attack', dlc: false },
  { id: 2160, name: 'Lord of Blood\'s Exultation', category: 'Attack', dlc: false },
  { id: 2170, name: 'Kindred of Rot\'s Exultation', category: 'Attack', dlc: false },
  { id: 2180, name: 'Claw Talisman', category: 'Attack', dlc: false },
  { id: 2190, name: 'Roar Medallion', category: 'Attack', dlc: false },
  { id: 2200, name: 'Curved Sword Talisman', category: 'Attack', dlc: false },
  { id: 7080, name: 'Two-Handed Sword Talisman', category: 'Attack', dlc: true },
  { id: 7090, name: 'Arrow\'s Soaring Sting Talisman', category: 'Attack', dlc: true },
  { id: 7100, name: 'Sharpshot Talisman', category: 'Attack', dlc: true },
  { id: 7110, name: 'Shattered Stone Talisman', category: 'Attack', dlc: true },
  { id: 7120, name: 'Smithing Talisman', category: 'Attack', dlc: true },
  { id: 7130, name: 'Aged One\'s Exultation', category: 'Attack', dlc: true },
  { id: 7140, name: 'Blade of Mercy', category: 'Attack', dlc: true },
  { id: 7150, name: 'Crusade Insignia', category: 'Attack', dlc: true },
  { id: 7160, name: 'Retaliatory Crossed-Tree', category: 'Attack', dlc: true },
  { id: 7170, name: 'Lacerating Crossed-Tree', category: 'Attack', dlc: true },
  { id: 7180, name: 'Enraged Divine Beast', category: 'Attack', dlc: true },
  { id: 7190, name: 'Talisman of the Dread', category: 'Attack', dlc: true },

  // =========================================================================
  // SKILL — Sorcery, incantation, and skill-related enhancements
  // =========================================================================
  { id: 1140, name: 'Moon of Nokstella', category: 'Skill', dlc: false },
  { id: 2210, name: 'Companion Jar', category: 'Skill', dlc: false },
  { id: 2220, name: 'Perfumer\'s Talisman', category: 'Skill', dlc: false },
  { id: 3000, name: 'Graven-School Talisman', category: 'Skill', dlc: false },
  { id: 3001, name: 'Graven-Mass Talisman', category: 'Skill', dlc: false },
  { id: 3040, name: 'Faithful\'s Canvas Talisman', category: 'Skill', dlc: false },
  { id: 3050, name: 'Flock\'s Canvas Talisman', category: 'Skill', dlc: false },
  { id: 3060, name: 'Old Lord\'s Talisman', category: 'Skill', dlc: false },
  { id: 3070, name: 'Radagon Icon', category: 'Skill', dlc: false },
  { id: 3080, name: 'Primal Glintstone Blade', category: 'Skill', dlc: false },
  { id: 3090, name: 'Godfrey Icon', category: 'Skill', dlc: false },
  { id: 1230, name: 'Warrior Jar Shard', category: 'Skill', dlc: false },
  { id: 1231, name: 'Shard of Alexander', category: 'Skill', dlc: false },
  { id: 6020, name: 'Carian Filigreed Crest', category: 'Skill', dlc: false },
  { id: 7200, name: 'Beloved Stardust', category: 'Skill', dlc: true },
  { id: 7210, name: 'Rellana\'s Cameo', category: 'Skill', dlc: true },
  { id: 7220, name: 'St. Trina\'s Smile', category: 'Skill', dlc: true },

  // =========================================================================
  // HEALING — HP/FP recovery, flask enhancement, healing on hit
  // =========================================================================
  { id: 5000, name: 'Crimson Seed Talisman', category: 'Healing', dlc: false },
  { id: 5001, name: 'Crimson Seed Talisman +1', category: 'Healing', dlc: true },
  { id: 5010, name: 'Cerulean Seed Talisman', category: 'Healing', dlc: false },
  { id: 5011, name: 'Cerulean Seed Talisman +1', category: 'Healing', dlc: true },
  { id: 5020, name: 'Blessed Dew Talisman', category: 'Healing', dlc: false },
  { id: 5030, name: 'Taker\'s Cameo', category: 'Healing', dlc: false },
  { id: 5040, name: 'Godskin Swaddling Cloth', category: 'Healing', dlc: false },
  { id: 5050, name: 'Assassin\'s Crimson Dagger', category: 'Healing', dlc: false },
  { id: 5060, name: 'Assassin\'s Cerulean Dagger', category: 'Healing', dlc: false },
  { id: 6110, name: 'Ancestral Spirit\'s Horn', category: 'Healing', dlc: false },
  { id: 7230, name: 'Blessed Blue Dew Talisman', category: 'Healing', dlc: true },
  { id: 7240, name: 'Talisman of Lord\'s Bestowal', category: 'Healing', dlc: true },
  { id: 7250, name: 'Dried Bouquet', category: 'Healing', dlc: true },

  // =========================================================================
  // SPECIAL — Stealth, fall damage, aggro, multiplayer, miscellaneous
  // =========================================================================
  { id: 6000, name: 'Crepus\'s Vial', category: 'Special', dlc: false },
  { id: 6010, name: 'Concealing Veil', category: 'Special', dlc: false },
  { id: 6040, name: 'Longtail Cat Talisman', category: 'Special', dlc: false },
  { id: 6050, name: 'Shabriri\'s Woe', category: 'Special', dlc: false },
  { id: 6060, name: 'Daedicar\'s Woe', category: 'Special', dlc: false },
  { id: 6070, name: 'Sacrificial Twig', category: 'Special', dlc: false },
  { id: 6080, name: 'Furled Finger\'s Trick-Mirror', category: 'Special', dlc: false },
  { id: 6090, name: 'Host\'s Trick-Mirror', category: 'Special', dlc: false },
  { id: 6100, name: 'Entwining Umbilical Cord', category: 'Special', dlc: false },
]
