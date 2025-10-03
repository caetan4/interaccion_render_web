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

const loader = new THREE.TextureLoader();
const texture = loader.load( 'img/e90dbd_0363b430cf144fb0bf31cf36d5ad5463~mv2_d_3752_1786_s_2.avif' );
texture.colorSpace = THREE.SRGBColorSpace;
 
const material = new THREE.MeshBasicMaterial({
  
  map: texture,
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

 const topLight = new THREE.PointLight("#506b04ff", 1000, 100);
topLight.position.y = 5;
scene.add(topLight);

const frontLight = new THREE.PointLight("#0000ff", 10, 100);
frontLight.position.set(3,1,3);
scene.add(frontLight);