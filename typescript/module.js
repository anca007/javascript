"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
var Test;
(function (Test) {
    var Sport = /** @class */ (function () {
        function Sport() {
        }
        Sport.prototype.afficher = function () {
            console.log("Salut c'est moi !");
        };
        return Sport;
    }());
    Test.Sport = Sport;
})(Test = exports.Test || (exports.Test = {}));
var sport = new Test.Sport();
sport.afficher();
