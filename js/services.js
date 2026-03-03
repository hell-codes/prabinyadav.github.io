const canvas = document.getElementById("servicesCanvas");

if (canvas) {
    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();

    let circles = [];

    for (let i = 0; i < 25; i++) {
        circles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 60 + 20,
            dx: Math.random() * 0.5,
            dy: Math.random() * 0.5
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        circles.forEach(c => {
            let gradient = ctx.createRadialGradient(
                c.x, c.y, 10,
                c.x, c.y, c.r
            );

            gradient.addColorStop(0, "rgba(37,99,235,0.4)");
            gradient.addColorStop(1, "transparent");

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
            ctx.fill();

            c.x += c.dx;
            c.y += c.dy;

            if (c.x > canvas.width || c.x < 0) c.dx *= -1;
            if (c.y > canvas.height || c.y < 0) c.dy *= -1;
        });

        requestAnimationFrame(animate);
    }

    animate();
    window.addEventListener("resize", resize);
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

            localStorage.setItem(
                "theme",
                document.body.classList.contains("light") ? "light" : "dark"
            );
        });
    }

});



