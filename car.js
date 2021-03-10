class Car
{
    constructor()
    {
        this.x=innerWidth/2;
        this.y=innerHeight-150;
    }

    show()
    {
        fill(246,132,109);
        rect(this.x,this.y,50,100);
    }
    
    update()
    {
        if(this.x> innerWidth)
        {
            this.x-=75;
        }
        if(this.x< 0)
        {
            this.x+=25;
        }
    }
    
    cleft()
    {
        this.x -= 25;
    }
    cright()
    {
        this.x += 25;
    }

    
}