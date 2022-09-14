//TP : le savoir inutile
//http://www.topito.com/top-infos-insolites-corps-humain
/*
* Seconde phase
*   Gérer un tableau de savoirs inutiles pour permettre leur maniuplation
*   Ajouter les fonctionnalités suivantes :
* 			trier par ordre alphabétique sur l'auteur
*			trier par ordre chronologique sur la date
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
    infos() {
        //toLocaleDateString()
        //Transforme une date JS en chaine de caractères selon la locale du navigateur.
        let dateString = this.dateDecouverte.toLocaleDateString();
        return 'Par ' + this.auteur + ', le ' + dateString;
    }
}


//Algo principal

//--------------------------------------------------------------------------------------------
//Cette partie de code correspond au back - BLL - DAL d'une application en couches
//Tableau représentant l'ensemble des savoirs inutiles
const tableauSavoirsInutiles = [];

//Utilisation de la méthode splice() de la classe Array
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
function supprimerSavoir(index) {
    tableauSavoirsInutiles.splice(index, 1);
}

//Ajout d'un nouveau savoir au tableau
function ajouterSavoir(nvelSavoirInutile) {
    tableauSavoirsInutiles.push(nvelSavoirInutile);
}

//Trier le tableau
//Aide : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//Aide : localeCompare de string https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
function trierSavoirs(type)
{
    switch (type) {
        case 'a_az':
            tableauSavoirsInutiles.sort((savoirA,savoirB)=>savoirA.auteur.localeCompare(savoirB.auteur));
            break;
        case 'a_za':
            tableauSavoirsInutiles.sort((savoirA,savoirB)=>savoirB.auteur.localeCompare(savoirA.auteur));
            break;
        case 'd_ra':
            tableauSavoirsInutiles.sort((savoirA,savoirB)=>savoirB.dateDecouverte-savoirA.dateDecouverte);
            break;
        default://'d_ar'
            tableauSavoirsInutiles.sort((savoirA,savoirB)=>savoirA.dateDecouverte-savoirB.dateDecouverte);
            break;
    }
}



//--------------------------------------------------------------------------------------------
//Cette partie de code correspond au contrôleur pour le MVC
//Initialisation du formulaire
function chargementTermine() {//Valeurs par défaut pour les champs du formulaire
    const libelleSavoir = document.getElementById("libelleSavoir");
    libelleSavoir.value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("date").valueAsDate = new Date();
    libelleSavoir.focus();
}

function afficherTableauSavoirsInutiles() {
    const olSavoir = document.getElementById("olListeSavoir");
    //Effacer le contenu actuel
    olSavoir.innerHTML = "";

    //La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
    tableauSavoirsInutiles.forEach((savoirInutile, index) => {
        const liSavoir = document.createElement("li");
        const pSavoir = document.createElement("p");
        const pInfos = document.createElement("p");
        pSavoir.className = "savoir";
        pInfos.className = "infos";
        liSavoir.addEventListener("click", supprimer);

        //Ajout d'un attribut pour retrouver le savoir courant
        //id = Représente l'index dans le tableau pour retrouver l'élément
        liSavoir.id = index.toString();
        pSavoir.innerText = savoirInutile.libelle;
        pInfos.innerText = savoirInutile.infos();

        olSavoir.appendChild(liSavoir);
        liSavoir.appendChild(pSavoir);
        liSavoir.appendChild(pInfos);

    });

    //Afficher les boutons de tri s'il y a des éléments dans le tableau
    if(tableauSavoirsInutiles.length > 0){
        document.getElementById("btnTri").style.visibility='visible'
    }else{//cacher les boutons dans l'autre cas
        document.getElementById("btnTri").style.visibility='hidden'
    }
}

//Créer une nouvelle instance de SavoirInutile
function ajouter() {
    const libelle = document.getElementById("libelleSavoir").value;
    const auteur = document.getElementById("auteur").value;
    const dateSaisie = document.getElementById("date").valueAsDate;

    const savoirInutile = new SavoirInutile(libelle, auteur, dateSaisie);

    if (savoirInutile.toutEstSaisie()) {
        ajouterSavoir(savoirInutile);
        afficherTableauSavoirsInutiles();
        chargementTermine();
    } else {
        alert("Tous les champs sont obligatoires");
        document.getElementById("libelleSavoir").focus();
    }
}

function supprimer(event) {
    const index = event.currentTarget.id;
    if (confirm(`Voulez-vous supprimer le savoir "${tableauSavoirsInutiles[index].libelle}"?`)) {
        supprimerSavoir(index);
        afficherTableauSavoirsInutiles();
        chargementTermine();
    }
}

function trier(type)
{
    trierSavoirs(type);
    afficherTableauSavoirsInutiles();
}

window.onload = chargementTermine;