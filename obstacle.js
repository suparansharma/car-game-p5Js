

let p;
class Obstacle
{
    constructor()
    {
        this.w=500;
        this.y= innerHeight-this.w;
        this.x1=random(innerWidth/2);
        this.x2=random(innerWidth/2)-50;
        this.c=false;
    }

    show()
    {
        rect(0,this.y,this.x2,100);
        //rect(this.x1,this.y-200,100,100);
        //circle(this.x1+200,this.y-200,50);

        rect(innerWidth-this.x2,this.y,this.x2,100);
    }
    update()
    {
        this.y +=5;
    }
    collides(car)
    {
        this.p=car.update();
        console.log(this.p);
        //console.log(this.x1);
        //console.log(this.x2);
        //if(car.x < innerWidth-this.x1 || car.x> innerWidth-this.x2)
        {
            if(car.x < this.x1 || car.x > this.x2+this.w)
            {
               // if(car.x> this.x1 && )
                this.c = true;
            }
            

        }
    }
}