///////// SCAFFOLD.
console.log(THREE);
console.log(gsap);
console.log('app.js version: 20251009-5');

const canvas = document.getElementById("lienzo");
if (!canvas) throw new Error("No se encontró el canvas con id 'lienzo'.");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Configurar escena 3D.
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(canvas.width, canvas.height);
renderer.setClearColor(0x000019);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Cámara
const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);
camera.position.set(0, 2, 10);

// 🌞 Geometrías
const solGeo = new THREE.SphereGeometry(1.5, 64, 64);
const planetaGeo = new THREE.SphereGeometry(0.4, 32, 32);
const planeta2Geo = new THREE.SphereGeometry(0.25, 32, 32);
const planeta3Geo = new THREE.SphereGeometry(0.3, 32, 32);
const planeta4Geo = new THREE.SphereGeometry(0.35, 32, 32);
const torusGeo = new THREE.TorusGeometry(0.7, 0.03, 16, 64); // más delgado

// 🌞 Textura del sol
const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load("./assets/textura/sol.png");
const matcapMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });

// 🌞 Sol principal
const sol = new THREE.Mesh(solGeo, matcapMaterial);
sol.position.z = -5;
scene.add(sol);

// 💡 Luz central (afecta a los planetas)
const luzCentral = new THREE.PointLight(0xffee88, 5, 50);
luzCentral.position.copy(sol.position);
scene.add(luzCentral);

const frontLight = new THREE.PointLight(0x1b046e, 100, 100);
frontLight.position.set(7, 3, 3);
scene.add(frontLight);

// ✨ Estrellas de fondo
function crearEstrellas(cantidad = 400) {
  const geometria = new THREE.BufferGeometry();
  const posiciones = [];

  for (let i = 0; i < cantidad; i++) {
    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 200;
    const z = (Math.random() - 0.5) * 200;
    posiciones.push(x, y, z);
  }

  geometria.setAttribute("position", new THREE.Float32BufferAttribute(posiciones, 3));
  const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
  const estrellas = new THREE.Points(geometria, material);
  scene.add(estrellas);
}
crearEstrellas();

// 🌍 Texturas planeta 1 (original)
const manager = new THREE.LoadingManager();
const loader = new THREE.TextureLoader(manager);
const planetaTexture = {
  albedo: loader.load('./assets/paint/albedo.png'),
  ao: loader.load('./assets/paint/ao.png'),
  height: loader.load('./assets/paint/height.png'),
  normal: loader.load('./assets/paint/normal-ogl.png')
};

// 🌍 Texturas nuevas para planetas 2, 3 y 4
const planetaNuevoTexture = {
  albedo: loader.load('./assets/nueva tex/ravine-cliff-unity/ravine-cliff_albedo.png'),
  ao: loader.load('./assets/nueva tex/rocky-rugged-terrain-unity/rocky-rugged-terrain_1_ao.png'),
  height: loader.load('./assets/nueva tex/ravine-cliff-unity/ravine-cliff_height.png'),
  normal: loader.load('./assets/nueva tex/ravine-cliff-unity/ravine-cliff_normal.png')
};

const piedra= {
  albedo: loader.load('./assets/nueva tex/rocky-rugged-terrain-unity/rocky-rugged-terrain_1_albedo.png'),
  ao: loader.load('./assets/nueva tex/rocky-rugged-terrain-unity/rocky-rugged-terrain_1_ao.png'),
  height: loader.load('./assets/nueva tex/rocky-rugged-terrain-unity/rocky-rugged-terrain_1_height.png'),
  normal: loader.load('./assets/nueva tex/rocky-rugged-terrain-unity/rocky-rugged-terrain_1_normal.png')
};

// 🌍 Material planeta 1 (original)
const planetaMaterial = new THREE.MeshStandardMaterial({
  map: planetaTexture.albedo,
  aoMap: planetaTexture.ao,
  normalMap: planetaTexture.normal,
  displacementMap: planetaTexture.height,
  displacementScale: 0.1,
  metalness: 0.3,
  roughness: 0.6,
  side: THREE.FrontSide
});

