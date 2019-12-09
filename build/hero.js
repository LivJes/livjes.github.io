var Hero = /** @class */ (function () {
    function Hero(newName) {
        this.name = "Bob";
        this.inventory = {};
        this.name = newName;
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
        }
    };
    Hero.prototype.printInvetory = function () {
        var _this = this;
        var inventoryText = "";
        Object.keys(this.inventory).forEach(function (key) {
            if (_this.inventory[key] != 0) {
                inventoryText = key + ": " + _this.inventory[key] + "\n";
            }
        });
        document.getElementById("inventory").innerText = inventoryText;
    };
    Hero.prototype.hasItems = function (invetoryChange) {
        var _this = this;
        Object.keys(invetoryChange).forEach(function (key) {
            if (_this.inventory[key] === undefined || _this.inventory[key] == 0)
                return false;
        });
        return true;
    };
    return Hero;
}());
