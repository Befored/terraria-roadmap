const MOD_DATA = {
  classes: {
    melee: {
      id: 'melee',
      name: 'Melee',
      color: '#e74c3c',
      icon: '⚔️',
      description: 'High defense, close-range burst damage and projectiles.',
      stages: [
        {
          id: 'pre-boss', name: 'Pre-Boss', category: 'Pre-Hardmode',
          bosses: [ { name: 'King Slime', mod: 'V', link: 'https://terraria.fandom.com/wiki/King_Slime' }, { name: 'Desert Scourge', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Desert_Scourge' } ],
          weapons: [
            { name: 'Wulfrum Blade', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Wulfrum_Blade', source: 'Crafted.' },
            { name: 'Slime King\'s Slasher', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Slime_King%27s_Slasher', source: 'King Slime drop.' },
            { name: 'Amazon', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Amazon', source: 'Jungle.' },
            { name: 'Starfury', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Starfury', source: 'Sky Islands.' },
            { name: 'Mace', mod: 'V', recommended: false, link: 'https://terraria.fandom.com/wiki/Mace', source: 'Chests.' }
          ],
          armor: [
            { name: 'Wulfrum armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Wulfrum_armor', source: 'Crafted.' },
            { name: 'Platinum armor', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Platinum_armor', source: 'Crafted.' }
          ],
          accessories: [
            { name: 'Gladiator Enchantment', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Gladiator_Enchantment', source: 'Crafted.' },
            { name: 'Luxor\'s Gift', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Luxor%27s_Gift', source: 'Desert Shrine.' },
            { name: 'Hermes Boots', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Hermes_Boots', source: 'Chests.' },
            { name: 'String', mod: 'V', recommended: false, link: 'https://terraria.fandom.com/wiki/String', source: 'Crafted.' }
          ],
          notes: 'Focus on mobility accessories.'
        },
        {
          id: 'pre-eoc', name: 'Pre-Eye of Cthulhu', category: 'Pre-Hardmode',
          bosses: [ { name: 'Eye of Cthulhu', mod: 'V', link: 'https://terraria.fandom.com/wiki/Eye_of_Cthulhu' }, { name: 'Trojan Squirrel', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Trojan_Squirrel' } ],
          weapons: [
            { name: 'Bladecrest Oathsword', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Bladecrest_Oathsword', source: 'Crafted.' },
            { name: 'Tree Sword', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Tree_Sword', source: 'Crafted.' },
            { name: 'Enchanted Sword', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Enchanted_Sword', source: 'Shrine.' },
            { name: 'Ice Blade', mod: 'V', recommended: false, link: 'https://terraria.fandom.com/wiki/Ice_Blade', source: 'Ice Chest.' }
          ],
          armor: [
            { name: 'Victide armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Victide_armor', source: 'Crafted.' },
            { name: 'Gold armor', mod: 'V', recommended: false, link: 'https://terraria.fandom.com/wiki/Gold_armor', source: 'Crafted.' }
          ],
          accessories: [
            { name: 'Copper Enchantment', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Copper_Enchantment', source: 'Crafted.' },
            { name: 'Gelatinous Glove', mod: 'U', recommended: true, link: 'https://terrariamods.fandom.com/wiki/Unofficial_Calamity_Whips/Gelatinous_Glove', source: 'Crafted.' },
          { name: 'Feral Claws', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Feral_Claws', source: 'Jungle.' },
            { name: 'Cloud in a Bottle', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Cloud_in_a_Bottle', source: 'Chests.' }
          ]
        },
        {
          id: 'pre-evil', name: 'Pre-Evil Boss', category: 'Pre-Hardmode',
          bosses: [ { name: 'Eater of Worlds', mod: 'V', link: 'https://terraria.fandom.com/wiki/Eater_of_Worlds' }, { name: 'Crabulon', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Crabulon' } ],
          weapons: [
            { name: 'The Meatball', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/The_Meatball', source: 'Crafted.' },
            { name: 'Mycelial Claws', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Mycelial_Claws', source: 'Crabulon.' },
            { name: 'Light\'s Bane', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Light%27s_Bane', source: 'Crafted.' },
            { name: 'Blood Butcherer', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Blood_Butcherer', source: 'Crafted.' }
          ],
          armor: [
            { name: 'Crimson armor', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Crimson_armor', source: 'Crafted.' },
            { name: 'Shadow armor', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Shadow_armor', source: 'Crafted.' }
          ],
          accessories: [
            { name: 'Iron Enchantment', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Iron_Enchantment', source: 'Crafted.' },
            { name: 'Fungal Symbiote', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Fungal_Symbiote', source: 'Crabulon.' },
            { name: 'Shield of Cthulhu', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Shield_of_Cthulhu', source: 'EoC.' }
          ]
        },
        {
          id: 'pre-wof', name: 'Pre-Wall of Flesh', category: 'Pre-Hardmode',
          bosses: [ { name: 'Skeletron', mod: 'V', link: 'https://terraria.fandom.com/wiki/Skeletron' }, { name: 'Wall of Flesh', mod: 'V', link: 'https://terraria.fandom.com/wiki/Wall_of_Flesh' }, { name: 'Deviantt', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Deviantt_(boss)' }, { name: 'Cursed Coffin', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Cursed_Coffin' } ],
          weapons: [
            { name: 'Night\'s Edge', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Night%27s_Edge', source: 'Crafted.' },
            { name: 'Volcano', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Volcano', source: 'Crafted.' },
            { name: 'Flamarang', mod: 'V', recommended: false, link: 'https://terraria.fandom.com/wiki/Flamarang', source: 'Crafted.' },
            { name: 'Dark Lance', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Dark_Lance', source: 'Shadow Chests.' },
            { name: 'Biome Blade', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Biome_Blade', source: 'Crafted.' }
          ],
          armor: [
            { name: 'Statigel armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Statigel_armor', source: 'Crafted.' },
            { name: 'Molten armor', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Molten_armor', source: 'Crafted.' }
          ],
          accessories: [
            { name: 'Molten Enchantment', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Molten_Enchantment', source: 'Crafted.' },
            { name: 'Obsidian Shield', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Obsidian_Shield', source: 'Crafted.' },
            { name: 'Terraspark Boots', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Terraspark_Boots', source: 'Crafted.' },
            { name: 'Counterweight', mod: 'V', recommended: false, link: 'https://terraria.fandom.com/wiki/Counterweight', source: 'Trader.' }
          ]
        },
        {
          id: 'early-hm', name: 'Early Hardmode', category: 'Hardmode',
          bosses: [ { name: 'Cryogen', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Cryogen' } ],
          weapons: [

            { name: 'Brimlash', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Brimlash', source: 'Crafted.' },
            { name: 'Shadowflame Knife', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Shadowflame_Knife', source: 'Goblin Invasion.' },
            { name: 'Amarok', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Amarok', source: 'Snow Biome.' },
            { name: 'Frostbrand', mod: 'V', recommended: false, link: 'https://terraria.fandom.com/wiki/Frostbrand', source: 'Ice Mimic.' }
          ],
          armor: [
            { name: 'Titanium armor', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Titanium_armor', source: 'Crafted.' },
            { name: 'Palladium armor', mod: 'V', recommended: false, link: 'https://terraria.fandom.com/wiki/Palladium_armor', source: 'Crafted.' }
          ],
          accessories: [
            { name: 'Mythril Enchantment', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Mythril_Enchantment', source: 'Crafted.' },
            { name: 'Warrior Emblem', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Warrior_Emblem', source: 'WoF.' },
            { name: 'Yoyo Bag', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Yoyo_Bag', source: 'Crafted.' },
            { name: 'Power Glove', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Power_Glove', source: 'Crafted.' }
          ]
        },
        {
          id: 'pre-mech', name: 'Pre-Mechanical Bosses', category: 'Hardmode',
          bosses: [ { name: 'The Twins', mod: 'V', link: 'https://terraria.fandom.com/wiki/The_Twins' }, { name: 'Banished Baron', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Banished_Baron' } ],
          weapons: [

            { name: 'Flying Knife', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Flying_Knife', source: 'Hallowed Mimic.' },
            { name: 'Bananarang', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Bananarang', source: 'Blood Moon.' },
            { name: 'Bladetongue', mod: 'V', recommended: false, link: 'https://terraria.fandom.com/wiki/Bladetongue', source: 'Fishing.' },
            { name: 'Storm Saber', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Storm_Saber', source: 'Crafted.' }
          ],
          armor: [
            { name: 'Hallowed armor', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Hallowed_armor', source: 'Crafted.' },
            { name: 'Daedalus armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Daedalus_armor', source: 'Crafted.' }
          ],
          accessories: [
            { name: 'Force of Timber', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Force_of_Timber', source: 'Crafted.' },
            { name: 'Mechanical Glove', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Mechanical_Glove', source: 'Crafted.' },
            { name: 'Berserker\'s Glove', mod: 'V', recommended: false, link: 'https://terraria.fandom.com/wiki/Berserker%27s_Glove', source: 'Crafted.' }
          ]
        },
        {
          id: 'pre-plantera', name: 'Pre-Plantera', category: 'Hardmode',
          bosses: [ { name: 'Plantera', mod: 'V', link: 'https://terraria.fandom.com/wiki/Plantera' }, { name: 'Lifelight', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Lifelight' } ],
          weapons: [
            { name: 'True Night\'s Edge', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/True_Night%27s_Edge', source: 'Crafted.' },
            { name: 'Death Sickle', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Death_Sickle', source: 'Solar Eclipse.' },
            { name: 'Yelets', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Yelets', source: 'Jungle.' },
            { name: 'Fetid Baghnakhs', mod: 'V', recommended: false, link: 'https://terraria.fandom.com/wiki/Fetid_Baghnakhs', source: 'Crimson Mimic.' },
            { name: 'True Excalibur', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/True_Excalibur', source: 'Crafted.' }
          ],
          armor: [
            { name: 'Chlorophyte armor', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Chlorophyte_armor', source: 'Crafted.' },
            { name: 'Turtle armor', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Turtle_armor', source: 'Crafted.' }
          ],
          accessories: [
            { name: 'Chlorophyte Enchantment', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Chlorophyte_Enchantment', source: 'Crafted.' },
            { name: 'Fire Gauntlet', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Fire_Gauntlet', source: 'Crafted.' },
            { name: 'Bloody Worm Scarf', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Bloody_Worm_Scarf', source: 'Crafted.' }
          ]
        },
        {
          id: 'pre-ml', name: 'Pre-Moon Lord', category: 'Hardmode',
          bosses: [ { name: 'Moon Lord', mod: 'V', link: 'https://terraria.fandom.com/wiki/Moon_Lord' } ],
          weapons: [
            { name: 'Daybreak', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Daybreak', source: 'Crafted.' },
            { name: 'Solar Eruption', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Solar_Eruption', source: 'Crafted.' },
            { name: 'Terra Blade', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Terra_Blade', source: 'Crafted.' },
            { name: 'Influx Waver', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Influx_Waver', source: 'Martian Madness.' },
            { name: 'The Eye of Cthulhu', mod: 'V', recommended: false, link: 'https://terraria.fandom.com/wiki/The_Eye_of_Cthulhu', source: 'Mothron.' }
          ],
          armor: [
            { name: 'Beetle armor', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Beetle_armor', source: 'Crafted.' },
            { name: 'Hydrothermic armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Hydrothermic_armor', source: 'Crafted.' }
          ],
          accessories: [
            { name: 'Force of Will', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Force_of_Will', source: 'Crafted.' },
            { name: 'Celestial Shell', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Celestial_Shell', source: 'Crafted.' },
            { name: 'Destroyer Emblem', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Destroyer_Emblem', source: 'Crafted.' }
          ]
        },
        {
          id: 'post-ml-1', name: 'Post-ML I — Pre-Providence', category: 'Post-Moon Lord',
          bosses: [ { name: 'Profaned Guardians', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Profaned_Guardians' } ],
          weapons: [
            { name: 'Ark of the Elements', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Ark_of_the_Elements', source: 'Crafted.' },
            { name: 'Elemental Lance', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Elemental_Lance', source: 'Crafted.' },
            { name: 'Mourningstar', mod: 'C', recommended: false, link: 'https://calamitymod.wiki.gg/wiki/Mourningstar', source: 'Pumpking.' }
          ],
          armor: [
            { name: 'Tarragon armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Tarragon_armor', source: 'Crafted.' },
            { name: 'Solar Flare armor', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Solar_Flare_armor', source: 'Crafted.' }
          ],
          accessories: [
            { name: 'Berserker\'s Soul', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Berserker%27s_Soul', source: 'Crafted.' },
            { name: 'Elemental Gauntlet', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Elemental_Gauntlet', source: 'Crafted.' }
          ]
        },
        {
          id: 'post-ml-2', name: 'Post-ML II — Pre-Polterghast', category: 'Post-Moon Lord',
          bosses: [
            { name: 'Dragonfolly', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/The_Dragonfolly' },
            { name: 'Providence, the Profaned Goddess', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Providence,_the_Profaned_Goddess' },
            { name: 'Storm Weaver', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Storm_Weaver' },
            { name: 'Ceaseless Void', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Ceaseless_Void' },
            { name: 'Signus, Envoy of the Devourer', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Signus,_Envoy_of_the_Devourer' }
          ],
          weapons: [
            { name: 'Holy Collider', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Holy_Collider', source: 'Providence.' },
            { name: 'Banshee Hook', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Banshee_Hook', source: 'Polterghast.' },
            { name: 'Gilded Proboscis', mod: 'C', recommended: false, link: 'https://calamitymod.wiki.gg/wiki/Gilded_Proboscis', source: 'Dragonfolly.' }
          ],
          armor: [
            { name: 'Bloodflare armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Bloodflare_armor', source: 'Crafted.' }
          ],
          accessories: [
            { name: 'Elysian Aegis', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Elysian_Aegis', source: 'Providence.' },
            { name: 'Asgardian Aegis', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Asgardian_Aegis', source: 'Crafted.' }
          ]
        },
        {
          id: 'post-ml-3', name: 'Post-ML III — Pre-Devourer of Gods', category: 'Post-Moon Lord',
          bosses: [
            { name: 'Polterghast', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Polterghast' },
            { name: 'The Old Duke', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/The_Old_Duke' }
          ],
          weapons: [
            { name: 'Terror Blade', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Terror_Blade', source: 'Polterghast.' },
            { name: 'The Enforcer', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/The_Enforcer', source: 'Crafted.' }
          ],
          armor: [
            { name: 'Omega Blue armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Omega_Blue_armor', source: 'Crafted.' }
          ],
          accessories: [
            { name: 'Force of Earth', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Force_of_Earth', source: 'Crafted.' },
            { name: 'Reaper Tooth Necklace', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Reaper_Tooth_Necklace', source: 'Crafted.' }
          ]
        },
        {
          id: 'post-ml-4', name: 'Post-ML IV — Pre-Yharon', category: 'Post-Moon Lord',
          bosses: [ { name: 'The Devourer of Gods', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/The_Devourer_of_Gods' } ],
          weapons: [
            { name: 'Excelsus', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Excelsus', source: 'DoG.' },
            { name: 'Crescent Moon', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Crescent_Moon', source: 'Crafted.' },
            { name: 'Nadir', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Nadir', source: 'Crafted.' }
          ],
          armor: [
            { name: 'God Slayer armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/God_Slayer_armor', source: 'Crafted.' }
          ],
          accessories: [
            { name: 'Force of Cosmos', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Force_of_Cosmos', source: 'Crafted.' },
            { name: 'Elysian Tracers', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Elysian_Tracers', source: 'Crafted.' }
          ]
        },
        {
          id: 'post-ml-5', name: 'Post-ML V — Pre-Exo Mechs', category: 'Post-Moon Lord',
          bosses: [ { name: 'Yharon, Dragon of Rebirth', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Yharon,_Dragon_of_Rebirth' } ],
          weapons: [
            { name: 'Galactus Blade', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Galactus_Blade', source: 'Crafted.' },
            { name: 'Illustrious Knives', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Illustrious_Knives', source: 'Crafted.' },
            { name: 'Murasama', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Murasama', source: 'Underworld.' }
          ],
          armor: [
            { name: 'Silva armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Silva_armor', source: 'Crafted.' }
          ],
          accessories: [
            { name: 'Force of Nature', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Force_of_Nature', source: 'Crafted.' },
            { name: 'Yharim\'s Gift', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Yharim%27s_Gift', source: 'Crafted.' }
          ]
        },
        {
          id: 'post-ml-6', name: 'Post-ML VI — Pre-Supreme Calamitas', category: 'Post-Moon Lord',
          bosses: [ { name: 'Exo Mechs', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Exo_Mechs' } ],
          weapons: [
            { name: 'Exoblade', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Exoblade', source: 'Crafted.' },
            { name: 'Ataraxia', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Ataraxia', source: 'Crafted.' },
            { name: 'Dragon Pow', mod: 'C', recommended: false, link: 'https://calamitymod.wiki.gg/wiki/Dragon_Pow', source: 'Crafted.' }
          ],
          armor: [
            { name: 'Auric Tesla armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Auric_Tesla_armor', source: 'Crafted.' }
          ],
          accessories: [
            { name: 'Soul of Terraria', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Soul_of_Terraria', source: 'Crafted.' },
            { name: 'Sponge', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/The_Sponge', source: 'Crafted.' }
          ]
        },
        {
          id: 'endgame', name: 'Endgame — Supreme Calamitas', category: 'Endgame',
          bosses: [
            { name: 'Supreme Calamitas', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Supreme_Calamitas' },
            { name: 'Eridanus, Champion of Cosmos', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Eridanus,_Champion_of_Cosmos' },
            { name: 'Abominationn', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Abominationn_(boss)' },
            { name: 'Mutant', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Mutant_(boss)' },
            { name: 'Champions', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Champions' }
          ],
          weapons: [
            { name: 'Earth', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Earth', source: 'Crafted.' },
            { name: 'Gemini Glaives', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Gemini_Glaives', source: 'Crafted.' },
            { name: 'Zenith', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Zenith', source: 'Crafted.' }
          ],
          armor: [
            { name: 'Demonshade armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Demonshade_armor', source: 'Crafted.' }
          ],
          accessories: [
            { name: 'Soul of Eternity', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Soul_of_Eternity', source: 'Crafted.' },
            { name: 'Chalice of the Blood God', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Chalice_of_the_Blood_God', source: 'Crafted.' }
          ]
        }
      ]
    }
  }
};

MOD_DATA.classes.summoner = {
  id: 'summoner',
  name: 'Summoner',
  color: '#9b59b6',
  icon: '🔮',
  description: 'Relies on autonomous minions and sentries.',
  stages: [
    {
      id: 'pre-boss', name: 'Pre-Boss', category: 'Pre-Hardmode',
      bosses: [ { name: 'King Slime', mod: 'V', link: 'https://terraria.fandom.com/wiki/King_Slime' }, { name: 'Desert Scourge', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Desert_Scourge' } ],
      weapons: [
        { name: 'Wulfrum Chain', mod: 'U', recommended: true, link: 'https://terrariamods.fandom.com/wiki/Unofficial_Calamity_Whips/Wulfrum_Chain', source: 'Crafted.' },
        { name: 'Flinx Staff', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Flinx_Staff', source: 'Crafted.' },
        { name: 'Kamikaze Squirrel Staff', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Kamikaze_Squirrel_Staff', source: 'Crafted.' },
        { name: 'Snapthorn', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Snapthorn', source: 'Crafted.' },
        { name: 'Slime Staff', mod: 'V', recommended: false, link: 'https://terraria.fandom.com/wiki/Slime_Staff', source: 'Slimes.' }
      ],
      armor: [
        { name: 'Flinx Fur Coat', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Flinx_Fur_Coat', source: 'Crafted.' },
        { name: 'Wulfrum armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Wulfrum_armor', source: 'Crafted.' }
      ],
      accessories: [
        { name: 'Hermes Boots', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Hermes_Boots', source: 'Chests.' },
        { name: 'Flinx Fur Mitten', mod: 'U', recommended: true, link: 'https://terrariamods.fandom.com/wiki/Unofficial_Calamity_Whips/Flinx_Fur_Mitten', source: 'Crafted.' },
          { name: 'Spirit Glyph', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Spirit_Glyph', source: 'Crafted.' }
      ]
    },
    {
      id: 'pre-eoc', name: 'Pre-Eye of Cthulhu', category: 'Pre-Hardmode',
      bosses: [ { name: 'Eye of Cthulhu', mod: 'V', link: 'https://terraria.fandom.com/wiki/Eye_of_Cthulhu' }, { name: 'Trojan Squirrel', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Trojan_Squirrel' } ],
      weapons: [
        { name: 'Vampire Frog Staff', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Vampire_Frog_Staff', source: 'Blood Moon.' },
        { name: 'Frost Blossom Staff', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Frost_Blossom_Staff', source: 'Crafted.' }
      ],
      armor: [
        { name: 'Flinx Fur Coat', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Flinx_Fur_Coat', source: 'Crafted.' }
      ],
      accessories: [
        { name: 'Gelatinous Glove', mod: 'U', recommended: true, link: 'https://terrariamods.fandom.com/wiki/Unofficial_Calamity_Whips/Gelatinous_Glove', source: 'Crafted.' },
          { name: 'Feral Claws', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Feral_Claws', source: 'Jungle.' },
        { name: 'Lead Enchantment', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Lead_Enchantment', source: 'Crafted.' }
      ]
    },
    {
      id: 'pre-evil', name: 'Pre-Evil Boss', category: 'Pre-Hardmode',
      bosses: [ { name: 'Eater of Worlds', mod: 'V', link: 'https://terraria.fandom.com/wiki/Eater_of_Worlds' }, { name: 'Crabulon', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Crabulon' } ],
      weapons: [
        { name: 'Fungal Flail', mod: 'U', recommended: true, link: 'https://terrariamods.fandom.com/wiki/Unofficial_Calamity_Whips/Fungal_Flail', source: 'Crabulon drop.' },
        { name: 'Deathstare Rod', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Deathstare_Rod', source: 'EoC drop.' },
        { name: 'Cinder Blossom Staff', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Cinder_Blossom_Staff', source: 'Crafted.' }
      ],
      armor: [
        { name: 'Victide armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Victide_armor', source: 'Crafted.' }
      ],
      accessories: [
        { name: 'Ring Of Alacrity', mod: 'U', recommended: true, link: 'https://terrariamods.fandom.com/wiki/Unofficial_Calamity_Whips/Ring_Of_Alacrity', source: 'Crafted.' },
        { name: 'Voltaic Jelly', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Voltaic_Jelly', source: 'Ghost Bell drop.' },
        { name: 'Iron Enchantment', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Iron_Enchantment', source: 'Crafted.' }
      ]
    },
    {
      id: 'pre-wof', name: 'Pre-Wall of Flesh', category: 'Pre-Hardmode',
      bosses: [ { name: 'Skeletron', mod: 'V', link: 'https://terraria.fandom.com/wiki/Skeletron' }, { name: 'Wall of Flesh', mod: 'V', link: 'https://terraria.fandom.com/wiki/Wall_of_Flesh' }, { name: 'Deviantt', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Deviantt_(boss)' }, { name: 'Cursed Coffin', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Cursed_Coffin' } ],
      weapons: [
        { name: 'Static Scourge', mod: 'U', recommended: true, link: 'https://terrariamods.fandom.com/wiki/Unofficial_Calamity_Whips/Static_Scourge', source: 'Slime God drop.' },
        { name: 'Spinal Tap', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Spinal_Tap', source: 'Crafted.' },
        { name: 'Hive Staff', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Hive_Staff', source: 'Queen Bee.' },
        { name: 'Imp Staff', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Imp_Staff', source: 'Crafted.' },
        { name: 'Herring Staff', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Herring_Staff', source: 'Abyss.' }
      ],
      armor: [
        { name: 'Obsidian armor', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Obsidian_armor', source: 'Crafted.' },
        { name: 'Bee armor', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Bee_armor', source: 'Crafted.' }
      ],
      accessories: [
        { name: 'Pygmy Necklace', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Pygmy_Necklace', source: 'Bought.' },
        { name: 'Bee Enchantment', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Bee_Enchantment', source: 'Crafted.' },
        { name: 'Jelly-Charged Battery', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Jelly-Charged_Battery', source: 'Crafted.' }
      ]
    },
    {
      id: 'early-hm', name: 'Early Hardmode', category: 'Hardmode',
      bosses: [ { name: 'Cryogen', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Cryogen' } ],
      weapons: [
        { name: 'Prism Break', mod: 'U', recommended: true, link: 'https://terrariamods.fandom.com/wiki/Unofficial_Calamity_Whips/Prism_Break', source: 'Cryogen drop.' },
        { name: 'Spider Staff', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Spider_Staff', source: 'Crafted.' },
        { name: 'Firecracker', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Firecracker', source: 'WoF.' },
        { name: 'Cool Whip', mod: 'V', recommended: false, link: 'https://terraria.fandom.com/wiki/Cool_Whip', source: 'Crafted.' },
        { name: 'Ancient Ice Chunk', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Ancient_Ice_Chunk', source: 'Ice Clasper.' }
      ],
      armor: [
        { name: 'Spider armor', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Spider_armor', source: 'Crafted.' }
      ],
      accessories: [
        { name: 'Summoner Emblem', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Summoner_Emblem', source: 'WoF.' },
        { name: 'Spider Enchantment', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Spider_Enchantment', source: 'Crafted.' },
        { name: 'Nuclear Rod', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Nuclear_Rod', source: 'Crafted.' },
        { name: 'Slimy Sling', mod: 'U', recommended: true, link: 'https://terrariamods.fandom.com/wiki/Unofficial_Calamity_Whips/Slimy_Sling', source: 'Crafted.' }
      ]
    },
    {
      id: 'pre-mech', name: 'Pre-Mechanical Bosses', category: 'Hardmode',
      bosses: [ { name: 'The Twins', mod: 'V', link: 'https://terraria.fandom.com/wiki/The_Twins' }, { name: 'Banished Baron', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Banished_Baron' } ],
      weapons: [
        { name: 'Sanguine Staff', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Sanguine_Staff', source: 'Dreadnautilus.' },
        { name: 'Prime Staff', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Prime_Staff', source: 'Crafted.' },
        { name: 'Blade Staff', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Blade_Staff', source: 'Queen Slime.' },
        { name: 'Caustic Staff', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Caustic_Staff', source: 'Crafted.' }
      ],
      armor: [
        { name: 'Obsidian armor', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Obsidian_armor', source: 'Crafted.' }
      ],
      accessories: [
        { name: 'Hallowed Enchantment', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Hallowed_Enchantment', source: 'Crafted.' },
        { name: 'First Shadowflame', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/First_Shadowflame', source: 'Goblin Summoner.' },
        { name: 'Crystal Of Resilience', mod: 'U', recommended: true, link: 'https://terrariamods.fandom.com/wiki/Unofficial_Calamity_Whips/Crystal_Of_Resilience', source: 'Crafted.' }
      ]
    },
    {
      id: 'pre-plantera', name: 'Pre-Plantera', category: 'Hardmode',
      bosses: [ { name: 'Plantera', mod: 'V', link: 'https://terraria.fandom.com/wiki/Plantera' }, { name: 'Lifelight', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Lifelight' } ],
      weapons: [
        { name: 'Optic Staff', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Optic_Staff', source: 'Crafted.' },
        { name: 'Durendal', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Durendal', source: 'Crafted.' },
        { name: 'Gastric Belcher Staff', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Gastric_Belcher_Staff', source: 'Aquatic Scourge.' },
        { name: 'Deadly Sphere Staff', mod: 'V', recommended: false, link: 'https://terraria.fandom.com/wiki/Deadly_Sphere_Staff', source: 'Solar Eclipse.' }
      ],
      armor: [
        { name: 'Hallowed armor', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Hallowed_armor', source: 'Crafted.' }
      ],
      accessories: [
        { name: 'Force of Timber', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Force_of_Timber', source: 'Crafted.' },
        { name: 'Hercules Beetle', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Hercules_Beetle', source: 'Bought.' },
        { name: 'Papyrus Scarab', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Papyrus_Scarab', source: 'Crafted.' }
      ]
    },
    {
      id: 'pre-ml', name: 'Pre-Moon Lord', category: 'Hardmode',
      bosses: [ { name: 'Moon Lord', mod: 'V', link: 'https://terraria.fandom.com/wiki/Moon_Lord' } ],
      weapons: [
        { name: 'Star Scraper', mod: 'U', recommended: true, link: 'https://terrariamods.fandom.com/wiki/Unofficial_Calamity_Whips/Star_Scraper', source: 'Astrum Deus.' },
        { name: 'Stardust Dragon Staff', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Stardust_Dragon_Staff', source: 'Crafted.' },
        { name: 'Stardust Cell Staff', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Stardust_Cell_Staff', source: 'Crafted.' },
        { name: 'Kaleidoscope', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Kaleidoscope', source: 'Empress of Light.' },
        { name: 'Morning Star', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Morning_Star', source: 'Dungeon.' }
      ],
      armor: [
        { name: 'Spooky armor', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Spooky_armor', source: 'Crafted.' },
        { name: 'Plaguebringer armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Plaguebringer_armor', source: 'Crafted.' }
      ],
      accessories: [
        { name: 'Statis\' Blessing', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Statis%27_Blessing', source: 'Crafted.' },
        { name: 'Force of Nature', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Force_of_Nature', source: 'Crafted.' },
        { name: 'Star-Tainted Generator', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Star-Tainted_Generator', source: 'Crafted.' }
      ]
    },
    {
      id: 'post-ml-1', name: 'Post-ML I — Pre-Providence', category: 'Post-Moon Lord',
      bosses: [ { name: 'Profaned Guardians', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Profaned_Guardians' } ],
      weapons: [
        { name: 'Elemental Axe', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Elemental_Axe', source: 'Crafted.' },
        { name: 'Tactical Plague Engine', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Tactical_Plague_Engine', source: 'Crafted.' }
      ],
      armor: [
        { name: 'Stardust armor', mod: 'V', recommended: true, link: 'https://terraria.fandom.com/wiki/Stardust_armor', source: 'Crafted.' }
      ],
      accessories: [
        { name: 'Summoner\'s Soul', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Summoner%27s_Soul', source: 'Crafted.' },
        { name: 'Profaned Soul Artifact', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Profaned_Soul_Artifact', source: 'Crafted.' },
        { name: 'Profaned Whip-Glove', mod: 'U', recommended: true, link: 'https://terrariamods.fandom.com/wiki/Unofficial_Calamity_Whips/Profaned_Whip-Glove', source: 'Crafted.' }
      ]
    },
    {
      id: 'post-ml-2', name: 'Post-ML II — Pre-Polterghast', category: 'Post-Moon Lord',
      bosses: [
        { name: 'Dragonfolly', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/The_Dragonfolly' },
        { name: 'Providence, the Profaned Goddess', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Providence,_the_Profaned_Goddess' },
        { name: 'Storm Weaver', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Storm_Weaver' },
        { name: 'Ceaseless Void', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Ceaseless_Void' },
        { name: 'Signus, Envoy of the Devourer', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Signus,_Envoy_of_the_Devourer' }
      ],
      weapons: [
        { name: 'Righteous Dawn', mod: 'U', recommended: true, link: 'https://terrariamods.fandom.com/wiki/Unofficial_Calamity_Whips/Righteous_Dawn', source: 'Providence drop.' },
        { name: 'Sirius', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Sirius', source: 'Crafted.' },
        { name: 'Energy Staff', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Energy_Staff', source: 'Dragonfolly.' }
      ],
      armor: [
        { name: 'Tarragon armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Tarragon_armor', source: 'Crafted.' }
      ],
      accessories: [
        { name: 'Statis\' Curse', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Statis%27_Curse', source: 'Crafted.' }
      ]
    },
    {
      id: 'post-ml-3', name: 'Post-ML III — Pre-Devourer of Gods', category: 'Post-Moon Lord',
      bosses: [
        { name: 'Polterghast', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Polterghast' },
        { name: 'The Old Duke', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/The_Old_Duke' }
      ],
      weapons: [
        { name: 'Dazzling Stabber Staff', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Dazzling_Stabber_Staff', source: 'Crafted.' },
        { name: 'Righteous Dawn', mod: 'U', recommended: true, link: 'https://terrariamods.fandom.com/wiki/Unofficial_Calamity_Whips/Righteous_Dawn', source: 'Providence drop.' },
        { name: 'Sirius', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Sirius', source: 'Crafted.' }
      ],
      armor: [
        { name: 'Bloodflare armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Bloodflare_armor', source: 'Crafted.' }
      ],
      accessories: [
        { name: 'Statis\' Curse', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Statis%27_Curse', source: 'Crafted.' }
      ]
    },
    {
      id: 'post-ml-4', name: 'Post-ML IV — Pre-Yharon', category: 'Post-Moon Lord',
      bosses: [ { name: 'The Devourer of Gods', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/The_Devourer_of_Gods' } ],
      weapons: [
        { name: 'Devourer\'s Maw', mod: 'U', recommended: true, link: 'https://terrariamods.fandom.com/wiki/Unofficial_Calamity_Whips/Devourer%27s_Maw', source: 'DoG drop.' },
        { name: 'Staff of the Mechworm', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Staff_of_the_Mechworm', source: 'DoG.' },
        { name: 'Corvid Harbinger Staff', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Corvid_Harbinger_Staff', source: 'Crafted.' }
      ],
      armor: [
        { name: 'God Slayer armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/God_Slayer_armor', source: 'Crafted.' }
      ],
      accessories: [
        { name: 'Nucleogenesis', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Nucleogenesis', source: 'Crafted.' },
        { name: 'Cosmic Whip-Glove', mod: 'U', recommended: true, link: 'https://terrariamods.fandom.com/wiki/Unofficial_Calamity_Whips/Cosmic_Whip-Glove', source: 'Crafted.' }
      ]
    },
    {
      id: 'post-ml-5', name: 'Post-ML V — Pre-Exo Mechs', category: 'Post-Moon Lord',
      bosses: [ { name: 'Yharon, Dragon of Rebirth', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Yharon,_Dragon_of_Rebirth' } ],
      weapons: [
        { name: 'Yharon\'s Kindle Staff', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Yharon%27s_Kindle_Staff', source: 'Yharon.' },
        { name: 'Saros Possession', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Saros_Possession', source: 'Crafted.' }
      ],
      armor: [
        { name: 'Silva armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Silva_armor', source: 'Crafted.' }
      ],
      accessories: [
        { name: 'Force of Cosmos', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Force_of_Cosmos', source: 'Crafted.' },
        { name: 'Profaned Soul Crystal', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Profaned_Soul_Crystal', source: 'Crafted.' }
      ]
    },
    {
      id: 'post-ml-6', name: 'Post-ML VI — Pre-Supreme Calamitas', category: 'Post-Moon Lord',
      bosses: [ { name: 'Exo Mechs', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Exo_Mechs' } ],
      weapons: [
        { name: 'Cosmic Viper Engine', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Cosmic_Viper_Engine', source: 'Exo Mechs.' },
        { name: 'Endo Hydra Staff', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Endo_Hydra_Staff', source: 'Crafted.' }
      ],
      armor: [
        { name: 'Auric Tesla armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Auric_Tesla_armor', source: 'Crafted.' }
      ],
      accessories: [
        { name: 'Soul of Terraria', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Soul_of_Terraria', source: 'Crafted.' }
      ]
    },
    {
      id: 'endgame', name: 'Endgame — Supreme Calamitas', category: 'Endgame',
      bosses: [
        { name: 'Supreme Calamitas', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Supreme_Calamitas' },
        { name: 'Eridanus, Champion of Cosmos', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Eridanus,_Champion_of_Cosmos' },
        { name: 'Abominationn', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Abominationn_(boss)' },
        { name: 'Mutant', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Mutant_(boss)' },
        { name: 'Champions', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Champions' }
      ],
      weapons: [
        { name: 'Unrelenting Torment', mod: 'U', recommended: true, link: 'https://terrariamods.fandom.com/wiki/Unofficial_Calamity_Whips/Unrelenting_Torment', source: 'Crafted.' },
        { name: 'Universe Splitter', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Universe_Splitter', source: 'Crafted.' },
        { name: 'Metastasis', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Metastasis', source: 'Crafted.' },
        { name: 'Endo Hydra Staff', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Endo_Hydra_Staff', source: 'Crafted.' }
      ],
      armor: [
        { name: 'Demonshade armor', mod: 'C', recommended: true, link: 'https://calamitymod.wiki.gg/wiki/Demonshade_armor', source: 'Crafted.' }
      ],
      accessories: [
        { name: 'Soul of Eternity', mod: 'F', recommended: true, link: 'https://fargosmods.wiki.gg/wiki/Soul_of_Eternity', source: 'Crafted.' }
      ]
    }
  ]
};

MOD_DATA.bossList = [
  { name: 'King Slime', mod: 'V', link: 'https://terraria.fandom.com/wiki/King_Slime', stage: 'Pre-Hardmode' },
  { name: 'Desert Scourge', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Desert_Scourge', stage: 'Pre-Hardmode' },
  { name: 'Eye of Cthulhu', mod: 'V', link: 'https://terraria.fandom.com/wiki/Eye_of_Cthulhu', stage: 'Pre-Hardmode' },
  { name: 'Crabulon', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Crabulon', stage: 'Pre-Hardmode' },
  { name: 'Eater of Worlds', mod: 'V', link: 'https://terraria.fandom.com/wiki/Eater_of_Worlds', stage: 'Pre-Hardmode' },
  { name: 'Hive Mind', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/The_Hive_Mind', stage: 'Pre-Hardmode' },
  { name: 'Queen Bee', mod: 'V', link: 'https://terraria.fandom.com/wiki/Queen_Bee', stage: 'Pre-Hardmode' },
  { name: 'Skeletron', mod: 'V', link: 'https://terraria.fandom.com/wiki/Skeletron', stage: 'Pre-Hardmode' },
  { name: 'Slime God', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/The_Slime_God', stage: 'Pre-Hardmode' },
  { name: 'Wall of Flesh', mod: 'V', link: 'https://terraria.fandom.com/wiki/Wall_of_Flesh', stage: 'Pre-Hardmode' },
  { name: 'Trojan Squirrel', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Trojan_Squirrel', stage: 'Pre-Hardmode' },
  { name: 'Deviantt', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Deviantt_(boss)', stage: 'Pre-Hardmode' },
  { name: 'Cursed Coffin', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Cursed_Coffin', stage: 'Pre-Hardmode' },
  
  { name: 'Cryogen', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Cryogen', stage: 'Hardmode' },
  { name: 'The Twins', mod: 'V', link: 'https://terraria.fandom.com/wiki/The_Twins', stage: 'Hardmode' },
  { name: 'The Destroyer', mod: 'V', link: 'https://terraria.fandom.com/wiki/The_Destroyer', stage: 'Hardmode' },
  { name: 'Skeletron Prime', mod: 'V', link: 'https://terraria.fandom.com/wiki/Skeletron_Prime', stage: 'Hardmode' },
  { name: 'Brimstone Elemental', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Brimstone_Elemental', stage: 'Hardmode' },
  { name: 'Calamitas Clone', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Calamitas_Clone', stage: 'Hardmode' },
  { name: 'Plantera', mod: 'V', link: 'https://terraria.fandom.com/wiki/Plantera', stage: 'Hardmode' },
  { name: 'Leviathan and Anahita', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Leviathan_and_Anahita', stage: 'Hardmode' },
  { name: 'Astrum Aureus', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Astrum_Aureus', stage: 'Hardmode' },
  { name: 'Golem', mod: 'V', link: 'https://terraria.fandom.com/wiki/Golem', stage: 'Hardmode' },
  { name: 'Plaguebringer Goliath', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/The_Plaguebringer_Goliath', stage: 'Hardmode' },
  { name: 'Duke Fishron', mod: 'V', link: 'https://terraria.fandom.com/wiki/Duke_Fishron', stage: 'Hardmode' },
  { name: 'Ravager', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Ravager', stage: 'Hardmode' },
  { name: 'Lunatic Cultist', mod: 'V', link: 'https://terraria.fandom.com/wiki/Lunatic_Cultist', stage: 'Hardmode' },
  { name: 'Astrum Deus', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Astrum_Deus', stage: 'Hardmode' },
  { name: 'Moon Lord', mod: 'V', link: 'https://terraria.fandom.com/wiki/Moon_Lord', stage: 'Hardmode' },
  { name: 'Banished Baron', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Banished_Baron', stage: 'Hardmode' },
  { name: 'Lifelight', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Lifelight', stage: 'Hardmode' },
  
  { name: 'Profaned Guardians', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Profaned_Guardians', stage: 'Post-Moon Lord I' },
  { name: 'Dragonfolly', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/The_Dragonfolly', stage: 'Post-Moon Lord II' },
  { name: 'Providence, the Profaned Goddess', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Providence,_the_Profaned_Goddess', stage: 'Post-Moon Lord II' },
  { name: 'Storm Weaver', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Storm_Weaver', stage: 'Post-Moon Lord II' },
  { name: 'Ceaseless Void', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Ceaseless_Void', stage: 'Post-Moon Lord II' },
  { name: 'Signus, Envoy of the Devourer', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Signus,_Envoy_of_the_Devourer', stage: 'Post-Moon Lord II' },
  { name: 'Polterghast', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Polterghast', stage: 'Post-Moon Lord III' },
  { name: 'The Old Duke', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/The_Old_Duke', stage: 'Post-Moon Lord III' },
  { name: 'The Devourer of Gods', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/The_Devourer_of_Gods', stage: 'Post-Moon Lord IV' },
  { name: 'Yharon, Dragon of Rebirth', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Yharon,_Dragon_of_Rebirth', stage: 'Post-Moon Lord V' },
  { name: 'Exo Mechs', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Exo_Mechs', stage: 'Post-Moon Lord VI' },
  { name: 'Supreme Calamitas', mod: 'C', link: 'https://calamitymod.wiki.gg/wiki/Supreme_Calamitas', stage: 'Endgame' },
  
  { name: 'Eridanus, Champion of Cosmos', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Eridanus,_Champion_of_Cosmos', stage: 'Endgame' },
  { name: 'Abominationn', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Abominationn_(boss)', stage: 'Endgame' },
  { name: 'Mutant', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Mutant_(boss)', stage: 'Endgame' },
  { name: 'Champions', mod: 'F', link: 'https://fargosmods.wiki.gg/wiki/Champions', stage: 'Endgame' }
];




