console.log("Ejercicio 02: Cargar una imagen en el canvas");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var img = new Image();

var path = "/sesion 2/2da sesion/img/blorp.jpg"; // Ruta corregida de la imagen
img.src = path;



img.onload = function() {
console.log('Imagen cargada correctamente');

ctx.drawImage(img, 50,30,1000,1000); // Limpiar el canvas antes de dibujar

}
