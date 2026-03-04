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
        }else{
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
