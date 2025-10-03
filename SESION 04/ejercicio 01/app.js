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
  // flatShading: true,   // 👈 lo quitamos
  specular: "#f37b7b",
  shininess: 1000,
  color: "#fe9494",

  wireframe: true        // 👈 mostramos solo líneas
});

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

const topLight = new THREE.PointLight("#6b0404", 100, 100);  // rojo oscuro
topLight.position.y = 5;
scene.add(topLight);

const frontLight = new THREE.PointLight("#151589", 10, 100); // azul oscuro
frontLight.position.set(3, 1, 3);
scene.add(frontLight);
