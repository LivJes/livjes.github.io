var textElement = document.getElementById("mainText");
var optionButtons = document.getElementById("buttonsBox");
var inputBox = document.getElementById("inputBox");
var decisionsCounter = 0;
var heroRef;
function setName(name) {
    while (inputBox.firstChild) {
        inputBox.removeChild(inputBox.firstChild);
    }
    while (optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild);
    }
    heroRef = new Hero(name);
    textElement.innerText = "It isn't a very good name but okay. So " + heroRef.name + " now that that's settled let me introduce myself. I'm Shady the shady person. We will meet again sometime. Now turn around.";
    document.getElementById("heroicName").innerText = heroRef.name;
    var button = document.createElement("button");
    button.innerText = "Turn around";
    button.classList.add("button");
    button.addEventListener("click", function () { return showText(1); });
    optionButtons.appendChild(button);
}
function startGame() {
    textElement.innerText = "You! Hey you! Yes, you. Come here. Do you remember your name? Nevermind, we will give you a new name. What do you want me to call you?";
    var input = document.createElement("input");
    input.classList.add("inputBox");
    input.setAttribute('type', 'text');
    inputBox.appendChild(input);
    var button = document.createElement("button");
    button.innerText = "Yes that's my name.";
    button.classList.add("button");
    button.addEventListener("click", function () { return setName(input.value); });
    optionButtons.appendChild(button);
}
function showText(situationId) {
    var situation = situations.find(function (situation) { return situation.id === situationId; });
    textElement.innerText = situation.text;
    while (optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild);
    }
    while (inputBox.firstChild) {
        inputBox.removeChild(inputBox.firstChild);
    }
    situation.options.forEach(function (option) {
        //if(option.inventoryChange == null) {
        if (showOption(option)) {
            var button = document.createElement("button");
            button.innerText = option.text;
            button.classList.add("button");
            button.addEventListener("click", function () { return selectOption(option); });
            optionButtons.appendChild(button);
        }
        //}
    });
}
function showOption(option) {
    return option.inventoryChange === undefined || heroRef.hasItems(option);
}
function printStatistics() {
    document.getElementById("heroicName").innerText = heroRef.name;
    document.getElementById("statisticsTextDecisions").innerText = decisionsCounter.toString();
}
function selectOption(option) {
    var nextSituationId = option.nextText;
    if (nextSituationId <= 0)
        return startGame();
    if (option.inventoryChange != undefined) {
        Object.keys(option.inventoryChange).forEach(function (key) {
            heroRef.addItem(key, option.inventoryChange[key]);
        });
    }
    decisionsCounter++;
    printStatistics();
    heroRef.printInventory();
    if (option.specialEvent == 1 || option.specialEvent == 0) {
        document.getElementById("debugText").innerText = "right option";
        specialEventHandler(option.specialEvent);
    }
    else {
        showText(nextSituationId);
    }
}
startGame();
