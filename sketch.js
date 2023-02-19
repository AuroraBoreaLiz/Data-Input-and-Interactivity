var table;

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
  var colors = table.getColumn("color");
  var mX = mouseX;
  var mY = mouseY;
  var c = map(mouseX, 0, width, 0, 255);
  
  for (var i = 0; i < x.length; i++){
    fill(colors[i]);
    rect(x[i],50,50,50);
  }
  
  if (mouseIsPressed === true){
     
    squareTime(mX,mY,c);
      
    }
    else {
      
    rect(0,0,50,50);
      
    }

 
}

function squareTime(mX,mY,c){
  push();
    translate(mX,mY);
    var r = frameCount * 0.05;
    rotate(r); 
    fill(0,c,255-c);  
    rect(mX,mY,50,50);
  pop();

}
