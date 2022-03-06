
let cardBack;
let bg;
let cards = [];
let imageName = ['apple.webp', 'banana.webp', 'cat.png', 'dog.png', 'orange.jpg', 'pear.png']
let images = []


function preload() {
  cardBack = loadImage("Graphics/Card/cardbacking.png");
  bg = loadImage("Graphics/bg.jpg");
  for (let i = 0; i < imageName.length; i++) {
    // images[i] = loadImage('Graphics/Objects/' + i)
    append(images, loadImage('Graphics/Objects/' + imageName[i]))
    // print(images[i], imageName[i])
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);
  // image(cardBack, 0, 0, 13,5);

  let cardWidth = windowWidth / 5
  let cardHeight = floor(windowHeight / 2.5)

  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 4; i++) {
      let r = random(6)
      append(cards, new Card(i * cardWidth + windowWidth / 8, cardHeight * j + windowHeight / 6, cardWidth, cardHeight, images[r], imageName[r]));
    }
  }
}



function draw() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].showBack();

  }
  // card0.show()
  // circle(100, 100, 100);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg);
  // does not seem to be doing what I think it is meant to do
}
function mousePressed() {
  // if (mouseX > cards.x && mouseX < cards.x + cardWidth && mouseY > cards.y && mouseY < cards.y + cardHeight && mouseIsPressed) {
  //   cards.flip(mouseX, mouseY)
  // }
  for (let i of cards) {
    i.clicked(mouseX, mouseY);
    //i.rollover(mouseX,mouseY); //i.clicked(mouseX,mouseY);
  }

}