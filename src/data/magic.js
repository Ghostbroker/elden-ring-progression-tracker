// Complete Elden Ring magic data — base game + Shadow of the Erdtree DLC
// IDs are EquipParamGoods row IDs (decimal param IDs from the goods param table)
// Sources: veeenu/eldenring-practice-tool item_ids.yml, Fextralife wiki
//
// Sorceries occupy the 4000–5110 param range (with Night Maiden's Mist at 6500).
// Incantations occupy the 5040 + 6000–7903 param range (excluding 6500).
// DLC spells use the 2004xxx–2007xxx range, mirroring base-game sub-ranges.
//
// Category classification verified against Fextralife wiki sorcery/incantation pages.
// Name spelling follows in-game text (post-patch), e.g. "Terra Magica" not "Terra Magicus".

export const MAGIC_CATEGORIES = ['Sorcery', 'Incantation']

export const MAGIC = [
  // =========================================================================
  // SORCERIES — Glintstone Sorceries (4000–4090)
  // =========================================================================
  { id: 4000, name: 'Glintstone Pebble', category: 'Sorcery', dlc: false },
  { id: 4001, name: 'Great Glintstone Shard', category: 'Sorcery', dlc: false },
  { id: 4010, name: 'Swift Glintstone Shard', category: 'Sorcery', dlc: false },
  { id: 4020, name: 'Glintstone Cometshard', category: 'Sorcery', dlc: false },
  { id: 4021, name: 'Comet', category: 'Sorcery', dlc: false },
  { id: 4030, name: 'Shard Spiral', category: 'Sorcery', dlc: false },
  { id: 4040, name: 'Glintstone Stars', category: 'Sorcery', dlc: false },
  { id: 4050, name: 'Star Shower', category: 'Sorcery', dlc: false },
  { id: 4060, name: 'Crystal Barrage', category: 'Sorcery', dlc: false },
  { id: 4070, name: 'Glintstone Arc', category: 'Sorcery', dlc: false },
  { id: 4080, name: 'Cannon of Haima', category: 'Sorcery', dlc: false },
  { id: 4090, name: 'Crystal Burst', category: 'Sorcery', dlc: false },

  // =========================================================================
  // SORCERIES — Stonedigger / Haima / Utility (4100–4140)
  // =========================================================================
  { id: 4100, name: 'Shatter Earth', category: 'Sorcery', dlc: false },
  { id: 4110, name: 'Rock Blaster', category: 'Sorcery', dlc: false },
  { id: 4120, name: 'Gavel of Haima', category: 'Sorcery', dlc: false },
  { id: 4130, name: 'Terra Magica', category: 'Sorcery', dlc: false },
  { id: 4140, name: 'Starlight', category: 'Sorcery', dlc: false },

  // =========================================================================
  // SORCERIES — Primeval / Full Moon / Legendary (4200–4220)
  // =========================================================================
  { id: 4200, name: 'Comet Azur', category: 'Sorcery', dlc: false },
  { id: 4210, name: 'Founding Rain of Stars', category: 'Sorcery', dlc: false },
  { id: 4220, name: 'Stars of Ruin', category: 'Sorcery', dlc: false },

  // =========================================================================
  // SORCERIES — Carian / Phalanx / Moon (4300–4520)
  // =========================================================================
  { id: 4300, name: 'Glintblade Phalanx', category: 'Sorcery', dlc: false },
  { id: 4301, name: 'Carian Phalanx', category: 'Sorcery', dlc: false },
  { id: 4302, name: 'Greatblade Phalanx', category: 'Sorcery', dlc: false },
  { id: 4360, name: 'Rennala\'s Full Moon', category: 'Sorcery', dlc: false },
  { id: 4361, name: 'Ranni\'s Dark Moon', category: 'Sorcery', dlc: false },
  { id: 4370, name: 'Magic Downpour', category: 'Sorcery', dlc: false },
  { id: 4380, name: 'Loretta\'s Greatbow', category: 'Sorcery', dlc: false },
  { id: 4381, name: 'Loretta\'s Mastery', category: 'Sorcery', dlc: false },
  { id: 4390, name: 'Magic Glintblade', category: 'Sorcery', dlc: false },
  { id: 4400, name: 'Glintstone Icecrag', category: 'Sorcery', dlc: false },
  { id: 4410, name: 'Zamor Ice Storm', category: 'Sorcery', dlc: false },
  { id: 4420, name: 'Freezing Mist', category: 'Sorcery', dlc: false },
  { id: 4430, name: 'Carian Greatsword', category: 'Sorcery', dlc: false },
  { id: 4431, name: 'Adula\'s Moonblade', category: 'Sorcery', dlc: false },
  { id: 4440, name: 'Carian Slicer', category: 'Sorcery', dlc: false },
  { id: 4450, name: 'Carian Piercer', category: 'Sorcery', dlc: false },
  { id: 4460, name: 'Scholar\'s Armament', category: 'Sorcery', dlc: false },
  { id: 4470, name: 'Scholar\'s Shield', category: 'Sorcery', dlc: false },
  { id: 4480, name: 'Lucidity', category: 'Sorcery', dlc: false },
  { id: 4490, name: 'Frozen Armament', category: 'Sorcery', dlc: false },
  { id: 4500, name: 'Shattering Crystal', category: 'Sorcery', dlc: false },
  { id: 4510, name: 'Crystal Release', category: 'Sorcery', dlc: false },
  { id: 4520, name: 'Crystal Torrent', category: 'Sorcery', dlc: false },

  // =========================================================================
  // SORCERIES — Night Sorceries / Invisibility (4600–4670)
  // =========================================================================
  { id: 4600, name: 'Ambush Shard', category: 'Sorcery', dlc: false },
  { id: 4610, name: 'Night Shard', category: 'Sorcery', dlc: false },
  { id: 4620, name: 'Night Comet', category: 'Sorcery', dlc: false },
  { id: 4630, name: 'Thops\'s Barrier', category: 'Sorcery', dlc: false },
  { id: 4640, name: 'Carian Retaliation', category: 'Sorcery', dlc: false },
  { id: 4650, name: 'Eternal Darkness', category: 'Sorcery', dlc: false },
  { id: 4660, name: 'Unseen Blade', category: 'Sorcery', dlc: false },
  { id: 4670, name: 'Unseen Form', category: 'Sorcery', dlc: false },

  // =========================================================================
  // SORCERIES — Gravity Sorceries (4700–4721)
  // =========================================================================
  { id: 4700, name: 'Meteorite', category: 'Sorcery', dlc: false },
  { id: 4701, name: 'Meteorite of Astel', category: 'Sorcery', dlc: false },
  { id: 4710, name: 'Rock Sling', category: 'Sorcery', dlc: false },
  { id: 4720, name: 'Gravity Well', category: 'Sorcery', dlc: false },
  { id: 4721, name: 'Collapsing Stars', category: 'Sorcery', dlc: false },

  // =========================================================================
  // SORCERIES — Magma Sorceries (4800–4830)
  // =========================================================================
  { id: 4800, name: 'Magma Shot', category: 'Sorcery', dlc: false },
  { id: 4810, name: 'Gelmir\'s Fury', category: 'Sorcery', dlc: false },
  { id: 4820, name: 'Roiling Magma', category: 'Sorcery', dlc: false },
  { id: 4830, name: 'Rykard\'s Rancor', category: 'Sorcery', dlc: false },

  // =========================================================================
  // SORCERIES — Aberrant Sorceries (4900–4910)
  // =========================================================================
  { id: 4900, name: 'Briars of Sin', category: 'Sorcery', dlc: false },
  { id: 4910, name: 'Briars of Punishment', category: 'Sorcery', dlc: false },

  // =========================================================================
  // SORCERIES — Death Sorceries / Bubble (5000–5110)
  // =========================================================================
  { id: 5000, name: 'Rancorcall', category: 'Sorcery', dlc: false },
  { id: 5001, name: 'Ancient Death Rancor', category: 'Sorcery', dlc: false },
  { id: 5010, name: 'Explosive Ghostflame', category: 'Sorcery', dlc: false },
  { id: 5020, name: 'Fia\'s Mist', category: 'Sorcery', dlc: false },
  { id: 5030, name: 'Tibia\'s Summons', category: 'Sorcery', dlc: false },
  { id: 5100, name: 'Oracle Bubbles', category: 'Sorcery', dlc: false },
  { id: 5110, name: 'Great Oracular Bubble', category: 'Sorcery', dlc: false },

  // =========================================================================
  // SORCERY — Night Maiden's Mist (in incantation param range but classified as sorcery)
  // =========================================================================
  { id: 6500, name: 'Night Maiden\'s Mist', category: 'Sorcery', dlc: false },

  // =========================================================================
  // INCANTATION — Death Lightning (in sorcery param range but classified as incantation)
  // =========================================================================
  { id: 5040, name: 'Death Lightning', category: 'Incantation', dlc: false },

  // =========================================================================
  // INCANTATIONS — Fire Monk / Giant's Flame (6000–6120)
  // =========================================================================
  { id: 6000, name: 'Catch Flame', category: 'Incantation', dlc: false },
  { id: 6001, name: 'O, Flame!', category: 'Incantation', dlc: false },
  { id: 6010, name: 'Flame Sling', category: 'Incantation', dlc: false },
  { id: 6020, name: 'Flame, Fall Upon Them', category: 'Incantation', dlc: false },
  { id: 6030, name: 'Whirl, O Flame!', category: 'Incantation', dlc: false },
  { id: 6040, name: 'Flame, Cleanse Me', category: 'Incantation', dlc: false },
  { id: 6050, name: 'Flame, Grant Me Strength', category: 'Incantation', dlc: false },
  { id: 6060, name: 'Flame, Protect Me', category: 'Incantation', dlc: false },
  { id: 6100, name: 'Giantsflame Take Thee', category: 'Incantation', dlc: false },
  { id: 6110, name: 'Flame of the Fell God', category: 'Incantation', dlc: false },
  { id: 6120, name: 'Burn, O Flame!', category: 'Incantation', dlc: false },

  // =========================================================================
  // INCANTATIONS — Black Flame / Godskin (6210–6270)
  // =========================================================================
  { id: 6210, name: 'Black Flame', category: 'Incantation', dlc: false },
  { id: 6220, name: 'Surge, O Flame!', category: 'Incantation', dlc: false },
  { id: 6230, name: 'Scouring Black Flame', category: 'Incantation', dlc: false },
  { id: 6240, name: 'Black Flame Ritual', category: 'Incantation', dlc: false },
  { id: 6250, name: 'Black Flame Blade', category: 'Incantation', dlc: false },
  { id: 6260, name: 'Black Flame\'s Protection', category: 'Incantation', dlc: false },
  { id: 6270, name: 'Noble Presence', category: 'Incantation', dlc: false },

  // =========================================================================
  // INCANTATIONS — Blood / Protection (6300–6340)
  // =========================================================================
  { id: 6300, name: 'Bloodflame Talons', category: 'Incantation', dlc: false },
  { id: 6310, name: 'Bloodboon', category: 'Incantation', dlc: false },
  { id: 6320, name: 'Bloodflame Blade', category: 'Incantation', dlc: false },
  { id: 6330, name: 'Barrier of Gold', category: 'Incantation', dlc: false },
  { id: 6340, name: 'Protection of the Erdtree', category: 'Incantation', dlc: false },

  // =========================================================================
  // INCANTATIONS — Erdtree / Two Fingers / Healing (6400–6600)
  // =========================================================================
  { id: 6400, name: 'Rejection', category: 'Incantation', dlc: false },
  { id: 6410, name: 'Wrath of Gold', category: 'Incantation', dlc: false },
  { id: 6420, name: 'Urgent Heal', category: 'Incantation', dlc: false },
  { id: 6421, name: 'Heal', category: 'Incantation', dlc: false },
  { id: 6422, name: 'Great Heal', category: 'Incantation', dlc: false },
  { id: 6423, name: 'Lord\'s Heal', category: 'Incantation', dlc: false },
  { id: 6424, name: 'Erdtree Heal', category: 'Incantation', dlc: false },
  { id: 6430, name: 'Blessing\'s Boon', category: 'Incantation', dlc: false },
  { id: 6431, name: 'Blessing of the Erdtree', category: 'Incantation', dlc: false },
  { id: 6440, name: 'Cure Poison', category: 'Incantation', dlc: false },
  { id: 6441, name: 'Lord\'s Aid', category: 'Incantation', dlc: false },
  { id: 6450, name: 'Flame Fortification', category: 'Incantation', dlc: false },
  { id: 6460, name: 'Magic Fortification', category: 'Incantation', dlc: false },
  { id: 6470, name: 'Lightning Fortification', category: 'Incantation', dlc: false },
  { id: 6480, name: 'Divine Fortification', category: 'Incantation', dlc: false },
  { id: 6490, name: 'Lord\'s Divine Fortification', category: 'Incantation', dlc: false },
  // Note: 6500 = Night Maiden's Mist — listed above under Sorceries
  { id: 6510, name: 'Assassin\'s Approach', category: 'Incantation', dlc: false },
  { id: 6520, name: 'Shadow Bait', category: 'Incantation', dlc: false },
  { id: 6530, name: 'Darkness', category: 'Incantation', dlc: false },
  { id: 6600, name: 'Golden Vow', category: 'Incantation', dlc: false },

  // =========================================================================
  // INCANTATIONS — Golden Order (6700–6780)
  // =========================================================================
  { id: 6700, name: 'Discus of Light', category: 'Incantation', dlc: false },
  { id: 6701, name: 'Triple Rings of Light', category: 'Incantation', dlc: false },
  { id: 6710, name: 'Radagon\'s Rings of Light', category: 'Incantation', dlc: false },
  { id: 6720, name: 'Elden Stars', category: 'Incantation', dlc: false },
  { id: 6730, name: 'Law of Regression', category: 'Incantation', dlc: false },
  { id: 6740, name: 'Immutable Shield', category: 'Incantation', dlc: false },
  { id: 6750, name: 'Litany of Proper Death', category: 'Incantation', dlc: false },
  { id: 6760, name: 'Law of Causality', category: 'Incantation', dlc: false },
  { id: 6770, name: 'Order\'s Blade', category: 'Incantation', dlc: false },
  { id: 6780, name: 'Order Healing', category: 'Incantation', dlc: false },

  // =========================================================================
  // INCANTATIONS — Bestial (6800–6850)
  // =========================================================================
  { id: 6800, name: 'Bestial Sling', category: 'Incantation', dlc: false },
  { id: 6810, name: 'Stone of Gurranq', category: 'Incantation', dlc: false },
  { id: 6820, name: 'Beast Claw', category: 'Incantation', dlc: false },
  { id: 6830, name: 'Gurranq\'s Beast Claw', category: 'Incantation', dlc: false },
  { id: 6840, name: 'Bestial Vitality', category: 'Incantation', dlc: false },
  { id: 6850, name: 'Bestial Constitution', category: 'Incantation', dlc: false },

  // =========================================================================
  // INCANTATIONS — Dragon Cult / Lightning (6900–6971)
  // =========================================================================
  { id: 6900, name: 'Lightning Spear', category: 'Incantation', dlc: false },
  { id: 6910, name: 'Ancient Dragons\' Lightning Strike', category: 'Incantation', dlc: false },
  { id: 6920, name: 'Lightning Strike', category: 'Incantation', dlc: false },
  { id: 6921, name: 'Frozen Lightning Spear', category: 'Incantation', dlc: false },
  { id: 6930, name: 'Honed Bolt', category: 'Incantation', dlc: false },
  { id: 6940, name: 'Ancient Dragons\' Lightning Spear', category: 'Incantation', dlc: false },
  { id: 6941, name: 'Fortissax\'s Lightning Spear', category: 'Incantation', dlc: false },
  { id: 6950, name: 'Lansseax\'s Glaive', category: 'Incantation', dlc: false },
  { id: 6960, name: 'Electrify Armament', category: 'Incantation', dlc: false },
  { id: 6970, name: 'Vyke\'s Dragonbolt', category: 'Incantation', dlc: false },
  { id: 6971, name: 'Dragonbolt Blessing', category: 'Incantation', dlc: false },

  // =========================================================================
  // INCANTATIONS — Dragon Communion (7000–7090)
  // =========================================================================
  { id: 7000, name: 'Dragonfire', category: 'Incantation', dlc: false },
  { id: 7001, name: 'Agheel\'s Flame', category: 'Incantation', dlc: false },
  { id: 7010, name: 'Magma Breath', category: 'Incantation', dlc: false },
  { id: 7011, name: 'Theodorix\'s Magma', category: 'Incantation', dlc: false },
  { id: 7020, name: 'Dragonice', category: 'Incantation', dlc: false },
  { id: 7021, name: 'Borealis\'s Mist', category: 'Incantation', dlc: false },
  { id: 7030, name: 'Rotten Breath', category: 'Incantation', dlc: false },
  { id: 7031, name: 'Ekzykes\'s Decay', category: 'Incantation', dlc: false },
  { id: 7040, name: 'Glintstone Breath', category: 'Incantation', dlc: false },
  { id: 7041, name: 'Smarag\'s Glintstone Breath', category: 'Incantation', dlc: false },
  { id: 7050, name: 'Placidusax\'s Ruin', category: 'Incantation', dlc: false },
  { id: 7060, name: 'Dragonclaw', category: 'Incantation', dlc: false },
  { id: 7080, name: 'Dragonmaw', category: 'Incantation', dlc: false },
  { id: 7090, name: 'Greyoll\'s Roar', category: 'Incantation', dlc: false },

  // =========================================================================
  // INCANTATIONS — Pest / Poison / Rot (7200–7240)
  // =========================================================================
  { id: 7200, name: 'Pest Threads', category: 'Incantation', dlc: false },
  { id: 7210, name: 'Swarm of Flies', category: 'Incantation', dlc: false },
  { id: 7220, name: 'Poison Mist', category: 'Incantation', dlc: false },
  { id: 7230, name: 'Poison Armament', category: 'Incantation', dlc: false },
  { id: 7240, name: 'Scarlet Aeonia', category: 'Incantation', dlc: false },

  // =========================================================================
  // INCANTATIONS — Frenzied Flame (7300–7330)
  // =========================================================================
  { id: 7300, name: 'Inescapable Frenzy', category: 'Incantation', dlc: false },
  { id: 7310, name: 'The Flame of Frenzy', category: 'Incantation', dlc: false },
  { id: 7311, name: 'Unendurable Frenzy', category: 'Incantation', dlc: false },
  { id: 7320, name: 'Frenzied Burst', category: 'Incantation', dlc: false },
  { id: 7330, name: 'Howl of Shabriri', category: 'Incantation', dlc: false },

  // =========================================================================
  // INCANTATIONS — Crucible / Black Blade / Misc (7500–7903)
  // =========================================================================
  { id: 7500, name: 'Aspects of the Crucible: Tail', category: 'Incantation', dlc: false },
  { id: 7510, name: 'Aspects of the Crucible: Horns', category: 'Incantation', dlc: false },
  { id: 7520, name: 'Aspects of the Crucible: Breath', category: 'Incantation', dlc: false },
  { id: 7530, name: 'Black Blade', category: 'Incantation', dlc: false },
  { id: 7900, name: 'Fire\'s Deadly Sin', category: 'Incantation', dlc: false },
  { id: 7903, name: 'Golden Lightning Fortification', category: 'Incantation', dlc: false },

  // =========================================================================
  // DLC SORCERIES — Shadow of the Erdtree (2004300–2007420)
  // =========================================================================
  { id: 2004300, name: 'Miriam\'s Vanishing', category: 'Sorcery', dlc: true },
  { id: 2004310, name: 'Glintblade Trio', category: 'Sorcery', dlc: true },
  { id: 2004320, name: 'Rellana\'s Twin Moons', category: 'Sorcery', dlc: true },
  { id: 2004500, name: 'Glintstone Nail', category: 'Sorcery', dlc: true },
  { id: 2004510, name: 'Glintstone Nails', category: 'Sorcery', dlc: true },
  { id: 2004700, name: 'Blades of Stone', category: 'Sorcery', dlc: true },
  { id: 2004710, name: 'Gravitational Missile', category: 'Sorcery', dlc: true },
  { id: 2004900, name: 'Mantle of Thorns', category: 'Sorcery', dlc: true },
  { id: 2004910, name: 'Impenetrable Thorns', category: 'Sorcery', dlc: true },
  { id: 2005000, name: 'Rings of Spectral Light', category: 'Sorcery', dlc: true },
  { id: 2006200, name: 'Vortex of Putrescence', category: 'Sorcery', dlc: true },
  { id: 2006210, name: 'Mass of Putrescence', category: 'Sorcery', dlc: true },
  { id: 2007410, name: 'Fleeting Microcosm', category: 'Sorcery', dlc: true },
  { id: 2007420, name: 'Cherishing Fingers', category: 'Sorcery', dlc: true },

  // =========================================================================
  // DLC INCANTATIONS — Shadow of the Erdtree (2006300–2007820)
  // =========================================================================
  { id: 2006300, name: 'Furious Blade of Ansbach', category: 'Incantation', dlc: true },
  { id: 2006400, name: 'Heal from Afar', category: 'Incantation', dlc: true },
  { id: 2006650, name: 'Aspects of the Crucible: Thorns', category: 'Incantation', dlc: true },
  { id: 2006660, name: 'Aspects of the Crucible: Bloom', category: 'Incantation', dlc: true },
  { id: 2006670, name: 'Minor Erdtree', category: 'Incantation', dlc: true },
  { id: 2006680, name: 'Land of Shadow', category: 'Incantation', dlc: true },
  { id: 2006690, name: 'Wrath from Afar', category: 'Incantation', dlc: true },
  { id: 2006700, name: 'Light of Miquella', category: 'Incantation', dlc: true },
  { id: 2006710, name: 'Multilayered Ring of Light', category: 'Incantation', dlc: true },
  { id: 2006800, name: 'Roar of Rugalea', category: 'Incantation', dlc: true },
  { id: 2006900, name: 'Knight\'s Lightning Spear', category: 'Incantation', dlc: true },
  { id: 2006910, name: 'Dragonbolt of Florissax', category: 'Incantation', dlc: true },
  { id: 2006920, name: 'Electrocharge', category: 'Incantation', dlc: true },
  { id: 2007000, name: 'Bayle\'s Tyranny', category: 'Incantation', dlc: true },
  { id: 2007010, name: 'Bayle\'s Flame Lightning', category: 'Incantation', dlc: true },
  { id: 2007020, name: 'Ghostflame Breath', category: 'Incantation', dlc: true },
  { id: 2007200, name: 'Rotten Butterflies', category: 'Incantation', dlc: true },
  { id: 2007210, name: 'Pest-Thread Spears', category: 'Incantation', dlc: true },
  { id: 2007300, name: 'Midra\'s Flame of Frenzy', category: 'Incantation', dlc: true },
  { id: 2007600, name: 'Watchful Spirit', category: 'Incantation', dlc: true },
  { id: 2007700, name: 'Golden Arcs', category: 'Incantation', dlc: true },
  { id: 2007710, name: 'Giant Golden Arc', category: 'Incantation', dlc: true },
  { id: 2007720, name: 'Spira', category: 'Incantation', dlc: true },
  { id: 2007730, name: 'Divine Beast Tornado', category: 'Incantation', dlc: true },
  { id: 2007740, name: 'Divine Bird Feathers', category: 'Incantation', dlc: true },
  { id: 2007800, name: 'Fire Serpent', category: 'Incantation', dlc: true },
  { id: 2007810, name: 'Rain of Fire', category: 'Incantation', dlc: true },
  { id: 2007820, name: 'Messmer\'s Orb', category: 'Incantation', dlc: true },
]
