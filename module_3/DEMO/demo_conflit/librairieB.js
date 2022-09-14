function traitement()
{
    document.write("La librairie B fait le traitement demandé...");
}

class Sport{
    constructor(name) {
        this.nom = name
    }
}


function newSport(){

    let sport = new Sport('Foot');
    console.log("Librairie B " + sport.nom);

}