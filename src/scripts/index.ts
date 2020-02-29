const textElement = document.getElementById("mainText");
const optionButtons = document.getElementById("buttonsBox");
const inputBox = document.getElementById("inputBox");
let decisionsCounter = 0;
let heroRef: Hero;

function setName(name: string) {
    while (inputBox.firstChild) {
        inputBox.removeChild(inputBox.firstChild);
    }
    while(optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild);
    }
    heroRef = new Hero(name);
    textElement.innerText = "It isn't a very good name but okay. So " + heroRef.name + " now that that's settled let me introduce myself. I'm Shady the shady person. We will meet again sometime. Now turn around."
    document.getElementById("heroicName").innerText = heroRef.name;
    const button = document.createElement("button");
    button.innerText = "Turn around";
    button.classList.add("button");
    button.addEventListener("click",() => showText(1));
    optionButtons.appendChild(button);
}

function startGame() {
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
        //if(option.inventoryChange == null) {
            if (showOption(option)) {
                const button = document.createElement("button");
                button.innerText = option.text;
                button.classList.add("button");
                button.addEventListener("click", () => selectOption(option));
                optionButtons.appendChild(button);
            }
        //}
    })
    // TODO function for saving progress into LocalStorage (html5)
}

function showOption(option) {
    return option.inventoryChange === undefined || heroRef.hasItems(option);
}

function printStatistics() {
    document.getElementById("heroicName").innerText = heroRef.name;
    document.getElementById("statisticsTextDecisions").innerText = decisionsCounter.toString();
}

function selectOption(option) {
    const nextSituationId = option.nextText;
    if(nextSituationId <= 0) return startGame();
    // TODO function for money change between coins
    if(option.inventoryChange != undefined) {
        Object.keys(option.inventoryChange).forEach(key => {
            heroRef.addItem(key, option.inventoryChange[key]);
        })
    }
    decisionsCounter++;
    printStatistics();
    heroRef.printInventory();
    if(option.specialEvent == 1 || option.specialEvent == 0) {
        specialEventHandler(option.specialEvent);
    } else {
        showText(nextSituationId);
    }

}

startGame();
