/* ================= STYLE ================= */
const style = document.createElement("style");
style.textContent = `
* { margin:0; padding:0; box-sizing:border-box; }

html, body {
  width:100%;
  height:100%;
  background:black;
  overflow:hidden;
  font-family:Arial;
  color:red;
  text-align:center;
  user-select:none;
  cursor:crosshair;
}

canvas {
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:1;
  pointer-events:none;
}

.content {
  position:relative;
  z-index:2;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  height:100%;
  padding:20px;
}

.logo {
  width:150px;
  height:150px;
  border-radius:50%;
  box-shadow:0 0 20px red,0 0 40px red,0 0 60px darkred;
  transition:0.3s;
}

.logo:hover { transform:scale(1.1); }

h1,h2,h3 {
  margin:15px 0;
  text-shadow:0 0 10px red;
}

.warning {
  margin-top:20px;
  font-weight:bold;
  color:red;
  text-shadow:0 0 10px red,0 0 20px darkred;
}

.btn {
  margin-top:25px;
  padding:12px 40px;
  background:#00bfff;
  color:white;
  border:none;
  border-radius:30px;
  cursor:pointer;
  box-shadow:0 0 10px #00bfff;
}
.btn:hover {
  transform:scale(1.2);
  box-shadow:0 0 30px #00d4ff;
}
`;
document.head.appendChild(style);

/* ================= CONTENT ================= */
const content = document.createElement("div");
content.className = "content";

const logo = document.createElement("img");
logo.src = "https://i.postimg.cc/q79gXyTp/image-2.webp";
logo.className = "logo";
logo.onclick = () => window.open("https://t.me/xvdpx");

const h1 = document.createElement("h1");

const h2a = document.createElement("h2");
h2a.textContent = "Hacked by diable'fire - Opvault";

const h2b = document.createElement("h2");
h2b.textContent = "# Hack Word # Hacked # X-VDP-X";

const h3 = document.createElement("h3");
h3.textContent =
"VOTRE SYSTÈME A ÉTÉ COMPROMIS. NOUS AVONS TOUT. NOUS AVONS INFILTRÉ CHAQUE ÉTAGE DE VOTRE RÉSEAU. VOS DONNÉES SONT À NOUS. TOUT A ÉTÉ EXFILTRÉ. MAIS VOUS N'AVEZ AUCUNE CHANCE DE NOUS ARRÊTER. NOUS SOMMES DÉJÀ LÀ.";

const warn = document.createElement("p");
warn.className = "warning";
warn.textContent = "VOTRE PEUR NOUS ALIMENTE, VOTRE SYSTÈME NOUS APPARTIENT !";

const btn = document.createElement("button");
btn.className = "btn";
btn.textContent = "TELEGRAM";
btn.onclick = () => window.open("https://t.me/xvdpx");

content.appendChild(logo);
content.appendChild(h1);
content.appendChild(h2a);
content.appendChild(h2b);
content.appendChild(h3);
content.appendChild(warn);
content.appendChild(btn);

document.body.appendChild(content);

/* ================= TYPEWRITER ================= */
const text = "HACKED BY X-VDP-X";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    h1.textContent += text[i];
    i++;
    setTimeout(typeWriter, 120);
  }
}
typeWriter();

/* ================= MATRIX ================= */
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

let w, h;
let fontSize = 18;
let columns;
let drops = [];

const chars = "アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾ";

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;

  columns = Math.floor(w / fontSize);
  drops = new Array(columns).fill(1);
}

window.addEventListener("resize", resize);
resize();

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "#00bfff";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > h && Math.random() > 0.98) {
      drops[i] = 0;
    }

    drops[i]++;
  }

  requestAnimationFrame(draw);
}

draw();
