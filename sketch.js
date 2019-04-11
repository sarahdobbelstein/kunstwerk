// Informatica opdracht van Sarah Dobbelstein
//
// Voor deze opdracht heb ik een voorbeeld uit de bibliotheek aangepast.
//

//
// Het programma maakt een zwarte achtergrond (canvas) en tekent dan een
// sinus golf van blauwe balletjes die een beetje van kleur veranderen. Ik vind dit 
// een hele mooie vorm en door hem iedere keer een beetje te veranderen lijkt het 
// alsof hij over het scherm loopt.
//

// Hieronder staan de variabelen die in de functies worden gebruikt
let xafstand = 16;   // De afstand tussen de balletjes
let beginhoek = 0.0; // De hoek begint bij 0.0 graden en wordt iedere keer vergroot
let hoogte = 75.0;   // Hoogte van de golf

// Waarde waar X mee wordt vergroot
// Door deze waarde aan te passen krijg je ander soort golf
let dx = 0.16;

// y-coordinaten worden opgeslagen in een array
let y_waarden;

// functie setup wordt 1 keer uitgevoerd bij de start
// van het programma. Hiermee maak ik het 'canvas'
// (de zwarte achtergrond en zet de basis variabelen
function setup() {
  createCanvas(710, 400);
  y_waarden = new Array(45); //Maak een nieuw array met 45 vakjes
}

// Functie draw wordt iedere keer uitgevoerd en voert
// de volgende stappen uit:
//    1. Maak het canvas zwart
//    2. Bereken de y waarden van de golf (berekenY)
//    3. Teken de golf
function draw() {
  background(0);
  berekenSinusgolf();
  tekenSinusgolf();
}

// Deze functie rekent de y coordinaten uit voor alle Sinuspunten
// Omdat de beginhoek steeds met 0.02 graden worden verhoogd komen de
// y-coordinaten van de sinusgolf steeds op een andere plek en gaat de 
// golf bewegen
function berekenSinusgolf() {
  beginhoek = beginhoek + 0.02;

  // Hieronder maak ik een for loop die alle 45 vakjes vult met de 
  // y-waarde van de sinus golf.
  let x = beginhoek;
  for (let i = 0; i < 45; i++) {
    y_waarden[i] = sin(x) * hoogte;
    x = x + dx;
  }
}

// teken de bolletjes van de sinus golf
function tekenSinusgolf() {
  noStroke();

  // Hieronder nog een keer een for-loop die alle 45 bolletje van de 
  // sinusgolf tekent. Voor elk bolletje veranderd de kleur 
  for (let x = 0; x < 45; x++) {
    // Verander de kleur van de slang door de formule hieronder
    fill(x * 4, x * 4, x * 10);
    ellipse(x * xafstand, height / 2 + y_waarden[x], 16, 16);
  }
}

