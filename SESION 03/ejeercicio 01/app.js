console.log("Ejercicio 02: Cargar una imagen en el canvas");


const canvas = document.getElementById("canvas");
console.log(canvas);

const ctx = canvas.getContext("2d");
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


ctx.beginPath();
ctx.strokeStyle = "#1900ffff";
ctx.lineWidth = 20;

ctx.ellipse(100,100,60,60, 0, 0, Math.PI * 2);
ctx.stroke();

function dibujarCirculo(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = "#1900ffff";
    ctx.lineWidth = 20; 
    ctx.ellipse(x, y, 60,60, 0, 0, Math.PI * 2);
    ctx.stroke();
}

function dibujarCirculo(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = "#1900ffff";
    ctx.lineWidth = 20; 
    ctx.ellipse(x, y, 60,60, 0, 0, Math.PI * 2);
    ctx.stroke();
}


dibujarCirculo(200,100);
dibujarCirculo(300,100);
dibujarCirculo(400,100);

const circulo = {
    colorLinea: "#00ff6eff",
    grosorLinea: 15,
    rotacion: 0,
    radio: 100,
    anguloInicial: 0,
    anguloFinal: Math.PI * 2,
    x: 50,
    y: 400,
  
dibujar : function(x, y) {
        ctx.beginPath();
        ctx.strokeStyle = this.colorLinea;
        ctx.lineWidth = this.grosorLinea;
        ctx.ellipse(x, y, circulo.radio, circulo.radio, circulo.rotacion, circulo.anguloInicial, circulo.anguloFinal);
        ctx.stroke();
    }
}

circulo.dibujar();

window.addEventListener("mousemove", function(eventData) {
    
    circulo.dibujar(eventData.clientX, eventData.clientY );
});