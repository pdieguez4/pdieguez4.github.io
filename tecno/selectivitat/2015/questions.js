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
    type: "questions",
    category: "metrologia",
    text: `En el plànol de la figura, les toleràncies per a les dimensions angulars són ±0° 30' per a $\\alpha_1$ i ±0° 20' per a $\\alpha_2$. 
Quina és la tolerància per a $\\beta$?
<br><br>
<img src="https://pdieguez4.github.io/tecno/selectivitat/2015/Q12/imatgeQuestio.png" alt="Imatge relacionada amb la pregunta" width="350">`

        ,
    options: [
        { text: "+0° 30' / -0° 20'", value: "a" },
        { text: "±0° 50'", value: "b" },
        { text: "+0° 30' / -0° 0'", value: "c" },
        { text: "±0° 10'", value: "d" }
    ],
    correctAnswer: "b",
    steps: `
        D'acord amb la figura, l'angle $\\beta$ es calcula com la suma dels dos angles:
        \\[
        \\beta = \\alpha_1 + \\alpha_2
        \\]
        Quan sumem (o restem) dimensions amb toleràncies, la tolerància del resultat és la suma de les toleràncies individuals per considerar el pitjor cas possible:
        \\[
        t_{\\beta} = t_{\\alpha_1} + t_{\\alpha_2}
        \\]
        Substituint els valors:
        \\[
        t_{\\beta} = 30' + 20' = 50'
        \\]
        Per tant, la tolerància resultant és $\\pm 0^\\circ 50'$.
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
\\[
\\text{Ingressos fixos} = 48 \\cdot 50 = 2\\,400 \\, €
\\]
\\[
\\text{Ingressos variables} = 48 \\cdot 0.40 \\cdot x = 19.2 x \\, €
\\]
\\[
\\text{Despeses} = 6.30 x \\, €
\\]
\\[
\\text{Benefici} = Ingressos - Despeses = (2\\,400 + 19.2 x) - 6.3 x = 25\\,000
\\]
\\[
12.9 x + 2\\,400 = 25\\,000 \\Rightarrow 12.9 x = 22\\,600 \\Rightarrow x \\approx 1\\,752 \\, \\text{km}
\\]
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
        category: "energia",
        text: `Per a controlar la velocitat dels vehicles a l'entrada d'una població s'ha instaŀlat un semàfor que generalment és verd, però que canvia a vermell quan es detecta un vehicle que s'hi
        apropa a una velocitat superior o igual a \\(60 \\; \\text{km/h}\\). Perquè els vianants puguin travessar la
        carretera, el semàfor dels cotxes també canvia a vermell si com a mínim fa un minut que és
        verd i, a més, un vianant prem el polsador que incorpora el mateix semàfor. Responeu a les
        qüestions que hi ha a continuació utilitzant les variables d'estat següents:
               <img src="https://pdieguez4.github.io/tecno/selectivitat/2015/Ex1/imatgePregunta.png" alt="Imatge relacionada amb la pregunta" width="900">
              
               <br><strong>a)</strong> Elaboreu la taula de veritat del sistema. [1 punt]
               <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
               <br><strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <img src="https://pdieguez4.github.io/tecno/selectivitat/2015/Ex1/imatgeResposta.png" alt="Imatge relacionada amb la resposta" width="900">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "exercicis",
        category: "materials",
        text: `
        <img src="https://pdieguez4.github.io/tecno/selectivitat/2015/Ex2/imatgePregunta.png" alt="Imatge relacionada amb la pregunta" width="900">

        Es vol construir una estrella de sis puntes com la de la figura a partir d'un tauler de fusta.
L'estrella es pot construir a partir de triangles equilàters o de rombes com els que es mostren
en la figura. El cost de producció de l'estrella es calcula segons l'expressió 
\\[
c = c_{1} s + c_{2} p
\\]
en què s és la superfície de fusta utilitzada i p és el perímetre de les peces tallades per a construir
l'estrella. El primer coeficient de cost és \\(c_{1} = 15 \\; \\text{€/m}^2\\)
, i el segon és \\(c_{2} = 0,6 \\; \\text{€/m}\\)  si el perfil és
senzill (com, per exemple, un triangle o un rombe) o \\(c_{2} = 1,4 \\; \\text{€/m} \\) si el perfil és complex (com,
per exemple, una estrella). Determineu:
              
               <br><strong>a)</strong> El nombre de triangles equilàters \\(n_{T}\\) que calen per a construir l'estrella i el perímetre
                                        de les peces tallades \\(p_{T}\\) en aquest cas. [0,5 punts]
               <br><strong>b)</strong> El nombre de rombes \\(n_{R}\\) que calen per a construir l'estrella i el perímetre de les peces
                                        tallades \\(p_{R}\\) en aquest cas. [0,5 punts]
               <br><strong>c)</strong> El perímetre tallat \\(p_{E}\\) si l'estrella es construeix tallant-ne directament el perfil exterior. [0,5 punts]
               <br><strong>d)</strong> La superfície \\(s\\) de fusta necessària per a construir l’estrella, i el cost \\(c_{T}\\), \\(c_{R}\\) i \\(c_{E}\\)
 de cadascuna de les tres opcions anteriors. Quina és l'opció més econòmica?
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Nombre de triangles equilàters \\(n_{\text{T}}\\) i el perímetre \\(p_{\text{T}}\\):</strong>
            <br>
            \\[
            n_{\\text{T}} = 6 + 6 = 12 \\, \\text{triangles}
            \\]
            \\[
            p_{\\text{T}} = n_{\\text{T}} \\cdot 3b = 12 \\cdot 3 \\cdot 0{,}3 = 10{,}8 \\, \\text{m}
            \\]
            <br>
            <strong>b) Nombre de rombes \\(n_{\\text{R}}\\) i perímetre de les peces \\(p_{\\text{R}}\\):</strong>
            <br>
            \\[
            n_{\\text{R}} = \\frac{n_{\\text{T}}}{2} = \\frac{12}{2} = 6 \\, \\text{rombes}
            \\]
            \\[
            p_{\\text{R}} = n_{\\text{R}} \\cdot 4b = 6 \\cdot 4 \\cdot 0{,}3 = 7{,}2 \\, \\text{m}
            \\]
            <br>
            <strong>c) Perímetre tallat \\(p_{\\text{E}}\\) de l'estrella (perfil exterior):</strong>
            <br>
            \\[
            p_{\\text{E}} = 12 \\cdot b = 12 \\cdot 0{,}3 = 3{,}6 \\, \\text{m}
            \\]
            <br>
            <strong>d) Superfície \\(s\\), costos \\(c_{\text{T}}, c_{\text{R}}, c_{\text{E}}\\) i opció més econòmica:</strong>
            <br>
            - Superfície d'un triangle equilàter: \\( A_{\\text{T}} = \\frac{\\sqrt{3}}{4} b^2 = \\frac{\\sqrt{3}}{4} (0{,}3)^2 = 0{,}03897 \\, \\text{m}^2 \\).
            \\[
            s = 12 \\cdot A_{\\text{T}} = 12 \\cdot 0{,}03897 = 0{,}4677 \\, \\text{m}^2
            \\]
            \\[
            c_{\\text{T}} = (15 \\cdot 0{,}4677) + (0{,}6 \\cdot 10{,}8) = 7{,}016 + 6{,}48 = 13{,}50 \\, \\text{€}
            \\]
            - Cost amb rombes (\\( c_2 = 0{,}6 \\)): 
            \\[
            c_{\\text{R}} = (15 \\cdot 0{,}4677) + (0{,}6 \\cdot 7{,}2) = 7{,}016 + 4{,}32 = 11{,}34 \\, \\text{€}
            \\]
            - Cost estrella sencera (\\( c_2 = 1{,}4 \\)): 
            \\[
            c_{\\text{E}} = (15 \\cdot 0{,}4677) + (1{,}4 \\cdot 3{,}6) = 7{,}016 + 5{,}04 = 12{,}06 \\, \\text{€}
            \\]
            - <strong>Conclusió:</strong> L'opció més econòmica és la construcció a partir de <strong>6 rombes</strong> amb un cost d'<strong>11,34 €</strong>.
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "motors",
        text: `
        Un elevador puja amb una velocitat constant una càrrega \\(m = 2 500 \\; \\text{kg}\\) fins a una altura
