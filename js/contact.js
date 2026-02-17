const canvas = document.getElementById("contactCanvas");

if (canvas) {
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let dots = [];

    for (let i = 0; i < 60; i++) {
        dots.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 3 + 1,
            vy: Math.random() * 0.6 + 0.2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        dots.forEach(d => {
            ctx.beginPath();
            ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(56,189,248,0.8)";
            ctx.fill();

            d.y -= d.vy;
            if (d.y < 0) d.y = canvas.height;
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}


document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(e){
            e.preventDefault();

            const name = contactForm.querySelector("input[type='text']").value;
            const email = contactForm.querySelector("input[type='email']").value;
            const message = contactForm.querySelector("textarea").value;

            const body =
                "Name: " + name + "%0D%0A" +
                "Email: " + email + "%0D%0A%0D%0A" +
                message;

            window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=prabin.yadav.0.0.18@gmail.com&su=Portfolio Contact&body=" + body,
                "_blank"
            );
        });
    }


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

