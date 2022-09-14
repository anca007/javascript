var sport = {nom: "squash", description: "jeu de raquettes"}

console.log(sport)
console.log(sport.nom)

sport.nbJoueurs = 2

console.log(sport)

//fonction dans objet
var sport2 = {
    nom: "badminton",
    description: "jeu de raquettes",
    afficher: function () {
        console.log(this.nom.toUpperCase(), this.description)
    }
}
sport2.afficher()

//tableau d'objets