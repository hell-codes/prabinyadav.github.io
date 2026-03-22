const c = document.getElementById("aboutCanvas");
if (c) {
  const x = c.getContext("2d");
  initCanvasResize(c);
  let t = 0;
  (function draw() {
    x.clearRect(0,0,c.width,c.height);
    for (let i = 0; i <= c.width; i += 3) {
      const y1 = c.height*.45 + Math.sin(i*.009 + t)*50;
      const y2 = c.height*.6  + Math.sin(i*.007 + t*1.2+1)*35;
      x.fillStyle = "rgba(96,165,250,0.06)";
      x.fillRect(i, y1, 2, c.height - y1);
      x.fillStyle = "rgba(52,211,153,0.04)";
      x.fillRect(i, y2, 2, c.height - y2);
    }
    t += .018;
    requestAnimationFrame(draw);
  })();
}
