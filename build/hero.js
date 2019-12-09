var Hero = /** @class */ (function () {
    function Hero(newName) {
        this.name = "Bob";
        this.inventory = {};
        if (newName != "") {
            this.name = newName;
        }
        this.hp = 100;
    }
    Hero.prototype.setName = function (newName) {
        this.name = newName;
    };
    Hero.prototype.addItem = function (item, amount) {
        if (this.inventory[item] === undefined) {
            this.inventory[item] = amount;
        }
        else {
            this.inventory[item] += amount;
            if (this.inventory[item] < 0)
                this.inventory[item] = 0;
        }
    };
    Hero.prototype.printInventory = function () {
        var _this = this;
        var inventoryText = "";
        Object.keys(this.inventory).forEach(function (key) {
            if (_this.inventory[key] != 0) {
                inventoryText = inventoryText + "\n" + key + ": " + _this.inventory[key];
            }
        });
        document.getElementById("inventory").innerText = inventoryText;
    };
    Hero.prototype.hasItem = function (item) {
        return !(this.inventory[item] === undefined || this.inventory[item] === 0);
    };
    Hero.prototype.hasItems = function (option) {
        for (var key in option.inventoryChange) {
            if (option.inventoryChange[key] < 0) {
                if (!this.hasItem(key))
                    return false;
            }
        }
        return true;
    };
    return Hero;
}());
