var font;
let points = [];

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function preload () {
   font = loadFont('./data/Precious.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   points = font.textToPoints("Points",
   width/2-200, //xposition
   height/2,
   144, { //fontsize
     sampleFactor: 0.2, //level of detail
   });
}

function draw() {
  background(177, 220, 220);
  xMapped = map(mouseX, 0, width, 4, 32);
   for (let p of points) {
     noStroke();  
     fill(255,255,255);
     circle(p.x, p.y, xMapped);
   }
   
     
  fill(0); 
  textSize(24);
  textAlign(RIGHT, TOP);
  text("drag your mouse here", width - 20, 20);
  
  textAlign(LEFT, BOTTOM);
  text("and here too", 20, height - 20);

}
