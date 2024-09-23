let mic; //creem variable gloalper a un micròfon, ara es un espai a la memòria amb un nom.
function setup() {
 mic=new p5.AudioIn(); // la variable mix és una instància de la "classe entrada audio" (audioIn)
 //Hem creat un nou objecte de laclasse "entrada d àudio" 
 createCanvas(600,400);
 // put setup code here
}

function draw() {
 let vol=mic.getLevel(); //Apliquem el mètode "getLevel" que ens donarà el nivell de volum entre 0 i 1
 //Registrat pel objecte "mic" que és una entrada de àudio. Aquell número el guardarem en una variable local
 //Perquè afecta nomès al "draw" a diferència de la variable global "mic" que està al principi i afecta a tot el codi.
 //El punt que hi ha entre "mic" i "getLevel" és molt important, s'anomena la sintaxi del punt o "dot syntax" Aquest punt aplica mètode a objectes
 //És un sistema que et permet crear qualseol cosa i que fai qualseol cosa
 let h =map(vol,0,1,0,300); //"map"és una funció molt potent que el que fa és que onverteix
 // El que fa es converit els numeros de volum que esan entre 0 i 1, sempre en una escala proporciona o mapejada
 // Entre es números 0 i 300, vol dir que si el volum  fos 0,5 es converteix  150 i s'emmagatzema en "h"
 // Si el número és 0,33 de volum es convertira en 100 de "h" o alçada de la boca o arc.
 // Si el número és 0,67 de volum es convertira en 200 de "h" o alçada de la boca o arc.
 background(127);
 fill(1,223,196);
 ellipse(300,200,220,300);
  ellipse(180,175,40,80);
   ellipse(420,175,40,80);
  ellipse(300,200,220,300);
 fill(255,255,255);
 ellipse(250,150,50,30);
 ellipse(350,150,50,30);
  fill(700,0,0)
  ellipse(255,150,14,29)
  ellipse(345,150,14,29)
 fill(200,0,0)
 arc(300,230,100,150,0,PI);
  fill(0,0,0)
  arc(250,120,50,10,PI,0)
   arc(350,115,50,30,PI,0)
   arc(300,215,130,50,PI,0)
   arc(300,80,130,100,PI,0)
 console.log(mic);
 console.log(vol);
 console.log(h);
 // El "console.log" ens serveixen per veure el valor de les variables en cada moment
 //
}
