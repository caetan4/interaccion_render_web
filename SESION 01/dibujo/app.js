//1 obt ref de canvas
const canvas = document.getElementById("lienzo");
console.log(canvas);

//1.1 sincronizar simencion canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//2 definir si es 2d o 3d
const ctx = canvas.getContext("2d");

//3 def estilo linea

ctx.strokeStyle = "#3f2a91"; //color de la linea
ctx.lineWidth = 2; //grosor de la linea

//4 defnir estilo de lienzo
ctx.moveTo(190,244);
ctx.lineTo(390,244);

//5 renderizar la linea
ctx.stroke();

// 6 estilos rectangulo
ctx.beginPath(); //iniciar dibujo
ctx.strokeStyle = "#3f2a91"; //color de la linea
ctx.lineWidth = 10;
ctx.fillStyle = "#f0f0f0";


 //definir rectangulo
ctx.rect(100,10,200,150);

//7 renderizar rectangulo
ctx.fill();
ctx.stroke();

ctx.fillStyle = "#f0f0f0"; //color de relleno

//8 dibujar un círculo en el centro de la pantalla
ctx.beginPath(); // iniciar nuevo trazo
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 80; // puedes ajustar el tamaño
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI); // círculo completo
//ctx.fillStyle = "#3f2a91"; // color de relleno
//ctx.fill();
//ctx.elipse(100,100,50,50); //dibujar elipse


ctx.beginPath(); // iniciar nuevo trazo
ctx.rect(centerX -50, centerY -50, 100, 100); // dibujar rectángulo
ctx.fillStyle = "#ff0202";
ctx.fill();

