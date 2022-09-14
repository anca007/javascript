let startDate;
let interDate;
let textLen = 0;
let interval;

const init = function () {

    //evenement focus qui lance le programme
    document.getElementById('bloc').addEventListener('focusin', function () {
        launch();
    });
}

const launch = function () {

    startDate = Date.now();
    interDate = startDate;

    //utilisation du setInterval pour répéter l'appel à la méthode calcVitesse()
    interval = setInterval(function () {
        calcVitesse();
    }, 5000)
}


//calculer la vitesse
const calcVitesse = function () {

    let endDate = Date.now();

    //calcul du temps écoulé
    let totalTime = endDate - startDate;
    let interTime = endDate - interDate

    let text = document.getElementById('bloc').value;

    //calcul du temps en fonction du nombre de lettres et de la durée
    let totalNumber = Math.ceil((text.length / (totalTime / 1000) * 60));
    let moyNumber = Math.ceil(((text.length - textLen) / (interTime / 1000) * 60));

    //update du DOM
    if(moyNumber !== 0){

        document.getElementById('vitGen').innerText = totalNumber;
        document.getElementById('vitInter').innerText = moyNumber;

    }else{
        //stop l'utilisation d'interval
        clearInterval(interval);
    }

    //sauvegarde du temps intermédiaire et nombre de lettres
    textLen = text.length;
    interDate = endDate;

}

window.onload = init;