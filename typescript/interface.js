"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_1 = require("./module");
var sport2 = new module_1.Test.Sport();
console.log(sport2.afficher());
var SportJouable = /** @class */ (function () {
    function SportJouable() {
    }
    SportJouable.prototype.jouer = function (joueur1, joueur2) {
    };
    return SportJouable;
}());
var jouerAuBad = function (joueur1, joueur2) {
    return "";
};
