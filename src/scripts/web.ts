function loadColor() {
    let color:number = JSON.parse(localStorage.getItem('colorScheme'));
    if(color === 0) light();
    if(color === 1) dark();
}

function light() {
    document.getElementById("statisticsBox").style.background = "rgba(15, 15, 15, 0.2)";
    document.getElementById("gameBox").style.background = "rgba(15, 15, 15, 0.2)";
    document.getElementById("statisticsBox").style.color = "#000000";
    document.getElementById("gameBox").style.color = "#000000";
    document.getElementById("character").style.background = "rgba(15, 15, 15, 0.2)";
    document.getElementById("character").style.color = "#000000";
    document.getElementById("bar").style.background = "rgba(15, 15, 15, 0.2)";
    document.getElementById("gameName").style.color = "#000000";
    document.body.style.background = "#FFFFFF";
    let color:number = 0;
    localStorage.setItem('colorScheme',JSON.stringify(color));
}

function dark() {
    document.getElementById("statisticsBox").style.background = "rgba(53, 53, 53, 1)";
    document.getElementById("gameBox").style.background = "rgba(53, 53, 53, 1)";
    document.getElementById("statisticsBox").style.color = "#FFFFFF";
    document.getElementById("gameBox").style.color = "#FFFFFF";
    document.getElementById("character").style.background = "rgba(53, 53, 53, 1)";
    document.getElementById("character").style.color = "#FFFFFF";
    document.getElementById("bar").style.background = "rgb(53, 53, 53, 1)";
    document.getElementById("gameName").style.color = "#FFFFFF";
    document.body.style.background = "#5B5B5B";
    let color:number = 1;
    localStorage.setItem('colorScheme',JSON.stringify(color));
}

loadColor();