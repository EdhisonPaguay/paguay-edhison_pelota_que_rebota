let balon1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  balon1 = new Pelota(100, 200);
}

function draw() {
  background(random(0, 255), 0, 0, 40);

  balon1.update();
  balon1.display();
}

class Pelota {
  constructor() {
    this.posX = windowWidth / 2;
    this.posY = windowHeight / 2;
    this.diam = 125;
    // this.diam = random(10, 50);
    this.rad = this.diam / 2;
    // this.rad = this.diam = random(100, 500);
    this.velY = 1;
    this.acel = 0.2;
    this.margen = 50;
    this.esp = 34;
    this.piso = windowHeight - this.margen - this.esp / 2;
  }

  update() {
    this.velY += this.acel;
    this.posY += this.velY;

    if (this.posY >= this.piso - this.rad) {
      print("ya");
      this.posY = this.piso - this.rad;
      this.velY *= -1;
    }
  }

  display() {
    noStroke();
    fill(255);
    circle(this.posX, this.posY, this.diam);

    fill(50, 255, 0);
    rect(0, windowHeight - 65, windowWidth, 100);
  }
}
