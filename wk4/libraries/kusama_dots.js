var canvas;

// let colours = [rgb(177,255,255), rgb(0,128,128), rgb(50,82,123)]
// let choice = random(colours);
let colours

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style('z-index', '-1');
canvas.style('position', 'fixed');

    background("white");
    noStroke();
    frameRate(8);

    colours = [
    color(191,30,46), 
    color(118,18,19), 
    color(139,0,0)
    ];
    }
    
function draw() {
    let choice = random(colours);

    fill(choice);
    circle(random(width), random(height), random(200, 400));
    }
