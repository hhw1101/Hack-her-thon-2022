
let cardBack;
let cards = [];

function preload() {
  cardBack = loadImage("Graphics/cardbacking.png");

}

function setup() {
  createCanvas(400, 400);
  // image(cardBack, 0, 0, 13, 15);
  let a = new Card(100, 100, 50, 40);
  a.show()
  cards[0] = new Card();
}


function draw() {
  background(220);
  card0.show()
  // circle(100, 100, 100);
}

