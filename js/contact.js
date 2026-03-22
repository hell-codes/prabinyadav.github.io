const c = document.getElementById("contactCanvas");
if (c) {
  const x = c.getContext("2d");
  initCanvasResize(c);
  const dots = Array.from({length:65}, () => ({
    x:Math.random()*c.width, y:Math.random()*c.height,
    r:Math.random()*2+.5, vy:Math.random()*.45+.15, a:Math.random()*.5+.2
  }));
  
  (function draw() {
    x.clearRect(0,0,c.width,c.height);
    dots.forEach(d => {
      x.beginPath(); x.arc(d.x,d.y,d.r,0,Math.PI*2);
      x.fillStyle=`rgba(52,211,153,${d.a})`; x.fill();
      d.y-=d.vy; if(d.y<-4) d.y=c.height+4;
    });
    requestAnimationFrame(draw);
  })();
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name  = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const msg   = form.querySelector("textarea").value;
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=prabin.yadav.0.0.18@gmail.com&su=Portfolio Contact&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${msg}`,
      "_blank"
    );
  });
});
