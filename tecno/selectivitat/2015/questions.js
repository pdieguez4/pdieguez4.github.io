const questions = [
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `Una barra quadrada massissa de 5 mm de gruix pot suportar una força axial de tracció màxima de 9,5 kN sense trencar-se. Quina és la resistència a la ruptura del material?`,
        options: [
            { text: "3,8 MPa", value: "a" },
            { text: "38 MPa", value: "b" },
            { text: "380 MPa", value: "c" },
            { text: "1900 MPa", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
           \\[
A = 5 \\, \\text{mm} \\times 5 \\, \\text{mm} = 25 \\, \\text{mm}^2 = 25 \\cdot 10^{-6} \\, \\text{m}^2
\\]
\\[
\\sigma = \\frac{F}{A} = \\frac{9500 \\, \\text{N}}{25 \\cdot 10^{-6} \\, \\text{m}^2} = 3.8 \\cdot 10^8 \\, \\text{Pa}
\\]
\\[
\\sigma = 380 \\, \\text{MPa} 
\\]
<br><br>
            `
    },
    {
        type: "questions", // Tipus de pregunta
        category: "maquines",
        text: `Una cinta transportadora de sacs es mou a 0,8 m/s. Si transporta 900 sacs cada hora,
quina és la distància mitjana entre els sacs sobre la cinta?`,
        options: [
            { text: "3,8 m", value: "a" },
            { text: "3,6 m", value: "b" },
            { text: "3,4 m", value: "c" },
            { text: "3,2 m", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
           \\[
v = 0.8 \\, \\frac{\\text{m}}{\\text{s}}, \\quad 900 \\, \\text{sacs/hora} = \\frac{900}{3600} = 0.25 \\, \\frac{\\text{sacs}}{\\text{s}}
\\]
\\[
\\text{Distància mitjana entre sacs } d = \\frac{v}{\\text{flux de sacs}} = \\frac{0.8}{0.25} = 3.2 \\, \\text{m}
\\]
<br><br>
    `,
    },
   {
    type: "questions", // Tipus de pregunta
    category: "organitzacio",
    text: `La fiabilitat d’un producte, entesa com la probabilitat que funcioni sense avaries durant
un cert temps, és del 95 % durant les primeres 4 000 h. D’un lot inicial de 720 unitats, quantes
se n’han avariat sense haver arribat a funcionar durant 4 000 h?`,
    options: [
        { text: "684", value: "a" },
        { text: "72", value: "b" },
        { text: "36", value: "c" },
        { text: "360", value: "d" }
    ],
    correctAnswer: "c",
    steps: `
\\[
\\text{Fiabilitat} = 95\\% \\Rightarrow \\text{Taxa d’avaria} = 5\\%
\\]
\\[
\\text{Unitats avariades} = 0.05 \\cdot 720 = 36
\\]
<br><br>
    `,
},
    {
    type: "questions", // Tipus de pregunta
    category: "energia",
    text: `Una enquesta feta als assistents en un acte públic indica que, per a arribar-hi, l’ocupació
mitjana d’un vehicle privat ha estat d’1,18 passatgers. Per a calcular l’energia consumida en
1 km per cada passatger, s’ha suposat que el consum mitjà del vehicle és de 7 L/100 km i que
el combustible emprat té un poder calorífic de 34,1 MJ/L. Quina és l’energia consumida en
1 km per cada passatger?`,
    options: [
        { text: "2,387 MJ", value: "a" },
        { text: "2,023 MJ", value: "b" },
        { text: "5,748 MJ", value: "c" },
        { text: "4,128 MJ", value: "d" }
    ],
    correctAnswer: "b",
    steps: `
\\[
\\text{Consum del vehicle} = 7 \\, \\frac{\\text{L}}{100 \\, \\text{km}} = 0.07 \\, \\frac{\\text{L}}{\\text{km}}
\\]
\\[
\\text{Energia consumida per km (vehicle)} = 0.07 \\cdot 34.1 = 2.387 \\, \\text{MJ/km}
\\]
\\[
\\text{Energia per passatger i km} = \\frac{2.387}{1.18} = 2.023 \\, \\text{MJ}
\\]
<br><br>
    `,
},
   {
    type: "questions", // Tipus de pregunta
    category: "metrologia",
    text: `El valor nominal d’una resistència elèctrica és de 470 Ω amb una tolerància del ± 2 %. El
valor real d’aquesta resistència pot estar comprès entre`,
    options: [
        { text: "460,6 Ω i 479,4 Ω.", value: "a" },
        { text: "465,3 Ω i 474,7 Ω.", value: "b" },
        { text: "465,3 Ω i 479,4 Ω.", value: "c" },
        { text: "460,6 Ω i 474,7 Ω.", value: "d" }
    ],
    correctAnswer: "a",
    steps: `
\\[
\\text{Tolerància} = 2\\% \\cdot 470 = 9.4 \\, \\Omega
\\]
\\[
R_{\\min} = 470 - 9.4 = 460.6 \\, \\Omega
\\]
\\[
R_{\\max} = 470 + 9.4 = 479.4 \\, \\Omega
\\]
<br><br>
    `,
},
    {
    type: "questions", // Tipus de pregunta
    category: "organitzacio",
    text: `El palet estàndard europeu té unes dimensions de (800 × 1 200) mm²
i pot tenir una massa màxima, juntament amb la càrrega, de 1 000 kg. La base d’una prestatgeria
que permet suportar aquest tipus de palets, de qualsevol massa autoritzada i sense apilar-los, és de
(2 700 × 1 350) mm². Quina massa ha de poder suportar un prestatge d’aquesta prestatgeria?`,
    options: [
        { text: "3 797 kg", value: "a" },
        { text: "1 000 kg", value: "b" },
        { text: "3 000 kg", value: "c" },
        { text: "3 375 kg", value: "d" }
    ],
    correctAnswer: "c",
steps: `

\\[ \\text{Palets al llarg} = \\text{trunc}\\left(\\frac{2700}{800}\\right) = 3 \\text{ palets} \\]

\\[ \\text{Palets al fons} = \\text{trunc}\\left(\\frac{1350}{1200}\\right) = 1 \\text{ palet} \\]

\\[ \\text{Total palets per prestatge} = 3 \\cdot 1 = 3 \\text{ palets} \\]

\\[ \\text{Massa suportada} = 3 \\cdot 1000 = 3.000 , \\text{kg} \\]


<br><br>
    `,
},
    {
    type: "questions", // Tipus de pregunta
    category: "motors",
    text: `Un motor de cotxe té quatre cilindres amb un diàmetre de 79,5 mm i una cursa de
80,5 mm cadascun. Quina és la cilindrada del motor?`,
    options: [
        { text: "1 598 cm³", value: "a" },
        { text: "6 394 cm³", value: "b" },
        { text: "2 035 cm³", value: "c" },
        { text: "500 cm³", value: "d" }
    ],
    correctAnswer: "a",
    steps: `
\\[
\\text{Diàmetre } D = 79.5 \\, \\text{mm} = 7.95 \\, \\text{cm}, \\quad \\text{Cursa } C = 80.5 \\, \\text{mm} = 8.05 \\, \\text{cm}
\\]
\\[
\\text{Volum d’un cilindre} = \\pi \\left( \\frac{D}{2} \\right)^2 \\cdot C = \\pi \\left( \\frac{7.95}{2} \\right)^2 \\cdot 8.05 \\approx 399.5 \\, \\text{cm}^3
\\]
\\[
\\text{Cilindrada total} = 4 \\cdot 399.5 \\approx 1\\,598 \\, \\text{cm}^3
\\]
<br><br>
    `,
},
   {
    type: "questions", // Tipus de pregunta
    category: "metrologia",
    text: `Un tacòmetre digital mostra el valor de la mesura amb cinc dígits i permet fer mesuraments entre 1 min⁻¹ i 99 999 min⁻¹. La precisió és el valor més gran entre ± 0,02 % de la mesura
o ± 1 min⁻¹. Si el tacòmetre mostra 24 959 min⁻¹, el valor real de la mesura està comprès entre:`,
    options: [
        { text: "24 949 min⁻¹ i 24 954 min⁻¹.", value: "a" },
        { text: "24 958 min⁻¹ i 24 960 min⁻¹.", value: "b" },
        { text: "24 954 min⁻¹ i 24 964 min⁻¹.", value: "c" },
        { text: "24 458 min⁻¹ i 25 458 min⁻¹.", value: "d" }
    ],
    correctAnswer: "c",
    steps: `
\\[
\\text{0,02\\% de la mesura} = 0.0002 \\cdot 24\\,959 \\approx 4.9918 \\approx 5 \\, \\text{min⁻¹}
\\]
\\[
\\text{Precisió} = \\max(±1, ±5) = ±5 \\, \\text{min⁻¹}
\\]
\\[
\\text{Valor real} \\in [24\\,959 - 5, 24\\,959 + 5] = [24\\,954, 24\\,964] \\, \\text{min⁻¹}
\\]
<br><br>
    `,
},
    {
    type: "questions", // Tipus de pregunta
    category: "motors",
    text: `Un cargol avança a una velocitat de 5 mm/s quan es cargola a 200 min⁻¹. Quin és el pas
del cargol?`,
    options: [
        { text: "0,5 mm/volta", value: "a" },
        { text: "0,75 mm/volta", value: "b" },
        { text: "1,25 mm/volta", value: "c" },
        { text: "1,5 mm/volta", value: "d" }
    ],
    correctAnswer: "d",
    steps: `

\\[ n = \\frac{200}{60} = 3,333... \\text{ s}^{-1} \\]
\\[ p = \\frac{v}{n} = \\frac{5}{3,333...} \\]
\\[ p = 1,5 , \\text{ mm/volta} \\]
<br><br>
    `,
},
    {
    type: "questions", // Tipus de pregunta
    category: "metrologia",
    text: `En l’ajust 147 D9/h9, la tolerància D9 del forat (+245 +145) μm és i la h9 de l’eix és (0 -100) μm. 
Quin és el joc mínim d’aquest ajust?`,
    options: [
        { text: "145 μm", value: "a" },
        { text: "200 μm", value: "b" },
        { text: "345 μm", value: "c" },
        { text: "No hi ha joc en aquest ajust.", value: "d" }
    ],
    correctAnswer: "a",
    steps: `

\\[ \\text{Desviació inferior del forat (EI)} = +145 , \\mu\\text{m} \\]
\\[ \\text{Desviació superior de l'eix (es)} = 0 , \\mu\\text{m} \\]
\\[ J_{mín} = \\text{EI} - \\text{es} \\]
\\[ J_{mín} = 145 - 0 = 145 , \\mu\\text{m} \\]
<br><br>
    `,
},
   {
    type: "questions", // Tipus de pregunta
    category: "materials",
    text: `L’alumini té una densitat ρ = 2 700 kg/m³. Quin és el pes d’una barra massissa de secció
circular de 140 mm de diàmetre i 1,3 m de llargària? (Preneu g = 10 m/s².)`,
    options: [
        { text: "688,0 N", value: "a" },
        { text: "540,3 N", value: "b" },
        { text: "216,1 N", value: "c" },
        { text: "3 088 N", value: "d" }
    ],
    correctAnswer: "b",
    steps: `

\\[ \\text{Secció (A)} = \\pi \\cdot r^2 = \\pi \\cdot 0,07^2 \\approx 0,015394 , \\text{m}^2 \\]

\\[ \\text{Volum (V)} = A \\cdot L = 0,015394 \\cdot 1,3 \\approx 0,020012 , \\text{m}^3 \\]

\\[ \\text{Massa (m)} = \\rho \\cdot V = 2.700 \\cdot 0,020012 \\approx 54,032 , \\text{kg} \\]

\\[ \\text{Pes (P)} = m \\cdot g = 54,032 \\cdot 10 = 540,32 , \\text{N} \\]
            <br><br>
            `,
    },
    {
    type: "questions", // Tipus de pregunta
    category: "metrologia",
    text: `En el plànol de la figura, les toleràncies per a les dimensions angulars són ±0° 30’ per a α₁
i ±0° 20’ per a α₂. Quina és la tolerància per a β?`,
    options: [
        { text: "(+0° 30’ / −0° 20’)", value: "a" },
        { text: "±0° 50’", value: "b" },
        { text: "(+0° 30’ / −0° 0’)", value: "c" },
        { text: "±0° 10’", value: "d" }
    ],
    correctAnswer: "b",
    steps: `

\\[ \\beta = \\alpha_1 + \\alpha_2 \\]

\\[ \\text{Tolerància màxima} = ±(30' + 20') \\]

\\[ \\text{Tolerància de } \\beta = ±50' = ±0°50' \\]

            <br><br>
            `,
},
   {
    type: "questions", // Tipus de pregunta
    category: "organitzacio",
    text: `Un transportista porta en un camió un màxim de 48 palets de 500 kg. Per cada palet,
cobra al client 50 € fixos, més 0,40 € per kilòmetre recorregut. Si les despeses del camió i de
gestió són de 6,30 € per kilòmetre recorregut, quants kilòmetres ha de recórrer amb el camió
ple per a obtenir un benefici de 25 000 €?`,
    options: [
        { text: "1 752 km", value: "a" },
        { text: "56 500 km", value: "b" },
        { text: "1 938 km", value: "c" },
        { text: "3 968 km", value: "d" }
    ],
    correctAnswer: "a",
    steps: `
\\[ \\text{Ingrés fix} = 48 \\cdot 50 = 2400, \\quad \\text{Marge/km} = (48 \\cdot 0,40) - 6,30 = 12,9 \\]

\\[ \\text{Benefici} = \\text{Fix} + (\\text{Marge/km} \\cdot x) \\Rightarrow x = \\frac{\\text{Benefici} - \\text{Fix}}{\\text{Marge/km}} \\]

\\[ x = \\frac{25,000 - 2,400}{12,9} = \\frac{22,600}{12,9} \\approx 1,751,93 \\approx 1,752 , \\text{km} \\]
<br><br>
    `,
},
    {
    type: "questions", // Tipus de pregunta
    category: "motors",
    text: `El motor d’una motocicleta de 125 cm³ de quatre temps té una cursa de 50,6 mm i una
relació de compressió r_c = 7,1. Quin és el volum de la cambra de combustió?`,
    options: [
        { text: "125 cm³", value: "a" },
        { text: "20,49 cm³", value: "b" },
        { text: "17,61 cm³", value: "c" },
        { text: "10,47 cm³", value: "d" }
    ],
    correctAnswer: "b",
    steps: `
\\[
\\text{Cilindrada} = 125 \\, \\text{cm³}, \\quad r_c = 7.1
\\]
\\[
\\text{Relació de compressió} \\; r_c = \\frac{V_c + V_{cc}}{V_{cc}} \\Rightarrow V_{cc} = \\frac{V_c}{r_c - 1}
\\]
\\[
V_{cc} = \\frac{125}{7.1 - 1} = \\frac{125}{6.1} \\approx 20.49 \\, \\text{cm³}
\\]
<br><br>
    `,
},
    {
    type: "questions", // Tipus de pregunta
    category: "materials",
    text: `L’aliatge de titani Ti-6Al-7Nb que s’utilitza en pròtesis internes conté un 6,1 % d’alumini
(Al), un 7,3 % de niobi (Nb), un 0,99 % d’altres components (C, H, Fe, N, O, Ta) i la resta és
titani (Ti). Quina quantitat de titani (Ti) hi ha en 25 kg d’aquest aliatge?`,
    options: [
        { text: "21,40 kg", value: "a" },
        { text: "1,525 kg", value: "b" },
        { text: "21,65 kg", value: "c" },
        { text: "3,35 kg", value: "d" }
    ],
    correctAnswer: "c",
   steps: `
\\[
\\text{Percentatge total conegut} = 6.1\\% + 7.3\\% + 0.99\\% = 14.39\\%
\\]
\\[
\\text{Percentatge de Ti} = 100\\% - 14.39\\% = 85.61\\%
\\]
\\[
\\text{Quantitat de Ti} = 0.8561 \\cdot 25 = 21.40\\ \\text{kg}
\\]
<br><br>
    `,
},  
{
        type: "exercicis",
        category: "control",
        text: `Una bomba de cabal es fa servir per a mantenir el nivell d’aigua d’un dipòsit entre hinf i
hsup. La bomba es posa en marxa, si està aturada, quan el nivell h del dipòsit és inferior a hinf,
i s’atura, si està en marxa, quan h és superior a hsup. Entre hinf i hsup la bomba no canvia l’estat
de funcionament. Responeu a les qüestions que hi ha a continuació utilitzant les variables
d’estat següents:
               <img src="https://pdieguez4.github.io/tecno/selectivitat/2015/imatges/imatgePreguntaE1.png" alt="Imatge relacionada amb la pregunta" width="750">
              
               <br><strong>a)</strong> Escriviu la taula de veritat del sistema i indiqueu els casos que no són possibles [1 punt]
               <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la.  [1 punt]
               <br><strong>c)</strong> Dibuixeu l’esquema de contactes equivalent. [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <img src="https://pdieguez4.github.io/tecno/selectivitat/2015/imatges/imatgeRespostaE1.png" alt="Imatge relacionada amb la resposta" width="800">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "exercicis",
        category: "motors",
        text: `
        <img src="https://pdieguez4.github.io/tecno/selectivitat/2015/imatges/imatgePreguntaE2.png" alt="Imatge relacionada amb la pregunta" width="900">

       Un trepant elèctric funciona mitjançant un motor de rendiment ηmot = 0,76 i una transmissió per corretja dentada que té un rendiment ηtransm = 0,94 i una relació de transmissió
τ = n2
/n1 = 5/7, tal com mostra la figura. En règim de funcionament nominal, el motor consumeix una potència elèctrica Pelèctr = 1 100W i l’eix del motor gira a n1 = 1 460 min–1. Determineu:
              
               <br><strong>a)</strong> La potència P1
 a l’eix del motor. [0,5 punts]
               <br><strong>b)</strong>  El parell Γ2
 a l’eix de la broca (eix de sortida del trepant). [0,5 punts]
               <br><strong>c)</strong> La potència total dissipada Pdiss en el trepant [0,5 punts]
               <br><strong>d)</strong> El diàmetre d2
 de la politja solidària a l’eix de la broca
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
           <strong>a) Potència útil del motor \\(P_1\\):</strong>
