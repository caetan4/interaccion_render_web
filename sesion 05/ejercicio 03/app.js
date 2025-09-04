console.log("Sesion 5. Ejercicio03: Matcap");
console.log("THREE: ", THREE);

// 1. Definir nuestro canvas
const canvas = document.getElementById("lienzo")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 4. Creamos nuestros elementos básicos
// Escena, escenario, Mesh, Camras
//escena
const scene = new THREE.Scene();

//camara
const camera = new THREE.PerspectiveCamera(45, canvas.width/canvas.height, 0.1, 1000);

//mesh
/////Geometrias
const geometry = new THREE.TorusGeometry();

const material = new THREE.MeshPhongMaterial({
  flatShading: true,
});

const textureLoader = new THREE.TextureLoader();
var MatcapMaterial;
var mesh ;

var Matcap = textureLoader.load('./textures/matcap/matcap-porcelain-white.png', function (texture) {
 console.log('Matcap loaded.');
});


//Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(canvas.width, canvas.height);

//Dar instrucciones de renderizar o imprimir nuestro primer frame
renderer.render(scene, camera);


// Tip para animar nuestro mesh:
function animate() {
    requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
 mesh.rotation.y = 45;
 renderer.render(scene, camera);

}
// animate();

 