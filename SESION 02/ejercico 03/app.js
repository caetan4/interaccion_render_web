
//1.1 Sincronizar dimensiones del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);

const ctx = canvas.getContext('2d');

ctx.strokeStyle ="#ea7171ff";
ctx.fillStyle ="#faee9fff"; 
ctx.lineWidth = 2;

ctx.beginPath();


//ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
for (let i = 0; i < 11; i++) {
ctx.ellipse(canvas.width/2, 250 + i * 30, 150, 150, 0, 0, Math.PI * 2);

ctx.fill();
ctx.stroke();}


//1. Escuchar que el mouse se mueve
window.addEventListener("mousemove", function (eventData) {
    console.log('hola x',eventData.x)
    console.log('hola y',eventData.y)

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas antes de dibujar

ctx.beginPath();
ctx.fillStyle ="#faee9fff";
ctx.rect(0,0,canvas.width,canvas.height);
ctx.fill();

ctx.beginPath();


for (let i = 0; i < 11; i++) {
ctx.ellipse(canvas.width/2, 250 + i * 30, 150, 150, 0, 0, Math.PI * 2);
ctx.stroke();}
ctx.beginPath();
//(x,y,radioX,radioY,rotacion,inicio,final)
    ctx.ellipse(eventData.x,eventData.y,120,120,0,0,Math.PI*2);
    ctx.stroke();
    
});

window.addEventListener("mousedown", function (eventData) {
    console.log("mousedown x");
ctx.strokeStyle = "#6f7fd7ff";
ctx.beginPath();
ctx.ellipse(eventData.x,eventData.y,120,120,0,0,Math.PI*2);
ctx.fill();
ctx.stroke(); 


 ctx.beginPath();
 for (let i = 0; i < 11; i++) {
 ctx.ellipse(canvas.width/2, 250 + i * 30, 150, 150, 0, 0, Math.PI * 2);
 ctx.fill();
 ctx.stroke();}
});

window.addEventListener("mouseup", function (eventData) {
    console.log("mouseup x");
 ctx.strokeStyle = "#81bc8bff";
 
 ctx.beginPath();
 ctx.ellipse(eventData.x,eventData.y,120,120,0,0,Math.PI*2);
ctx.fill();
ctx.stroke(); 



 ctx.beginPath();


 for (let i = 0; i < 11; i++) {
 ctx.ellipse(canvas.width/2, 250 + i * 30, 150, 150, 0, 0, Math.PI * 2);
 ctx.fill();
  
 ctx.stroke();}
    ctx.beginPath();
});

//1.crear ref a boton html
//2.agregar event listener
//2.1 denderizar nuebo con otro color

document.getElementById("boton").addEventListener("click", () => {
    ctx.fillStyle = "#da9ffaff"; 

    ctx.beginPath();
    for (let i = 0; i < 11; i++) {
        ctx.ellipse(
            canvas.width / 2,
            250 + i * 30,
            150,
            150,
            0,
            0,
            Math.PI * 2
        );
        ctx.fill();  
        ctx.stroke(); 
    }
});

