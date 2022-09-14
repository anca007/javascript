let uneVariableGlobale = "coucou";

function treatment(){

    uneVariableLocale = "salut";
    console.log("uneVariableGlobale vaut '%s'", uneVariableGlobale);
    console.log("uneVariableLocale vaut '%s'", uneVariableLocale);

    uneVariableLocaleSansLet = "Hello";

    console.log("uneVariableLocaleSansLet vaut '%s'", uneVariableLocaleSansLet);
}

treatment();

console.log("uneVariableLocaleSansLet vaut '%s'", uneVariableLocaleSansLet);
console.log("uneVariableLocale vaut '%s'", uneVariableLocale);

let nonDefinie = undefined;

console.log(nonDefinie==undefined);
console.log(nonDefinie==null);

console.log(Number.MAX_VALUE)

var eleves= new Array(15);
console.log(eleves.toString())