function preload() {
  table = loadTable("stars.csv", "csv", "header");
}

var table;

function setup() {
  createCanvas(400, 400);
  background(0,0,35);
}

function draw() {
  var starMap = table.getColumn("starLocation");
  
  for (var i = 0; i < starMap.length; i++) { 
    starTranslate = starMap[i];
    push();
      translate(starTranslate,starTranslate);
      star(0, 0, 30, 70, 6);
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
