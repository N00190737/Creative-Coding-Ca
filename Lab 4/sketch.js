let molecules=[];

function setup(){
    createCanvas(1800, 1000);
    noCursor();
    for(let i=0; i<200; i++){
        molecules.push(new Molecule())
    }
    rectMode(CENTER);
}

function draw(){
    background(55, 104, 128);
    molecules.forEach(molecule => molecule.render());
    molecules.forEach(molecule => molecule.move());    
}

let distance = (x,y) => Math.sqrt(x*x +y*y);