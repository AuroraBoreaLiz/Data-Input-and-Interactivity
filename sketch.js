function preload() {
  table = loadTable("stars.csv", "csv", "header");
}

var table;
var y = [];
var x = [];
var my = [];
var mx = [];
var mr = [];
var rabbitX = [];
var rabbitY = [];
var rabbitR = [];
n = 30;
dragging = false
drag = -1;

function setup() {
  createCanvas(400, 400);
  //from class example
  //fill up star x,y tables with random numbers
  for(var s=0; s<n; s++) {
    y[s] = random(height);
    x[s] = random(width);
  }
  
  //fillup the moon x,y tables
  for(var m=0; m<n; m++) {
    my[m] = random(height);
    mx[m] = random(width);
    mr[m] = random(0.5);
  }
 
  //fillup the rabbit x,y tables
  for(var r=0; r<10; r++) {
    rabbitY[r] = random(height);
    rabbitX[r] = random(width);
    rabbitR[r] = random(0.5);
  }
}

function draw() {
  background(190,166,222);
  var color = table.getColumn("starColor1");
  var mp1 = table.getColumn("moonPosition1");
  var mp2 = table.getColumn("moonPosition2");
  
  //draw rabbits with random xform and rotation
  for (var k = 0; k < rabbitR.length; k++) {
    push();
      noStroke();
      translate(rabbitX[k],rabbitY[k]);
      rotate(PI/rabbitR[k]);
      fill(255,255,255);
      rabbit();
    pop();
   }
  
  for (var i = 0; i < color.length; i++) { 
    
    //draw cresent moons
    push();
      noStroke();
      translate(mx[i],my[i]);
      rotate(PI/mr[i]);
      moon();
    pop();
    
    //draw stars
    push();
      noStroke();
      var starColor1 = color[i];
      translate(x[i],y[i]);
      fill(starColor1,0,100);
      star(0, 0, 10, 7, 5);
    pop();
      
    
    //code from class example
    if(mouseIsPressed) {
      if(!dragging && 
         dist(mouseX, mouseY, x[i], y[i]) < 8 ) {  
        
        dragging = true;  // start dragging a circle    
        drag = i;  // drag this circle
      
      }
  
    
    } 

    else {
      dragging = false;  // mouse 
    }
  }
  
  // move a star if we're dragging it
  if(dragging) {  // update the star we're dragging
    x[drag] = mouseX;  // move star to mouse location
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
