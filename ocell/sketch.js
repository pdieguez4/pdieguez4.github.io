function setup() {
  mic=new p5.AudioIn();
  createCanvas(400, 400);
  mic.start();
}

function draw() {
  let vol=mic.getLevel();
  let h= map(vol,0,1,0,5)
  background(220);
  beginShape();
  vertex(20,50)
  vertex(65,69)
  vertex(70,65)
  vertex(80,60)
  vertex(85,61)
  vertex(100,61+h)
  vertex(85,66)
  vertex(85,66)
  vertex(100,65-h)
  vertex(85,83)
  vertex(81,90)
  vertex(75,100)
  vertex(65,105)
  vertex(50,106)
  vertex(40,105)
  vertex(35,104)
  vertex(30,102)
  vertex(25,100)
  vertex(20,97)
  vertex(18,94)
  vertex(24,96)
  vertex(28,96)
  vertex(35,94)
  vertex(37,92)
  vertex(38,91)
  vertex(35,87)
  
  endShape(CLOSE);
}
