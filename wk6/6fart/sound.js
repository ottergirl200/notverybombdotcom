var sound, analyzer, volume, string, myButton;
function preload() {
  sound=loadSound("data/reverb_fart.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("pink");
  getAudioContext().suspend();
    analyzer= new p5.Amplitude();
  textAlign(CENTER, CENTER);
  string=":P";
  //let div = createDiv('<h3>HELLO WORLD</h3)')
  //div.position(100,100);
  //let a = createA('https://p5js.org/', 'p5*js');
  //a.position(25,35);
  //myButton=createButton("click me");
  //myButton.position(random(width), random(height));
}


function draw() {
  background(0,255,0,12);
  volume=analyzer.getLevel();
  mappedVol = map(volume, 0, 1.0, 0.1, width);
  //min, max, whats mapped min, whats mapped max
   noStroke();
   circle(mouseX, mouseY, mappedVol);
    
  push();
  translate(width/2, height/2);
  rotate(mappedVol);
    textSize(mappedVol);
    text(string, 0, 0);
    //"DANCE", width/2, height/2
    //circle(mouseX, mouseY, mappedVol);
    //text("mouse", mouseX, mouseY); must //the other circle one to use this one
  pop();
  
  console.log(volume + '|' + mappedVol); 
    //writes msgs to console window in browser
}

function mousePressed () {
  getAudioContext().resume();
  analyzer.setInput(sound);
  //loop();
  
  sound.play();
  sound.noLoop();
  
  //if(sound.isPlaying()==true){
  //sound.stop();
  //}
  //else {
  //  sound.play();
  //  sound.loop();
  //}
}

function keyPressed() {
  if(key=='b'){
    fill("blue");
  }
  string=string+key;
}

function windowResized() {
  //responsive
  resizeCanvas(windowWidth, windowHeight);
}
