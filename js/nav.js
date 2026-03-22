(function () {
  "use strict";

  function initCursor() {
    if (window.matchMedia("(hover:none)").matches) return;
    const dot  = document.createElement("div"); dot.id = "cursor-dot";
    const ring = document.createElement("div"); ring.id = "cursor-ring";
    document.body.append(dot, ring);

    let mx = -100, my = -100, rx = -100, ry = -100;

    document.addEventListener("mousemove", e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top  = my + "px";
    }, { passive: true });

    (function loop() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
      requestAnimationFrame(loop);
    })();

    const SEL = "a,button,.card,.service-card,.mode-toggle,.btn-primary,.btn-secondary,.chip,.social-icon,.menu-toggle";
    document.addEventListener("mouseover", e => {
      if (e.target.closest(SEL)) ring.classList.add("hovered");
    });

    document.addEventListener("mouseout", e => {
      if (e.target.closest(SEL)) ring.classList.remove("hovered");
    });
  }

  
  function initScrollProgress() {
    const bar = document.createElement("div");
    bar.id = "scroll-progress";
    document.body.prepend(bar);
    window.addEventListener("scroll", () => {
      const h = document.documentElement;
      bar.style.width = (window.scrollY / (h.scrollHeight - h.clientHeight) * 100) + "%";
    }, { passive: true });
  }

  
  function initHeaderScroll() {
    const header = document.querySelector("header");
    if (!header) return;
    const fn = () => header.classList.toggle("scrolled", window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
  }

 
  function setActiveLink() {
    const page = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a").forEach(a => {
      const href = (a.getAttribute("href") || "").split("/").pop();
      if (href === page || (page === "" && href === "index.html"))
        a.classList.add("active");
    });
  }

  
  function initMenu() {
    const navLinks   = document.getElementById("navLinks");
    const menuToggle = document.getElementById("menuToggle");
    const menuIcon   = document.getElementById("menuIcon");
    if (!navLinks || !menuToggle) return;

    function openMenu() {
      navLinks.classList.add("active");
      if (menuIcon) menuIcon.textContent = "✖";
      document.body.classList.add("menu-open");
    }

    function closeMenu() {
      navLinks.classList.remove("active");
      if (menuIcon) menuIcon.textContent = "☰";
      document.body.classList.remove("menu-open");
    }

   
    menuToggle.addEventListener("click", e => {
      e.stopPropagation();
      navLinks.classList.contains("active") ? closeMenu() : openMenu();
    });

    
    document.addEventListener("click", e => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMenu();
      }
    });

    
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) closeMenu();
    }, { passive: true });
  }

  
  function initTheme() {
    if (localStorage.getItem("theme") === "light")
      document.body.classList.add("light");

    const btn = document.getElementById("modeToggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      localStorage.setItem("theme",
        document.body.classList.contains("light") ? "light" : "dark");
    });
  }

  
  function initAnimations() {
    const els = document.querySelectorAll(
      ".reveal,.reveal-left,.reveal-right,.fadeUp,.card,.service-card"
    );
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (!e.isIntersecting) return;
        setTimeout(() => e.target.classList.add("visible"), i * 70);
        obs.unobserve(e.target);
      });

    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    els.forEach(el => obs.observe(el));
  }

  
  function initSkillBars() {
    const bars = document.querySelectorAll(".skill-bar");
    if (!bars.length) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.style.width = (e.target.dataset.pct || "0") + "%";
        obs.unobserve(e.target);
      });

    }, { threshold: 0.3 });
    bars.forEach(b => obs.observe(b));
  }

  
  function initTimeline() {
    const t = document.querySelector(".timeline");
    if (!t) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { t.classList.add("animated"); obs.unobserve(t); }
      });
      
    }, { threshold: 0.2 });
    obs.observe(t);
  }

  
  window.initCanvasResize = function (canvas) {
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });
  };


  function boot() {
    initCursor();
    initScrollProgress();
    initHeaderScroll();
    setActiveLink();
    initMenu();
    initTheme();
    initAnimations();
    initSkillBars();
    initTimeline();
  }

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", boot)
    : boot();
})();
