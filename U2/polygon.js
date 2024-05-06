function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  beginShape();
  vertex(100,50);
  vertex(400,100);
  vertex(450,300);
  vertex(200,450);
  vertex(50,350);
  endShape(CLOSE);
}

function keyPressed()
{
  save("polygon.png")
}
