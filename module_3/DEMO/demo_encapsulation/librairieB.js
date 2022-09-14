const lib =

   function () {
        let librairie = {}
        librairie.data = "Data"
        librairie.traitement = function () {
            document.writeln("Utilisation de la fonction traitement de la librairie B")
        }
        return librairie
    }

const librairieB = lib();