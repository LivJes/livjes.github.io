const events: string[] = ["chess", "fortune"];


function specialEventHandler(index: number) {
    window[events[index]]();
    document.getElementById("debugText").innerText="event handler";
    //if(index == 0) chess();
    //if(index == 1) fortune();
}

function chess() {
    document.getElementById("debugText").innerText="chess function";
    let win:boolean  = Math.random() < 0.5;
    if(win) {
        heroRef.addItem("silverCoin", 1);
    }
    while(optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild);
    }
    if(win) {
        textElement.innerText = "\"Wooooo! Nice job adventurer! You really know how to play chess. Or do you?\" he says as he looks you playfully into the eye. Did he plan this all along?";
    } else {
        textElement.innerText = "\"You win one you lose one. Better luck next time my friend!\"";
    }
    const button = document.createElement("button");
    button.innerText = "\"Okay\"";
    button.classList.add("button");
    button.addEventListener("click",() => showText(23));
    optionButtons.appendChild(button);
}

function fortune() {
    document.getElementById("debugText").innerText="fortune function";
    let fortunes:string[] = ["\"Death is imminent\"",
        "\"You'll get married... to an ogre.\"",
        "\"You have no future.\"",
        "\"You will fall from horse and break your left collarbone which will hurt every other winter for the rest of your life\"",
        "\"Your wife is sleeping with the blacksmith..oh..that's present, sorry, eh...it will rain next week for 13 minutes.\"",
        "\"When you'll have a choice between life and death, chose death.\"",
        "\"Your fifth child will be hideous.\"",
    ];
    while(optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild);
    }
    textElement.innerText = fortunes[(Math.random() * fortunes.length) | 0];
    const button = document.createElement("button");
    button.innerText = "\"Okay\"";
    button.classList.add("button");
    button.addEventListener("click",() => showText(27));
    optionButtons.appendChild(button);
}