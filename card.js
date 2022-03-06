class Card {
    constructor(x, y, w, h, img, word) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.object = img;
        this.name = word;
    }
    clicked(px, py) {
        if (px > this.x && px < this.x + this.w && py > this.y && py > this.y + this.h) {
            this.flip();
            console.log('clicked')
        }
        // if (dist(this.x, this.y, mouseX, mouseY) < this.r && this.brightness == 0) {
        //     //console.log('clicked on bubble');
        //     this.brightness = 255;
    }
    flip(x, y) {

    }

    matched() {
        if (this.card) {

        }
    }

    show() {
        image(cardBack, this.x, this.y, this.w, this.h)
    }
}