<br>
\\[
P_1 = P_{\\text{elèctr}} \\cdot \\eta_{\\text{mot}} = 1100 \\cdot 0{,}76 = 836 \\, \\text{W}
\\]
<br>
<strong>b) Parell motor a la sortida de la transmissió \\(\Gamma_2\\):</strong>
<br>
\\[
P_2 = P_1 \\cdot \\eta_{\\text{transm}} \\quad ; \\quad n_2 = \\tau \\cdot n_1
\\]
\\[
\\Gamma_2 = \\frac{P_2}{n_2 \\frac{2\\pi}{60}} = \\frac{P_1 \\cdot \\eta_{\\text{transm}}}{\\tau \\cdot n_1 \\frac{2\\pi}{60}} = 7{,}196 \\, \\text{Nm}
\\]
<br>
<strong>c) Potència dissipada per calor \\(P_{\\text{diss}}\\):</strong>
<br>
\\[
P_{\\text{diss}} = P_{\\text{elèctr}} - P_2 = P_{\\text{elèctr}} (1 - \\eta_{\\text{mot}} \\cdot \\eta_{\\text{transm}}) = 314{,}2 \\, \\text{W}
\\]
<br>
<strong>d) Diàmetre de la politja de sortida \\(d_2\\):</strong>
<br>
\\[
\\tau = \\frac{n_2}{n_1} = \\frac{d_1}{d_2} \\implies d_2 = \\frac{d_1}{\\tau} = 112 \\, \\text{mm}
\\]
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "energia",
        text: `
        En una instaŀlació, una bomba accionada per un motor tèrmic fa pujar un volum
V= 600 m3
 d’aigua fins a una altura h = 3,6 m, en un temps t = 10 h de funcionament estacionari. Determineu:
              
               <br><strong>a)</strong> El treball W fet per la bomba. [1 punt]
               <br><strong>b)</strong> La potència hidràulica Ph
 que desenvolupa la bomba. [0,5 punts]
               <br><strong>c)</strong>  El rendiment η del grup motobomba, si el motor ha consumit c = 3 L d’un combustible
de densitat ρ = 850 kg/m3
 i de poder calorífic pc = 42,5 MJ/kg. [1 punt]
               
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Treball realitzat \\(W\\) (Energia potencial):</strong>
<br>
\\[
W = E_{\\text{p}} = mgh = V \\rho g h = 600 \\cdot 1000 \\cdot 9{,}807 \\cdot 3{,}6 = 21{,}18 \\, \\text{MJ}
\\]
<br>
<strong>b) Potència hídrica \\(P_{\\text{h}}\\):</strong>
<br>
\\[
P_{\\text{h}} = \\frac{W}{t} = 588{,}4 \\, \\text{W}
\\]
<br>
<strong>c) Rendiment del sistema \\(\\eta\\):</strong>
<br>
\\[
\\eta = \\frac{W}{c \\cdot \\rho \\cdot p_{\\text{c}}} = 0{,}1955
\\]
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "energia",
        text: `
        En coure carn durant 15 min en una graella elèctrica alimentada amb una tensió U = 230 V,
