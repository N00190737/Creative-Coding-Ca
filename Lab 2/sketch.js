function setup(){
    createCanvas(800 ,800 );
    background(0);
    ball1 = new Ball(width/2 - 150, height/2, random(-2.5, 2.5), random(-2.5,2.5), random(5,30));
    ball2 = new Ball(width/2 + 150, height/2, random(-2.5, 2.5), random(-2.5,2.5), random(5,30));
}

function draw(){
    background(0);
    ball1.drawBall();
    ball1.moveBall();
    if(this.vx < 0 + this.radius){
        this.x = this.x + Ball.bounce
    }
    if(this.vx < 1000 + this.radius){
        this.x = this.x + Ball.bounce
    }
    ball2.drawBall();
    ball2.moveBall();
}