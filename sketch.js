function preload() {
  table = loadTable("data.csv", "csv", "header");
}

var rectColor1 = [150, 55, 25];
var rectColor2 = [25, 35, 255];
var rectColor3 = [75, 0, 45];
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
      fill(fillColor[i]);
      rect(x, x, 80, 80);
    pop();
    
    
  }
  
}

function mouseFill(x) {
  if (
    mouseIsPressed &&
    mouseX > 50 &&
    mouseX < 130 &&
    mouseY > 50 &&
    mouseY < 130
  ) {
    push();
    print("First Box")
      fillColor[0] = 255;
      //rect(x, x, 80, 80);
    push();
  } else {
    fillColor[0] = rectColor1;
  }

  if (
    mouseIsPressed &&
    mouseX > 150 &&
    mouseX < 230 &&
    mouseY > 150 &&
    mouseY < 230
  ) {
    push();
      print("Second Box")
      fillColor[1] = 255;
      //rect(x, x, 80, 80);
    push();
  } else {
    fillColor[1] = rectColor2;
  }

  if (
    mouseIsPressed &&
    mouseX > 250 &&
    mouseX < 330 &&
    mouseY > 250 &&
    mouseY < 330
  ) {
    push();
      print("Third Box")
      fillColor[2] = 255;
      //rect(x, x, 80, 80);
    push();
  } else {
    fillColor[2] = rectColor3;
  }
}
