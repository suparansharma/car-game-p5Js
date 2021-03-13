let car;
let obs = [];
function setup(){
    createCanvas(windowWidth, windowHeight - 100);
    car = new Car();
    obs.push(new Obstacle());
}
function draw(){
    background(71,72,76);

    car.update();
    for (let i = 0; i < obs.length; i++) {
        // const element = obs[i];
        if(obs[i].collides(car)){
            noLoop();
        }
        
        obs[i].show();
        obs[i].update();
        
    }
    if (frameCount % 70 == 0) {

        // document.getElementById("point").innerText = frameCount;
        obs.push(new Obstacle());
    }
    car.show();
}
function keyPressed(){
    if (keyCode===ENTER) {
        // car.cright();
        console.log("right")
    }
    if (keyCode === LEFT_ARROW) {
        // car.cleft();
        console.log("left")
    }
    
}