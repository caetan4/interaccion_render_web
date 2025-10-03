const box = document.querySelector(".box");

box.addEventListener("click", () => {
    
    const tl = gsap.timeline();

    
    tl.to(box, {
        duration: 2,
        x: 300,
        y: 150,
        rotation: 180,
        ease: "power1.inOut"
    });

    tl.to(box, {
        duration: 2,
        x: 30,
        y: 500,
        rotation: 360,
        ease: "power1.inOut"
    });
});
