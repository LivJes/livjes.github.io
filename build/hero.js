var Hero = /** @class */ (function () {
    function Hero(newName) {
        this.stage = { id: 0, name: "prologue" };
        this.name = "Bob";
        this.inventory = { silverCoin: 500 };
        this.knowledge = { secretPassword: 0 };
        if (newName != "") {
            this.name = newName;
        }
        this.hp = 100;
        this.level = 1;
        this.xp = 0;
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
    Hero.prototype.printKnowledge = function () {
        var _this = this;
        var knowledgeText = "";
        Object.keys(this.knowledge).forEach(function (key) {
            if (_this.knowledge[key] != 0) {
                knowledgeText = knowledgeText + "\n" + key + ": " + _this.knowledge[key];
            }
        });
        document.getElementById("knowledge").innerText = knowledgeText;
    };
    Hero.prototype.hasItem = function (item, amount) {
        return !(this.inventory[item] === undefined || this.inventory[item] === 0 || this.inventory[item] - amount < 0);
    };
    Hero.prototype.hasItems = function (option) {
        for (var key in option.inventoryChange) {
            if (option.inventoryChange[key] < 0) {
                if (!this.hasItem(key, option.inventoryChange[key]))
                    return false;
            }
        }
        return true;
    };
    Hero.prototype.learn = function (information, amount) {
        if (this.knowledge[information] === undefined) {
            this.knowledge[information] = amount;
        }
        else {
            this.knowledge[information] += amount;
            if (this.knowledge[information] < 0)
                this.knowledge[information] = 0;
        }
    };
    Hero.prototype.hasInformation = function (information, amount) {
        return !(this.knowledge[information] === undefined || this.knowledge[information] === 0 || this.knowledge[information] - amount < 0);
    };
    Hero.prototype.hasKnowledge = function (option) {
        for (var key in option.knowledgeNeeded) {
            if (!this.hasInformation(key, option.knowledgeNeeded[key]))
                return false;
        }
        return true;
    };
    Hero.prototype.setStage = function (stage, stageName) {
        this.stage.id = stage;
        this.stage.name = stageName;
    };
    Hero.prototype.getStage = function () {
        return this.stage;
    };
    Hero.prototype.countXp = function () {
        var number;
        number = Math.round((heroRef.xp / (heroRef.level * 100)) * 100);
        number = isFinite(number) ? number : 0;
        return "Progress to next level: " + number + "\%";
    };
    return Hero;
}());
