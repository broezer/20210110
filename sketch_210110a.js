// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2;

function setup() {
  createCanvas(400, 400);
  c1 = color(255, 179, 13);
  //c2 = color(156, 129, 188);
  c2 = color(69,64,75);
}


function draw() {
  setGradient(0, 0, width, height, c2, c1, Y_AXIS);
  
  translate( -width*0.2, height*0.1);
  for (let i = 1; i <=3; i++) {
    translate( width * 0.3, 0);
    grdTriangle(0, 0, height*0.2, c2, c1);
    
  }
  
  translate( width * 0.3, height*0.3);
  for (let i = 1; i <=3; i++) {
    translate( -width * 0.3, 0);
    grdTriangle(0, 0, height*0.2, c2, c1);
  }
  
  translate( (width * 0.3)*3, height*0.3);
  for (let i = 1; i <=3; i++) {
    translate( -width * 0.3, 0);
    grdTriangle(0, 0, height*0.2, c2, c1);
  }
  
  save("20210110.png");
  noLoop();
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

function grdTriangle(x, y, h, c1, c2){
  for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c2, c1, inter);
      stroke(c);
      line( ((x * h) - (i/2)) + (h/2), i, ((x * h) + (i/2))+ (h/2), i);
    }
}
