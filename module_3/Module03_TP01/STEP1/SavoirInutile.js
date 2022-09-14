//TP : le savoir inutile
//http://www.topito.com/top-infos-insolites-corps-humain
/*
* première phase est une restructuration du code de l’application existante pour introduire les concepts objet.
* L’idée est de créer et de manipuler une classe nommée SavoirInutile
*/

class SavoirInutile {

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
    infos(){
        //toLocaleDateString()
        //Transforme une date JS en chaine de caractères selon la locale du navigateur.
        let dateString = this.dateDecouverte.toLocaleDateString();
        return 'Par ${this.auteur}, le '+ dateString;
    }


}


//Algo principal
//Initialisation du formulaire
function chargementTermine() {//Valeurs par défaut pour les champs du formulaire

    const libelleSavoir = document.getElementById("libelleSavoir");
    libelleSavoir.value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("date").valueAsDate = new Date();
    libelleSavoir.focus();
}

//Créer une nouvelle instance de SavoirInutile
function ajouter() {
    const libelle = document.getElementById("libelleSavoir").value;
    const auteur = document.getElementById("auteur").value;
    const dateSaisie = document.getElementById("date").valueAsDate;

    const savoirInutile = new SavoirInutile(libelle, auteur, dateSaisie);

    if (savoirInutile.toutEstSaisie()) {
        const liSavoir = document.createElement("li");
        const pSavoir = document.createElement("p");
        const pInfos = document.createElement("p");


        pSavoir.innerText = savoirInutile.libelle;
        pInfos.innerText = savoirInutile.infos();
        pSavoir.className = "savoir";
        pInfos.className = "infos";
        liSavoir.addEventListener("click", supprimer);

        const olSavoir = document.getElementById("olListeSavoir");
        olSavoir.appendChild(liSavoir);
        liSavoir.appendChild(pSavoir);
        liSavoir.appendChild(pInfos);

        chargementTermine();
    } else {
        alert("Tous les champs sont obligatoires");
        document.getElementById("libelleSavoir").focus();
    }
}

function supprimer(event) {
    const savoir = event.currentTarget.getElementsByTagName("p")[0].innerText
    if (confirm(`Voulez-vous supprimer le savoir "${savoir}"?`)) {
        event.currentTarget.parentNode.removeChild(event.currentTarget);
    }
}

window.onload = chargementTermine;