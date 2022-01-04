let nParticles = 200;
let particles = [];
let particleSize = 40;
let screenWidth = 350;
let screenHeight = 350;
let maxCounter = 150;
let lines = [];


function checkCollisions() {
  lines = [];
  for(let i=0;i<nParticles;i++){
    for(let j=0;j<nParticles;j++) {
      if(i!=j) {
        let distance = p5.Vector.dist(
        particles[i].position,
        particles[j].position
        );
        if(distance < particleSize) {
          if(particles[i].counter == 0) {
       particles[i].direction.rotate(Math.random());
       particles[i].counter = maxCounter;
          }if(particles[j].counter == 0) {
       particles[j].direction.rotate(Math.random());
       particles[j].counter = maxCounter;
        }
          lines.push(
          [particles[i].position,
           particles[j].position]
        );        
        }
      }
    }
  }
}

function setup() {
  createCanvas(screenWidth,screenHeight);
  stroke(0, 80);
  
  for(let i=0;i<nParticles;i++)
    particles.push(new Particle());
}

function draw() {
  background(this.r, this.g, this.b);
  checkCollisions();
  for(let i=0;i<nParticles; i++) {
    particles[i].update();
  }
  for(let i=0; i<lines.length;i++) {
    line(
      lines[i][0].x, lines[i][0].y,
      lines[i][1].x, lines[i][1].y);
  }
}