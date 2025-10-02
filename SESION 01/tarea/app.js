//1 obt ref de canvas
const canvas = document.getElementById("lienzo");
console.log(canvas);

//1.1 sincronizar simencion canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//2 definir si es 2d o 3d
const ctx = canvas.getContext("2d");


//4 defnir estilo de lienzo
ctx.moveTo(190,244);
ctx.lineTo(390,244);



//7 renderizar rectangulo
ctx.fill();
ctx.stroke();


ctx.fillStyle = "#f0f0f0"; //color de relleno

const centerX = canvas.width / 2;
const startY = 250; 
const radiusX = 100;
const radiusY = 30;
const spacing = 2 * radiusY * 0.4; 

const skewAngle = 0; 
const skewX = Math.tan(skewAngle * Math.PI / 180);

for (let i = 0; i < 7; i++) {
    ctx.save();
    ctx.translate(centerX, startY + i * spacing);
    ctx.transform(1, 0, skewX, 1, 0, 0);
    // Escala decreciente: por ejemplo, de 1 a 0.4
    const scale = 1- i * 0.1;
    ctx.scale(scale, scale);
    ctx.beginPath();
    ctx.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2);
    
    ctx.strokeStyle = "#ffffffff";
    ctx.lineWidth = 7;
    ctx.stroke();
    ctx.restore();
}

