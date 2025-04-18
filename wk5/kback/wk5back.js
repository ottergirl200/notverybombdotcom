// //p5js library then tweaked with help from Chatgpt

// let capture;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
  
//   capture = createCapture(VIDEO);
//   capture.size(windowWidth, windowHeight);
//   capture.hide();

//   // Make the canvas fixed and full screen
//   let canvas = createCanvas(windowWidth, windowHeight);
//   canvas.position(0, 0);
//   canvas.style('z-index', '-1');
//   canvas.style('position', 'fixed');
// }

// function draw() {
//   // Stretch the video to cover the entire canvas
//   image(capture, 0, 0, width, height);
//   filter(INVERT); 
// }

let capture;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight); // only once
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');

  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();
}

function draw() {
  image(capture, 0, 0, width, height);
  filter(INVERT);
}
