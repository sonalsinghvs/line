
let sticks;

function setup () {
  createCanvas(500, 500);
  sticks = new Sticks();
}

function draw() {
  background(0);
  sticks.move();
  sticks.show();
  for (var i = 20; i < 400; i += 60) {
    line(i, 40, i + 60, 80);
  }
}

class Sticks {
  constructor () {
    this.x = 200;
    this.y = 150;
  }

  move() {
    this.x = this.x + random(-10, 5);
    this.y = this.y + random(-5, 15);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    line(this.x, this.y, 150, 200);
  }
}
