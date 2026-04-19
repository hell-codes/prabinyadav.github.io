<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,20:001a0d,45:003319,70:004d26,100:006633&height=320&section=header&text=PRABIN%20YADAV&fontSize=88&fontColor=34d399&fontAlignY=45&desc=Portfolio%20%E2%80%94%20Pure%20HTML%20%C2%B7%20CSS%20%C2%B7%20Vanilla%20JS%20%C2%B7%20Firebase&descAlignY=65&descSize=18&descColor=6ee7b7&animation=blinking"/>

</div>

<br/>

<div align="center">

[![Live](https://img.shields.io/badge/◉_LIVE-prabinyadav.dev-00000?style=for-the-badge&labelColor=001a0d&color=34d399&logoColor=34d399)](https://prabinyadav.dev)
&nbsp;
[![GitHub](https://img.shields.io/badge/GITHUB-hell--codes-6ee7b7?style=for-the-badge&logo=github&logoColor=34d399&labelColor=001a0d)](https://github.com/hell-codes)
&nbsp;
[![LinkedIn](https://img.shields.io/badge/LINKEDIN-connect-a7f3d0?style=for-the-badge&logo=linkedin&logoColor=34d399&labelColor=001a0d)](https://linkedin.com/in/prabinyadav)

<br/>

[![Visitors](https://api.visitorbadge.io/api/visitors?path=hell-codes%2Fprabinyadav-portfolio&label=VISITORS&labelColor=%23001a0d&countColor=%2334d399&style=for-the-badge)](https://visitorbadge.io/status?path=hell-codes%2Fprabinyadav-portfolio)
&nbsp;
[![Followers](https://img.shields.io/github/followers/hell-codes?style=for-the-badge&color=6ee7b7&labelColor=001a0d&logo=github&logoColor=34d399&label=FOLLOWERS)](https://github.com/hell-codes)

<br/><br/>

[![Typing](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=15&duration=2400&pause=1000&color=34D399&center=true&vCenter=true&width=700&lines=%24+no+framework+install+—+just+open+index.html;%24+canvas+animations+%3D+7+%2F%2F+one+per+page%2C+zero+repeats;%24+backend+%3D+Firebase+Firestore+%2B+Auth;%24+built_by+%3D+'1st+year+CSE+student'+%F0%9F%9A%80)](https://prabinyadav.dev)

</div>

<br/>

<div align="center">
<a href="https://prabinyadav.dev" target="_blank">
<img width="92%" src="images/portfolio.png" alt="prabinyadav.dev — Live Portfolio"/>
</a>
<br/>
<sup><i>↑ Click to open live site</i></sup>
</div>

<br/>

<div align="center">

```
 ┌─────────────────────────────────────────────────────────────────────────┐
 │                                                                         │
 │   > A portfolio that feels like a product — not a free template         │
 │   > Dark aesthetic · Real cloud backend · Zero dependencies · Deployed  │
 │                                                                         │
 └─────────────────────────────────────────────────────────────────────────┘
```

</div>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"/>

<br/>

## ▸ &nbsp;Why This Portfolio Stands Out

<br/>

<table>
<tr>
<td width="50%" valign="top">

### 🎨 &nbsp;Design

Every page has its own **unique animated Canvas background** — particles, waves, hexagons, orbs, falling lines, rising dots. None share a scene. Custom cursor, magnetic hover effects, scroll progress bar — all coded in pure Vanilla JS.

```
No Bootstrap.
No Tailwind.
No templates.
Every pixel intentional.
```

</td>
<td width="50%" valign="top">

### ⚙️ &nbsp;Engineering

**Firebase Firestore** as live cloud backend — add a project from the admin and all visitors see it instantly. Images auto-compress via Canvas API. `IntersectionObserver` drives all animations. `position: sticky` fixed using `overflow-x: clip`.

```
No npm packages.
No build step.
No node_modules.
open index.html → done.
```

</td>
</tr>
</table>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"/>

<br/>

## ▸ &nbsp;Feature List

<br/>

<div align="center">

| `#` | Feature | Implementation |
|:---:|:--------|:--------------|
| `01` | **Custom Cursor** | Dot + lagging ring · Grows on hover · Skipped on touch via `(hover:none)` |
| `02` | **Scroll Progress** | Gradient bar at top · Fills live as user reads |
| `03` | **Canvas Backgrounds** | 7 unique 2D scenes · Hand-coded · One per page |
| `04` | **Scroll Reveal** | `IntersectionObserver` · Staggered entry per element |
| `05` | **Typing Animation** | 4 roles cycling · Natural erase and retype rhythm |
| `06` | **Animated Skill Bars** | Fill on scroll-into-view via `IntersectionObserver` |
| `07` | **Dark / Light Mode** | Toggle · Saved to `localStorage` · Persists all pages |
| `08` | **Responsive Design** | Hamburger · Slide nav · `clamp()` type · No Bootstrap |
| `09` | **Admin Dashboard** | Firebase Auth protected · Add and delete projects |
| `10` | **Firestore Database** | Real cloud storage · Visible to all visitors worldwide |
| `11` | **Image Compression** | Canvas → JPEG pipeline before Firestore upload |
| `12` | **Contact Form** | Gmail compose pre-filled · Zero backend required |
| `13` | **Zero Dependencies** | No React · No Tailwind · No webpack · Pure browser |

</div>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"/>

<br/>

## ▸ &nbsp;Canvas Animations

<br/>

<div align="center">

```
 page            scene                   algorithm
 ─────────────── ─────────────────────── ───────────────────────────────────
 index.html   →  Particle Network     →  90 dots · velocity vectors · lines fade with distance
 about.html   →  Dual Sine Waves      →  2 layered waves · different freq · fill to canvas bottom
 projects.html→  Hex Grid Pulse       →  trig hexagons · brightness pulses outward like sonar
 services.html→  Glowing Orbs         →  18 radial blobs · random hue · drift + bounce off edges
 resume.html  →  Falling Lines        →  35 horizontal streaks · random speeds · loop from top
 contact.html →  Rising Dots          →  65 particles floating upward · reset at bottom
 admin/*      →  Bioluminescent Deep  →  ripples + drifting spores + caustic floor light
```

</div>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"/>

<br/>

## ▸ &nbsp;Project Structure

<br/>

```
📦 prabinyadav-portfolio/
│
├── 📂 admin/                          # Firebase-protected admin panel
│   ├── 📂 assets/
│   │   ├── bg.js                      # Bioluminescent canvas background
│   │   ├── bg-image.png               # Fallback image
│   │   └── logo.png                   # Admin logo
│   ├── login.html                     # Firebase auth
│   ├── dashboard.html                 # Add · delete projects
│   ├── admin.js                       # Firestore CRUD
│   └── admin.css                      # Admin styles
│
├── 📂 css/
│   └── style.css                      # Complete design system
│                                      # Variables · Grid · Flexbox · Animations
│
├── 📂 js/
│   ├── nav.js                         # Shared by ALL pages
│   │                                  # Cursor · Progress · Sticky · Theme
│   │                                  # Active link · Menu · Reveal · Skill bars
│   │
│   ├── script.js                      # Home: typing + particles + Firestore
│   ├── about.js                       # Wave canvas
│   ├── projects.js                    # Hex grid + Firestore cards
│   ├── services.js                    # Orb canvas
│   ├── resume.js                      # Falling lines canvas
│   └── contact.js                     # Rising dots + Gmail form
│
├── 📂 images/                         # logo · profile · thumbnails
├── 📂 certificates/                   # PDF certificates
│
├── index.html                         # Home
├── about.html                         # About
├── projects.html                      # Projects
├── services.html                      # Services
├── resume.html                        # Resume
├── contact.html                       # Contact
├── resume.pdf                         # Downloadable CV
└── README.md
```

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"/>

<br/>

## ▸ &nbsp;Tech Stack

<br/>

<div align="center">

<img src="https://skillicons.dev/icons?i=html,css,js,firebase,git,github,vscode&theme=dark&perline=7"/>

<br/><br/>

| Technology | Role |
|:----------:|:-----|
| **HTML5** | Semantic structure — 6 public pages + admin |
| **CSS3** | Custom properties · Flexbox · Grid · `@keyframes` · `clamp()` |
| **Vanilla JS ES6+** | Canvas API · DOM · Firestore SDK · IntersectionObserver |
| **Firebase Firestore** | Cloud NoSQL — real-time project storage |
| **Firebase Auth** | Email + password for admin protection |
| **Canvas 2D API** | All 7 backgrounds — zero WebGL, pure 2D |
| **Google Fonts** | Unbounded · Plus Jakarta Sans |
| **Font Awesome 6** | Icons |

</div>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"/>

<br/>

## ▸ &nbsp;Design Tokens

<br/>

<div align="center">

| Token | Value | Role |
|:-----:|:-----:|:-----|
| `--bg` | `#04080f` | Deep space black |
| `--accent` | `#60a5fa` | Electric blue — primary |
| `--accent-2` | `#34d399` | Emerald green — secondary |
| `--accent-3` | `#f472b6` | Pink — tertiary |
| `--text` | `#f1f5f9` | Primary text |
| `--text-2` | `#94a3b8` | Secondary text |
| `--font-display` | `Unbounded` | Headings · labels |
| `--font-body` | `Plus Jakarta Sans` | Body text |

</div>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"/>

<br/>

## ▸ &nbsp;Getting Started

<br/>

```bash
# Clone
git clone https://github.com/hell-codes/prabinyadav-portfolio.git
cd prabinyadav-portfolio

# Add your assets
# images/logo.png · images/profile.jpg · resume.pdf · certificates/

# Run — no build step required
open index.html
```

**Deploy options:**

```
GitHub Pages  →  Settings → Pages → Deploy from main
Netlify       →  drag folder to app.netlify.com/drop
Vercel        →  npx vercel --prod
Firebase      →  firebase init hosting && firebase deploy
```

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"/>

<br/>

## ▸ &nbsp;Admin Panel

<br/>

> 🔐 `/admin/login.html` — Firebase Authentication protected

<details>
<summary><b>&nbsp;▶ Expand setup guide</b></summary>

<br/>

```
1. console.firebase.google.com → create project
2. Firestore Database → create (production mode)
3. Authentication → Email/Password → enable
4. Authentication → Users → add yourself
5. Replace firebaseConfig in login.html + dashboard.html
```

```javascript
// Firestore security rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /projects/{docId} {
      allow read:  if true;
      allow write: if request.auth != null;
    }
  }
}
```

</details>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"/>

<br/>

## ▸ &nbsp;GitHub Stats

<br/>

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=hell-codes&show_icons=true&count_private=true&bg_color=001a0d&title_color=34d399&icon_color=6ee7b7&text_color=a7f3d0&border_color=064e3b&ring_color=34d399&hide_border=false&include_all_commits=true" height="175"/>
&nbsp;&nbsp;
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=hell-codes&layout=compact&bg_color=001a0d&title_color=34d399&text_color=a7f3d0&border_color=064e3b&hide_border=false&langs_count=6" height="175"/>

<br/><br/>

<img src="https://streak-stats.demolab.com?user=hell-codes&theme=transparent&hide_border=false&background=001a0d&ring=34d399&fire=6ee7b7&currStreakLabel=34d399&sideLabels=a7f3d0&dates=4ade80&stroke=064e3b&currStreakNum=6ee7b7&sideNums=34d399" height="175"/>

</div>

<br/>

<div align="center">
<img width="95%" src="https://github-readme-activity-graph.vercel.app/graph?username=hell-codes&bg_color=001a0d&color=34d399&line=6ee7b7&point=a7f3d0&area=true&area_color=34d399&hide_border=false&border_color=064e3b&title_color=34d399&custom_title=Prabin%27s%20Contribution%20Graph"/>
</div>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"/>

<br/>

## ▸ &nbsp;Contact

<br/>

<div align="center">

| Platform | Link |
|:--------:|:-----|
| 🌐 Website | [prabinyadav.dev](https://prabinyadav.dev) |
| 📧 Email | [prabin.yadav.0.0.18@gmail.com](mailto:prabin.yadav.0.0.18@gmail.com) |
| 💼 LinkedIn | [linkedin.com/in/prabinyadav](https://linkedin.com/in/prabinyadav) |
| 🐙 GitHub | [github.com/hell-codes](https://github.com/hell-codes) |
| 📸 Instagram | [@crazy.prabin\_18](https://instagram.com/crazy.prabin_18) |
| 💬 WhatsApp | [+91 72508 54792](https://wa.me/917250854792) |

</div>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"/>

<br/>

## ▸ &nbsp;License

Open source under **[MIT License](LICENSE)** — use freely, credit appreciated.

<br/>

---

<br/>

<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:006633,30:004d26,60:003319,90:001a0d,100:000000&height=220&section=footer&text=Made%20with%20%E2%9D%A4%EF%B8%8F%20by%20Prabin%20Yadav&fontSize=26&fontColor=34d399&fontAlignY=48&desc=1st%20Year%20CSE%20%C2%B7%20Amrita%20Vishwa%20Vidyapeetham%20%C2%B7%20Chennai&descSize=14&descColor=6ee7b7&descAlignY=70&animation=fadeIn"/>

<br/>

![HTML](https://img.shields.io/badge/HTML5-34d399?style=flat-square&logo=html5&logoColor=001a0d&labelColor=001a0d)
&nbsp;
![CSS](https://img.shields.io/badge/CSS3-6ee7b7?style=flat-square&logo=css3&logoColor=001a0d&labelColor=001a0d)
&nbsp;
![JS](https://img.shields.io/badge/JavaScript-a7f3d0?style=flat-square&logo=javascript&logoColor=001a0d&labelColor=001a0d)
&nbsp;
![Firebase](https://img.shields.io/badge/Firebase-34d399?style=flat-square&logo=firebase&logoColor=001a0d&labelColor=001a0d)
&nbsp;
![Deps](https://img.shields.io/badge/Dependencies-Zero-6ee7b7?style=flat-square&labelColor=001a0d)
&nbsp;
![License](https://img.shields.io/badge/License-MIT-a7f3d0?style=flat-square&labelColor=001a0d)

<br/><br/>

**⭐ Star this repo if it impressed you — it means the world!**

</div>
