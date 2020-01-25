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
    while(optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild);
    }
    if(win) {
        heroRef.addItem("silverCoin", 1); //assigned to late because of the text refreshing function
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
        "\"In five days you'll be allergic to red bananas. If you didn't know red bananas exist just ignore this prophecy.\"",
        "\"Next time you are on a crossroads, turn left.\"",
        "\"You might want to rethink your diet. I see nasty things in your future.\"",
        "\"Oh my what a body. Just wink at the lady in red robes and you'll be lucky. Say hi from me will you?\"",
        "\"You'll drop your sword when you'll need it the most.\"",
        "\"I don't think it is important for you to know what's coming. It will come anyway.\"",
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