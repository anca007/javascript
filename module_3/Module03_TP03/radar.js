let dateDebut;
let dateIntermediaire;
let nombreCaracteresIntermediaire;
let zoneDeControle;
let zoneVitesseGenerale;
let zoneVitesseIntermediaire;

function demarrer()
{
    zoneDeControle = document.getElementById("zoneDeControle");
    zoneVitesseGenerale = document.getElementById("vitesseGenerale");
    zoneVitesseIntermediaire = document.getElementById("vitesseIntermediaire");
    zoneDeControle.addEventListener("focus",lancerRadar);
}

function lancerRadar() {
    dateDebut = Date.now();
    dateIntermediaire = dateDebut;
    nombreCaracteresIntermediaire=0;
    flasher(5);
}

function flasher(frequence){
    setTimeout(mettreAJourCompteur, frequence*1000);
}

function mettreAJourCompteur()
{
    const maintenant = Date.now();
    const nombreCaracteresSaisis = zoneDeControle.value.length;

    const dureeGlobale = maintenant - dateDebut;
    let dureeDernierIntermediaire = maintenant - dateIntermediaire;
    let nombreCaracteresSurDernierIntermediaire = nombreCaracteresSaisis - nombreCaracteresIntermediaire;

    const vitesseGenerale = parseInt(nombreCaracteresSaisis/(dureeGlobale/1000)*60);
    const vitesseIntermediaire = parseInt(nombreCaracteresSurDernierIntermediaire/(dureeDernierIntermediaire/1000)*60);

    afficherVitesse(zoneVitesseGenerale,vitesseGenerale.toString());
    afficherVitesse(zoneVitesseIntermediaire,vitesseIntermediaire);

    nombreCaracteresIntermediaire = nombreCaracteresSaisis;
    dateIntermediaire=maintenant;

    flasher(5);
}

function afficherVitesse(zoneVitesse,vitesse)
{
    zoneVitesse.innerText = vitesse;
    if(vitesse<60)
    {
        zoneVitesse.className="lent";
    }
    else if(vitesse<120)
    {
        zoneVitesse.className="intermediaire";
    }
    else
    {
        zoneVitesse.className="rapide";
    }
}

