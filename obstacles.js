class Obstacles
{
    constructor()
    {

        this.y1=700;
        this.w=70;
        this.y=700-this.w;
        //this.y=innerHeight-this.w;
        this.x1=random(innerWidth/2);
        this.x2=random(innerWidth/2);
        this.c=false;
    }

    show()
    {
        
       // fill(192,192,192);
        rect(0,this.x1,this.x1,this.w);
        rect(1500-this.x2,this.x1,this.x2,this.w);
        
        
    }
    update()
    {
        //this.y -=100;
        console.log('2nd rect');
        this.x1 += 5;
        //console.log(this.y1);
    }
    collides(car)
    {
        if(car.x > 700 - this.x2)
        {
            if(car.x > this.x1 && car.x < this.x1 && car.x< this.x1 +this.w)
            {
                this.c=true;
                return true;
            }
        
        }

    }
    isOutOfScreen()
    {
        if(this.x1 < -this.w)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}