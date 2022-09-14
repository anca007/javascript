//--------------------------------------------------------------------------------------------
//Cette partie de code correspond au contrôleur pour le MVC
//Initialisation du formulaire
/*   Mise en place des modules de type NodeJS
*/
//Récupération du service
import {ServiceSI} from './ServiceSI.js';
import {SavoirInutile} from './SavoirInutile.js';
export class ControlleurSI {
     constructor(serviceSI= new ServiceSI()) {
         this.serviceSI = serviceSI;
    }


    chargementTermine() {//Valeurs par défaut pour les champs du formulaire
        const libelleSavoir = document.getElementById("libelleSavoir");
        libelleSavoir.value = "";
        document.getElementById("auteur").value = "";
        document.getElementById("date").valueAsDate = new Date();
        libelleSavoir.focus();
    }

    afficherTableauSavoirsInutiles() {
        const olSavoir = document.getElementById("olListeSavoir");
        //Effacer le contenu actuel
        olSavoir.innerHTML = "";
       //La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
        this.serviceSI.tableauSavoirsInutiles.forEach((savoirInutile, index) => {
            const liSavoir = document.createElement("li");
            const pSavoir = document.createElement("p");
            const pInfos = document.createElement("p");
            pSavoir.className = "savoir";
            pInfos.className = "infos";
            liSavoir.addEventListener("click", this.supprimer);

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
        if (this.serviceSI.size() > 0) {
            document.getElementById("btnTri").style.visibility = 'visible'
        } else {//cacher les boutons dans l'autre cas
            document.getElementById("btnTri").style.visibility = 'hidden'
        }
    }

    //Créer une nouvelle instance de Bo
    ajouter() {
        const libelle = document.getElementById("libelleSavoir").value;
        const auteur = document.getElementById("auteur").value;
        const dateSaisie = document.getElementById("date").valueAsDate;

        const savoirInutile = new SavoirInutile(libelle, auteur, dateSaisie);

        if (savoirInutile.toutEstSaisie()) {
            this.serviceSI.ajouterSavoir(savoirInutile);
            this.afficherTableauSavoirsInutiles();
            this.chargementTermine();
        } else {
            alert("Tous les champs sont obligatoires");
            document.getElementById("libelleSavoir").focus();
        }
    }

    supprimer(event) {
        const index = event.currentTarget.id;
        if (confirm(`Voulez-vous supprimer le savoir "${tableauSavoirsInutiles[index].libelle}"?`)) {
            this.serviceSI.supprimerSavoir(index);
            this.afficherTableauSavoirsInutiles();
            this.chargementTermine();
        }
    }

    //Modification pour gérer les évènements des boutons
    trier(type) {
        this.serviceSI.trierSavoirs(type);
        this.afficherTableauSavoirsInutiles();
    }


    //Gestion des boutons et de leur association d'évènements
    activerBouton() {
        document.getElementById("btnAdd").onclick =(() => this.ajouter());
       const allBtnTri = document.querySelectorAll("#btnTri > button");
        for (const btn of allBtnTri) {
            btn.addEventListener('click',(event) => {
                    const type = event.currentTarget.id;
                    this.trier(type);
                }
            );
        }
    }

    initialisationVue(){
        this.chargementTermine();
        this.activerBouton();
    }
}

const controleur = new ControlleurSI(new ServiceSI());
controleur.initialisationVue();
