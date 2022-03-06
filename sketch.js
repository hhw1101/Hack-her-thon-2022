
let cardBack;
let cards = [];

function preload() {
  cardBack = loadImage("Graphics/cardbacking.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // image(cardBack, 0, 0, 13,5);
  let a = new Card(100, 100, 50, 40);
  a.show()
  cards[0] = new Card();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  card0.show()
  // circle(100, 100, 100);
}