es consumeixen 0,6 kW h d’energia elèctrica. La resistència de la graella està formada per una
cinta de nicrom de resistivitat ρ = 11,8 × 10–7 Ω m i secció rectangular A = (0,1 × 1,5) mm2
.
Determineu:
              
               <br><strong>a)</strong> El corrent I que circula per la resistència. [1 punt]
               <br><strong>b)</strong> La longitud L de la cinta de nicrom de la resistència. [1 punt]
               
               <br> Per a garantir una bona cocció, cal que la superfície horitzontal efectiva del nicrom sigui
un 3,5 % de la superfície total de la graella. Si la cinta està coŀlocada en la posició òptima,
determineu:
               <br><strong>c)</strong> La superfície total S de la graella. [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Potència \\(P\\) i intensitat \\(I\\):</strong>
<br>
\\[
E = P \\cdot t \\implies P = \\frac{E}{t} = 2400 \\text{ W}
\\]
\\[
I = \\frac{P}{U} = 10,43 \\text{ A}
\\]
<br>
<strong>b) Resistència \\(R\\) i longitud del conductor \\(L\\):</strong>
<br>
\\[
R = \\frac{U^2}{P} = \\frac{\\rho \\cdot L}{A} \\implies L = \\frac{U^2 \\cdot A}{P \\cdot \\rho} = 2,802 \\text{ m}
\\]
<br>
<strong>c) Superfície total:</strong>
<br>
\\[
S_{\\text{òptima}} = 2,802 \\cdot 1,5 \\cdot 10^{-3} \\text{ m}^2 \\implies S = \\frac{100}{3,5} S_{\\text{òptima}} = 0,12 \\text{ m}^2
\\]
            <br><br>
            `
    },
     {
        type: "exercicis",
        category: "maquines",
        text: `
        <img src="https://pdieguez4.github.io/tecno/selectivitat/2015/imatges/imatgePreguntaE5.png" alt="Imatge relacionada amb la pregunta" width="800">
        LLa barra AB de la qual penja la cistella de bàsquet de la figura s’articula al sostre en el punt
