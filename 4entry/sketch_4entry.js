let scareImage;
let isScared = false;
let scareAud;
let bttn;

function preload() {
  scareImage = loadImage('4entry/data/jumpportrait.png'); 
  scareAud = loadSound('4entry/data/fnafjump.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bttn = createButton ("runaway!");
  bttn.mousePressed(redirect);
  bttn.hide();
}

function draw() {
  background(255,0,0);

  if (isScared) {
    image(scareImage, 0, 0, width, height);
  } else {
    textSize(32);
    fill(0);
    textAlign(CENTER,CENTER);
    text("click anywhere (and have sound on)", width/2, height/2);
  }
}

function mouseClicked() {
  if (!isScared) {
    userStartAudio();
    isScared = true;
    console.trace();

    if (scareAud && !scareAud.isPlaying()) {
      scareAud.play();

      setTimeout(() => {
        scareAud.stop();
        
        bttn.position(windowWidth/2-bttn.width/2, windowHeight/2-bttn.height/2);
        bttn.show();
      }, 4000); 
    }
  }
}

function redirect() {
  window.location.href = "wk4.html";
}