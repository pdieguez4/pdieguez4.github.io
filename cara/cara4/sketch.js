let mic; 
let bgColor; 




function setup() {
  mic = new p5.AudioIn();
  mic.start();
  createCanvas(600, 400);
  bgColor = color(200, 220, 255);
  faceX = 300;
  faceY = 200;
  
  

}

function draw() {
  let vol = mic.getLevel();
  let h = map(vol, 0, 1, 5, 80); 
  let leftEyeSize = 25 + 8 * cos(frameCount * 0.1);
  let rightEyeSize = 25 + 8 * sin(frameCount * 0.1);
  
  background(bgColor);
  orelles();
  cara();
  ulls(leftEyeSize, rightEyeSize);
  pupiles(leftEyeSize, rightEyeSize);
  celles(h);
  bigote();
  boca(h);
  pelo();
  mosca();
}

function orelles(){
 fill(1,223,196);
  ellipse(180,175,40,80);
   ellipse(420,175,40,80);
}

function cara(){
  ellipse(300,200,220,300);
}

function ulls(leftEyeSize, rightEyeSize){
 fill(255,255,255);
 ellipse(250,150,50,30);
 ellipse(350,150,50,30);
  
}

function pupiles(leftEyeSize, rightEyeSize){
  xeye = map(mouseX, 0, 600, -8, 8);
  yeye = map(mouseY, 0, 400, -5, 5);
   fill(700,0,0)
  ellipse(255+xeye,150+yeye,14,29)
  ellipse(345+xeye,150+yeye,14,29)
}

function celles(h){
  fill(0)
 arc(250,120,50,10,PI,0)
   arc(350,115-h,50,30,PI,0)
}

function bigote(){
  fill(0);
  arc(300,215,130,50,PI,0);
}

function boca(h){
 fill(200,0,0)
 arc(300,230,100,150-h,0,PI);
  fill(0,0,0)
}

function pelo(){
  arc(300,80,130,100,PI,0)
}

function mosca(){
  let ales = 10*random(1);
  let x = 200 * noise(0.1 * frameCount);
  let y = 200 * noise(0.1 * frameCount + 100);
  
  fill(255);
  ellipse(x-10,y, 15+ales,25);
  ellipse(x+10,y, 15+ales,25);
  fill(0);
  ellipse(x,y,10,20);
}

function changeBackground() {
  bgColor = color(random(100, 255), random(100, 255), random(100, 255));
}
