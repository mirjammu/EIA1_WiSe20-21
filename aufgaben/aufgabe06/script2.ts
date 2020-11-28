/* Emissionswerte der Kontinente */

/*Europa */
var europe08 : number = 4965.7;
var europe18 : number = 4209.3;

/*North America*/
var namerica08 : number = 6600.4;
var namerica18 : number = 6035.6;

/*South America*/
var samerica08 : number = 1132.6;
var samerica18 : number = 1261.5;

/*Africa*/
var africa08 : number = 1028;
var africa18 : number = 1235.5;

/*Asia*/
var asia08 : number = 12954.7;
var asia18 : number = 16274.1;

/*Australia*/
var australia08 : number = 1993;
var australia18 : number = 2100.5;

/* Berechnung der Gesamtemission*/
var gesamtemission : number = europe18 + namerica18 + samerica18 + africa18 + asia18 + australia18;

/*Namen Für Kontinente*/


function generalFunction(continent:string, acht:number, achtzehn: number )  {
    document.getElementById ("region").innerHTML= continent;
    document.getElementById ("continent").innerHTML= continent;
    document.getElementById ("absolute").innerHTML= achtzehn + " kg CO2";
    document.getElementById ("relative").innerHTML= ((achtzehn/gesamtemission)*100).toFixed(2) + "%";
    document.getElementById ("growthrate1").innerHTML= (((achtzehn/acht)-1)*100).toFixed(2) + "%";
    document.getElementById ("growthrate2").innerHTML= (achtzehn-acht).toFixed(2) + " kg CO2";
    /*Balkendiagramm*/
    document.querySelector (".chart").setAttribute('style', 'height:' + ((achtzehn/gesamtemission)*100) + "%");
}
/*Funktion und Event Europa*/
document.querySelector(".europe").addEventListener('click', function(){
   generalFunction ("Europe", europe08, europe18);
})

/* Funktion und Event Nord Amerika*/
document.querySelector(".northamerica").addEventListener('click', function (){
    generalFunction ("North America", namerica08, namerica18);
})

/*Funktion und Event Süd Amerika*/
document.querySelector(".southamerica").addEventListener('click', function(){
    generalFunction ("South America", samerica08, samerica18);
})

/*Funktion und Event Afrika*/
document.querySelector(".africa").addEventListener('click', function(){
    generalFunction("Africa", africa08, africa18);
})

/*Funktion und Event Asien*/
document.querySelector(".asia").addEventListener('click', function() {
    generalFunction ("Asia", asia08, asia18);
})

/*Funktion und Event Australien*/
document.querySelector(".australia").addEventListener('click', function(){
    generalFunction ("Australia", australia08, australia18);
})