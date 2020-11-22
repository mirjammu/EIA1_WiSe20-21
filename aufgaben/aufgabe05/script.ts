//Werte Afrika
var afrika2018 : number = 1235.5;
var afrika2008 = 1028;
//Werte Südamerika
var sa2018 : number = 1261.5;
var sa2008 : number = 1132.6;
//Werte Europa
var euro2018 = 4209.3;
var euro2008 = 4965.7;
//Werte Nordamerika
var na2018 = 6035.6;
var na2008 = 6600.4;
//Werte Asien
var asien2018 = 16274.1;
var asien2008 = 12954.7;
//Werte Australien
var austr2018 = 2100.5;
var austr2008 = 1993;

//Berechnungen:
var emissionenGesamt = afrika2018 + sa2018 + euro2018 + na2018 + asien2018 + austr2018;
//Afrika
var prozentAfrikaGes = ((afrika2018 / emissionenGesamt) * 100).toFixed(1);
var prozentAfrikaVergl = (((afrika2018 / afrika2008) - 1) * 100).toFixed(1);
var wertAfrikaVergl = (afrika2018 - afrika2008).toFixed(1);
//Südamerika
var prozentSaGes = ((sa2018 / emissionenGesamt) * 100).toFixed(1);
var prozentSaVergl = (((sa2018 / sa2008) - 1) * 100).toFixed(1);
var wertSaVergl = (sa2018 - sa2008).toFixed(1);
//Europa
var prozentEuroGes = ((euro2018 / emissionenGesamt) * 100).toFixed(1);
var prozentEuroVergl = (((euro2018 / euro2008) - 1) * 100).toFixed(1);
var wertEuroVergl = (euro2018 - euro2008).toFixed(1);
//Nordamerika
var prozentNaGes = ((na2018 / emissionenGesamt) * 100).toFixed(1);
var prozentNaVergl = (((na2018 / na2008) - 1) * 100).toFixed(1);
var wertNaVergl = (na2018 - na2008).toFixed(1);
//Asien
var prozentAsienGes = ((asien2018 / emissionenGesamt) * 100).toFixed(1);
var prozentAsienVergl = (((asien2018 / asien2008) - 1) * 100).toFixed(1);
var wertAsienVergl = (asien2018 - asien2008).toFixed(1);
//Australien
var prozentAustrGes = ((austr2018 / emissionenGesamt) * 100).toFixed(1);
var prozentAustrVergl = (((austr2018 / austr2008) - 1) * 100).toFixed(1);
var wertAustrVergl = (austr2018 - austr2008).toFixed(1);

//Konsolenausgabe Afrika:
console.log('Die Emission von Afrika ist: ' + afrika2018 + 'kg CO2.');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + prozentAfrikaGes + '%.');
console.log('Für Afrika hat sich 2018 die Emission im Vergleich zu 2008 um ' + prozentAfrikaVergl + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + wertAfrikaVergl + 'kg CO2.');
//Konsolenausgabe Südamerika
console.log('Die Emission von Südamerika ist: ' + sa2018 + 'kg CO2.');
console.log('Relativ zur Gesamtemission der Welt verursacht Südamerika damit ' + prozentSaGes + '%');
console.log('Für Südamerika hat sich 2018 die Emission im Vergleich zu 2008 um ' + prozentSaVergl + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + wertSaVergl + 'kg CO2.'); 
//Konsolenausgabe Europa
console.log('Die Emission von Europa ist: ' + euro2018 + 'kg CO2.');
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit ' + prozentEuroGes + '%.');
console.log('Für Europa hat sich 2018 die Emission im Vergleich zu 2008 um ' + prozentEuroVergl + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + wertEuroVergl + 'kg CO2.');
//Konsolenausgabe Nordamerika
console.log('Die Emission von Nordamerika ist: ' + na2018 + 'kg CO2.');
console.log('Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ' + prozentNaGes + '%.');
console.log('Für Nordamerika hat sich 2018 die Emission im Vergleich zu 2008 um ' + prozentNaVergl + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + wertNaVergl + 'kg CO2.');
//Konsolenausgabe Asien
console.log('Die Emission von Asien ist: ' + asien2018 + 'kg CO2.');
console.log('Relativ zur Gesamtesmission der Welt verursacht Asien damit ' + prozentAsienGes + '%.');
console.log('Für Asien hat sich 2018 die Emission im Vergleich zu 2008 um ' + prozentAsienVergl + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + wertAsienVergl + 'kg CO2.');
//Konsolenausgabe Australien
console.log('Die Emission von Australien ist: ' + austr2018 + 'kg CO2.');
console.log('Relativ zur Gesamtemission der Welt verursacht Australien damit ' + prozentAustrGes + '%.');
console.log('Für Australien hat sich 2018 die Emission im Vergleich zu 2008 um ' + prozentAustrVergl + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + wertAustrVergl + 'kg CO2.');