let posX, posY, diam, rad, esp;
let piso;
let margen;
let velY;
function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
  posY = 100;
  rectMode(CENTER);
  piso = windowHeight - margen - esp / 2;
  esp = 34;
  diam = 50;
  rad = diam / 2;
}

function draw() {
  background(0, 255, 190, 50);
  noStroke();

  posY += velY;

  if (posY > piso - rad) {
    velY *= -1;
  }

  fill(255);
  circle(mouseX, posY, 50);

  fill(255, 0, 0);
  rect(windowWidth * 0.5, windowWidth - margen, windowWidth * 0.8, esp);
}
