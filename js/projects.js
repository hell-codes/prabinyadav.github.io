const canvas = document.getElementById("projectsCanvas");

if (canvas) {
    const ctx = canvas.getContext("2d");

    function resizeCanvas(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();

    let nodes = [];

    for(let i = 0; i < 60; i++){
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: Math.random() * 1 - 0.5,
            vy: Math.random() * 1 - 0.5
        });
    }

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        nodes.forEach(n => {
            ctx.beginPath();
            ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = "white";
            ctx.fill();

            n.x += n.vx;
            n.y += n.vy;

            if(n.x < 0 || n.x > canvas.width) n.vx *= -1;
            if(n.y < 0 || n.y > canvas.height) n.vy *= -1;

            nodes.forEach(m => {
                let dx = n.x - m.x;
                let dy = n.y - m.y;
                let dist = Math.sqrt(dx*dx + dy*dy);

                if(dist < 120){
                    ctx.strokeStyle = "rgba(37,99,235,0.2)";
                    ctx.beginPath();
                    ctx.moveTo(n.x, n.y);
                    ctx.lineTo(m.x, m.y);
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animate);
    }

    animate();
    window.addEventListener("resize", resizeCanvas);
}


document.addEventListener("DOMContentLoaded", () => {

    const projectList = document.getElementById("projectList");

    if (projectList) {
        let projects = JSON.parse(localStorage.getItem("projects")) || [
            {
                title:"To-Do App",
                desc:"Task management web application.",
                img:"images/todo.png"
            },
            {
                title:"Tic Tac Toe",
                desc:"Interactive two-player game.",
                img:"images/tictactoe.png"
            },
            {
                title:"Portfolio Website",
                desc:"Personal portfolio website",
                img:"images/portfolio.png"
            },
            {
                title:"Death Clock-Hell Mode",
                desc:"Predict your death date for fun.",
                img:"images/deathclock.png"
            }
        ];

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

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");
});
