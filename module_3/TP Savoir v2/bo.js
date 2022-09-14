
//création class SavoirInutile
class SavoirInutile {

    constructor(knowledge, author, date) {
        this.knowledge = knowledge;
        this.author = author;
        this.date = date;
    }

    //test si tous les champs sont remplis
    isOk() {
        return this.knowledge !== "" && this.author !== "" && this.date !== "";
    }

    //renvoie les informations du savoir
    getInfos() {

        let day = this.date.getDate();
        let month = this.date.getMonth() + 1;
        let year = this.date.getFullYear();

        return "Par " + this.author + ", le " + day + "/" + month + "/" + year;
    }
}


//pour contextualiser la class
/*
let bo =

    (
        function () {

            let bo = {};

            bo.SavoirInutile = function (knowledge, author, date) {
                this.knowledge = knowledge;
                this.author = author;
                this.date = date;
            }

            bo.SavoirInutile.prototype.isOk = function () {
                return this.knowledge !== "" && this.author !== "" && this.date !== "";
            }

            bo.SavoirInutile.prototype.getInfos = function () {
                let day = this.date.getDate();
                let month = this.date.getMonth() + 1;
                let year = this.date.getFullYear();

                return "Par " + this.author + ", le " + day + "/" + month + "/" + year;
            }

            return bo;
        }
    )();

*/


