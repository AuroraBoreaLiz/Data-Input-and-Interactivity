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
    print(fillColor,"filling",i)
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
    fillColor[0] = rectColor[0];
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
    fillColor[1] = rectColor[1];
  }

  if (
    mouseIsPressed &&
    mouseX > 250 &&
    mouseX < 330 &&
    mouseY > 250 &&
    mouseY < 330
  ) {
    push();
    print("Third Box",fillColor)
    fillColor[2] = 255;
    //rect(x, x, 80, 80);
    push();
  } else {
  fillColor[2] = rectColor[2];
  }
}
/*
function mouseFill(rectColor){
  if(mouseIsPressed &&
     (mouseX > 50) && (mouseX < 130) &&
     (mouseY > 50) && (mouseY < 130)
    )
  {
    fillColor = 0;
  } 
  else {
    fillColor = 150;
  }

    
  if(mouseIsPressed &&
     (mouseX > 150) && (mouseX < 230) &&
     (mouseY > 150) && (mouseY < 230)
    )
    
  
  {
    fillColor = 55;
  } 
  else {
    fillColor = 150;
  }
  
    if(mouseIsPressed &&
     (mouseX > 250) && (mouseX < 330) &&
     (mouseY > 250) && (mouseY < 330)
    )
    
  
  {
    fillColor = 255;
  } 
  else {
    fillColor = 150;
  }
  
*/
