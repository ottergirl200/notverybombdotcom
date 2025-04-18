let bottomIng, topImg;
function preload () {
  bottomImg = loadImage('./data/monocat.jpg');
  topImg = loadImage('./data/cat.jpeg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 0);
  topImg.resize(width, height);
  image(bottomImg, 0, 0, width, height);
}

function mouseDragged () {
  copy(topImg, mouseX, mouseY, 80, 80, 
  mouseX, mouseY, 80, 80);
}
