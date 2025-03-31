let mic; //creem variable gloalper a un micròfon, ara es un espai a la memòria amb un nom.
let bgColor;        // Variable per emmagatzemar el color de fons actual.
function setup() {
 mic=new p5.AudioIn(); // la variable mix és una instància de la "classe entrada audio" (audioIn)
 //Hem creat un nou objecte de laclasse "entrada d àudio" 
 mic.start();
 createCanvas(600,400);
 bgColor = color(200, 220, 255); // Color de fons inicial (un blau clar).

}

function draw() {
 let faceX=300;
 let faceY=200;
 let leftEyeSize = 30+10*cos(frameCount*0.1);//mida variable segons el temps
 let rightEyeSize = 30+10*sin(frameCount*0.1);//mida variable segons el temps
 let vol=mic.getLevel(); //Apliquem el mètode "getLevel" que ens donarà el nivell de volum entre 0 i 1
 //Registrat pel objecte "mic" que és una entrada de àudio. Aquell número el guardarem en una variable local
 //Perquè afecta nomès al "draw" a diferència de la variable global "mic" que està al principi i afecta a tot el codi.
 //El punt que hi ha entre "mic" i "getLevel" és molt important, s'anomena la sintaxi del punt o "dot syntax" Aquest punt aplica mètode a objectes
 //És un sistema que et permet crear qualseol cosa i que fai qualseol cosa
 let h = map(vol,0,1,0,300); //"map"és una funció molt potent que el que fa és que onverteix
 // El que fa es converit els numeros de volum que esan entre 0 i 1, sempre en una escala proporciona o mapejada
 // Entre es números 0 i 300, vol dir que si el volum  fos 0,5 es converteix  150 i s'emmagatzema en "h"
 // Si el número és 0,33 de volum es convertira en 100 de "h" o alçada de la boca o arc.
 // Si el número és 0,67 de volum es convertira en 200 de "h" o alçada de la boca o arc.
 let x = 200 * noise(0.1 * frameCount);
 let y = 200 * noise(0.1 * frameCount + 100);
 // Noise és un tipus de soroll anomenat Perlin que va ser famòs perquè va fer videojocs gràcies a les variacions suaus de números aleatoris
 // que fa aquesta funció. Permet fer números pseudoaleatoris propers
  let ales = 10*random(1);
  let xeye = map(mouseX, 0,600,-10,+10);
  let yeye = map(mouseY, 0,400,-10,+10);
  background(bgColor);  // Pinta el fons amb el color actual.
fill(0);
  print(20, 20, "Fotogrames: ", frameCount);
  print("Noise: ", noise);
  print("Tamany ull esquerra: ", leftEyeSize);
  print("Tamany ull dret: ", rightEyeSize);
  print("Volum: ", vol);
  textSize(12);
  //text("Fotogrames: " + frameCount, 50 , 100);
  //text("Noise: " + noise, 50 , 100);
  //text("Tamany ull esquerra: " + leftEyeSize, 50 , 100);
  //text("Tamany ull dret: " + rightEyeSize, 50 , 100);
  //text("Volum: " + vol, 50, 100);
  //text("Ales: " + ales);
  text("Cara con mosca" , 50, 350)
 fill(1,223,196);
  //orelles
  ellipse(180,175,40,80);
   ellipse(420,175,40,80);
  //cara
  ellipse(300,200,220,300);
  //ulls
 fill(255,255,255);
 ellipse(250,150,50,30);
 ellipse(350,150,50,30);
  //pupiles
  fill(700,0,0)
  ellipse(255+xeye,150+yeye,14,29)
  ellipse(345+xeye,150+yeye,14,29)
  //boca
 fill(200,0,0)
 arc(300,230,100,150-h,0,PI);
  fill(0,0,0)
  //ceja
  arc(250,120,50,10,PI,0)
   arc(350,115-h,50,30,PI,0)
  //bigote
   arc(300,215,130,50,PI,0)
  //pelo
   arc(300,80,130,100,PI,0)
   fill(255);
 noStroke();
 ellipse(x-10,y, 15+ales,25);
 ellipse(x+10,y, 15+ales,25);
 fill(0);
 fill(255);
 noStroke();
 ellipse(x-10,y, 15+ales,25);
 ellipse(x+10,y, 15+ales,25);
 fill(0);
 ellipse(x,y,10,20);
}

 /* Funció per canviar el color de fons:
       Utilitza random() per generar components RGB aleatoris dins d'un interval.
       Aquesta funció es crida en prémer el botó "Canvia Fons". */
       function changeBackground() {
        bgColor = color(random(100, 255), random(100, 255), random(100, 255));
      }
