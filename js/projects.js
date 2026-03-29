const canvas = document.getElementById("projectsCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  initCanvasResize(canvas);

  const HEX_SIZE = 38;
  let offset = 0;

  function hexPath(cx, cy, size) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const x = cx + size * Math.cos(angle);
      const y = cy + size * Math.sin(angle);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
  }

  function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cols = Math.ceil(canvas.width  / (HEX_SIZE * 1.75)) + 2;
    const rows = Math.ceil(canvas.height / (HEX_SIZE * 1.52)) + 2;

    for (let row = -1; row < rows; row++) {
      for (let col = -1; col < cols; col++) {
        const x = col * HEX_SIZE * 1.75;
        const y = row * HEX_SIZE * 1.52 + (col % 2 === 0 ? 0 : HEX_SIZE * 0.76) + (offset % (HEX_SIZE * 1.52));
        const dist  = Math.hypot(x - canvas.width / 2, y - canvas.height / 2);
        const pulse = 0.5 + 0.5 * Math.sin(dist * 0.008 - offset * 0.04);
        const alpha = pulse * 0.12 + 0.02;

        hexPath(x, y, HEX_SIZE - 2);
        ctx.strokeStyle = `rgba(20,184,166,${alpha})`;
        ctx.lineWidth   = 0.8;
        ctx.stroke();

        if (Math.sin(col * 7.3 + row * 4.1 + offset * 0.02) > 0.94) {
          hexPath(x, y, HEX_SIZE - 2);
          ctx.strokeStyle = "rgba(20,184,166,0.55)";
          ctx.lineWidth   = 1.2;
          ctx.stroke();
        }
      }
    }
    offset += 0.6;
    requestAnimationFrame(drawGrid);
  }

  drawGrid();
}

document.addEventListener("DOMContentLoaded", async () => {
  const list = document.getElementById("projectList");
  if (!list) return;

  const DEFAULTS = [
    { 
      title: "To-Do App",               
      desc: "Task management web application.",    
      img: "images/todo.png"        
    },
    { 
      title: "Tic Tac Toe",             
      desc: "Interactive two-player game.",        
      img: "images/tictactoe.png"   
    },
    { 
      title: "Portfolio Website",        
      desc: "Personal portfolio website.",         
      img: "images/portfolio.png"   
    },
    { 
      title: "Death Clock — Hell Mode",  
      desc: "Predict your death date for fun.",    
      img: "images/deathclock.png"  
    }
  ];

  let projects = [];

  try {
    const { initializeApp, getApps } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js");
    const { getFirestore, collection, getDocs, query, orderBy } =
      await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");

    const firebaseConfig = {
      apiKey:            "AIzaSyC88KmP_zGtFuPh7lLmurCqYwtYyDw3Ff0",
      authDomain:        "prabin-portfolio-admin.firebaseapp.com",
      projectId:         "prabin-portfolio-admin",
      storageBucket:     "prabin-portfolio-admin.firebasestorage.app",
      messagingSenderId: "30623016582",
      appId:             "1:30623016582:web:b1ea62a0da6dad1752d307"
    };

    const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
    const db  = getFirestore(app);

    const q    = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);

    if (!snap.empty) {
      snap.forEach(d => projects.push(d.data()));
    }
  } catch (e) {
    console.warn("Firestore unavailable, using defaults:", e);
  }

  if (projects.length === 0) projects = DEFAULTS;

  list.innerHTML = "";

  projects.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.cssText = `
      opacity: 0;
      transform: translateY(28px);
      transition: opacity .7s cubic-bezier(.16,1,.3,1) ${i * 100}ms,
                  transform .7s cubic-bezier(.16,1,.3,1) ${i * 100}ms`;

    card.innerHTML = `
      <div class="card-img">
        <img src="${p.img}" alt="${p.title}" loading="lazy">
      </div>

      <div class="card-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>`;

    list.appendChild(card);
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.style.opacity   = "1";
      e.target.style.transform = "none";
      obs.unobserve(e.target);
    });
  }, { threshold: 0.08 });

  list.querySelectorAll(".card").forEach(c => obs.observe(c));
});
