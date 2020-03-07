var textElement = document.getElementById("mainText");
var optionButtons = document.getElementById("buttonsBox");
var inputBox = document.getElementById("inputBox");
var decisionsCounter = 0;
var heroRef = null;
function setName(name) {
    while (inputBox.firstChild) {
        inputBox.removeChild(inputBox.firstChild);
    }
    while (optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild);
    }
    heroRef = new Hero(name);
    document.getElementById("statisticsBox").style.display = "flex";
    document.getElementById("gameBox").style.width = "80%";
    textElement.innerText = "It isn't a very good name but okay. So " + heroRef.name + " now that that's settled let me introduce myself. I'm Shady the shady person. We will meet again sometime. Now turn around.";
    document.getElementById("heroicName").innerText = heroRef.name;
    var button = document.createElement("button");
    button.innerText = "Turn around";
    button.classList.add("button");
    button.addEventListener("click", function () { return showText(1); });
    optionButtons.appendChild(button);
}
function startGame() {
    loadGame();
    if (heroRef == null) {
        textElement.innerText = "You! Hey you! Yes, you. Come here. Do you remember your name? Nevermind, we will give you a new name. What do you want me to call you?";
        var input_1 = document.createElement("input");
        input_1.classList.add("inputBox");
        input_1.setAttribute('type', 'text');
        inputBox.appendChild(input_1);
        var button = document.createElement("button");
        button.innerText = "Yes that's my name.";
        button.classList.add("button");
        button.addEventListener("click", function () { return setName(input_1.value); });
        optionButtons.appendChild(button);
    }
    else {
        showText(heroRef.stage);
        document.getElementById("statisticsBox").style.display = "flex";
        document.getElementById("gameBox").style.width = "80%";
    }
}
function showText(situationId) {
    heroRef.setStage(situationId);
    document.getElementById("debugText").innerText = heroRef.stage.toString();
    saveGame();
    var situation = situations.find(function (situation) { return situation.id === situationId; });
    textElement.innerText = situation.text;
    while (optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild);
    }
    while (inputBox.firstChild) {
        inputBox.removeChild(inputBox.firstChild);
    }
    situation.options.forEach(function (option) {
        if (showOption(option)) {
            var button = document.createElement("button");
            button.innerText = option.text;
            button.classList.add("button");
            button.addEventListener("click", function () { return selectOption(option); });
            optionButtons.appendChild(button);
        }
    });
    // TODO function for saving progress into LocalStorage (html5)
}
function showOption(option) {
    return (option.inventoryChange === undefined || heroRef.hasItems(option)) && (option.knowledgeNeeded === undefined || heroRef.hasKnowledge(option));
}
function printStatistics() {
    document.getElementById("heroicName").innerText = heroRef.name;
    document.getElementById("statisticsTextDecisions").innerText = decisionsCounter.toString();
}
function selectOption(option) {
    var nextSituationId = option.nextText;
    if (nextSituationId <= 0)
        return startGame();
    // TODO function for money change between coins
    if (option.inventoryChange != undefined) {
        Object.keys(option.inventoryChange).forEach(function (key) {
            heroRef.addItem(key, option.inventoryChange[key]);
        });
    }
    decisionsCounter++;
    printStatistics();
    heroRef.printInventory();
    heroRef.printKnowledge();
    if (option.specialEvent == 1 || option.specialEvent == 0) {
        specialEventHandler(option.specialEvent);
    }
    else {
        showText(nextSituationId);
    }
}
startGame();
