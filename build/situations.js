var situations = [
    {
        id: 0,
        text: "Restart",
        nextText: -1,
    },
    {
        id: 1,
        text: "You wake up in a dark forest, feeling groggy.",
        options: [
            {
                text: "Look around",
                nextText: 2,
            },
            {
                text: "Stay still",
                nextText: 3,
            }
        ]
    },
    {
        id: 2,
        text: "You looked around, not seeing anything in particular because it is after all a dark forest.",
        options: [
            {
                text: "Stay still",
                nextText: 3,
            },
            {
                text: "Do nothing and wait",
                nextText: 3,
            },
            {
                text: "Pick up a rock and look at it intensely",
                inventoryChange: { rock: 1 },
                nextText: 3,
            }
        ]
    },
    {
        id: 3,
        text: "You wake up to a chicken poking you into your face. You shoo it away and it jumps and runs away with a loud \"PAAAAAA\".",
        options: [
            {
                text: "Run after the chicken",
                nextText: 4,
            },
            {
                text: "Throw a rock",
                inventoryChange: { rock: -1 },
                nextText: 5,
            }
        ]
    },
    {
        id: 4,
        text: "You are running after the chicken, you cannot see it but loud clucking tells you the way.",
        options: [
            {
                text: "Continue running after the chicken",
                nextText: 4,
            },
            {
                text: "Try clucking at the chicken",
                nextText: 5,
            }
        ]
    },
    {
        id: 5,
        text: "Nothing happened and the chicken is lost. You are standing in the middle of the forest wondering what happened to your life and what lead to this moment.",
        options: [
            {
                text: "Wonder some more",
                nextText: 6,
            },
            {
                text: "Cluck sadly",
                nextText: 7,
            },
            {
                text: "Try going somewhere",
                nextText: 8,
            }
        ]
    },
    {
        id: 6,
        text: "Loud \"hmmmmmmmm\" leaves your mouth as you think harder than ever before.",
        options: [
            {
                text: "Wonder some more",
                nextText: 6,
            },
            {
                text: "Cluck sadly",
                nextText: 7,
            },
            {
                text: "Try going somewhere",
                nextText: 8,
            }
        ]
    },
    {
        id: 7,
        text: "You look around to see if any more chickens were tricked by your perfect chicken impression.",
        options: [
            {
                text: "Think what to do",
                nextText: 6,
            },
            {
                text: "Cluck again",
                nextText: 7,
            },
            {
                text: "Try going somewhere",
                nextText: 8,
            }
        ]
    },
    {
        id: 8,
        text: "There are trees everywhere. Where do you want to go?",
        options: [
            {
                text: "Left",
                nextText: 9,
            },
            {
                text: "Right",
                nextText: 9,
            },
            {
                text: "Just go",
                nextText: 8,
            }
        ]
    },
    {
        id: 9,
        text: "There's a tree in front of you. Where do you want to go?",
        options: [
            {
                text: "Left",
                nextText: 8,
            },
            {
                text: "Right",
                nextText: 10,
            },
        ]
    },
    {
        id: 10,
        text: "You wander through the forest endlessly, your legs are starting to hurt badly. You sit on a stump for a while and a splinter gets stuck in your buttcheek. You grunt angrily and go further through the forest.",
        options: [
            {
                text: "Continue",
                nextText: 11,
            },
            {
                text: "Swear at the splinter",
                nextText: 11,
            },
        ]
    },
    {
        id: 11,
        text: "Finally you see a city at the horizon, your walking pace speeds up. Not long and you are standing at the city gates.",
        options: [
            {
                text: "Go inside the city",
                nextText: 12,
            },
        ]
    },
    {
        id: 12,
        text: "You can hear chatter and all different kinds of city noises around you. You see a tavern welcoming you with it's open doors and two drunkards nearly passed out near them. On your right you can see a weirdly looking shop and on your left a marketplace.",
        options: [
            {
                text: "TAVERN TIME!",
                nextText: 13,
            },
            {
                text: "Go check out the weird shop",
                nextText: 24,
            },
            {
                text: "Go to the marketplace",
                nextText: 12,
            },
        ]
    },
    {
        id: 13,
        text: "You step into the tavern and a pungent smell of tobacco and spilled mead hits your nose like a fist. The tavern is full of people, most of them already drunk. Barmaid is cleaning the bar with a nasty looking piece of cloth and staring at people angrily. In the corner you see a person that doesn't quite fit here.",
        options: [
            {
                text: "Approach the barmaid",
                nextText: 14,
            },
            {
                text: "Approach the guy in the corner",
                nextText: 20,
            },
        ]
    },
    {
        id: 14,
        text: "You step closer to the bar and sit on a stool next to it. Barmaid looks unimpressed by your presence.",
        options: [
            {
                text: "Imitate cough to get her attention",
                nextText: 15,
            },
            {
                text: "Wait",
                nextText: 15,
            },
            {
                text: "Try to talk to her",
                nextText: 16,
            },
        ]
    },
    {
        id: 15,
        text: "She keeps cleaning the bar, sometimes spitting on the cloth and then wiping the wood with fresh spit. Disgusting? Maybe. Effective? Sure.",
        options: [
            {
                text: "Cough more",
                nextText: 16,
            },
            {
                text: "Try to talk to her",
                nextText: 16,
            },
        ]
    },
    {
        id: 16,
        text: "\"What do you want?\" she spits out at you and pierces you with the ugliest look known to mankind. If this woman has a man, you know that he can't leave even if he wanted.",
        options: [
            {
                text: "Order a mead",
                inventoryChange: { silverCoin: -1 },
                nextText: 17,
            },
            {
                text: "Tell me something interesting.",
                nextText: 18,
            },
        ]
    },
    {
        id: 17,
        text: "\"Anything else?\"",
        options: [
            {
                text: "Order a mead",
                inventoryChange: { silverCoin: -1 },
                nextText: 17,
            },
            {
                text: "Tell me something interesting.",
                nextText: 18,
            },
        ]
    },
    {
        id: 18,
        text: "\"Nothing interesting right now.\"",
        options: [
            {
                text: "Leave",
                nextText: 19,
            },
        ]
    },
    {
        id: 19,
        text: "You look around the tavern. Thinking what to do.",
        options: [
            {
                text: "Approach the barmaid",
                nextText: 14,
            },
            {
                text: "Approach the guy in the corner",
                nextText: 20,
            },
            {
                text: "Leave the tavern",
                nextText: 12,
            },
        ]
    },
    {
        id: 20,
        text: "As you come closer you see that he has a chessboard in front of him, chess pieces arranged as if he was in a middle of a game against himself. He looks distant, clearly thinking hard.",
        options: [
            {
                text: "Sit down on the opposite site of the table",
                nextText: 21,
            },
            {
                text: "\"Um, hello?\"",
                nextText: 21,
            },
        ]
    },
    {
        id: 21,
        text: "\"Well hello young traveler! My name is Moiro the Dragonkiller. I don't kill dragons anymore, but when I was younger I killed 88 of them EXACTLY!\" He raises his index finger to make a point. It clearly makes him happy to talk to someone. \"Care for a game of chess? For 1 silver maybe?\"",
        options: [
            {
                text: "\"I don't have a silver\"",
                nextText: 22,
            },
            {
                text: "Bet one silver",
                inventoryChange: { silverCoin: -1 },
                specialEvent: 0,
                nextText: 23,
            },
        ]
    },
    {
        id: 22,
        text: "\"Doesn't matter. If you win I'll give you one. If you lose, well you lose.\"",
        options: [
            {
                text: "Play",
                specialEvent: 0,
                nextText: 23,
            },
        ]
    },
    {
        id: 23,
        text: "\"Ooooh what a good game. Wanna play again?\"",
        options: [
            {
                text: "Play",
                specialEvent: 0,
                nextText: 23,
            },
            {
                text: "Bet one silver",
                specialEvent: 0,
                inventoryChange: { silverCoin: -1 },
                nextText: 23,
            },
            {
                text: "Say goodbye and leave",
                nextText: 19,
            },
        ]
    },
    {
        id: 24,
        text: "You open the door to the shop, you see a woman in long dark robe, polishing a crystal ball. As she sees you she asks \"Do you wish to trade? Or would you rather want to know your future? Today is free.\"",
        options: [
            {
                text: "Trade",
                nextText: 26,
            },
            {
                text: "Tell me my future.",
                specialEvent: 1,
                //inventoryChange: {silverCoin: -1},
                nextText: 27,
            },
            {
                text: "\"Who are you?\"",
                nextText: 25,
            },
            {
                text: "Leave",
                nextText: 12,
            },
        ]
    },
    {
        id: 25,
        text: "She looks at you, measuring you with her piercing look. \"I am Anne of Jarc, you definitely heard of me and if not I suggest buying a book. Now if you want something tell me otherwise... leave.\"",
        options: [
            {
                text: "Trade",
                nextText: 26,
            },
            {
                text: "Tell me my future.",
                specialEvent: 1,
                //inventoryChange: {silverCoin: -1},
                nextText: 27,
            },
            {
                text: "Leave",
                nextText: 12,
            },
        ]
    },
    {
        id: 26,
        text: "\"This is what I have for now.\"",
        options: [
            {
                text: "Buy a nice looking, probably magical dagger",
                inventoryChange: { goldCoin: -1, magicalDagger: 1 },
                nextText: 26,
            },
            {
                text: "Buy troll ear wax",
                inventoryChange: { silverCoin: -1, trollEarVax: 1 },
                nextText: 26,
            },
            {
                text: "Buy dragon bone dust",
                inventoryChange: { silverCoin: -1, dragonBoneDust: 1 },
                nextText: 26,
            },
            {
                text: "Buy piece of nice cloth",
                inventoryChange: { silverCoin: -1, niceCloth: 1 },
                nextText: 26,
            },
            {
                text: "Leave",
                nextText: 12,
            },
        ]
    },
    {
        id: 27,
        text: "\"You'll die. One day. For sure. Now scatter.\"",
        options: [
            {
                text: "Trade",
                nextText: 26,
            },
            {
                text: "Tell me my future.",
                specialEvent: 1,
                //inventoryChange: {silverCoin: -1},
                nextText: 27,
            },
            {
                text: "Leave",
                nextText: 12,
            },
        ]
    }
];
