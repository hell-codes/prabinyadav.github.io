const c = document.getElementById("servicesCanvas");
if (c) {
  const x = c.getContext("2d");
  initCanvasResize(c);
  const orbs = Array.from({length:18}, () => ({
    x:Math.random()*c.width, y:Math.random()*c.height,
    r:Math.random()*90+30, dx:(Math.random()-.5)*.5, dy:(Math.random()-.5)*.5,
    h: Math.random()>0.5 ? 210 : 160
  }));

  (function draw() {
    x.clearRect(0,0,c.width,c.height);
    orbs.forEach(o => {
      const g = x.createRadialGradient(o.x,o.y,5,o.x,o.y,o.r);
      g.addColorStop(0,`hsla(${o.h},80%,60%,0.22)`);
      g.addColorStop(1,"transparent");
      x.fillStyle=g; x.beginPath(); x.arc(o.x,o.y,o.r,0,Math.PI*2); x.fill();
      o.x+=o.dx; o.y+=o.dy;
      if(o.x<0||o.x>c.width) o.dx*=-1;
      if(o.y<0||o.y>c.height) o.dy*=-1;
    });
    
    requestAnimationFrame(draw);
  })();
}
