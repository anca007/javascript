
//EX 1
let tab = [];
let cpt = 0;

//NaN
console.log(12 * "gfgdfg");

do {

    let number = parseInt(Math.random() * 100);
    cpt++;

    if(!tab.includes(number)){
        tab.push(number);
    }

}while (tab.length < 100);

//checker en ligne fonction sort()
tab.sort(function(a,b){
    return a - b;
});

console.log(cpt);
console.log(tab);

//EX2

let sentence = "une chaine avec des lettres dans un certain ordre pour donner du sens";

let sentTab = sentence.split("");

sentTab.sort();

console.log(sentTab)

//EX3

let phrase = "une phrase sans majuscule";

let phraseTab = phrase.split(" ");

phrase = "";

for(let i = 0; i < phraseTab.length; i++){
    phrase += phraseTab[i].charAt(0).toUpperCase() + phraseTab[i].substr(1) + " ";
}

console.log(phrase);


