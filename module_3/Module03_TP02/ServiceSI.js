//--------------------------------------------------------------------------------------------
//Cette partie de code correspond au back - BLL - DAL d'une application en couches
//Création d'une classe BLL
export class ServiceSI {
//Tableau représentant l'ensemble des savoirs inutiles
    constructor(tableauSavoirsInutiles = []) {
        this.tableauSavoirsInutiles = tableauSavoirsInutiles;
    }

//Utilisation de la méthode splice() de la classe Array
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    supprimerSavoir(index) {
        this.tableauSavoirsInutiles.splice(index, 1);
    }

//Ajout d'un nouveau savoir au tableau
    ajouterSavoir(nvSavoirInutile) {
        this.tableauSavoirsInutiles.push(nvSavoirInutile);
    }

    //Trier le tableau
    //Aide : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    //Aide : localeCompare de string https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
    trierSavoirs(type) {
        switch (type) {
            case 'a_az':
                this.tableauSavoirsInutiles.sort((savoirA, savoirB) => savoirA.auteur.localeCompare(savoirB.auteur));
                break;
            case 'a_za':
                this.tableauSavoirsInutiles.sort((savoirA, savoirB) => savoirB.auteur.localeCompare(savoirA.auteur));
                break;
            case 'd_ra':
                this.tableauSavoirsInutiles.sort((savoirA, savoirB) => savoirB.dateDecouverte - savoirA.dateDecouverte);
                break;
            default://'d_ar'
                this.tableauSavoirsInutiles.sort((savoirA, savoirB) => savoirA.dateDecouverte - savoirB.dateDecouverte);
                break;
        }
    }

    size(){
        return this.tableauSavoirsInutiles.length;
    }
}
