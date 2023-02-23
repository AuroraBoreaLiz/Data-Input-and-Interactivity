var rectColor = 150;
var rectColor2 = 55;
var rectColor3 = 25;

function setup() {
  createCanvas(400,400);
  background(200);
}

function draw() {
  
  fill(rectColor);
  rect(50,50, 80,80);
  
  fill(rectColor2);
  rect(150,150,80,80);
  
  fill(rectColor3);
  rect(250,250,80,80);
  
  
  if(mouseIsPressed &&
     (mouseX > 50) && (mouseX < 130) &&
     (mouseY > 50) && (mouseY < 130)
    )
  {
    rectColor = 0;
  } 
  else {
    rectColor = 150;
  }

    
  if(mouseIsPressed &&
     (mouseX > 150) && (mouseX < 230) &&
     (mouseY > 150) && (mouseY < 230)
    )
    
  
  {
    rectColor2 = 55;
  } 
  else {
    rectColor2 = 150;
  }
  
    if(mouseIsPressed &&
     (mouseX > 250) && (mouseX < 330) &&
     (mouseY > 250) && (mouseY < 330)
    )
    
  
  {
    rectColor3 = 255;
  } 
  else {
    rectColor3 = 150;
  }
  

}
