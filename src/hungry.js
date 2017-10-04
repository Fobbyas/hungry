const {Button, TextView, ImageView, ui} = require('tabris');

// mahdolliset nimet taulukossa
var paikat = ["McDonald's", "Pikku Quattro", "Pancho Villa", "Subway", "Hesburger", "Kotipizza", "Dallas Pizza Palazzo", "Rax Buffet", "Pizzeria Wanhis", "Amarillo"];
var aika = ["maanantaina", "tiistaina", "keskiviikkona", "torstaina", "perjantaina", "lauantaina", "sunnuntaina"]

// nappi
let milloin = new Button({
  centerX: 0, centerY: 0,
  text: 'Milloin?'  
}).appendTo(ui.contentView);

new ImageView({
  layoutData: {width: 360, top: 0},
  image: {src:"http://88nn.info/uploads/fotos/31/img_321434.jpg"},
}).appendTo(ui.contentView);

// nappi
let molemmat = new Button({
  centerX: 0, centerY: 200,
  text: 'Paikka ja aika?'  
}).appendTo(ui.contentView);

//textview paikan nimelle
let aikapaikka = new TextView({
  centerX: 0, top: [molemmat, 20],
  font: '24px'  
}).appendTo(ui.contentView);

//textview paikan nimelle
let paiva = new TextView({
  centerX: 0, top: [milloin, 20],
  font: '24px'  
}).appendTo(ui.contentView);

// nappi
let nappi = new Button({
  centerX: 0, centerY: -200,
  text: 'Mihin syömään?'  
}).appendTo(ui.contentView);

//textview paikan nimelle
let paikka = new TextView({
  centerX: 0, top: [nappi, 20],
  font: '24px'  
}).appendTo(ui.contentView);

//nappia painetaan kutsutaan funktio molemmatNimi
molemmat.on('select', molemmatNimi).appendTo(ui.contentView);

function molemmatNimi() {
  // arpoo taulukosta aikoja ja paikkoja
  var arvottu = Math.floor((Math.random() * paikat.length));
  var arvo = Math.floor((Math.random() * aika.length));
  // näytä paikka siinä kohtaa taulukkoa kun arvottu nro oli
  aikapaikka.text = paikat[arvottu] + ', ' + aika[arvo];
}
//nappia painetaan kutsutaan funktio ruokaNimi
nappi.on('select', ruokaNimi).appendTo(ui.contentView);

function ruokaNimi() {
  // arvotaan nollan ja taulukossa olevien paikkojen määrän väliltä
  var arvottunro = Math.floor((Math.random() * paikat.length));
  // näytä paikka siinä kohtaa taulukkoa kun arvottu nro oli
  paikka.text = 'Maistuisko ' + paikat[arvottunro] + '?';
 
}
//nappia painetaan kutsutaan funktio aikaNimi
milloin.on('select', aikaNimi).appendTo(ui.contentView);
  
 function aikaNimi() {
  // arvotaan nollan ja taulukossa olevien paikkojen määrän väliltä
  var arvottunumero = Math.floor((Math.random() * aika.length));
  // näytä paikka siinä kohtaa taulukkoa kun arvottu nro oli
  paiva.text = 'Ehtiskö ' + aika[arvottunumero] + '?';
}
      
      
      