
let sticks;

function setup () {
  createCanvas(500, 500);
  sticks = new Sticks();
}

function draw() {
  background(0);
  for (let i = 0; i < 10; i++) {
    sticks.move();
    sticks.show();
}
}

class Sticks {
  constructor () {
    this.x = 200;
    this.y = 150;
  }

  move() {
    this.x = random(width);
    this.y = random(height);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    line(this.x, this.y, 150, 200);
  }
}
