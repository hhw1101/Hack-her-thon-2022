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
        if (px > this.x && px < this.x + this.w && py > this.y && py < this.y + this.h) {
            console.log('clicked')
            this.show()
        }
    }

    flip(x, y) {


    }

    matched() {
        if (this.card) {

        }
    }

    show() {
        image(this.object, this.x, this.y, this.w, this.h)
    }
}