/* =========================
   🔤 Typing Animation
   ========================= */

const PHRASES = [
  "Student Developer",
  "Problem Solver",
  "Frontend Builder",
  "Python Enthusiast"
];

let pi = 0, ci = 0, deleting = false;

function typeLoop() {
  const el = document.getElementById("typing");
  if (!el) return;

  const current = PHRASES[pi];
  el.textContent = deleting
    ? current.slice(0, ci--)
    : current.slice(0, ci++);

  if (!deleting && ci > current.length) {
    deleting = true;
    setTimeout(typeLoop, 1400);
    return;
  }

  if (deleting && ci < 0) {
    deleting = false;
    pi = (pi + 1) % PHRASES.length;
    ci = 0;
  }

  setTimeout(typeLoop, deleting ? 45 : 80);
}

setTimeout(typeLoop, 800);


/* =========================
   🚀 FIRESTORE
   ========================= */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC88KmP_zGtFuPh7lLmurCqYwtYyDw3Ff0",
  authDomain: "prabin-portfolio-admin.firebaseapp.com",
  projectId: "prabin-portfolio-admin",
  storageBucket: "prabin-portfolio-admin.firebasestorage.app",
  messagingSenderId: "30623016582",
  appId: "1:30623016582:web:b1ea62a0da6dad1752d307"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


/* =========================
   📦 LOAD PROJECTS
   ========================= */

document.addEventListener("DOMContentLoaded", async () => {
  const projectList = document.getElementById("projectList");

  if (!projectList) {
    console.error("❌ projectList not found");
    return;
  }

  let projects = [];

  try {
    const snap = await getDocs(collection(db, "projects"));

    console.log("Firestore docs:", snap.size); // 🔍 DEBUG

    snap.forEach(doc => {
      projects.push(doc.data());
    });

  } catch (e) {
    console.error("🔥 Firestore ERROR:", e);
  }

  // 🔥 IMPORTANT: fallback if empty
  if (projects.length === 0) {
    console.warn("⚠️ No Firestore data — using default");

    projects = [
      { title: "To-Do App", desc: "Task manager application", img: "images/todo.png" },
      { title: "Tic Tac Toe", desc: "Interactive 2-player game", img: "images/tictactoe.png" },
      { title: "Portfolio Website", desc: "Personal portfolio website", img: "images/portfolio.png" }
    ];
  }

  // 🔥 limit to 3
  projects = projects.slice(0, 3);

  projectList.innerHTML = "";

  projects.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "card reveal";
    card.style.transitionDelay = (i * 90) + "ms";

    card.innerHTML = `
      <div class="card-img">
        <img src="${p.img}" alt="${p.title}">
      </div>
      
      <div class="card-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>
    `;

    projectList.appendChild(card);
  });

  console.log("✅ Projects rendered:", projects);
});


/* =========================
   🌌 PARTICLES BACKGROUND (RESTORED)
   ========================= */

const canvas = document.getElementById("particles");

if (canvas) {
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const pts = Array.from({ length: 90 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.7,
    vy: (Math.random() - 0.5) * 0.7,
    r: Math.random() * 1.5 + 0.5
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pts.forEach((p, i) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(96,165,250,0.55)";
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const d = Math.sqrt(dx * dx + dy * dy);

        if (d < 130) {
          ctx.strokeStyle = `rgba(96,165,250,${0.18 * (1 - d / 130)})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
}


/* =========================
   📩 Contact Form
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const n  = document.getElementById("name").value;
    const em = document.getElementById("email").value;
    const m  = document.getElementById("message").value;

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=prabin.yadav.0.0.18@gmail.com&su=Portfolio Contact&body=Name: ${n}%0AEmail: ${em}%0A%0A${m}`,
      "_blank"
    );
  });
});
