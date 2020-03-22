const cityMainSquare = [
    {
    id: 1,
    text: "You can hear chatter and all different kinds of city noises around you. You see a tavern welcoming you with it's open doors and two drunkards nearly passed out near them. On your right you can see a weirdly looking shop and on your left a marketplace.",
    options: [
        {
            text: "TAVERN TIME!",
            nextText: 2,
        },
        {
            text: "Go check out the weird shop",
            nextText:  13,
        },
        {
            text: "Go to the marketplace",
            situation: "cityMarketplace",
            nextText:  1,
        },
    ]
},
{
    id: 2,
    text: "You step into the tavern and a pungent smell of tobacco and spilled mead hits your nose like a fist. The tavern is full of people, most of them already drunk. Barmaid is cleaning the bar with a nasty looking piece of cloth and staring at people angrily. In the corner you see a person that doesn't quite fit here.",
    options: [
        {
            text: "Approach the barmaid",
            nextText: 3,
        },
        {
            text: "Approach the guy in the corner",
            nextText: 20,
        },
    ]
},
{
    id: 3,
    text: "You step closer to the bar and sit on a stool next to it. Barmaid looks unimpressed by your presence.",
    options: [
        {
            text: "Imitate cough to get her attention",
            nextText: 4,
        },
        {
            text: "Wait",
            nextText: 4,
        },
        {
            text: "Try to talk to her",
            nextText: 5,
        },
    ]
},
{
    id: 4,
    text: "She keeps cleaning the bar, sometimes spitting on the cloth and then wiping the wood with fresh spit. Disgusting? Maybe. Effective? Sure.",
    options: [
        {
            text: "Cough more",
            nextText: 5,
        },
        {
            text: "Try to talk to her",
            nextText: 5,
        },
    ]
},
{
    id: 5,
    text: "\"What do you want?\" she spits out at you and pierces you with the ugliest look known to mankind. If this woman has a man, you know that he can't leave even if he wanted.",
    options: [
        {
            text: "Order a mead",
            inventoryChange: {silverCoin: -1},
            nextText: 6,
        },
        {
            text: "Tell me something interesting.",
            nextText: 7,
        },
    ]
},
{
    id: 6,
    text: "\"Anything else?\"",
    options: [
        {
            text: "Order a mead",
            inventoryChange: {silverCoin: -1},
            nextText: 6,
        },
        {
            text: "Tell me something interesting.",
            nextText: 7,
        },
    ]
},
{
    id: 7,
    text: "\"Nothing interesting right now.\"",
    options: [
        {
            text: "Leave",
            nextText: 8,
        },
    ]
},
{
    id: 8,
    text: "You look around the tavern. Thinking what to do.",
    options: [
        {
            text: "Approach the barmaid",
            nextText: 3,
        },
        {
            text: "Approach the guy in the corner",
            nextText: 9,
        },
        {
            text: "Leave the tavern",
            nextText: 1,
        },
    ]
},
{
    id: 9,
    text: "As you come closer you see that he has a chessboard in front of him, chess pieces arranged as if he was in a middle of a game against himself. He looks distant, clearly thinking hard.",
    options: [
        {
            text: "Sit down on the opposite site of the table",
            nextText: 10,
        },
        {
            text: "\"Um, hello?\"",
            nextText: 10,
        },
    ]
},
{
    id: 10,
    text: "\"Well hello young traveler! My name is Moiro the Dragonkiller. I don't kill dragons anymore, but when I was younger I killed 88 of them EXACTLY!\" He raises his index finger to make a point. It clearly makes him happy to talk to someone. \"Care for a game of chess? For 1 silver maybe?\"",
    options: [
        {
            text: "\"I don't have a silver\"",
            nextText: 11,
        },
        {
            text: "Bet one silver",
            inventoryChange: {silverCoin: -1},
            specialEvent: 0,
            nextText: 12,
        },
    ]
},
{
    id: 11,
    text: "\"Doesn't matter. If you win I'll give you one. If you lose, well you lose.\"",     //TODO rng money generator..good or not?
    options: [
        {
            text: "Play",
            specialEvent: 0,
            nextText: 12,
        },
    ]
},
{
    id: 12,
    text: "\"Ooooh what a good game. Wanna play again?\"",
    options: [
        {
            text: "Bet one silver",
            specialEvent: 0,
            inventoryChange: {silverCoin: -1},
            nextText: 12,
        },
        {
            text: "Say goodbye and leave",
            nextText: 8,
        },
    ]
},
{
    id: 13,
    text: "You open the door to the shop, you see a woman in long dark robe, polishing a crystal ball. As she sees you she asks \"Do you wish to trade? Or would you rather want to know your future? Today is free.\"",
    options: [
        {
            text: "Trade",
            nextText: 14,
        },
        {
            text: "Tell me my future.",
            specialEvent: 1,
            //inventoryChange: {silverCoin: -1},
            nextText: 15,
        },
        {
            text: "\"Who are you?\"",
            nextText: 16,
        },
        {
            text: "Leave",
            nextText: 1,
        },
    ]
},
{
    id: 16,
    text: "She looks at you, measuring you with her piercing look. \"I am Anne of Jarc, you definitely heard of me and if not I suggest buying a book. Now if you want something tell me otherwise... leave.\"",
    options: [
        {
            text: "Trade",
            nextText: 14,
        },
        {
            text: "Tell me my future.",
            specialEvent: 1,
            //inventoryChange: {silverCoin: -1},
            nextText: 15,
        },
        {
            text: "Leave",
            nextText: 1,
        },
    ]
},
{
    id: 14,
    text: "\"This is what I have for now.\"",
    options: [
        {
            text: "Buy a nice looking, probably magical dagger",
            inventoryChange: {goldCoin: -1, magicalDagger: 1},
            nextText: 14,
        },
        {
            text: "Buy troll ear wax",
            inventoryChange: {silverCoin: -1, trollEarVax: 1},
            nextText: 14,
        },
        {
            text: "Buy dragon bone dust",
            inventoryChange: {silverCoin: -1, dragonBoneDust: 1},
            nextText: 14,
        },
        {
            text: "Buy piece of nice cloth",
            inventoryChange: {silverCoin: -1, niceCloth: 1},
            nextText: 14,
        },
        {
            text: "Leave",
            nextText: 1,
        },
    ]
},
{
    id: 15,
    text: "\"You'll die. One day. For sure. Now scatter.\"",
    options: [
        {
            text: "Trade",
            nextText: 14,
        },
        {
            text: "Tell me my future.",
            specialEvent: 1,
            //inventoryChange: {silverCoin: -1},
            nextText: 15,
        },
        {
            text: "Leave",
            nextText: 1,
        },
    ]
}
]

