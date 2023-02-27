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
  var rectxy = table.getColumn("rectxy");
  var rectColor1 = table.getColumn("rectColor1");
  var rectColor2 = table.getColumn("rectColor2");
  var rectColor3 = table.getColumn("rectColor3");
}

function draw() {
  var rectxy = table.getColumn("rectxy");
  
  var rectColor1 = table.getColumn("rectColor1");
  var rectColor2 = table.getColumn("rectColor2");
  var rectColor3 = table.getColumn("rectColor3");
  for (var i = 0; i < rectxy.length; i++) {
    push();
      x = rectxy[i];
      c1 = rectColor1[i];
      c2 = rectColor2[i];
      c3 = rectColor3[i];
      mouseFill(x,i);
      fill(fillColor[i]);
      rect(x, x, 80, 80);
    pop();
    
    
  }
  
}

/*
function mouseFill(x,i) {
  if (
    mouseIsPressed &&
    mouseX > x &&
    mouseX < x+80 &&
    mouseY > x &&
    mouseY < x+80 
  ) {
    push();
      fillColor[i] = 255;
    push();
  } else {
    fillColor[i]= rectColor1[i];
  }
}
*/
//*/
function mouseFill(x,i) {
  if (
    mouseIsPressed &&
    mouseX > 50 &&
    mouseX < 130 &&
    mouseY > 50 &&
    mouseY < 130
  ) {
    print("First Box")
      fillColor[0] = 255;
      //rect(x, x, 80, 80);
  } else {
    fillColor[0] = rectColor1[i];
  }

  if (
    mouseIsPressed &&
    mouseX > 150 &&
    mouseX < 230 &&
    mouseY > 150 &&
    mouseY < 230
  ) {
      print("Second Box")
      fillColor[1] = 255;
      //rect(x, x, 80, 80);

  } else {
    fillColor[1] = rectColor2[i];
  }

  if (
    mouseIsPressed &&
    mouseX > 250 &&
    mouseX < 330 &&
    mouseY > 250 &&
    mouseY < 330
  ) {
      print("Third Box")
      fillColor[2] = 255;
      //rect(x, x, 80, 80);
  } else {
    fillColor[2] = rectColor3[i];
  }
}
//*/
