function saveGame() {
    let hero = {
        stageId: heroRef.stage.id,
        stageName: heroRef.stage.name,
        name: heroRef.name,
        hp: heroRef.hp,
        level: heroRef.level,
        xp: heroRef.xp,
        //inventory: heroRef.inventory,
        //knowledge: heroRef.knowledge
    }
    let inventory = heroRef.inventory;
    let knowledge = heroRef.knowledge
    localStorage.setItem('heroSaveFile',JSON.stringify(hero));
    localStorage.setItem('inventorySaveFile',JSON.stringify(inventory));
    localStorage.setItem('knowledgeSaveFile',JSON.stringify(knowledge));
}

function loadGame() {
    if(localStorage.getItem('heroSaveFile') != null) {
        let file = JSON.parse(localStorage.getItem('heroSaveFile'));
        heroRef = new Hero(file.name)
        heroRef.stage.id = file.stageId;
        heroRef.stage.name = file.stageName;
        heroRef.hp = file.hp;
        heroRef.level = file.level;
        heroRef.xp = file.xp;
        heroRef.inventory = JSON.parse(localStorage.getItem('inventorySaveFile'));
        heroRef.knowledge = JSON.parse(localStorage.getItem('knowledgeSaveFile'));
        printStatistics();
        heroRef.printInventory();
        heroRef.printKnowledge();
        document.getElementById("debugText").innerText = file.stage;
    }
}

function deleteSave() {
    localStorage.removeItem('heroSaveFile');
    localStorage.removeItem('inventorySaveFile');
    localStorage.removeItem('knowledgeSaveFile');
    location.reload();
}