A i es manté vertical mitjançant la barra BC articulada en el punt B. En el punt C del sostre, la
barra BC es manté fixa per l’acció d’un cable horitzontal, que no es mostra en la figura. Totes
les masses es consideren negligibles excepte la massa del tauler, que és m = 35 kg.
              
               <br><strong>a)</strong> Dibuixeu el diagrama de cos lliure del conjunt format per la barra AB i el tauler.
[0,5 punts]
               <br><strong>Determineu:</strong>
               <br><strong>b)</strong> La força FBC que la barra BC fa sobre la barra AB. [0,5 punts]
               <br><strong>c)</strong> Les forces vertical FV i horitzontal FH que la cistella rep en el punt A. [1 punt]
               <br><strong>d)</strong>  La força horitzontal Fcable que fa el cable sobre la barra BC. [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            
            <img src="https://pdieguez4.github.io/tecno/selectivitat/2015/imatges/imatgeRespostaE5.png" alt="Imatge relacionada amb la resposta" width="850">
            `
    },
   {
        type: "exercicis",
        category: "control",
        text: `Es tiren simultàniament tres daus i se sumen els valors obtinguts. El resultat pot ser parell
o senar en funció de si el valor de cadascun dels daus és, també, parell o senar. Es defineix la
funció lògica de la paritat del resultat utilitzant les variables d’estat següents:
               <img src="https://pdieguez4.github.io/tecno/selectivitat/2015/imatges/imatgePreguntaE6.png" alt="Imatge relacionada amb la pregunta" width="750">
              
               <br><strong>a)</strong> Escriviu la taula de veritat del sistema. [1 punt]
               <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
               <br><strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <img src="https://pdieguez4.github.io/tecno/selectivitat/2015/imatges/imatgeRespostaE6.png" alt="Imatge relacionada amb la resposta" width="750">`,  // Imatge opcional al final de la resposta
    },
     {
        type: "exercicis",
        category: "motors",
        text: `
        Un dels cotxes participants en el Raŀli Dakar té un dipòsit de combustible amb una
