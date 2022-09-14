/*var Sport = function(nom, description){
    //définition des attributs
    this.nom = nom || "pas de nom";
    this.description = description || "";

    //définition des fonctions
    this.afficher = function(){
        console.log(this.nom, this.description);
    }
}

//Déclaration et création d'objets de type Sport:
var sport = new Sport("squash", "un jeu de raquettes");
var sport2 = new Sport("football", "un jeu de ballon");
sport.afficher();
sport2.afficher();
console.log(sport);

var SportDeCompetition = function(nom, description, niveau){
    //Appel du constructeur de la classe mère
    Sport.call(this, nom, description);
    //Définition des attributs propres
    this.niveau = niveau || "";
}

var sportDeCompetition = new SportDeCompetition("Pelote basque", "Un jeu qui fait pal à la main","Régional");
console.log(sportDeCompetition);
sportDeCompetition.afficher();
*/



class Sport {
    constructor(name, description) {
        this.nom = name || "pas de nom";
        this.description = description || "";
    }

    //définition des fonctions
    afficher(){
        console.log(this.nom, this.description);
    }
}

//Déclaration et création d'objets de type Sport:
var sport = new Sport("squash", "un jeu de raquettes");
var sport2 = new Sport("football", "un jeu de ballon");
sport.afficher();
sport2.afficher();
console.log(sport);

class SportDeCompetition extends Sport{
    constructor(nom, description, niveau) {
        super(nom, description);
        this.niveau = niveau
    }
}

var sportDeCompetition = new SportDeCompetition("Pelote basque", "Un jeu qui fait pal à la main","Régional");
console.log(sportDeCompetition);
sportDeCompetition.afficher();