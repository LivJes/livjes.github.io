class Hero {
    name:string = "Bob";
    hp:number;
    inventory: {[key:string]: number} = {};

    constructor(newName: string) {
        if(newName != "") {
            this.name = newName;
        }
        this.hp = 100;
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

    hasItem(item:string) {
        return !(this.inventory[item] === undefined || this.inventory[item] === 0);
    }

    hasItems(option) {
        for(let key in option.inventoryChange) {
            if(option.inventoryChange[key] < 0) {
                if (!this.hasItem(key)) return false;
            }
        }
        return true;
    }
}
