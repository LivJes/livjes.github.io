var prologue = [
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
                situation: "cityMainSquare",
                nextText: 1,
            },
        ]
    }
];
