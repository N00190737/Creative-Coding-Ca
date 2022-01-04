class Particle{
    constructor(){
        let particle = {};
        this.position = createVector(
        Math.random() * screenWidth,
        Math.random() * screenHeight
      );
        this.direction = createVector(
        Math.random(),
        Math.random()
      );
      this.r = random(0,80);
      this.g = random(0,130);
      this.b = random(0,60);
      this.r2 = random(75,255);
      this.g2 = random(200,255);
      this.b2 = random(157,255);
      fill(this.r,this.g,this.b)
      stroke(this.r2,this.g2,this.b2, 80)
}
    update(){
        this.position.add(this.direction);
        if(this.position.x > screenWidth ||
          this.position.x < 0)
          this.position.x = 0;
        if(this.position.y > screenHeight ||
          this.position.y < 0)
          this.position.y = 0;
        if(this.counter > 0)
          this.counter -=1;
      
        this.counter = .0001;
        return Particle;
        }
}
