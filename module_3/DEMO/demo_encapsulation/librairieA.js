const librairieA =
    (
        function () {
            let librairie = {}
            librairie.data = "Data"
            librairie.traitement = function () {
                document.writeln("Utilisation de la fonction traitement de la librairie A")
            }
            return librairie
        }
    )();