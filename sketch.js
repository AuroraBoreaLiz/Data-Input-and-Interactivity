var rectColor = [150, 55, 25];
var rectSize = [50, 150, 250];
var fillColor = [];

function setup() {
  createCanvas(400, 400);
  background(200);
}

function draw() {
  for (var i = 0; i < rectSize.length; i++) {
    push();
      x = rectSize[i];
      mouseFill(x);
      fill(fillColor);
      rect(x, x, 80, 80);
    pop();
    
    
  }
  
}

function mouseFill(x) {
  if (
    mouseIsPressed &&
    mouseX > x &&
    mouseX < x+80 &&
    mouseY > x &&
    mouseY < x+80 
  ) {
    push();
      fillColor = 255;
    push();
  } else {
    fillColor= rectColor;
  }
}
