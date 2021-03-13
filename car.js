class Car {
    constructor() {
        this.x = width / 2;
        this.y = height /1.2;
        this.w = 50;
        this.h = 55,
        this.gravity = 0.25;
        this.velocity = 0;
    }
    show() {
        fill(255, 255, 0);
        stroke(0)
        strokeWeight(4);
        // ellipse(this.x, this.y, this.r * 2);
        // rect(this.x, this.y, this.r, 100);
        rect(this.x, this.y, this.w, this.h);

    }
    update() {
        // this.velocity +=  this.gravity;
        // this.x = this.velocity;
        // this.velocity += this.gravity; 
        // this.x += this.velocity;
        // // console.log(this.velocity)
        // if(this.x > width - this.r ){
        //     this.x = width - this.r;
        //     this.velocity = 0;
        // }
        // if (this.x < this.r) {
        //     this.x = this.r;
        //     this.velocity = 0;
        // }
        this.x += 0;
    }

    cright() {
        this.x += 25;
    }
    cleft() {
        this.x -= 25;

    }
}