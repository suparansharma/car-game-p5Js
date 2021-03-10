let obs = [];
let car;

function setup()
{
    createCanvas(innerWidth,innerHeight);
    car=new Car();
    obs.push(new Obstacle());
}

function draw()
{
    background(50,100,150);
    car.update();
    
    
    //console.log('update');
    for(let i=0;i<obs.length;i++)
    {
     obs[i].update();
    if(obs[i].collides(car))
    {
        console.log('collision!');
        noLoop;
    }
   
    obs[i].show();
    
    }
    
    if(frameCount % 30 == 0)
    {
        obs.push(new Obstacle());
    }
    
    car.show();

}
function keyPressed()
{
    if(key =='.')
    {
        car.cright();
    }
    if(key == ',')
    {
        car.cleft();
    }
}