let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,255);
  capture=createCapture(VIDEO);
  capture.hide(); //optional, it enables draw function
  capture.size(240,180);

}


function draw() {
  //filter(BLUR, 1);
  //filter(ERODE);
  image(capture, mouseX, mouseY);
}
