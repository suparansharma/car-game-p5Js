
let car;
let obs=[];

function setup()
{
    createCanvas(1500,700);
    
    car=new Car();
    obs.push(new Obstacles());
    //obs=new Obstacles();

}

function draw()
{
    background(100,200,300);
    for(let i=0;i<obs.length;i++)
    {
        if(obs[i].collides(car))
        {
            console.log('collision');
            noLoop();
        }
    
    obs[i].update();
    obs[i].show();

    if(obs[i].isOutOfScreen())
    {
        obs.splice(i,1);
    }

    }
    car.show();

    if(frameCount % 100 == 0)
    {
        obs.push(new Obstacles());
    }
    

    //car.update();
    
}
function keyPressed()
{
    if(key == '.')
    {
        car.cright();
    }
    else if(key == ',')
    {
        car.cleft();
    }
}