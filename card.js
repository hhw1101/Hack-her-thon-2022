class Card {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        // this.card = img;
    }
    clicked(px, py) {
        if (px > this.x && px < this.x + this.w && py > this.y && py > this.y + this.h) {

        }
    }
    flip() {

    }

    show() {
        image(cardBack, this.x, this.y, this.w, this.h)
    }
}