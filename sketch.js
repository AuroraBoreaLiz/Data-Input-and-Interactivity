var table;
var rectColor = 150;

function preload() {
  table = loadTable("names.csv", "csv", "header");
}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
  noStroke();
  var x = table.getColumn("x");
  var y = 50
  var boxX = 50
  var boxY = 50
  var colors = table.getColumn("color");
  var c = map(mouseX, 0, width, 0, 255);
  fill(rectColor);
  
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
    
  for (var i = 0; i < x.length; i++){
    if(mouseIsPressed && (mouseX > (x[i]-25)) && (mouseX < (x[i]+25)) && (mouseY > (boxY-25)) && (mouseY < (boxY+25))){
      fill(0);
      rect(x[i],y,boxX,boxY);
        
      } 
 
    else {
      fill(colors[i]);
      rect(x[i],y,boxX,boxY);
      }
  }
}      


