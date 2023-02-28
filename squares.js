function preload() {
  table = loadTable("data.csv", "csv", "header");
}

var rectColor1 = [150, 55, 25];
var rectColor2 = [55, 35, 255];
var rectColor3 = [75, 0, 45];
var fillColor = [];
var rx = [];
var ry = [];

var table;

function setup() {
  createCanvas(400, 400);
  background(200);
  rx = table.getColumn("rectx");
  ry = table.getColumn("recty");
  
}

function draw() {

  
  for (var i = 0; i < rx.length; i++) {
    push();
      //var x = rx[i];
      //var y = ry[i];
      //c1 = rectColor1[i];
      //c2 = rectColor2[i];
      //c3 = rectColor3[i];
      //mouseFill(rx,ry,i);
      fill(fillColor[i],0,0);
      rect(rx[i], ry[i], 80, 80);
    pop();
    
    if (
    mouseIsPressed &&
    (mouseX > (rx[i])) &&
    (mouseX < (rx[i]+80)) &&
    (mouseY > (ry[i])) &&
    (mouseY < (ry[i]+80))
  ) {
      fillColor[i] = 255;
  } else {
      fillColor[i]= rectColor1[i];
  }
  }
  
}

/*
function mouseFill(rx,ry,i) {
  if (
    mouseIsPressed &&
    (mouseX > (rx[i])) &&
    (mouseX < (rx[i]+80)) &&
    (mouseY > (ry[i])) &&
    (mouseY < (ry[i]+80))
  ) {
      fillColor[i] = 255;
  } else {
      fillColor[i]= rectColor1[i];
  }
}
//*/
/*
function mouseFill(rx,ry,i) {
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
    fillColor[0]= rectColor1[i];
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
*/
