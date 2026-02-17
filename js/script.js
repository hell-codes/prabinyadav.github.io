const text = "Student Developer & Problem Solver";
let i = 0;

function typing() {
    const el = document.getElementById("typing");
    if (!el) return;

    if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 60);
    }
}
typing();


const projectList = document.getElementById("projectList");

let projects = JSON.parse(localStorage.getItem("projects")) || [
    {
        title:"To-Do App",
        desc:"Task manager application",
        img:"images/todo.png"
    },
    {
        title:"Tic Tac Toe",
        desc:"2-player game",
        img:"images/tictactoe.png"
    },
    {
        title:"Portfolio Website",
        desc:"Personal portfolio website",
        img:"images/portfolio.png"
    }
];

if (projectList) {
    projects.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${p.img}">
            <div style="padding:15px">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
            </div>
        `;

        projectList.appendChild(card);
    });
}


if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
}

const toggleBtn = document.getElementById("modeToggle");

if (toggleBtn) {
    toggleBtn.onclick = () => {
        document.body.classList.toggle("light");

        
        if (document.body.classList.contains("light")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    };
}


const navLinksContainer = document.getElementById("navLinks");

if (navLinksContainer) {
    navLinksContainer.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinksContainer.classList.remove("active");
        });
    });
}


window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


const canvas = document.getElementById("particles");

if (canvas) {

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    for (let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: Math.random() - 0.5,
            vy: Math.random() - 0.5,
            size: 2
        });
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = "white";
            ctx.fill();

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        });

        requestAnimationFrame(drawParticles);
    }

    drawParticles();

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}


document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) return;

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const body =
            "Name: " + name + "%0A" +
            "Email: " + email + "%0A%0A" +
            message;

        window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=prabin.yadav.0.0.18@gmail.com&su=Portfolio Contact&body=" + body,
            "_blank"
        );
    });

});


document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

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

});
