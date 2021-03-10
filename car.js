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
    
   
    cleft()
    {
        this.x -= 25;
        if(this.x< 0)
        {
            this.x+=25;
        }
    }
    cright()
    {
        this.x += 25;
        if(this.x> innerWidth)
        {
            this.x-=75;
        }
    }
     update()
    {
        
       return this.x;
        //console.log(this.x);
    }
   /* collides(obs)
    {
        //console.log('x1=',obs.x1);
        //console.log('x2=',obs.x2);
       // console.log('x = ',this.x);
    }*/
    

    
}