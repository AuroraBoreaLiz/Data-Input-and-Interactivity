function preload() {
  table = loadTable("stars.csv", "csv", "header");
}

var table;
var y = [];
var x = [];
n = 30;

function setup() {
  createCanvas(400, 400);
  
  //from class example
  //fill up tables with random numbers
  for(var i=0; i<n; i++) {
    y[i] = random(height);
    x[i] = random(width);
  }
  
}

function draw() {
  background(0,0,35);
  var color = table.getColumn("starColor1");
  
  for (var i = 0; i < color.length; i++) { 
    
    push();
      starColor1 = color[i];
      translate(x[i],y[i]);
      fill(starColor1,0,100);
      star(0, 0, 10, 7, 5);
    pop();
    
    //code from class example
    if(mouseIsPressed) {
      if(!dragging && 
         dist(mouseX, mouseY, x[i], y[i]) < 8) {  
        
        dragging = true;  // start dragging a circle    
        drag = i;  // drag this circle
      
      }
    
    } 
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