capacitat V= 400 L. La massa del vehicle amb el dipòsit buit més la dels ocupants és de
m = 2 050 kg. El combustible que utilitza el cotxe és gasoil de densitat ρ = 0,832 kg/L i poder
calorífic pc = 41,7 MJ/L. El radi de les rodes és r = 400 mm.
              
               <br><strong>a)</strong> Dibuixeu, d’una manera aproximada i indicant les escales, la massa total en funció del
percentatge de càrrega de combustible disponible en el dipòsit. [1 punt]

<br>Amb la primera marxa, la relació de transmissió entre la velocitat de rotació del motor
nmot i la velocitat de rotació de les rodes nr
 és τ = nr
/nmot = 0,285. El rendiment de la transmissió
és ηtrans = 0,85 i el motor proporciona un parell màxim Γ = 750 N m. Determineu:
               <br><strong>b)</strong> El parell total màxim Γr
 a l’eix de les rodes. [0,5 punts]
               <br><strong>c)</strong> L’acceleració màxima del cotxe amb el dipòsit ple i amb el dipòsit al 5 % de la capacitat total. [1 punt]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <img src="https://pdieguez4.github.io/tecno/selectivitat/2015/imatges/imatgeRespostaE7.png" alt="Imatge relacionada amb la resposta" width="750">`,  // Imatge opcional al final de la resposta
    },
   {
        type: "exercicis",
        category: "energia",
        text: `
        Per a abastir d’aigua potable una població, es construeix una estació de bombament. 
        Aquesta estació ha de bombar un volum diari V = 2 540 m3 elevant-lo a una altura h = 129 m. Les pèrdues de tota la instaŀlació són equivalents a una elevació addicional Δh = 70,81 m. L’estació de bombament consta de sis bombes accionades mitjançant un motor elèctric. El rendiment de les bombes és η = 0,7 i, per a reduir el cost de la despesa elèctrica, es bomba únicament durant un temps t = 8 h al dia en què el cost de l’energia elèctrica és el més reduït, i correspon a c = 0,08241 €/(kWh). Determineu:
        
        <br><strong>a)</strong> El treball W que ha de desenvolupar l’estació de bombament. [1 punt]
        <br><strong>b)</strong> La potència elèctrica Pelèctr consumida per cada bomba i el cost total del consum elèctric en un dia. [1 punt]
        <br><strong>c)</strong> La pressió mitjana p de funcionament de les bombes. [0,5 punts]
        
        <br><br>
        `, 
        correctAnswer: "",  
        steps: `
            <strong>a) Treball desenvolupat per l'estació \\(W\\):</strong>
