// var mic;

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
  
  
//   mic = new p5.AudioIn();
//   mic.start();
  
//   userStartAudio();
 
// }

// function draw() {
//   background(0);
//   var vol = mic.getLevel();
  
//   fill(255,0,0);
//   ellipse(width/2, height/2, vol*10000, vol*10000);
//   console.log(vol);

//   fill(255,255,255); 
//   textSize(24);
//   text("shout!", width/2, height/2);

// } 

let mic;
let triggered = false; 

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start();

  userStartAudio();
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  
  let vol = mic.getLevel();
  let diameter = vol * 10000;

  fill(255, 0, 0);
  ellipse(width / 2, height / 2, diameter, diameter);

  fill(255);
  textSize(32);
  text("shout!", width / 2, height / 2);

  // redirect 
  if (diameter > 800 && !triggered) {
    triggered = true;
    console.log("Redirecting...");
    setTimeout(() => {
      window.location.href = "wk6.html"; 
    }, 1000); 
  }
}


