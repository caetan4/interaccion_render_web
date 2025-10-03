
console.log("composicion");
console.log(gsap);


const boton = document.getElementById("btn");
console.log(boton);

window.addEventListener("mousedown", function (eventData) {

    let tl = gsap.timeline({ease: "power1.inOut"});
   
// Animación horizontal (de izquierda a derecha)
tl.to(".circulo", {
    duration: 3,
    x: window.innerWidth - 100,
    ease: "power1.inOut",
    onComplete: () => {
        // Animación vertical (sube y baja suavemente)
        tl.to(".circulo", {
            duration: 2,
            y: 100,
            ease: "power2.out",
            onComplete: () => {
                gsap.to(".circulo", {
                    duration: 2,
                    y: window.innerHeight - 100,
                    ease: "power2.in",
                    // Extra: cambiar color del sol y fondo
                    onComplete: () => {
                        gsap.to(".circulo", {
                            duration: 1,
                            backgroundColor: "#ffe539",
                            ease: "none"
                        });
                        gsap.to(".fondo", {
                            duration: 1,
                            backgroundColor: "#30366fff",
                            ease: "none"
                        });
                    }
                });
            }
        });
    }
});
});
