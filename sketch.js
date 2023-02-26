function preload() {
  table = loadTable("stars.csv", "csv", "header");
}

var table;
var y = [];
var x = [];
var my = [];
var mx = [];
n = 30;

function setup() {
  createCanvas(400, 400);
  
  //from class example
  //fill up star x,y tables with random numbers
  for(var i=0; i<n; i++) {
    y[i] = random(height);
    x[i] = random(width);
  }
  //fillup the moon x,y tables
  for(var m=0; m<n; m++) {
    my[m] = random(height);
    mx[m] = random(width);
  }
}

function draw() {
  background(190,166,222);
  var color = table.getColumn("starColor1");
  var mp1 = table.getColumn("moonPosition1");
  var mp2 = table.getColumn("moonPosition2");
  
  for (var i = 0; i < color.length; i++) { 
    
    push();
      mx1 = mp1[i];
      my2 = mp2[i];
      noStroke();
      translate(mx[i],my[i]);
      fill(230,230,180);
      ellipse(0,0,25,25);
    
      noStroke();
      fill(190,166,222);
      ellipse(mx1,my2,20,20);
    pop();
    
    push();
      noStroke();
      var starColor1 = color[i];
      translate(x[i],y[i]);
      fill(starColor1,0,100);
      star(0, 0, 10, 7, 5);
    pop();
    
    push();
      
    
    //code from class example
    if(mouseIsPressed) {
      if(!dragging && 
         dist(mouseX, mouseY, x[i], y[i]) < 8) {  
        
        dragging = true;  // start dragging a circle    
        drag = i;  // drag this circle
      
      }
    
    } 
  /*
    else if(mouseIsPressed) {
      if(!dragging && 
         dist(mouseX, mouseY, mx[i], my[i]) < 8) {  
        
        dragging = true;  // start dragging a circle    
        drag = i;  // drag this circle
      
      }
    
    } 
    */
    else {
      dragging = false;  // mouse 
    }
  }
  
  // move a circle if we're dragging it
  if(dragging) {  // update the circle we're dragging
    x[drag] = mouseX;  // move circle to mouse location
    y[drag] = mouseY;
  }

  
}

//code from p5.js star example: https://p5js.org/examples/form-star.html
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
