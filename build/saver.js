function saveGame() {
    var hero = {
        stage: heroRef.stage,
        name: heroRef.name,
        hp: heroRef.hp,
    };
    var inventory = heroRef.inventory;
    var knowledge = heroRef.knowledge;
    localStorage.setItem('heroSaveFile', JSON.stringify(hero));
    localStorage.setItem('inventorySaveFile', JSON.stringify(inventory));
    localStorage.setItem('knowledgeSaveFile', JSON.stringify(knowledge));
}
function loadGame() {
    if (localStorage.getItem('heroSaveFile') != null) {
        var file = JSON.parse(localStorage.getItem('heroSaveFile'));
        heroRef = new Hero(file.name);
        heroRef.stage = file.stage;
        heroRef.hp = file.hp;
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
