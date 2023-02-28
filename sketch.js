function preload() {
  table = loadTable("stars.csv", "csv", "header");
}

var table;
var y = [];
var x = [];
var rotation = [];
var moonOrStar = [];
var rabbitX = [];
var rabbitY = [];
var rabbitR = [];
n = 30;
dragging = false
drag = -1;

function setup() {
  createCanvas(400, 400);
  //get things from the csv file
  sColor = table.getColumn("starColor1");
  moonOrStar = table.getColumn("moonOrStar")
  
  //from class example
  //fill up star and moon x,y tables with random numbers
  for(var s=0; s<n; s++) {
    y[s] = random(height);
    x[s] = random(width);
    rotation[s] = random(0.5);
  }
 
}

function draw() {
  background(190,166,222);
   
  for (var i = 0; i < sColor.length; i++) { 
    
    //draw cresent moons
    if (moonOrStar[i] == 0) {
    push();
      noStroke();
      translate(x[i],y[i]);
      rotate(PI/rotation[i]);
      moon();
    pop();
    }

    //draw stars
    if (moonOrStar[i] == 1) {
    push();
      noStroke();
      var starColor1 = sColor[i];
      translate(x[i],y[i]);
      rotate(PI/rotation[i]);
      fill(starColor1,0,100);
      star(0, 0, 10, 7, 5);
    pop();
    }
    
    //draw rabbits
    if (moonOrStar[i] == 2){
    push();
      noStroke();
      translate(x[i],y[i]);
      rotate(PI/rotation[i]);
      fill(255,255,255);
      rabbit();
    pop();
    
    } 
    
    //code from class example
    if(mouseIsPressed) {
      if(!dragging && 
         dist(mouseX, mouseY, x[i], y[i]) < 15 ) {  
        
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
