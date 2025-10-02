console.log("Sesion 5. Ejercicio03: Matcap");
console.log("THREE: ", THREE);

// 1. Definir nuestro canvas
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 2. Escena
const scene = new THREE.Scene();

// 3. Cámara
const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);
camera.position.z = 5;

// 4. Geometría
const geometry = new THREE.TorusGeometry(1, 0.4, 32, 64);

// 5. Cargar textura Matcap y crear el mesh
const textureLoader = new THREE.TextureLoader();
let mesh;

textureLoader.load(
  "./texturas/613F04_D68C04_A45F04_1F0F04.png", // ✅ ruta corregida
  function (matcapTexture) {
    console.log("Matcap loaded.");
    const matcapMaterial = new THREE.MeshMatcapMaterial({
      matcap: matcapTexture
    });

    mesh = new THREE.Mesh(geometry, matcapMaterial);
    scene.add(mesh);
  },
  undefined,
  function (err) {
    console.error("Error cargando textura Matcap:", err);
  }
);

// 6. Renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(canvas.width, canvas.height);

// 7. Animación
function animate() {
  requestAnimationFrame(animate);

  if (mesh) {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
  }

  renderer.render(scene, camera);
}
animate();
