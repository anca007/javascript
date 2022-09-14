//modification propriété CSS grâce à un select

const init = function (){
    document.getElementById('changeColor').addEventListener('change', function () {
        document.querySelector('body').setAttribute('class', this.value)
    })
}

window.onload = init;


function changeColor() {

    let value = document.getElementById('changeColor').value;
   // document.querySelector('body').setAttribute('class', value)
    //document.querySelector('body').style.backgroundColor = value;
    document.querySelector('body').className = value;
}



function oneClick(){
    document.getElementById('clic').innerText = "Vous avez cliquer 1 fois !";
}

function dbClick(){
    document.getElementById('clic').innerHTML = "<h1>Vous avez cliquer 2 fois !</h1>";
}