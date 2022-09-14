class Joueur{
    constructor(nom, prenom) {
        this.nom = nom
        this.prenom = prenom
    }
    getDescription(){
        return this.prenom + " " + this.nom
    }
}

let zidane = new Joueur("Zidane", "Zinedine")

localStorage.setItem('zidane', JSON.stringify(zidane))

let zidaneLu = JSON.parse(localStorage.getItem('zidane'))

//document.writeln(zidaneLu.getDescription()); Ne fonctionne pas

//permet d'indiquer que l'objet est de type joueur
Object.setPrototypeOf(zidaneLu, Joueur.prototype)

document.writeln(zidaneLu.nom);
document.writeln(zidaneLu.getDescription());


document.cookie = "test=michel"