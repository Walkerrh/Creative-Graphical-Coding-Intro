function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("#f1faee");
  fill("#e63946");
  rect(50,50,200,400);
  fill("#1d3557");
  rect(250,50,200,200);
  fill("#a8dadc");
  rect(250,250,200,200);
  fill("#457b9d");
  rect(250,250,100,100);
  rect(350,350,100,100);
}

function keyPressed()
{
  save("rectangle.png")
}
