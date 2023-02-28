function rabbit() {  //cotton tail
  //cotton tail
  push();
    stroke(200);
    ellipse(26,0,10,10)
  pop();
  
  //front leg 1
  push();
    stroke(200);
    rotate(29.2);
    ellipse(-8,-6,10,20)
  pop();
  
  //body
  push();
    stroke(200);
    ellipse(12,3,30,20)
  pop();
  
  //front leg 2
  push();
    stroke(200);
    rotate(28.9);
    ellipse(-12,-5,10,20)
  pop();
  
  //back leg
  push();
    stroke(200);
    rotate(28.9);
    ellipse(-20,4,10,20)
  pop();


  //leg fix
  push();
    noStroke();
    translate(-50,-50)
    triangle(60,52,69,52,60,59);
  pop();
  
  //leg fix 2
  push();
    noStroke();
    translate(-50,-50)
    triangle(77,53,71,45,65,54);
  pop();
  
  //back ear
  push();
    stroke(200);
    rotate(25);
    ellipse(1,-10,10,20)
  pop();
  
  //front ear
  push();
    stroke(200);
    rotate(25.3);
    ellipse(5,-10,10,20)
  pop();
  
  //head
  push();
    stroke(200);
    fill(255);
    ellipse(0,0,20,20);
  pop();
  
  //ear line fix
  push();
    noStroke();
    translate(-50,-50)
    triangle(45,37,60,41,44,55);
  pop();
  
  //eyes
  push();
    fill(0);
    noStroke();
    ellipse(6,2,3,3);
    ellipse(-6,0,3,3);
  pop();
}