\\(Δh = 5 \\; \\text{m} \\) en un temps \\(t = 60 \\; \\text{s} \\). L'elevador s'acciona amb un motor elèctric de corrent continu en sèrie amb un reductor d'engranatges. Segons el catàleg del fabricant, el rendiment del
reductor d'engranatges és \\(η_{red} = 0,70\\). El motor s'alimenta amb una tensió \\( U = 220 \\; \\text{V} \\), gira a
una velocitat \\(n = 1 500 \\; \\text{min}^{–1}\\) i té un rendiment electromecànic \\(η_{mot} = 0,78\\). Si les resistències
passives a l'elevador es consideren negligibles, determineu:
              
               <br><strong>a)</strong> La potència mecànica \\(P_{càrrega}\\) requerida per a elevar la càrrega. [0,5 punts]
               <br><strong>b)</strong> La potència \\(P_{m}\\) i el parell \\(Γ_{m}\\) a l'eix de sortida del motor. [1 punt]
               <br><strong>c)</strong> La intensitat \\(I\\) que consumeix el motor elèctric. [0,5 punts]
               <br><strong>d)</strong> La potència total dissipada \\(P_{diss}\\) pel conjunt motor-reductor. [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Potència mecànica requerida per elevar la càrrega \\(P_{càrrega}\\):</strong>
            <br>
            \\[
            v = \\frac{\\Delta h}{t} = \\frac{5}{60} = 0,0833 \\; \\text{m/s}
            \\]
            \\[
            F = m \\cdot g = 2500 \\cdot 9{,}81 = 24525 \\; \\text{N}
            \\]
            \\[
            P_{càrrega} = F \\cdot v = 24525 \\cdot 0,0833 = 2044 \\; \\text{W}
            \\]
            <br>
            <strong>b) Potència \\(P_{m}\\) i el parell \\(Γ_{m}\\) a l'eix del motor:</strong>
            <br>
            \\[
            P_{m} = \\frac{P_{càrrega}}{η_{red}} = \\frac{2044}{0,70} = 2919 \\; \\text{W}
            \\]
            \\[
            \\omega = \\frac{2\\pi n}{t} = \\frac{2\\pi 1500}{60} = 157,1 \\; \\text{rad/s}
            \\]
            \\[
            Γ_{m} = \\frac{P_m}{\\omega} = \\frac{2919}{157,1} = 18,6 \\; \\text{N\\(\\cdot\\)m}
            \\]
            <br>
            <strong>c) Intensitat consumida pel motor:</strong>
            <br>
            \\[
            P_{el} = \\frac{P_m}{η_{mot}} = \\frac{2919}{0,78} = 3742,3 \\; \\text{W}
            \\]
            \\[
            I = \\frac{P_{el}}{U} = \\frac{3742,3}{220} = 17,01 \\; \\text{A}
            \\]
            <br>
            <strong>d) Potència total dissipada pel conjunt motor–reductor:</strong>
            <br>
            \\[
            P_{diss} = P_{el} - P_{càrrega} = 3742,3 - 2044 = 1698,3 \\; \\text{W}
            \\]
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "maquines",
        text: `
        <img src="https://pdieguez4.github.io/tecno/selectivitat/2015/Ex4/imatgePregunta.png" alt="Imatge relacionada amb la pregunta" width="900">
        La placa d’alumini de la figura, de gruix
\\(e = 5 \\; \\text{mm}\\), està articulada a terra en el punt
O. Per a mantenir-la en repòs s’utilitza un
cable d’acer que es fixa en el punt A i que té la
direcció que es mostra en la figura. El cable té
una secció circular de diàmetre \\(d = 2 \\; \\text{mm}\\). La
densitat de l’alumini és \\(ρ_{alumini} = 2 710 kg/m^{3}\\) i el mòdul elàstic de l'acer és \\(E_{acer} = 207 \\; \\text{GPa}\\).
              
               <br><strong>a)</strong> Dibuixeu el diagrama de cos lliure de la placa. [0,5 punts]
               <br><strong>Determineu:)</strong>
               <br><strong>b)</strong> La massa \\(m\\) de la placa. [0,5 punts]
               <br><strong>c)</strong> La força \\(T\\) que fa el cable, i les forces horitzontal \\(F_{h}\\) i vertical \\(F_{v}\\) en el punt O. [1 punt]
               <br><strong>d)</strong>  La tensió normal \\(σ\\) del cable i el seu allargament unitari \\(ε\\). Si el límit elàstic de l’acer
és \\(σ_{e,acer} = 350 \\; \\text{MPa}\\), el cable s’arriba a deformar de manera permanent? [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Diagrama del cos lliure:</strong>
            <img src="https://pdieguez4.github.io/tecno/selectivitat/2015/Ex4/imatgeResposta.png" alt="Imatge relacionada amb la resposta" width="900">

            <strong>b) Massa de la placa:</strong>
            <br>
            \\[
            V = (2L) \\cdot L \\cdot e = 2 \\cdot 1 \\cdot 0,005 = 0,01 \\; \\text{m}^3
            \\]
            \\[
            m = ρV = 2710 \\cdot 0,01 = 27,1 \\; \\text{kg}
            \\]
            \\[
            W = mg = 27,1 \\cdot 9,98 = 265,8 \\; \\text{N}
            \\]
            <br>
            <strong>c) Tensió del cable i forces a O:</strong>
            <br>
            \\[
            T \\text{sin}30º \\cdot 2L - W \\cdot L = 0
            \\]
            \\[
            T \\cdot 0,5 \\cdot 2 - 265,8 = 0
            \\]
            \\[
            T = 265,8 \\; \\text{N}
            \\]
            \\[
            - Eix y
            \\]
            \\[
            F_{v} + T \\text{sin}30º - W = 0
            \\]
            \\[
            F_{v} + 132,9 - 265,8 = 0
            \\]
            \\[
            F_{v} = 132,9 \\; \\text{N}
            \\]
            \\[
            - Eix x
            \\]
            \\[
            F_{h} - T \\text{sin}30º = 0
            \\]
            \\[
            F_{h} = 265,8 \\cdot 0,866 = 230,2 \\; \\text{N}
            \\]
            <br>
            <strong>d) Tensió normal i allargament unitari del cable:</strong>
            <br>
            \\[
            A = \\frac{\\pi d^{2}}{4} = \\frac{\\pi (0,002)^{2}}{4} = 3,14 \\cdot 10^{-6} \\; \\text{m}^2
            \\]
            \\[
            σ = \\frac{T}{A} = \\frac{265,8}{3,14 \\cdot 10^{-6}} = 84,6 \\; \\text{MPa}
            \\]
            \\[
            ε = \\frac{σ}{E} = \\frac{84,6 \\cdot 10^{6}}{207 \\cdot 10^{7}} = 4,1 \\cdot 10^{-4}
            \\]
            \\[
            σ = 84,6 \\; \\text{MPa} < 350 \\; \\text{MPa}
            \\]
            <strong>El cable NO es deforma permanentment</strong>
            <br><br>
            `
    },
];
