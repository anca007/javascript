let controleur =
    (
        function () {

            let controleur = {};
            //récupération des savoirs depuis le navigateur
            let knowTab = servicelocalStorage.getData();

            //si rien ou initialise un tableau
            if (!knowTab) {
                knowTab = []
                //sinon il faut typer les éléments du tableau  pour en faire des instances de SavoirInutile
            } else {
                knowTab.forEach(function (know) {
                    //attention ici c'est le prototype qu'on lie
                    Object.setPrototypeOf(know, SavoirInutile.prototype)
                    //transformation de la chaine date en objet date
                    know.date = new Date(know.date);
                })
            }

            //ajout nouveau savoir
            controleur.addKnowledge = function () {

                //instanciation
                let know = new SavoirInutile(
                    document.getElementById('knowledge').value,
                    document.getElementById('author').value,
                    document.getElementById('date').valueAsDate);

                if (know.isOk()) {
                    knowTab.push(know);
                    servicelocalStorage.save(knowTab)
                } else {
                    alert("Veuillez remplir tous les champs !")
                }

                controleur.displayKnowledge();
            }

            //suppression savoir
            controleur.deleteKnowledge = function (e) {

                if (confirm("Etes-vous sûr de vouloir supprimer ce savoir ?")) {
                    //suppression de l'objet dans le tableau
                    console.log(e.currentTarget.id);
                    knowTab.splice(e.currentTarget.id, 1)
                    servicelocalStorage.save(knowTab)
                    //suppression de l'élément affiché
                    e.currentTarget.remove();
                }

            }

            controleur.displayKnowledge = function () {

                document.getElementById('list').innerHTML = "";

                knowTab.forEach(function (know, index) {

                    let liKnow = document.createElement('li');
                    let pKnow1 = document.createElement('p');
                    let pKnow2 = document.createElement('p');

                    liKnow.addEventListener('click', controleur.deleteKnowledge);


                    pKnow1.innerText = know.knowledge;
                    pKnow2.innerText = know.getInfos();

                    liKnow.id = index;
                    liKnow.appendChild(pKnow1);
                    liKnow.appendChild(pKnow2);

                    document.getElementById('list').appendChild(liKnow);
                })
            }


            controleur.sortByAuthor = function () {

                knowTab.sort(function (a, b) {
                    //pour comparer 2 strings
                    return a.author.localeCompare(b.author)
                })
                controleur.displayKnowledge();
            }

            controleur.sortByDate = function () {

                knowTab.sort(function (a, b) {
                    return a.date - b.date;
                })

                controleur.displayKnowledge();
            }


            return controleur;
        }

    )()

controleur.displayKnowledge();