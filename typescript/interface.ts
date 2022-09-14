import {Test} from "./module";


let sport2 : Test.Sport = new Test.Sport()
console.log(sport2.afficher())


interface Jouable{
    score? : string
    jouer(joueur1: string, joueur2: string)
}

interface jouer{
    (joueur1: string, joueur2: string):string
}

class SportJouable implements Jouable{
    score: string;

    jouer(joueur1: string, joueur2: string) {

    }

}

let jouerAuBad : jouer = function (joueur1: string, joueur2: string) :string{
    return ""
}