
let img;
let smallPoint, largePoint;
function preload () {
  img = loadImage('./data/monocat.jpeg')
}

function setup () {
  createCanvas(450, 400);
  smallPoint = 4;
  largePoint = 20;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.resize(800,600);
  img.loadPixels();
  
}

function draw () {
  let pointillize = map(mouseX, 0, width, 
  smallPoint, largePoint);
  let x = floor(random(width));
  let y = floor(random(height));
  let pix = img.get(x,y);
  fill(pix, 128);
  ellipse(x,y,pointillize, pointillize);
}
