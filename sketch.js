//Script that draws draggable moons, stars, and rabbits

let song;
var table;
var y = [];
var x = [];
var rotation = [];
var moonOrStar = [];
var sColor = [];
n = 40;
dragging = false;
drag = -1;

function preload() {
  //load in the table of data
  table = loadTable("starsMoonRabbit.csv", "csv", "header");
  
  //load in the song from the asset folder
  //free music archive https://freemusicarchive.org/music/Daniel_Birch/Ambient_Vol3/Music_Box__Sunshine/
  song = loadSound('assets/Daniel-Birch-Music-Box-Sunshine.mp3');
}

function setup() {
  createCanvas(400, 400);
  
  //play the song on loop
  song.loop();
  
  //get things from the csv file
  sColor = table.getColumn("starColor1");
  moonStarOrRabbit = table.getColumn("moonStarOrRabbit")
  
  //fill up star and moon x,y, and rotation empty arrays with random numbers
  for(var s=0; s<n; s++) {
    y[s] = random(height);
    x[s] = random(width);
    rotation[s] = random(0.5);
  }
 
}

function draw() {
  background(190,166,222);
  
  //use a for loop to go through the data array to determine if the drawn object is a moon, rabbit, or star
  //data also has information for the star color
  for (var i = 0; i < sColor.length; i++) { 
    
    //draw cresent moons
    if (moonStarOrRabbit[i] == 0) {
    push();
      noStroke();
      translate(x[i],y[i]);
      rotate(PI/rotation[i]);
      //get moon from crescent.js file
      moon();
    pop();
    }

    //draw stars
    if (moonStarOrRabbit[i] == 1) {
    push();
      noStroke();
      var starColor1 = sColor[i];
      translate(x[i],y[i]);
      rotate(PI/rotation[i]);
      fill(starColor1,0,100);
      //get star from function below
      star(0, 0, 10, 7, 5);
    pop();
    }
    
    //draw rabbits
    if (moonStarOrRabbit[i] == 2){
    push();
      noStroke();
      translate(x[i],y[i]);
      rotate(PI/rotation[i]);
      fill(255,255,255);
      //get rabbit from usagi.js file
      rabbit();
    pop();
    
    } 
    
    //code from class example for dragging
    //if mouse pressed drag the object
    if(mouseIsPressed) {
      if(!dragging && 
         dist(mouseX, mouseY, x[i], y[i]) < 15 ) {  
        
        dragging = true;  // start dragging the object    
        drag = i;  // drag this object
      
      }
  
    
    } 

    else {
      dragging = false;  // mouse 
    }
  }
  
  // move the object if we're dragging it
  if(dragging) {  // update the object we're dragging
    x[drag] = mouseX;  // move object to mouse location
    y[drag] = mouseY;
  }

  
}

//draw a star function
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
