let arrow, dx, dy, angle;

function setup(){
    createCanvas(640, 480);
    background(255);
    arrow = new Arrow(width/2, height/2, 0);
    
}

function draw(){
    background(255);
    arrow.updateValues();
    arrow.drawArrow();
}