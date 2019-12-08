const textElement = document.getElementById("mainText");
const optionButtons = document.getElementById("buttonsBox");
const inputBox = document.getElementById("inputBox");
let decisionsCounter = 0;

let state:any = {};

function setName(name: string) {
    while (inputBox.firstChild) {
        inputBox.removeChild(inputBox.firstChild);
    }
    while(optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild);
    }
    state.name = name;
    textElement.innerText = "It isn't very good name but okay. So " + state.name + " now that that's settled let me introduce myself. I'm Shady the shady person. We will meet again sometime. Now turn around."
    document.getElementById("heroicName").innerText = state.name;
    const button = document.createElement("button");
    button.innerText = "Turn around";
    button.classList.add("button");
    button.addEventListener("click",() => showText(1));
    optionButtons.appendChild(button);
}

function startGame() {
    state = {};
    textElement.innerText = "You! Hey you! Yes, you. Come here. Do you remember your name? Nevermind, we will give you a new name. What do you want me to call you?"
    const input = document.createElement("input");
    input.classList.add("inputBox");
    input.setAttribute('type', 'text');
    inputBox.appendChild(input);
    const button = document.createElement("button");
    button.innerText = "Yes that's my name.";
    button.classList.add("button");
    button.addEventListener("click",() => setName(input.value));
    optionButtons.appendChild(button);
}

function showText(situationId) {
    const situation = situations.find(situation => situation.id === situationId);
    textElement.innerText = situation.text;
    while(optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild);
    }
    while (inputBox.firstChild) {
        inputBox.removeChild(inputBox.firstChild);
    }
    situation.options.forEach(option => {
        if(showOption(option)) {
            const button = document.createElement("button");
            button.innerText = option.text;
            button.classList.add("button");
            button.addEventListener("click", () => selectOption(option));
            optionButtons.appendChild(button);
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function printStatistics() {
    document.getElementById("heroicName").innerText = state.name;
    document.getElementById("statisticsTextDecisions").innerText = decisionsCounter.toString();
}

function selectOption(option) {
    const nextSituationId = option.nextText;
    if(nextSituationId <= 0) return startGame();
    state = Object.assign(state, option.setState);
    decisionsCounter++;
    printStatistics();
    showText(nextSituationId);
}

const situations = [
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
                //requiredState(currentState) => currentState.rock,
                //setState: {rock: false},
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
                nextText: 8,
            },
            {
                text: "Just go",
                nextText: 8,
            }
        ]
    }
];

startGame();