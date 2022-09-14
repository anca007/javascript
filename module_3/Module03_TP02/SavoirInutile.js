//TP : le savoir inutile
//http://www.topito.com/top-infos-insolites-corps-humain
/*
* Mise en place des modules de type NodeJS
*/
export class SavoirInutile {
    constructor(libelle, auteur, dateDecouverte = new Date()) {
        this.libelle = libelle;
        this.auteur = auteur;
        this.dateDecouverte = dateDecouverte;
    }

    toutEstSaisie() {
        //dateDecouverte && --> permet d'éliminer les cas où le contenu du champ date est supprimé
        return this.dateDecouverte && this.libelle !== "" && this.auteur !== "";
    }

    //Permet de créer la chaîne à afficher à partir des attributs
    infos() {
        //toLocaleDateString()
        //Transforme une date JS en chaine de caractères selon la locale du navigateur.
        let dateString = this.dateDecouverte.toLocaleDateString();
        return 'Par ' + this.auteur + ', le ' + dateString;
    }
}