function setup() {
  
  createCanvas(500,500);
  
}

function draw() {
  
  background('#b3ffff');
  
  clockHand(300, second(), color('#0096d3'));
  clockHand(200, minute(), color('#01528a'));
  clockHand(100, hour(), color('#010135'));
  
  
}

function clockHand(x, t, c){
  
  push();
  
  translate(width/2, height/2);
  rotate(-HALF_PI);
  
  strokeWeight(10);
  stroke(c);
  noFill();
  arc (0, 0, x, x, 0, PI/24 * t)
  
  pop();
  
}