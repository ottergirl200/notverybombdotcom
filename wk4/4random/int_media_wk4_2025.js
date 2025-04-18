var kusamaColours=["pink","green","yellow","blue","red"];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  //background(255, 0, 0);
  //stroke(255, 0, 0);
  noStroke();
  frameRate(15);
  background(255, 220, 0);
}

function draw() {
  //background(255,220,0)
  
 //for (let i=0; i<10; i++) {
    ////fill(random(255), random(255), random(255));
    //fill(random(kusamaColours));
    ////circle(random(width), random(height) , random(300));
    //square(random(width), random(height) , random(300));
      //fill(random(kusamaColours));
    //ellipse(random(width), random(height) , random(300), random(200));
      //fill(random(kusamaColours));
     
    //rect(random(width), random(height) , random(300), random(200));

    //stroke(0);
    //strokeWeight(4);
    //line(mouseX,mouseY,width-100,height-100);
  //}
  
   stroke(0);
    strokeWeight(1);
    line(mouseX,mouseY,width/2,height/2);
    textSize(36);
    text("randomness",mouseX,mouseY);
    
  //noLoop();
  
  //fill("pink");
  //circle(400,600,400);
  
}
