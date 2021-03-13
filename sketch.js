let car;
let obs = [];
function setup(){
    createCanvas(windowWidth-20, windowHeight - 100);
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
        text(frameCount);
        // document.getElementById("point").innerText = frameCount;
        obs.push(new Obstacle());
    }
    car.show();
    textAlign(CENTER);
    text(frameCount, 150, 50);
    textSize(48);
}
function keyPressed(){
    if (keyCode===RIGHT_ARROW) {
        car.cright();
    }
    if (keyCode === LEFT_ARROW) {
        car.cleft();
    }
    
}