class Hero {
    stage: {id:number, name:string} = {id:0, name:"prologue"};
    name:string = "Bob";
    hp:number;
    level:number;
    xp:number;
    inventory: {[key:string]: number} = {silverCoin: 500};
    knowledge: {[key:string]: number} = {secretPassword: 0};

    constructor(newName: string) {
        if(newName != "") {
            this.name = newName;
        }
        this.hp = 100;
        this.level = 1;
        this.xp = 0;
    }

    setName(newName:string) {
        this.name = newName;
    }

    addItem(item:string, amount:number) {
        if(this.inventory[item] === undefined) {
            this.inventory[item] = amount;
        } else {
            this.inventory[item] += amount;
            if(this.inventory[item] < 0) this.inventory[item] = 0;
        }
    }

    printInventory() {
        let inventoryText :string = "";
        Object.keys(this.inventory).forEach(key => {
            if(this.inventory[key] != 0) {
                inventoryText = inventoryText + "\n"+  key + ": " + this.inventory[key];
            }
        });
        document.getElementById("inventory").innerText = inventoryText;
    }

    printKnowledge() {
        let knowledgeText :string = "";
        Object.keys(this.knowledge).forEach(key => {
            if(this.knowledge[key] != 0) {
                knowledgeText = knowledgeText + "\n"+  key + ": " + this.knowledge[key];
            }
        });
        document.getElementById("knowledge").innerText = knowledgeText;
    }

    hasItem(item:string, amount:number) {
        return !(this.inventory[item] === undefined || this.inventory[item] === 0 || this.inventory[item] - amount < 0);
    }

    hasItems(option) {
        for(let key in option.inventoryChange) {
            if(option.inventoryChange[key] < 0) {
                if(!this.hasItem(key, option.inventoryChange[key])) return false;
            }
        }
        return true;
    }

    learn(information: string, amount:number) {
        if(this.knowledge[information] === undefined) {
            this.knowledge[information] = amount;
        } else {
            this.knowledge[information] += amount;
            if(this.knowledge[information] < 0) this.knowledge[information] = 0;
        }
    }

    hasInformation(information:string, amount:number) {
        return !(this.knowledge[information] === undefined || this.knowledge[information] === 0 || this.knowledge[information] - amount < 0);
    }

    hasKnowledge(option) {
        for(let key in option.knowledgeNeeded) {
            if(!this.hasInformation(key, option.knowledgeNeeded[key])) return false;
        }
        return true;
    }

    setStage(stage:number, stageName:string) {
        this.stage.id = stage;
        this.stage.name = stageName;
    }

    getStage() {
        return this.stage;
    }

    countXp() {
        let number:number;
        number = Math.round((heroRef.xp/(heroRef.level*100))*100);
        number = isFinite(number) ? number : 0;
        return "Progress to next level: "+number+"\%"
    }
}
