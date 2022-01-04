class Molecule{
    constructor(){
        this.radius = random(5,50);
        this.pos = createVector(
            Math.round(Math.random()*1500),
            Math.round(Math.random()*1500)
        );
        this.speed = createVector(
            Math.round(Math.random()*10-5),
            Math.round(Math.random()*10-5)
        );
        this.r = random(0,255);
        this.g = random(0,255);
        this.b = random(0,255);
    }

    render(){
        let angle = atan2(this.speed.x,this.speed.y)
        push ();
        fill(this.r,this.g,this.b);
        noStroke();
        translate (this.pos.x,this.pos.y);
        rotate (angle);
        rect(0, 0, this.radius, this.radius);
        pop();
    }

    move(){
        this.pos.x = this.pos.x + this.speed.x;
        this.pos.y = this.pos.y + this.speed.y;
    }
}