<br>
\\[
W = E_{\\text{p}} = mg(h + \\Delta h) = V \\rho g (h + \\Delta h) = 2540 \\cdot 1000 \\cdot 9{,}807 \\cdot (129 + 70{,}81) = 4977 \\, \\text{MJ}
\\]
<br>
<strong>b) Potència elèctrica per bomba \\(P_{\\text{elèctr}}\\) i cost total:</strong>
<br>
\\[
\\eta = \\frac{W}{6 \\cdot P_{\\text{elèctr}} \\cdot t} \\Rightarrow P_{\\text{elèctr}} = \\frac{W}{6 \\cdot \\eta \\cdot t} = \\frac{4977 \\cdot 10^6}{6 \\cdot 0{,}7 \\cdot 8 \\cdot 3600} = 41{,}15 \\, \\text{kW}
\\]
\\[
E_{\\text{elèctr}} = 6 \\cdot P_{\\text{elèctr}} \\cdot t = 1975 \\, \\text{kWh} \\Rightarrow \\text{cost} = E_{\\text{elèctr}} \\cdot c = 162{,}8 \\, \\text{€}
\\]
<br>
<strong>c) Pressió mitjana de funcionament \\(p\\):</strong>
<br>
\\[
P_{\\text{h}} = \\frac{W}{t} = p \\cdot q = p \\cdot \\frac{V}{t} \\Rightarrow p = \\frac{W}{V} = \\frac{4977 \\cdot 10^6}{2540} = 19{,}60 \\cdot 10^5 \\, \\text{Pa} = 19{,}60 \\, \\text{bar}
\\]
            <br><br>
            `
    },
     {
        type: "exercicis",
        category: "materials",
        text: `
        <img src="https://pdieguez4.github.io/tecno/selectivitat/2015/imatges/imatgePreguntaE9.png" alt="Imatge relacionada amb la pregunta" width="900">
        Les planxes d’acer A i B de la figura tenen un gruix e = 5 mm i una amplària b = 2 m.
S’uneixen mitjançant cargols M10, que, collats d’una manera adequada, proporcionen una
força de compressió de les planxes Fc = 32 kN. La unió de les planxes es produeix per la força
de fricció que hi ha entre aquestes a causa de la compressió que hi exerceixen els cargols. El
mòdul d’elasticitat de l’acer és E = 210 GPa i la unió ha d’aguantar una força distribuïda uniformement de F = 60 kN/m. Determineu:
              
               <br><strong>a)</strong> El nombre de cargols que cal posar-hi. [1 punt]
               <br><strong>b)</strong> La tensió normal σ de les planxes. [1 punt]
               <br><strong>c)</strong> La deformació longitudinal unitària ε de les planxes causada per la força F. [0,5 punts]

               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Força tangencial \\(F_{\\text{tan}}\\) i nombre de cargols:</strong>
