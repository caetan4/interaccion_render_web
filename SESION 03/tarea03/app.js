console.log("composicion");
console.log(gsap);


const sol = document.querySelector(".circulo");
const fondo = document.querySelector(".fondo");
const suelo = document.querySelector(".suelo");
window.addEventListener("click", () => {
    let tl = gsap.timeline();

    tl.to(sol, {
        duration: 6,
        ease: "power1.inOut",
        motionPath: {
            path: [
                { x: 0, y: 0 }, 
                { x: window.innerWidth / 2 - 50, y: -400 }, 
                { x: window.innerWidth - 100, y: 0 } 
            ],
            curviness: 1.5
        }
    });


    tl.to(fondo, {
        duration: 6,
        backgroundColor: "#201c81ff", 
        ease: "power1.inOut"
    }, "<"); // "<" = empieza al mismo tiempo que el sol
});

