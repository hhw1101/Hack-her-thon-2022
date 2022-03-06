
let cardBack;
let bg;
let cards = [];
let imageName = ["apple.webp", 'banana.webp', 'cat.png', 'dog.png', 'orange.jpg', 'pear.png']
let images = []
function preload() {
  cardBack = loadImage("Graphics/Card/cardbacking.png");
  bg = loadImage("Graphics/bg.jpg");
  for (let i = 0; i < imageName.length; i++)
    append(images, loadImage('Graphics/Objects/' + i))
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg)
  // image(cardBack, 0, 0, 13,5);

  let cardWidth = windowWidth / 5
  let cardHeight = floor(windowHeight / 2.5)

  for (let i = 0; i < 4; i++) {
    cards[i] = new Card(i * cardWidth + 100, cardHeight / 2, cardWidth, cardHeight, random(images));

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

