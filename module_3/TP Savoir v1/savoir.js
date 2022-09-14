let knowTab = [];

//création class SavoirInutile
class SavoirInutile {

    constructor(knowledge, author, date) {
        this.knowledge = knowledge;
        this.author = author;
        this.date = date;
    }

    //test si tous les champs sont remplis
    isOk(){
        return this.knowledge !== "" && this.author !== "" && this.date !== "";
    }

    //renvoie les informations du savoir
    getInfos(){

        let day = this.date.getDate();
        let month = this.date.getMonth() + 1;
        let year = this.date.getFullYear();

        return "Par " + this.author + ", le " + day + "/" + month + "/" + year;
    }

}

//ajout nouveau savoir
function addKnowledge() {

    //instanciation
    let know = new SavoirInutile(
        document.getElementById('knowledge').value,
        document.getElementById('author').value,
        document.getElementById('date').valueAsDate);

    if (know.isOk()) {
        knowTab.push(know);

    } else {
        alert("Veuillez remplir tous les champs !")
    }

    displayKnowledge();
}

//suppression savoir
function deleteKnowledge(e) {

    if (confirm("Etes-vous sûr de vouloir supprimer ce savoir ?")) {
        //suppression de l'objet dans le tableau
        console.log(e.currentTarget.id);
        knowTab.splice(e.currentTarget.id, 1)
        //suppression de l'élément affiché
        e.currentTarget.remove();
    }

}

function displayKnowledge() {

    document.getElementById('list').innerHTML = "";

    knowTab.forEach(function (know, index) {

        let liKnow = document.createElement('li');
        let pKnow1 = document.createElement('p');
        let pKnow2 = document.createElement('p');

        liKnow.addEventListener('click', deleteKnowledge);

        pKnow1.innerText = know.knowledge;
        pKnow2.innerText = know.getInfos();

        liKnow.id = index;
        liKnow.appendChild(pKnow1);
        liKnow.appendChild(pKnow2);

        document.getElementById('list').appendChild(liKnow);
    })
}


function sortByAuthor(){

    knowTab.sort(function (a, b){
        //pour comparer 2 strings
        return a.author.localeCompare(b.author)
    })
    displayKnowledge();
}

function sortByDate(){

    knowTab.sort(function (a, b){
        return a.date - b.date;
    })

    displayKnowledge();
}



