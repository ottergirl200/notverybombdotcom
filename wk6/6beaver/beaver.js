//tutorial from The Coding Train here https://www.youtube.com/watch?v=jEwAMgcCgOA&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW&index=9 
//and modified and tweaked

var volhistory = [];
var song;
let img;
var amp;
var button; 

function toggleSong() {
  userStartAudio();
  
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload () {
  img = loadImage('./data/cbeaverg.gif');
  song = loadSound('./data/chinesebeaver.mp3');
  
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton('press me');
  button.position(20,20);
  button.mousePressed(toggleSong);
  //song.play();
  
  amp = new p5.Amplitude();
 
}

function draw() {
  background(0);
  
    if (img) {
    image(img, 0, 0, width, height);
    }
    
  var vol = amp.getLevel();
  //let vol = song.isPlaying() ? 1: 0.1;
  
  volhistory.push(vol);
  stroke(255);
  noFill();
  beginShape();
  for (var i=0; i<volhistory.length; i++) {
    var y = map(volhistory[i], 0, 1, height/2, 0);
    vertex(i,y);
  }
  endShape();
  
  if (volhistory.length>width) {
    volhistory.splice(0,1);
  }
  
  stroke(255,0,0);
  line(volhistory.length,0,volhistory.length,height);
  
  //fill(255);
  //noStroke();
  //ellipse(width/2, height/2, width, vol*10000);

} 