// 🌍 Material para planetas 2, 3, 4 (nuevas texturas)
const planetaNuevoMaterial = new THREE.MeshStandardMaterial({
  map: planetaNuevoTexture.albedo,
  aoMap: planetaNuevoTexture.ao,
  normalMap: planetaNuevoTexture.normal,
  displacementMap: planetaNuevoTexture.height,
  displacementScale: 0.08,
  metalness: 0.25,
  roughness: 0.65,
  side: THREE.FrontSide
});

const piedraMaterial = new THREE.MeshStandardMaterial({
  map: piedra.albedo,
  aoMap: piedra.ao,
  normalMap: piedra.normal,
  displacementMap: piedra.height,
  displacementScale: 0.05,
  metalness: 0.4,
  roughness: 0.7,
  side: THREE.FrontSide
});

// 🌎 Planeta 1 + torus
const planeta = new THREE.Mesh(planetaGeo, planetaMaterial);
const torus = new THREE.Mesh(torusGeo, piedraMaterial);
torus.rotation.x = Math.PI / 2; // eje X
planeta.position.x = 3;
torus.position.x = 3;
scene.add(planeta, torus);

// 🌑 Planetas adicionales
const planeta2 = new THREE.Mesh(planeta2Geo, planetaNuevoMaterial);
const planeta3 = new THREE.Mesh(planeta3Geo, piedraMaterial);
const planeta4 = new THREE.Mesh(planeta4Geo, planetaNuevoMaterial);

planeta2.position.set(5, 1.5, -5);
planeta3.position.set(-6, -2, -5);
planeta4.position.set(8, 2.5, -5);

scene.add(planeta2, planeta3, planeta4);

// 🔄 Animación de órbitas y rotaciones
let tiempo = 0;
gsap.ticker.add(() => {
  tiempo += 0.01;

  // 🌍 Planeta 1 + torus
  const radio1 = 7;
  planeta.position.x = Math.cos(tiempo) * radio1;
  planeta.position.z = Math.sin(tiempo) * radio1 - 5;
  torus.position.x = planeta.position.x;
  torus.position.z = planeta.position.z;
  torus.rotation.y += 0.01;

  // 🌑 Planeta 2
  const radio2 = 3;
  planeta2.position.x = Math.cos(tiempo * 1.5) * radio2;
  planeta2.position.y = Math.sin(tiempo * 0.8) * 1.5;
  planeta2.position.z = Math.sin(tiempo * 1.5) * radio2 - 5;
  planeta2.rotation.x += 0.02;
  planeta2.rotation.y += 0.015;

  // 🪐 Planeta 3
  const radio3 = 9;
  planeta3.position.x = Math.sin(tiempo * 0.6) * radio3;
  planeta3.position.y = Math.cos(tiempo * 0.4) * 2;
  planeta3.position.z = Math.cos(tiempo * 0.6) * radio3 - 5;
  planeta3.rotation.x += 0.01;
  planeta3.rotation.y += 0.02;

  // 🌕 Planeta 4
  const radio4x = 6;
  const radio4z = 4;
  planeta4.position.x = Math.cos(tiempo * 1.1) * radio4x;
  planeta4.position.y = Math.sin(tiempo * 1.2) * 2.5;
  planeta4.position.z = Math.sin(tiempo * 1.1) * radio4z - 5;
  planeta4.rotation.x += 0.018;
  planeta4.rotation.y += 0.017;

  renderer.render(scene, camera);
});

// 🎥 Movimiento de cámara con el mouse
let mouseX = 0, mouseY = 0;
document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

function moverCamara() {
  gsap.to(camera.position, {
    x: mouseX * 2,
    y: -mouseY * 1.5 + 2,
    duration: 0.5,
    ease: "power2.out"
  });
  camera.lookAt(0, 0, -5);
  requestAnimationFrame(moverCamara);
}
moverCamara();

// 📏 Ajuste al redimensionar ventana
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
