const events: string[] = ["chess", "fortune"];


function specialEventHandler(index: number) {
    //window[events[index]]();
    if(index == 0) chess();
    if(index == 1) fortune();
}

function chess() {
    let win:boolean  = Math.random() < 0.5;
    if(win) {
        heroRef.addItem("silverCoin", 1);
    }
    while(optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild);
    }
    textElement.innerText = win.toString();
    const button = document.createElement("button");
    button.innerText = "\"Okay\"";
    button.classList.add("button");
    button.addEventListener("click",() => showText(23));
    optionButtons.appendChild(button);
}

function fortune() {
    let fortunes:string[] = ["\"Death is imminent\"",
        "\"You'll get married... to an ogre.\"",
        "\"You have no future.\"",
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