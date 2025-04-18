let capture;
let lineY = 0; //red line
let scanningComplete = false; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();
}

function draw() {
  image(capture, 0, 0, width, height);
  
  fill(255, 0, 0);
  textSize(32);
  noStroke();
  textAlign(CENTER, CENTER);

  if (scanningComplete) {
    text("scan complete", width / 2, height / 2);
  } else {
    text("scanning...", width / 2, height / 2);
  }

  stroke(255, 0, 0);
  strokeWeight(2);
  line(0, lineY, width, lineY);
  
  if (!scanningComplete) {
    lineY += 1; // speed
    if (lineY >= height) {
      scanningComplete = true;
      redirected = true;
      window.location.href = "wk5.html";
    }
  }
}
