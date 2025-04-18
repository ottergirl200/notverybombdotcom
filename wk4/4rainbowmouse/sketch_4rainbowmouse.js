function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255, 255, 0);
  }
  function draw() {
    noStroke();
    fill(mouseX/4, mouseY/2, mouseX/2);
    circle(mouseX, mouseY, 100);
  }
  function mousePressed(){
    background(random(255), random(255), random(255));
  }
