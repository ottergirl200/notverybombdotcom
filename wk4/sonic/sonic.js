var pic;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
 
function preload(){
pic=loadImage("./data/freaksonic.gif");
}

function setup() {
createCanvas(windowWidth, windowHeight);
background("black");
imageMode(CENTER, CENTER);
}

function draw() {
scale(2);
image(pic, mouseX/2, mouseY/2);
}
