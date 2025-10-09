///////// SCAFFOLD.
console.log(THREE);
console.log(gsap);
console.log('app.js version: 20250924-1');

const canvas = document.getElementById("lienzo");
if (!canvas) throw new Error("No se encontró el canvas con id 'lienzo'.");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Configurar escena 3D.
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(canvas.width, canvas.height);
renderer.setClearColor(0x000019);

const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);
camera.position.z = 10;

// Geometrías 🌞
const solGeo = new THREE.SphereGeometry(1.5, 64, 64);
const planetaGeo = new THREE.SphereGeometry(0.4, 32, 32);
const torusGeo = new THREE.TorusGeometry(0.7, 0.08, 16, 64);

// matcap del sol
const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load("./assets/textura/sol.png");
const matcapMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });

// Sol principal
const sol = new THREE.Mesh(solGeo, matcapMaterial);
sol.position.z = -5;
scene.add(sol);

// Luz principal
const light = new THREE.PointLight(0xffeeaa, 3, 50);
light.position.set(0, 0, 0);
scene.add(light);

// Luces adicionales
const frontLight = new THREE.PointLight(0x1b046e, 1000, 100);
frontLight.position.set(7, 3, 3);
scene.add(frontLight);

const rimLight = new THREE.PointLight(0x0d7209, 50, 10);
rimLight.position.set(-7, -3, -7);
scene.add(rimLight);

// Sombras
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Texturas planeta
const manager = new THREE.LoadingManager();
const loader = new THREE.TextureLoader(manager);
const planetaTexture = {
  albedo: loader.load('./assets/paint/albedo.png'),
  ao: loader.load('./assets/paint/ao.png'),
  height: loader.load('./assets/paint/height.png'),
  normal: loader.load('./assets/paint/normal-ogl.png')
};

// Material planeta
const planetaMaterial = new THREE.MeshStandardMaterial({
  map: planetaTexture.albedo,
  aoMap: planetaTexture.ao,
  normalMap: planetaTexture.normal,
  displacementMap: planetaTexture.height,
  displacementScale: 0.1,
  metalness: 0.2,
  roughness: 0.6,
  side: THREE.FrontSide
});

// Planeta + toroide
const planeta = new THREE.Mesh(planetaGeo, planetaMaterial);
planeta.position.x = 3;
scene.add(planeta);

const torus = new THREE.Mesh(torusGeo, planetaMaterial);
torus.position.x = 3;
scene.add(torus);

// Ajuste en ventana
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animación simple
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
