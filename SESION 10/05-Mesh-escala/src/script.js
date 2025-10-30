import * as THREE from 'three'


const canvas = document.querySelector('canvas.webgl');


const scene = new THREE.Scene();


const object1 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 4, 8), 
    new THREE.MeshBasicMaterial({ color: '#ff6600', wireframe: true  })
);

const object2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    new THREE.MeshBasicMaterial({ color: '#8cff00ff', wireframe: true })
);

object1.position.x = -1
object2.position.x = 1

scene.add(object1, object2)
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});


const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const mouse = new THREE.Vector2()
window.addEventListener('mousemove', (event) => {
   mouse.x = event.clientX / sizes.width * 2 - 1;
   mouse.y = - (event.clientY / sizes.height) * 2 + 1;

});
//// Raycaster.
const raycaster = new THREE.Raycaster();
let currentIntersect = null;
const objectsToTest = [object1, object2]; 

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / sizes.width) * 2 - 1;
    mouse.y = -(event.clientY / sizes.height) * 2 + 1;
});

const tick = () => {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(objectsToTest);

    if (intersects.length) {
        // Si el objeto actual cambia
        if (currentIntersect === null || currentIntersect.object !== intersects[0].object) {
            // Si había otro, regresa a su tamaño normal
            if (currentIntersect) {
                gsap.to(currentIntersect.object.scale, {
                    x: 1,
                    y: 1,
                    z: 1,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }


            currentIntersect = intersects[0];
            gsap.to(currentIntersect.object.scale, {
                x: 1.5,
                y: 1.5,
                z: 1.5,
                duration: 0.5,
                ease: "power2.out"
            });

            console.log('Hover sobre:', currentIntersect.object === object1 ? 'Esfera' : 'Cubo');
        }
    } else {
        // Si el mouse sale de todos los objetos
        if (currentIntersect) {
            gsap.to(currentIntersect.object.scale, {
                x: 1,
                y: 1,
                z: 1,
                duration: 0.5,
                ease: "power2.out"
            });
            currentIntersect = null;
            console.log('Mouse fuera de los objetos');
        }
    }

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};

tick();
