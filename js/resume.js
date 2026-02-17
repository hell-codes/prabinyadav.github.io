const canvas = document.getElementById("resumeCanvas");

if (canvas) {
    const ctx = canvas.getContext("2d");

    function resizeCanvas(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();

    let lines = [];

    for(let i = 0; i < 40; i++){
        lines.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            len: Math.random() * 80 + 20,
            speed: Math.random() * 1 + 0.5
        });
    }

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = "rgba(37,99,235,0.3)";
        ctx.lineWidth = 2;

        lines.forEach(l => {
            ctx.beginPath();
            ctx.moveTo(l.x, l.y);
            ctx.lineTo(l.x + l.len, l.y);
            ctx.stroke();

            l.y += l.speed;

            if(l.y > canvas.height){
                l.y = -20;
                l.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
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

