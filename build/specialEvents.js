var events = ["chess", "fortune"];
function specialEventHandler(index) {
    //window[events[index]]();
    if (index == 0)
        chess();
    if (index == 1)
        fortune();
}
function chess() {
    var win = Math.random() < 0.5;
    if (win) {
        heroRef.addItem("silverCoin", 1);
    }
    while (optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild);
    }
    textElement.innerText = win.toString();
    var button = document.createElement("button");
    button.innerText = "\"Okay\"";
    button.classList.add("button");
    button.addEventListener("click", function () { return showText(23); });
    optionButtons.appendChild(button);
}
function fortune() {
    var fortunes = ["\"Death is imminent\"",
        "\"You'll get married... to an ogre.\"",
        "\"You have no future.\"",
    ];
    while (optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild);
    }
    textElement.innerText = fortunes[(Math.random() * fortunes.length) | 0];
    var button = document.createElement("button");
    button.innerText = "\"Okay\"";
    button.classList.add("button");
    button.addEventListener("click", function () { return showText(27); });
    optionButtons.appendChild(button);
}
