class Obstacle {
    constructor() {
        // this.w = 40;
        // this.y = 0;
        // this.x1 = random((width / 2) - 15, (width / 2) - (width / 4));
        // this.x2 = random((width / 2) - 15, (width / 2) - (width / 4));
        this.x = random(width/2,width/4);
        this.y = -10;
        this.w = 40;
        this.h = 55;
        this.spped = 8;
        this.c = false;
    }
    show() {
        if (this.c == true) {
            fill(255, 0, 0);
        } else {
            fill(0, 255, 0);
            // fill(random(255),random(255),random(255))
            stroke(0)
            strokeWeight(8);
        }
        // rect(0, this.y, this.x2, this.w);
        // rect(width - this.x2, this.y, this.x2, this.w);
        rect(this.x, this.y, this.w, this.h)
    }
    update() {
        this.y += 5;
    }
    collides(car) {
        // console.log("car",car.x,"x",this.x1)
        // if (car.x < this.x1 || car.x > width - this.x2) {
        //     if (car.y > this.y || car.y < this.y + this.w) {
        //         console.log(car.y, this.y)
        //         this.c = true;
        //         return true;
        //     }
        // }
        if (car.x + car.w >= this.x &&
            car.x <= this.y + this.w &&
            car.y + car.h>= this.y &&
            car.y <= this.y+ this.h
            ){
                this.c = true;
                return true;
            }
       

    }
}