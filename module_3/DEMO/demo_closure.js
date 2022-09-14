const librairie =
    (
        function () {
            let lib = {}
            lib.enregistrer = function (cible) {
                if(cible.toLowerCase() === "memoire"){
                    return function (data) {
                        console.log("J'enregistre les datas avec en mémoire", data)
                    }
                }else if(cible.toLowerCase() === 'rest'){
                    return function (data) {
                        console.log("J'enregistre les datas avec l'api REST", data)
                    }
                }
            }
            return lib
        }
    )();

let save = librairie.enregistrer("memoire")
save("première sauvegarde");
save =  librairie.enregistrer("rest")
save("deuxième sauvegarde");