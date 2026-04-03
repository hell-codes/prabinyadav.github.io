const canvas = document.getElementById("adminBg");
const ctx = canvas.getContext("3d");

let particles = [];
let mouse = { x: null, y: null };

const PARTICLE_COUNT = 100;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;

    this.size = Math.random() * 2 + 0.5;
    this.opacity = Math.random() * 0.5 + 0.3;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;


    if (mouse.x !== null) {
      let dx = this.x - mouse.x;
      let dy = this.y - mouse.y;
      let dist = dx * dx + dy * dy;

      if (dist < 15000) {
        this.x += dx * 0.002;
        this.y += dy * 0.002;
      }
    }
  }

  draw() {
    ctx.beginPath();
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#60a5fa";
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(96,165,250,${this.opacity})`;
    ctx.fill();
  }
}


function init() {
  particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }
}
init();


function connect() {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a + 1; b < particles.length; b++) {
      let dx = particles[a].x - particles[b].x;
      let dy = particles[a].y - particles[b].y;
      let dist = dx * dx + dy * dy;

      if (dist < 12000) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(96,165,250,0.04)";
        ctx.lineWidth = 1;
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
      }
    }
  }
}


let waveOffset = 0;

function drawWave() {
  ctx.beginPath();
  ctx.lineWidth = 2;

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, "transparent");
  gradient.addColorStop(0.5, "#60a5fa");
  gradient.addColorStop(1, "transparent");

  ctx.strokeStyle = gradient;

  for (let x = 0; x < canvas.width; x++) {
    let y =
      canvas.height / 2 +
      Math.sin((x + waveOffset) * 0.01) * 20 +
      Math.sin((x + waveOffset) * 0.02) * 10;

    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.shadowBlur = 25;
  ctx.shadowColor = "#60a5fa";
  ctx.stroke();

  waveOffset += 1.5;
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawWave();

  particles.forEach(p => {
    p.move();
    p.draw();
  });

  connect();

  requestAnimationFrame(animate);
}
animate();


window.addEventListener("mousemove", e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener("mouseleave", () => {
  mouse.x = null;
  mouse.y = null;
});
