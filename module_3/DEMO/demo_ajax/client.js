window.onload = afficherMarins;

function ajouterMarin() {

    let value = document.getElementById('nouveauMarin').value;

    if (value) {

        fetch('http://localhost:8080', {method: 'POST', body: value}
        ).then()
            .then(function (data) {
                alert(data + " a été ajouté")
                afficherMarins()
            });
    }


}

function afficherMarins() {

    //avec fetch
    fetch('http://localhost:8080', {method: 'GET'}
    ).then(function (response) {
        return response.json();
    }).then(function (data) {

        document.getElementById('listeMarins').innerText = ''

        data.forEach(function (marin) {

            let p = document.createElement('p')
            p.innerText = marin
            document.getElementById('listeMarins').append(p)
        })
    });


}




