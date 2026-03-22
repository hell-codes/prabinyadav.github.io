const c = document.getElementById("resumeCanvas");
if (c) {
  const x = c.getContext("2d");
  initCanvasResize(c);
  const lines = Array.from({length:35}, () => ({
    x:Math.random()*c.width, y:Math.random()*c.height,
    len:Math.random()*90+20, speed:Math.random()*1.1+0.3,
    alpha:Math.random()*.25+.07
  }));

  (function draw() {
    x.clearRect(0,0,c.width,c.height);
    lines.forEach(l => {
      x.strokeStyle=`rgba(96,165,250,${l.alpha})`; x.lineWidth=1.5;
      x.beginPath(); x.moveTo(l.x,l.y); x.lineTo(l.x+l.len,l.y); x.stroke();
      l.y+=l.speed;
      if(l.y>c.height){l.y=-15;l.x=Math.random()*c.width;}
    });
    
    requestAnimationFrame(draw);
  })();
}