<br>
\\[
F_{\\text{tan}} = \\mu F_{\\text{c}} = 12{,}8 \\, \\text{kN} \\implies \\frac{F \\cdot b}{F_{\\text{tan}}} = \\frac{60 \\, \\text{kN/m} \\cdot 2 \\, \\text{m}}{12{,}8 \\, \\text{kN}} = 9{,}375 \\implies \\text{es necessiten 10 cargols}
\\]
<br>
<strong>b) Tensió normal \\(\\sigma\\):</strong>
<br>
\\[
\\sigma = \\frac{F \\cdot b}{e \\cdot b} = \\frac{F}{e} = \\frac{60 \\cdot 10^3}{5 \\cdot 10^{-3}} = 12 \\, \\text{MPa}
\\]
<br>
<strong>c) Deformació unitària \\(\\varepsilon\\):</strong>
<br>
\\[
\\varepsilon = \\frac{\\Delta l}{l} = \\frac{\\sigma}{E} = \\frac{12 \\cdot 10^6}{210 \\cdot 10^9} = 57{,}14 \\cdot 10^{-6}
\\]
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "motors",
        text: `
        Un muntacàrregues és accionat per un motor reductor i un sistema de politges. El motor reductor és elèctric i té un rendiment ηmr = 0,65. El sistema de politges té un rendiment ηpol = 0,85 i proporciona una relació de transmissió entre la velocitat v de pujada de la càrrega, en m/s, i la rotació nmr de l’eix de sortida del motor reductor, en s–1, de τ = v/nmr = 0,9918 m. El motor s’alimenta amb una tensió U = 230 V i, en règim de funcionament nominal, consumeix una intensitat I = 6,4 A quan la càrrega puja a v = 0,4 m/s constant. Determineu:
        
        <br><strong>a)</strong> La potència Pmr i el parell Γmr a l’eix de sortida del motor reductor. [1 punt]
        <br><strong>b)</strong> La massa m de la càrrega que està pujant. [1 punt]
        <br><strong>c)</strong> El rendiment global ηtot del muntacàrregues. [0,5 punts]
        
        <br><br>
        `, 
        correctAnswer: "",  
        steps: `
            <strong>a) Potència \\(P_{\\text{m-r}}\\) i parell \\(\\Gamma_{\\text{m-r}}\\) a l'eix de sortida:</strong>
<br>
\\[
P_{\\text{m-r}} = \\eta_{\\text{m-r}} P_{\\text{elèct}} = \\eta_{\\text{m-r}} U I = 956{,}8 \\, \\text{W}
\\]
\\[
n_{\\text{m-r}} = \\frac{v}{\\tau} \\rightarrow \\Gamma_{\\text{m-r}} = \\frac{P_{\\text{m-r}}}{2 \\pi n_{\\text{m-r}}} = \\frac{P_{\\text{m-r}}}{2 \\pi \\frac{v}{\\tau}} = 377{,}6 \\, \\text{Nm}
\\]
<br>
<strong>b) Massa \\(m\\) de la càrrega:</strong>
<br>
\\[
P_{\\text{sortida}} = \\eta_{\\text{pol}} P_{\\text{m-r}} = mgv
\\]
\\[
m = \\frac{\\eta_{\\text{pol}} P_{\\text{m-r}}}{g v} = \\frac{0{,}85 \\cdot 956{,}8}{9{,}807 \\cdot 0{,}4} = 207{,}3 \\, \\text{kg}
\\]
<br>
<strong>c) Rendiment global \\(\\eta_{\\text{tot}}\\):</strong>
<br>
\\[
\\eta_{\\text{tot}} = \\eta_{\\text{m-r}} \\cdot \\eta_{\\text{pol}} = 0{,}65 \\cdot 0{,}85 = 0{,}5525
\\]
            <br><br>
            `
    },
     {
        type: "exercicis",
        category: "control",
        text: `La divisió entera de dos nombres per 3 fa que es puguin escriure z1 = 3q1 + r1
 i z2 = 3q2 + r2
,
on r1
 i r2
 s’anomenen residus i poden ser iguals a 0, 1 o 2. La suma dels dos nombres
s = z1 + z2
 pot ser múltiple de 3 o no. Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents:
               <img src="https://pdieguez4.github.io/tecno/selectivitat/2015/imatges/imatgePreguntaE11.png" alt="Imatge relacionada amb la pregunta" width="800">
              
               <br><strong>a)</strong> Escriviu la taula de veritat del sistema i indiqueu els casos que no són possibles. [1 punt]
               <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la.  [1 punt]
               <br><strong>c)</strong> Dibuixeu l’esquema de contactes equivalent. [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <img src="https://pdieguez4.github.io/tecno/selectivitat/2015/imatges/imatgeRespostaE11.png" alt="Imatge relacionada amb la resposta" width="800">`,  // Imatge opcional al final de la resposta
    },
     {
        type: "exercicis", 
        category: "energia",
        text: `
        <img src="https://pdieguez4.github.io/tecno/selectivitat/2015/imatges/imatgePreguntaE12.png" alt="Imatge relacionada amb la pregunta" width="900">
        Una llanterna consta de tres LED connectats en paraŀlel. La caiguda de tensió de cada
LED és ULED = 3,1 V. La llanterna es pot alimentar amb dues o tres bateries connectades en
sèrie. Cada bateria proporciona una tensió Ubat = 3,7 V i té una capacitat cbat = 3 000 mAh.
Entre les bateries i els LED hi ha una resistència R. Quan hi ha les tres bateries connectades,
per cada LED hi passa un corrent ILED = 2 500 mA. Determineu:
              
               <br><strong>a)</strong> El valor de la resistència R. [0,5 punts]
               <br><strong>b)</strong> L’energia consumida pel conjunt Etotal en el temps t = 0,5 h de funcionament quan les
tres bateries estan connectades. [0,5 punts]
               <br><strong>c)</strong> La intensitat ILED2 que circula per cada LED quan només hi ha dues bateries connectades. [0,5 punts]
               <br><strong>d)</strong> El temps tbat que duren les bateries en cadascuna de les dues configuracions. [1 punt]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Càlcul de la resistència \\(R\\):</strong>
<br>
\\[
3U_{\\text{bat}} - 3I_{\\text{led}} R - U_{\\text{led}} = 0 \\implies R = \\frac{3U_{\\text{bat}} - U_{\\text{led}}}{3I_{\\text{led}}} = 1{,}067 \\, \\Omega
\\]
<br>
<strong>b) Energia total \\(E_{\\text{total}}\\):</strong>
<br>
\\[
E_{\\text{total}} = \\left( R(3I_{\\text{led}})^2 + 3U_{\\text{led}} \\cdot I_{\\text{led}} \\right) t = 3U_{\\text{bat}} \\cdot 3I_{\\text{led}} \\cdot t = 149{,}9 \\, \\text{kJ} = 41{,}63 \\, \\text{Wh}
\\]
<br>
<strong>c) Nova intensitat amb 2 bateries \\(I_{\\text{led2}}\\):</strong>
<br>
\\[
2U_{\\text{bat}} - 3I_{\\text{led2}} R - U_{\\text{led}} = 0 \implies I_{\\text{led2}} = \\frac{2U_{\\text{bat}} - U_{\\text{led}}}{3R} = 1{,}344 \\, \\text{A}
\\]
<br>
<strong>d) Temps de descàrrega \\(t_{\\text{bat}}\\):</strong>
<br>
\\[
\\text{Amb 3 bateries: } t_{\\text{bat}} = \\frac{c_{\\text{bat}}}{3I_{\\text{led}}} = 0{,}4 \\, \\text{h}
\\]
\\[
\\text{Amb 2 bateries: } t_{\\text{bat}} = \\frac{c_{\\text{bat}}}{3I_{\\text{led2}}} = 0{,}7441 \\, \\text{h}
\\]
            <br><br>
            `
    },
     {
        type: "exercicis",
        category: "energia",
        text: `
        Una estufa de butà té una potència calorífica màxima Pmàx = 3,05 kW. El butà es distribueix liquat, en bombones que contenen una massa de butà mb = 12,5 kg i que tenen una
forma aproximadament cilíndrica de diàmetre d = 300 mm i alçària h = 450 mm. El poder
calorífic del butà és cb = 49,61 MJ/kg i té una densitat, abans del procés de liquació, de
ρ = 2,52 kg/m3
. Determineu:
              
               <br><strong>a)</strong> El consum c en kg/h, si funciona a la màxima potència. [0,5 punts]
               <br><strong>b)</strong> La durada d’una bombona tb si funciona a la màxima potència. [0,5 punts]
               <br><strong>c)</strong> La reducció de volum, en tant per cent, que experimenta el butà en el procés de liquació per a introduir-lo a la bombona. [0,5 punts]
               Per a una potència de l’estufa 1 kW ≤ P ≤ 3,05 kW, dibuixeu:
               <br><strong>d)</strong> El gràfic de la durada d’una bombona en hores, en funció de la potència P, indicant
les escales. [1 punt]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
       steps: `
            <img src="https://pdieguez4.github.io/tecno/selectivitat/2015/imatges/imatgeRespostaE13.png" alt="Imatge relacionada amb la resposta" width="850">`,  // Imatge opcional al final de la resposta
    },
     {
        type: "exercicis",
        category: "control",
        text: `<img src="https://pdieguez4.github.io/tecno/selectivitat/2015/imatges/imatgePreguntaE11.png" alt="Imatge relacionada amb la pregunta" width="800">La placa d’acer de la figura, de gruix e = 5 mm, està articulada en el punt O i es manté en
repòs mitjançant el cable PQ de secció nominal s = 2,7 mm2.

              
               <br><strong>a)</strong> Dibuixeu el diagrama de cos lliure de la placa. [0,5 punts]
               <br><strong>b)</strong> La massa m de la placa (ρacer = 7 850 kg/m3
). [0,5 punts]
               <br><strong>c)</strong> La força T que fa el cable i les forces vertical Fv
 i horitzontal Fh
 en l’articulació O.
