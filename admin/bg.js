(function () {
  const canvas = document.getElementById("adminBg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const bolts = [];

  function buildBolt(x1, y1, x2, y2, depth, branches) {
    if (depth <= 0) return;
    const mx = (x1 + x2) / 2 + (Math.random() - 0.5) * (Math.hypot(x2-x1,y2-y1) * 0.45);
    const my = (y1 + y2) / 2 + (Math.random() - 0.5) * (Math.hypot(x2-x1,y2-y1) * 0.45);

    branches.push({ x1, y1, x2: mx, y2: my, depth });
    branches.push({ x1: mx, y1: my, x2, y2, depth });

    if (depth > 1 && Math.random() > 0.55) {
      const bx = mx + (Math.random() - 0.5) * 180;
      const by = my + Math.random() * 120 + 40;
      buildBolt(mx, my, bx, by, depth - 1, branches);
    }
    buildBolt(x1, y1, mx, my, depth - 1, branches);
    buildBolt(mx, my, x2, y2, depth - 1, branches);
  }

  function spawnBolt() {
    const W = canvas.width, H = canvas.height;
    const x  = Math.random() * W;
    const branches = [];
    buildBolt(x, 0, x + (Math.random()-0.5)*200, H * (0.4 + Math.random()*0.5), 6, branches);

    const colors = [
      { h:210, s:100, l:75 },
      { h:185, s:100, l:70 },
      { h:160, s:95,  l:65 },
    ];
    const c = colors[Math.floor(Math.random() * colors.length)];

    bolts.push({
      branches,
      alpha:    1,
      fadeRate: Math.random() * 0.045 + 0.025,
      h: c.h, s: c.s, l: c.l,
      flash:    true,
      flashAlpha: 1
    });
  }

  
  spawnBolt();
  setInterval(() => {
    if (Math.random() > 0.3) spawnBolt();
  }, 800);


  const clouds = Array.from({ length: 9 }, () => ({
    x: Math.random() * 1,
    y: Math.random() * 0.35,
    r: Math.random() * 0.3 + 0.15,
    vx: (Math.random() - 0.5) * 0.0002
  }));

  function draw() {
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);


    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0,   "#010408");
    bg.addColorStop(0.5, "#020608");
    bg.addColorStop(1,   "#030810");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);


    clouds.forEach(c => {
      const x = c.x * W, y = c.y * H;
      const r = c.r * Math.min(W, H);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0,   "rgba(20,30,50,0.6)");
      g.addColorStop(0.6, "rgba(10,18,32,0.3)");
      g.addColorStop(1,   "transparent");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      c.x += c.vx;
      if (c.x < -0.2 || c.x > 1.2) c.vx *= -1;
    });

    
    for (let i = bolts.length - 1; i >= 0; i--) {
      const bolt = bolts[i];

    
      if (bolt.flash && bolt.flashAlpha > 0) {
        ctx.fillStyle = `rgba(96,165,250,${bolt.flashAlpha * 0.06})`;
        ctx.fillRect(0, 0, W, H);
        bolt.flashAlpha -= 0.15;
        if (bolt.flashAlpha <= 0) bolt.flash = false;
      }

      bolt.branches.forEach(seg => {
        const depthAlpha = (seg.depth / 6) * bolt.alpha;
        const w = (seg.depth / 6) * 2.5;

    
        ctx.beginPath();
        ctx.moveTo(seg.x1, seg.y1);
        ctx.lineTo(seg.x2, seg.y2);
        ctx.strokeStyle = `hsla(${bolt.h},${bolt.s}%,${bolt.l}%,${depthAlpha * 0.25})`;
        ctx.lineWidth = w * 4;
        ctx.lineCap = "round";
        ctx.stroke();

    
        ctx.beginPath();
        ctx.moveTo(seg.x1, seg.y1);
        ctx.lineTo(seg.x2, seg.y2);
        ctx.strokeStyle = `hsla(${bolt.h},${bolt.s}%,90%,${depthAlpha * 0.9})`;
        ctx.lineWidth = w * 0.6;
        ctx.stroke();
      });

      bolt.alpha -= bolt.fadeRate;
      if (bolt.alpha <= 0) bolts.splice(i, 1);
    }

    
    const gg = ctx.createLinearGradient(0, H * 0.7, 0, H);
    gg.addColorStop(0,   "transparent");
    gg.addColorStop(1,   "rgba(96,165,250,0.04)");
    ctx.fillStyle = gg;
    ctx.fillRect(0, H * 0.7, W, H * 0.3);


    const vig = ctx.createRadialGradient(W/2, H/2, H*0.08, W/2, H/2, H*0.95);
    vig.addColorStop(0,   "transparent");
    vig.addColorStop(0.7, "rgba(0,0,0,0.35)");
    vig.addColorStop(1,   "rgba(0,0,0,0.88)");
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, W, H);

    requestAnimationFrame(draw);
  }

  draw();
})();
