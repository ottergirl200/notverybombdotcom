//from Karen Anne's Github! with a little tweaking, and also help from Chatgpt
let faceapi;
let detections = [];

let video;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(0);
  canvas.id("canvas");
  video = createCapture(VIDEO);// Create the video
  video.id("video");
  video.size(width, height);

  const faceOptions = {
    withLandmarks: true,
    withExpressions: true,
    withDescriptors: true,
    minConfidence: 0.5
  };
  faceapi = ml5.faceApi(video, faceOptions, faceReady);
}

function faceReady() {
  faceapi.detect(gotFaces);// Start detecting faces
}

// Got faces
function gotFaces(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  detections = result; //Now all the data --> detections
  clear();
  drawBoxs(detections); //Draw box
  drawLandmarks(detections); // Draw face points
  drawExpressions(detections, width/10, height/2, 20);
  faceapi.detect(gotFaces);
}

function drawBoxs(detections){
  if (detections.length > 0) { //If at least 1 face is detected
    for (f=0; f < detections.length; f++){
      let {_x, _y, _width, _height} = detections[f].alignedRect._box;
      stroke(117, 255, 255);
      strokeWeight(1);
      noFill();
      rect(_x, _y, _width, _height);
    }
  }
}

function drawLandmarks(detections){
  if (detections.length > 0) { //If at least 1 face is detected: 
    for (f=0; f < detections.length; f++){
      let points = detections[f].landmarks.positions;
      for (let i = 0; i < points.length; i++) {
        stroke(117, 255, 255);
        strokeWeight(3);
        square(points[i]._x, points[i]._y,2);
      }
    }
  }
}

function drawExpressions(detections, x, y, textYSpace){
  if(detections.length > 0){ //If at least 1 face is detected
    let expressions = detections[0].expressions;

    let expressionArray = Object.entries(expressions);
    expressionArray.sort((a, b) => b[1] - a[1]); // Sort from highest to lowest
    let dominantExpression = expressionArray[0][0];
    let dominantConfidence = expressionArray[0][1];

    // Draw all expressions
    textFont('Helvetica Neue');
    textSize(14);
    noStroke();
    fill(0);

    let i = 0;
    for (let [expr, confidence] of expressionArray) {
      text(`${expr}: ${nf(confidence*100, 2, 2)}%`, x, y + textYSpace * i);
      i++;
    }

    // Show custom text based on no. 1 expression
    textSize(20);
    fill(0);
    textAlign(CENTER);
    
    let message = "";
    switch (dominantExpression) {
      case "happy":
        message = "01011001 01101111 01110101\n00100000 01110011 01100101\n01100101 01101101 00100000\n01101000 01100001 01110000\n01110000 01111001 00101110 00100000";
        break;
      case "angry":
        message = "01000100 01101111 01101110\n00100111 01110100 00100000\n01100100 01100101 01110011\n01110100 01110010 01101111\n01111001 00100000 01110100\n01101000 01100101 00100000\n01100011 01101111 01101101\n01110000 01110101 01110100\n01100101 01110010 00100000\n01110000 01101100 01100101\n01100001 01110011 01100101 00101110";
        break;
      case "sad":
        message = "01010111 01101000 01100001\n01110100 00100000 01100100\n01101111 01100101 01110011\n00100000 01110011 01100001\n01100100 01101110 01100101\n01110011 01110011 00100000\n01100110 01100101 01100101\n01101100 00100000 01101100\n01101001 01101011 01100101 00111111 ";
        break;
      case "neutral":
        message = "01001001 00100000 01100011\n01100001 01101110 00100000\n01110011 01101111 01101101\n01100101 01110111 01101000\n01100001 01110100 00100000\n01110101 01101110 01100100\n01100101 01110010 01110011\n01110100 01100001 01101110\n01100100 00101110";
        break;
      case "surprised":
        message = "01001001 00100000 01100011\n01100001 01101110 00100000\n01110011 01100101 01100101\n00100000 01111001 01101111\n01110101 00101110";
        break;
      case "fearful":
        message = "01010111 01101000 01100001\n01110100 00100000 01101001\n01110011 00100000 01100110\n01100101 01100001 01110010 00111111 ";
        break;
      case "disgusted":
        message = "01011001 01101111 01110101\n00100111 01110010 01100101\n00100000 01101100 01101111\n01101111 01101011 01101001\n01101110 01100111 00100000\n01100001 01110100 00100000\n01111001 01101111 01110101\n01110010 01110011 01100101\n01101100 01100110 00101110";
        break;
      default:
        message = "Feeling something?";
    }
    text(message, width/2, height-60); // bottom msg

  } else {
    // No face detected
    textFont('Helvetica Neue');
    textSize(20);
    fill(255, 0, 0);
    textAlign(CENTER);
    text("No face detected", width/2, height-60);
  }
}
