function preload() {
  table = loadTable("data.csv", "csv", "header");
}

var fillColor1 = [];
var fillColor2 = [];
var fillColor3 = [];

var table;

function setup() {
  createCanvas(400, 400);
  background(200);
}

function draw() {
  var rectSize = table.getColumn("rectSize");
  
  var rectColor1 = table.getColumn("rectColor1");
  var rectColor2 = table.getColumn("rectColor2");
  var rectColor3 = table.getColumn("rectColor3");
  for (var i = 0; i < rectSize.length; i++) {
    push();
      x = rectSize[i];
      c1 = rectColor1[i];
      c2 = rectColor2[i];
      c3 = rectColor3[i];
      mouseFill(x,c1,c2,c3);
      fill(fillColor1,fillColor2,fillColor3);
      rect(x, x, 80, 80);
    pop();
    
    
  }
  
}

function mouseFill(x,i,c1,c2,c3) {
  if (
    mouseIsPressed &&
    mouseX > 50 &&
    mouseX < 130 &&
    mouseY > 50 &&
    mouseY < 130
  ) {
    push();
    print("First Box")
      fillColor1 = 255;
      fillColor2 = 255;
      fillColor3 = 255;
    push();
  } else {
    fillColor1 = c1;
    fillColor2 = c2;
    fillColor3 = c3;
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
      fillColor1 = 255;
      fillColor2 = 255;
      fillColor3 = 255;
    push();
  } else {
    fillColor1 = c1;
    fillColor2 = c2;
    fillColor3 = c3;
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
      fillColor1 = 255;
      fillColor2 = 255;
      fillColor3 = 255;
    push();
  } else {
    fillColor1 = c1;
    fillColor2 = c2;
    fillColor3 = c3;
  }
}
