const aboutCanvas = document.getElementById("aboutCanvas");

if (aboutCanvas) {
    const aboutCtx = aboutCanvas.getContext("2d");

    function resizeCanvas() {
        aboutCanvas.width = window.innerWidth;
        aboutCanvas.height = window.innerHeight;
    }

    resizeCanvas();

    let waveOffset = 0;

    function drawWave() {
        aboutCtx.clearRect(0, 0, aboutCanvas.width, aboutCanvas.height);

        const gradient = aboutCtx.createLinearGradient(
            0, 0,
            aboutCanvas.width,
            aboutCanvas.height
        );

        gradient.addColorStop(0, "#2563eb");
        gradient.addColorStop(1, "#06b6d4");

        aboutCtx.fillStyle = gradient;

        aboutCtx.beginPath();
        aboutCtx.moveTo(0, aboutCanvas.height);

        for (let x = 0; x < aboutCanvas.width; x++) {
            let y =
                aboutCanvas.height / 2 +
                Math.sin(x * 0.01 + waveOffset) * 30;

            aboutCtx.lineTo(x, y);
        }

        aboutCtx.lineTo(aboutCanvas.width, aboutCanvas.height);
        aboutCtx.fill();

        waveOffset += 0.03;
        requestAnimationFrame(drawWave);
    }

    drawWave();
    window.addEventListener("resize", resizeCanvas);
}


document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.getElementById("navLinks");
    const menuToggle = document.getElementById("menuToggle");
    const menuIcon = document.getElementById("menuIcon");
    const modeToggle = document.getElementById("modeToggle");

    if (!menuToggle || !navLinks) return;

    function openMenu(){
        navLinks.classList.add("active");
        if(menuIcon) menuIcon.textContent = "✖";
        document.body.classList.add("menu-open");
    }

    function closeMenu(){
        navLinks.classList.remove("active");
        if(menuIcon) menuIcon.textContent = "☰";
        document.body.classList.remove("menu-open");
    }

    menuToggle.addEventListener("click",(e)=>{
        e.stopPropagation();

        if(navLinks.classList.contains("active")){
            closeMenu();
        } else {
            openMenu();
        }
    });

    
    document.addEventListener("click",(e)=>{
        if(!navLinks.contains(e.target) && !menuToggle.contains(e.target)){
            closeMenu();
        }
    });

    
    navLinks.querySelectorAll("a").forEach(link=>{
        link.addEventListener("click", closeMenu);
    });

    
    window.addEventListener("resize", ()=>{
        if(window.innerWidth > 768){
            closeMenu();
        }
    });


    if(localStorage.getItem("theme") === "light"){
        document.body.classList.add("light");
    }

    if(modeToggle){
        modeToggle.addEventListener("click", ()=>{
            document.body.classList.toggle("light");

            localStorage.setItem(
                "theme",
                document.body.classList.contains("light") ? "light" : "dark"
            );
        });
    }

});