[1 punt]
               <br><strong>d)</strong> La tensió normal σ del cable a causa de la força que fa. [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <img src="https://pdieguez4.github.io/tecno/selectivitat/2015/imatges/imatgeRespostaE11.png" alt="Imatge relacionada amb la resposta" width="800">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "exercicis",
        category: "motors",
        text: `
        Una porta de garatge enrotllable és accionada per un motor reductor de rendiment global ηtot = 0,33. El motor reductor està format per un motor elèctric de rendiment ηmotor = 0,83 i un reductor de relació de transmissió τ = ωs/ωe = 1/285. El motor s’alimenta amb una tensió U = 230 V i, en un instant concret, consumeix una intensitat I = 1,8 A quan la porta s’enrotlla a ns = 10 min–1 en un tambor de diàmetre d = 220 mm. Determineu:
        
        <br><strong>a)</strong> La potència Pmotor i el parell Γmotor a l’eix de sortida del motor. [1 punt]
        <br><strong>b)</strong> La potència Ps i el parell Γs a l’eix del tambor (eix de sortida del reductor). [1 punt]
        <br><strong>c)</strong> La massa màxima m que pot tenir la part que penja de la porta. [0,5 punts]
        
        <br><br>
        `, 
        correctAnswer: "",  
        steps: `
            <strong>a) Potència \\(P_{\\text{motor}}\\) i parell \\(\\Gamma_{\\text{motor}}\\) a l'eix de sortida del motor:</strong>
<br>
\\[
P_{\\text{motor}} = \\eta_{\\text{motor}} P_{\\text{elect}} = \\eta_{\\text{motor}} U I = 343{,}6 \\, \\text{W}
\\]
\\[
n_{\\text{motor}} = \\frac{n_{\\text{s}}}{\\tau} \\rightarrow \\Gamma_{\\text{motor}} = \\frac{P_{\\text{motor}}}{\\frac{2 \\pi}{60} n_{\\text{motor}}} = \\frac{P_{\\text{motor}}}{\\frac{2 \\pi}{60} \\frac{n_{\\text{s}}}{\\tau}} = 1{,}151 \\, \\text{Nm}
\\]
<br>
<strong>b) Potència \\(P_{\\text{s}}\\) i parell \\(\\Gamma_{\\text{s}}\\) a l'eix del tambor:</strong>
<br>
\\[
P_{\\text{s}} = \\eta_{\\text{tot}} P_{\\text{elect}} = \\eta_{\\text{tot}} U I = 136{,}6 \\, \\text{W}
\\]
\\[
\\Gamma_{\\text{s}} = \\frac{P_{\\text{s}}}{\\frac{2 \\pi}{60} n_{\\text{s}}} = 130{,}5 \\, \\text{Nm}
\\]
<br>
<strong>c) Massa màxima \\(m\\):</strong>
<br>
\\[
\\Gamma_{\\text{s}} = m g \\frac{d}{2} \\Rightarrow m = \\frac{2 \\Gamma_{\\text{s}}}{g d} = 120{,}9 \\, \\text{kg}
\\]
            <br><br>
            `
    },
];

