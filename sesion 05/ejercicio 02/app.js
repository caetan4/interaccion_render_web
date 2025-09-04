console.log("Sesion 5. Ejercicio02: Geometrias");
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
const geometry = new THREE.SphereGeometry(1,18,18);

const material = new THREE.MeshPhongMaterial({
  flatShading: true, specular : "#ffffffff", shininess: 100, color: "rgba(212, 51, 51, 1)"});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.position.z = -4;
mesh.rotation.x = 45;


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
 animate();

 const topLight = new THREE.PointLight("#506b04ff", 100, 100);
topLight.position.y = 5;
scene.add(topLight);

const frontLight = new THREE.PointLight("#0000ff", 10, 100);
frontLight.position.set(3,1,3);
scene.add(frontLight);