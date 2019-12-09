class Hero {
    name:string = "Bob";
    hp:number;
    inventory: {[key:string]: number} = {};

    constructor(newName: string) {
        this.name = newName;
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
        }
    }

    printInvetory() {
        let inventoryText :string = "";
        Object.keys(this.inventory).forEach(key => {
            if(this.inventory[key] != 0) {
                inventoryText = key + ": " + this.inventory[key] + "\n";
            }
        });
        document.getElementById("inventory").innerText = inventoryText;
    }

    hasItems(invetoryChange) {
        Object.keys(invetoryChange).forEach(key => {
            if(this.inventory[key] === undefined || this.inventory[key] == 0) return false;
        });
        return true;
    }
}
