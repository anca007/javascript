const init = function () {

    addKnowledge();
}

function addKnowledge() {

    document.getElementById("add").addEventListener('click', function () {

        let knowledge = document.getElementById('knowledge').value;
        let author = document.getElementById('author').value;
        let date = document.getElementById('date').valueAsDate;

        if (knowledge && author && date) {

            let liKnow = document.createElement('li');
            let pKnow1 = document.createElement('p');
            let pKnow2 = document.createElement('p');

            liKnow.addEventListener('click', deleteKnowledge);


            let day = date.getDay();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();


            pKnow1.innerText = knowledge;
            pKnow2.innerText = "Par " + author + ", le " + day + "/" + month + "/" + year;


            liKnow.appendChild(pKnow1);
            liKnow.appendChild(pKnow2);

            document.getElementById('list').appendChild(liKnow);

        }else{
            alert("Veuillez remplir tous les champs !")
        }
    })
}

function deleteKnowledge(e) {

    if(confirm("Etes-vous sûr de vouloir supprimer ce savoir ?")){
        e.currentTarget.remove();
    }
}

window.onload = init;


