//Fonction anonymes
const fonctionAnonyme = function (){
    console.log("Salut")
}
fonctionAnonyme();

const fonctionAnonymeAvecParam = function (message){
    console.log(message)
}
fonctionAnonymeAvecParam("Coucou");

//Fonction anonyme auto-appelée

(
    function () {
        console.log("Fonction auto-appelée")
    }
)();

//Fonction anonyme auto-appelée avec param

(
    function (message) {
        console.log(message)
    }
)("Fonction auto-appelée avec param");
