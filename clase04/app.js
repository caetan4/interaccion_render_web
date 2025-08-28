console.log("three");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("webgl");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.width = window.Width;
canvas.height = window.Height;

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, Width / height, 0.1, 1000);
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
    );

    scene.add(mesh);

    mesh.position.z = -5;
    
    renderer.render(scene, camera);