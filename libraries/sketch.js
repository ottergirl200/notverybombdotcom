//Taken from Carrie Wang (https://editor.p5js.org/re7l/sketches/9V5oj6A1M)
// and modified and adjusted.
var canvas;

let content = 'WELCOME TO WORKBOOK 2B';
let yStart = 0;
let fonts;

function preload () {
  fonts = loadFont('./homepage/swansea_reg.ttf');
}

function setup() {
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style('z-index', '-1');
textFont (fonts);
textAlign(CENTER, CENTER);
textSize(100);
}

function draw() {
  background(255,255,255);
  for (let y = yStart; y < height; y+= 80) {
    fill (255, y/2 + 20, 255);
    text(content, width/2, y);
  }
  yStart--;
}