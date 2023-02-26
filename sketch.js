function preload() {
  table = loadTable("data.csv", "csv", "header");
}

var rectColor1 = [150, 55, 25];
var rectColor2 = [25, 35, 255];
var rectColor3 = [75, 0, 45];
//var rectSize = [50, 150, 250];
var fillColor = [];

var table;

function setup() {
  createCanvas(400, 400);
  background(200);
}

function draw() {
  var rectSize = table.getColumn("rectSize");
  
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
    fillColor= rectColor1;
  }
}
