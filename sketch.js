function preload() {
  table = loadTable("names.csv", "csv", "header");
}

var table;
var rectColor = 150;


function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
  noStroke(); 
  var x = table.getColumn("x");
  var y = 50;
  var rectWidth = 50;
  var rectHeight = 50;
  var rectRadius = 5;
  var colors = table.getColumn("color");
  var c = map(mouseX, 0, width, 0, 255);
  
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  //print(mouseX < (x[0]+25));
  //print(mouseX);
  //print(x[0]);
  for (var i = 0; i < x.length; i++){
      rectColor = colors[i];
      fill(rectColor);
      rect(x[i],y,rectWidth,rectHeight,rectRadius, rectRadius, rectRadius, rectRadius);
      mouseFill(x,y,rectWidth,rectHeight,rectRadius,colors,c);
  }    
    
}


function mouseFill(x,y,rectWidth,rectHeight,rectRadius,colors,c){

  for (var i = 0; i < x.length; i++){
      if(mouseIsPressed && 
         (mouseX >= (x[i]-25)) && (mouseX <= (x[i]+25)) && 
         (mouseY >= (25)) && (mouseY <= (75)))
      {
        fill(0);
        rect(x[i],y,rectWidth,rectHeight,rectRadius, rectRadius, rectRadius, rectRadius);

    }
  }     
}
