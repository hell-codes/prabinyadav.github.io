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
    const modeToggle = document.getElementById("modeToggle");

    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                navLinks.classList.remove("active");
            }
        });
    }

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
    }

    if (modeToggle) {
        modeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light");

            if (document.body.classList.contains("light")) {
                localStorage.setItem("theme", "light");
            } else {
                localStorage.setItem("theme", "dark");
            }
        });

       
    }

});



