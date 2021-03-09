class Car
{
    constructor()
    {
        this.x=750;
        this.y=550;
        
    }
    show()
    {
        fill(246,132,109);
       
        rect(this.x,this.y,25,50);
    }
   /* update()
    {
        this.y -=1.5;
        console.log('m20');
    }*/

    cright()
    {
        this.x +=20;
    }
    cleft()
    {
        this.x -=30;
    }
}