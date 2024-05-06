let d = 40 

function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
    // background(220);
  if (mouseIsPressed == true)
  {
    stroke(255);
    fill(0);
    circle(mouseX,mouseY,d);
  }
}

function keyPressed()
{
  save("export.png")
}
