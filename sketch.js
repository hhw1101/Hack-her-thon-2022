
let cardBack;
let bg;
let cards = [];

function preload() {
  cardBack = loadImage("Graphics/cardbacking.png");
  bg = loadImage("Graphics/bg.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg)
  // image(cardBack, 0, 0, 13,5);

  let cardWidth = windowWidth / 5
  let cardHeight = floor(windowHeight / 2.5)
  for (let i = 0; i < 5; i++) {
    cards[i] = new Card(i * cardWidth + 10, cardHeight / 2, cardWidth, cardHeight);

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(220);
  for (let i = 0; i < 5; i++) {
    cards[i].show();

  }
  // card0.show()
  // circle(100, 100, 100);
}