const cityMarketplace = [
{
    id: 1,
    text: "Walking through the marketplace, you see many different people sculking around. You can hear chatter, animal noises and seagulls from the nearby port.",
    options: [
        {
            text: "Look for a blacksmith.",
            nextText: 2,
        },
        {
            text: "Look for an alchemist.",
            nextText: 7,
        },
        {
            text: "Wander around for a bit.",
            nextText: 11,
        },
        {
            text: "Go back to town square.",
            situation: "cityMainSquare",
            nextText: 1,
        },
    ]
},
{
    id: 2,
    text: "You walk up to the blacksmith's shop, you can see a very muscular man of tan skin violently smashing his hammer into what will probably be a sword one day.",
    options: [
        {
            text: "Make an \"Ehm\" noice to get his attention.",
            nextText: 3,
        },
        {
            text: "Wait",
            nextText: 3,
        },
        {
            text: "Leave",
            nextText: 11,
        },
    ]
},
{
    id: 3,
    text: "He turns around and swipes sweat off his forehead with his huge hand. You wouldn't want to fight this one that's for sure. \"How can I help you?\" he asks with a voice of a polite good guy.",
    options: [
        {
            text: "Trade",
            nextText: 4,
        },
        /*{
            text: "Upgrade equipment",
            nextText: 6,
        },*/
        {
            text: "Leave",
            nextText: 11,
        },
    ]
},
{
    id: 5,
    text: "\"Anything else?\" He is still sweating.",
    options: [
        {
            text: "Trade",
            nextText: 4,
        },
        /*{
            text: "Upgrade equipment",
            nextText: 6,
        },*/
        {
            text: "Leave",
            nextText: 11,
        },
    ]
},
{
    id: 4,
    text: "\"All of this is an honest work, so don't expect any low prices.\"",
    options: [
        {
            text: "Buy a short sword.",
            inventoryChange: {goldCoin: -1, shortSword: 1},
            nextText: 4,
        },
        {
            text: "Buy 5 arrows.",
            inventoryChange: {silverCoin: -5, arrows: 5},
            nextText: 4,
        },
        {
            text: "Buy plate armor.",
            inventoryChange: {goldCoin: -10, plateArmor: 1},
            nextText: 4,
        },
        {
            text: "Buy steel helmet",
            inventoryChange: {goldCoin: -5, steelHelmet: 1},
            nextText: 4,
        },
        {
            text: "Talk about something else.",
            nextText: 5,
        },
    ]
},
{
    id: 6,
    text: "\"Show me what you want to upgrade\"\"",
    options: [
        {
            text: "Weapon",
            //TODO special event upgrade
            inventoryChange: {silverCoin: -1},
            nextText: 6,
        },
        {
            text: "Armor",
            //TODO special event upgrade
            inventoryChange: {silverCoin: -1},
            nextText: 6,
        },
        {
            text: "Talk about something else.",
            nextText: 5,
        },
    ]
},
{
    id: 7,
    text: "As you approach what looks like an exploded laboratory a tiny gnome with glasses shouts at you excitedly: \"Hello! Hello! Come closer and see what Bilji Sizzlebang has to offer!\"",
    options: [
        {
            text: "Trade",
            nextText: 9,
        },
        {
            text: "\"Can you teach me alchemy?\"",
            nextText: 10,
        },
        {
            text: "Leave",
            nextText: 11,
        },
    ]
},
{
    id: 8,
    text: "\"That's it? Come on man! Buy the expensive stuff.\"",
    options: [
        {
            text: "Trade",
            nextText: 9,
        },
        {
            text: "\"Can you teach me alchemy?\"",
            nextText: 10,
        },
        {
            text: "Leave",
            nextText: 11,
        },
    ]
},
{
    id: 9,
    text: "\"A potion to calm your mind maybe? Or to make you *winks* better with the ladies? OH! I know! A Cursed Curse Remover!\"",
    options: [
        {
            text: "Buy 'Cursed Curse Remover', you can see warning signs all over the bottle",
            inventoryChange: {silverCoin: -5, cursedCurseRemover: 1},
            nextText: 9,
        },
        {
            text: "Buy a health potion.",
            inventoryChange: {silverCoin: -2, healthPotion: 1},
            nextText: 9,
        },
        {
            text: "Buy 'BetterWithLadiez' potion. Probably a scam though.",
            inventoryChange: {goldCoin: -1, betterWithLadiezPotion: 1},
            nextText: 9,
        },
        {
            text: "Buy Tranquility Potion",
            inventoryChange: {silverCoin: -5, tranquilityPotion: 1},
            nextText: 9,
        },
        {
            text: "Talk about something else.",
            nextText: 8,
        },
    ]
},
{
    id: 10,
    text: "He stops abruptly, as to think deeply, you wait and wait. Suddenly the silence is broken by a swift \"No.\"",
    options: [
        {
            text: "Ok",
            nextText: 8,
        },
        {
            text: "Mutter curse words under your nose.",
            nextText: 8,
        },
        {
            text: "Talk about something else.",
            nextText: 8,
        },
    ]
},
{
    id: 11,
    text: "As you walk further through the marketplace you see a shady looking door. You walk past it and you can hear people shouting and yelling over something. You can also see a boat at the port.",
    options: [
        {
            text: "Investigate the shady looking door.",
            situation: "weirdDoor",
            nextText: 1,
        },
        {
            // TODO fight special event
            text: "See what's the yelling about.",
            nextText: 11,
        },
        {
            // TODO travel event
            text: "Go check the boat.",
            nextText: 11,
        },
        {
            text: "Go back to the blacksmith",
            nextText: 2,
        },
        {
            text: "Go back to alchemist shop",
            nextText: 7,
        },
        {
            text: "Go back to town square.",
            situation: "cityMainSquare",
            nextText: 1,
        },
    ]
}
]

