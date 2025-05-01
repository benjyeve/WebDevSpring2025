let x = 200;
let y = 200;

let r
let g
let b

function setup() {
  createCanvas(400, 400);
}

function draw() {
let ms = millis();
let sec = second();
let min = minute();
let hr = hour();
  
let curMillisSeconds = (sec * 1000) + ms;
let curMillisMinutes = curMillisSeconds + (min * 60 * 1000);
let curMillisHours = curMillisMinutes + (hr * 60 * 60 *1000);
  
let totMillisSeconds = 60 * 1000;
let totMillisMinutes = 60 * 60 * 1000;
let totMillisHours = 12 * 60 * 60 * 1000;
  
angleMode(DEGREES);

let secDegrees = curMillisSeconds / totMillisSeconds * 360;
let minDegrees = curMillisMinutes / totMillisMinutes * 360;
let hrDegrees = curMillisHours / totMillisHours * 360;
  
  if (hr <6) {
    r = 54
    g = 87
    b = 88
    
  } else if (hr<12) {
    r = 72
    g = 177
    b = 181
  
  } else if (hr<18) {
    r = 73
    g = 205
    b = 238
    
  } else if (hr<24) {
    r = 19
    g = 77
    b = 152
    
  }
    
  background(r, g, b)
  
  translate(200,200)
  rotate(180);
  
  rotate(hrDegrees);
  snakeHead(3.25);
  rotate(-hrDegrees);
  
  rotate(minDegrees);
  snakeHead(1.75);
  rotate(-minDegrees);
  
  rotate(secDegrees);
  snakeHead(.75);
  rotate(-secDegrees);
  
}

function snakeHead(s) {
  let x1 = (1-s)*(200/s)
  let y1 = (1-s)*(200/s)
  let x2 = -200/s
  let y2 = -200/s
  
  scale(s);
  translate(x1, y1);
  translate(x2, y2);
    
  fill(156, 191, 19);
  ellipse(x,y,100,100);
  fill(r, g, b);
  ellipse(x,y,75,75);
  
  fill(156, 191, 19);
  beginShape();
    vertex(210, 236);
    vertex(200, 230);
    vertex(192, 232);
    vertex(184, 232);
    vertex(182, 235);
    vertex(200, 242);  
    vertex(183, 250);
    vertex(185, 251);
    vertex(200, 249);   
    vertex(209, 249);
  endShape();
  
  fill(253, 253, 13);
  beginShape();
    vertex(204, 235);
    vertex(200, 233);
    vertex(194, 234);
    vertex(201, 237);  
  endShape(CLOSE);
  
  fill(0);
  ellipse(200, 235, 2, 4);
  
  translate(-x2, -y2);
  translate(-x1, -y1);
  scale(1/s);
}