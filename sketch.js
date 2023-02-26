function preload() {
  table = loadTable("stars.csv", "csv", "header");
}

var table;
var y = [];
n = 30;

function setup() {
  createCanvas(400, 400);
  background(0,0,35);
  for(var i=0; i<n; i++) {
    y[i] = random(height);
  }
  
}

function draw() {
  var starMap1 = table.getColumn("starLocation1");
  
  for (var i = 0; i < starMap1.length; i++) { 
    starTranslate1 = starMap1[i];
    push();
      translate(starTranslate1,y[i]);
      star(0, 0, 10, 8, 6);
    pop();
  }
  
}

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