const weirdDoor = [
{
    id: 1,
    text: "You approach the door, weird humming noise comes from behind the door.",
    options: [
        {
            text: "\"Hello?\"",
            nextText: 2,
        },
        {
            text: "Knock",
            nextText: 2,
        },
        {
            text: "Knock three times",
            nextText: 3,
        },
        {
            text: "Leave the door",
            situation: "cityMarketplace",
            nextText: 11,
        },
    ]
},
{
    id: 2,
    text: "A faint demonic whispers can be heard from the other side of the door: \"...paaaaassword...\"",
    options: [
        {
            text: "\"Hello?\"",
            nextText: 2,
        },
        {
            text: "Knock",
            nextText: 2,
        },
        {
            text: "Knock three times",
            nextText: 3,
        },
        {
            text: "\"The paddle has been lost. Oceans are angry.\"",
            knowledgeNeeded: {secretPassword: 1},
            nextText: 4,
        },
        {
            text: "Leave the door",
            situation: "cityMarketplace",
            nextText: 11,
        },
    ]
},
{
    id: 3,
    text: "Something from the other side hits the door with unbelievable force. You are suprised but happy that the door withstanded it.",
    options: [
        {
            text: "\"Hello?\"",
            nextText: 2,
        },
        {
            text: "Knock",
            nextText: 2,
        },
        {
            text: "Knock three times",
            nextText: 3,
        },
        {
            text: "Leave the door",
            situation: "cityMarketplace",
            nextText: 11,
        },
    ]
},
{
    id: 4,
    text: "The door opens and you see a dark, wet passage. You can hear weird noises coming from the other side. It seems like you entered a dungeon.",
    options: [
        {
            text: "Continue",
            nextText: 4,
        },
        {
            text: "Run back to safety",
            situation: "cityMarketplace",
            nextText: 11,
        },
    ]
}
];