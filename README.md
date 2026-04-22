<img width="100%" src="https://capsule-render.vercel.app/api?type=soft&color=0:000000,30:080808,60:111111,100:1a1a1a&height=340&section=header&text=Prabin%20Yadav&fontSize=94&fontColor=f8fafc&fontAlignY=44&desc=Portfolio%20%E2%80%94%20HTML%20%C2%B7%20CSS%20%C2%B7%20Vanilla%20JS%20%C2%B7%20Firebase&descAlignY=64&descSize=18&descColor=94a3b8&animation=fadeIn"/>

<div align="center">

<br/>

[![Live](https://img.shields.io/badge/LIVE%20SITE-prabinyadav.dev-f8fafc?style=for-the-badge&labelColor=111111&color=f8fafc&logoColor=f8fafc)](https://prabinyadav.dev)
&nbsp;
[![GitHub](https://img.shields.io/badge/SOURCE-hell--codes-94a3b8?style=for-the-badge&logo=github&logoColor=f8fafc&labelColor=111111)](https://github.com/hell-codes)
&nbsp;
[![LinkedIn](https://img.shields.io/badge/LINKEDIN-connect-64748b?style=for-the-badge&logo=linkedin&logoColor=f8fafc&labelColor=111111)](https://linkedin.com/in/prabinyadav)

<br/>

[![Visitors](https://api.visitorbadge.io/api/visitors?path=hell-codes%2Fprabinyadav-portfolio&label=VISITORS&labelColor=%23111111&countColor=%23f8fafc&style=for-the-badge)](https://visitorbadge.io/status?path=hell-codes%2Fprabinyadav-portfolio)
&nbsp;
[![Followers](https://img.shields.io/github/followers/hell-codes?style=for-the-badge&color=94a3b8&labelColor=111111&logo=github&logoColor=f8fafc&label=FOLLOWERS)](https://github.com/hell-codes)

<br/><br/>

[![Typing](https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=16&duration=2800&pause=1000&color=F8FAFC&center=true&vCenter=true&width=700&lines=No+frameworks.+No+build+step.+No+compromises.;7+unique+canvas+animations+—+one+per+page.;Firebase+backend+%2B+real+admin+dashboard.;Built+from+scratch+by+a+1st+year+CSE+student.)](https://prabinyadav.dev)

</div>

<br/>

<div align="center">
<a href="https://prabinyadav.dev">
<img width="90%" src="images/portfolio.png" alt="prabinyadav.dev — Live Preview"/>
</a>
<br/>
<sup><i>↑ &nbsp;Click to visit <b>prabinyadav.dev</b></i></sup>
</div>

<br/>

<div align="center">

```
  ──────────────────────────────────────────────────────────────────────

    A developer portfolio that feels like a product — not a template.
    Dark luxury aesthetic  ·  Real cloud database  ·  Zero dependencies

  ──────────────────────────────────────────────────────────────────────
```

</div>

<br/>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

<br/>

## &nbsp;01 &nbsp;/&nbsp; Why This Portfolio

<br/>

<table>
<tr>
<td width="50%" valign="top">

**Design**

Every page has its own unique animated Canvas background — particles, waves, hexagons, orbs, falling lines, rising dots. None share a scene. Custom cursor, scroll progress bar, magnetic hover effects, animated skill bars — every interaction written in pure Vanilla JS. Not a single line borrowed from any library.

</td>
<td width="50%" valign="top">

**Engineering**

Firebase Firestore as a live cloud backend — projects added from the admin dashboard appear for every visitor worldwide, instantly. Images auto-compress via Canvas API. `IntersectionObserver` powers all animations. `overflow-x: clip` keeps sticky nav working. Zero packages. Zero build tools.

</td>
</tr>
</table>

<br/>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

<br/>

## &nbsp;02 &nbsp;/&nbsp; Features

<br/>

<div align="center">

| Feature | Description |
|:--------|:-----------|
| **Custom Cursor** | Dot + lagging ring · Expands on hover · Disabled on touch via `(hover:none)` |
| **Scroll Progress** | Gradient bar fixed at top · Fills live as user reads |
| **Canvas Backgrounds** | 7 unique 2D scenes — one per page, never repeated |
| **Scroll Reveal** | `IntersectionObserver` — staggered entry on viewport arrival |
| **Typing Animation** | 4 roles cycling with natural erase and retype |
| **Animated Skill Bars** | Fill to exact % only when scrolled into view |
| **Dark / Light Mode** | Toggle · Saved to `localStorage` · All pages remember |
| **Fully Responsive** | Hamburger · `clamp()` type · CSS Grid · Zero Bootstrap |
| **Admin Dashboard** | Firebase Auth protected · Add and delete projects live |
| **Cloud Database** | Firestore · Real-time · All visitors see the same data |
| **Image Compression** | Canvas → JPEG pipeline before Firestore upload |
| **Contact Form** | Gmail compose pre-filled · No backend needed |
| **Zero Dependencies** | No React · No Tailwind · No webpack · Open and run |

</div>

<br/>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

<br/>

## &nbsp;03 &nbsp;/&nbsp; Canvas Animations

<br/>

<div align="center">

| Page | Scene | Algorithm |
|:----:|:-----:|:---------|
| `index.html` | Particle Network | 90 dots · velocity vectors · lines fade with distance |
| `about.html` | Dual Sine Waves | Two layers at different frequencies · fill to canvas bottom |
| `projects.html` | Hex Grid Pulse | Trig hexagons · brightness pulses outward like sonar |
| `services.html` | Glowing Orbs | 18 radial blobs · random hue · drift and bounce |
| `resume.html` | Falling Lines | 35 streaks at random speeds · loop from top |
| `contact.html` | Rising Dots | 65 particles floating upward · loop from bottom |
| `admin/` | Bioluminescent | Ripples + spores + caustic light · ocean floor |

</div>

<br/>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

<br/>

## &nbsp;04 &nbsp;/&nbsp; Structure

<br/>

```
prabinyadav-portfolio/
│
├── admin/
│   ├── assets/
│   │   ├── bg.js               bioluminescent canvas
│   │   ├── bg-image.png        fallback background
│   │   └── logo.png            admin logo
│   ├── login.html              firebase auth
│   ├── dashboard.html          project manager
│   ├── admin.js                firestore crud
│   └── admin.css               admin styles
│
├── css/
│   └── style.css               master design system
│
├── js/
│   ├── nav.js                  shared — all pages
│   │                           cursor · progress · sticky
│   │                           theme · menu · reveal · skills
│   ├── script.js               home — typing · particles
│   ├── about.js                wave canvas
│   ├── projects.js             hex grid + firestore cards
│   ├── services.js             orb canvas
│   ├── resume.js               falling lines canvas
│   └── contact.js              rising dots + gmail form
│
├── images/                     logo · profile · thumbnails
├── certificates/               pdf certificates
│
├── index.html                  home
├── about.html                  about
├── projects.html               projects
├── services.html               services
├── resume.html                 resume
├── contact.html                contact
└── resume.pdf                  downloadable cv
```

<br/>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

<br/>

## &nbsp;05 &nbsp;/&nbsp; Stack

<br/>

<div align="center">

<img src="https://skillicons.dev/icons?i=html,css,js,firebase,git,github,vscode&theme=dark&perline=7"/>

<br/><br/>

| Technology | Role |
|:----------:|:-----|
| **HTML5** | Semantic structure — 6 pages + admin |
| **CSS3** | Custom properties · Grid · Flexbox · `@keyframes` · `clamp()` |
| **Vanilla JS ES6+** | Canvas API · DOM · Firestore · `IntersectionObserver` |
| **Firebase Firestore** | Cloud NoSQL — real-time storage |
| **Firebase Auth** | Admin panel protection |
| **Canvas 2D API** | 7 animated backgrounds — pure 2D |
| **Google Fonts** | Unbounded · Plus Jakarta Sans |
| **Font Awesome 6** | Social + UI icons |

</div>

<br/>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

<br/>

## &nbsp;06 &nbsp;/&nbsp; Design System

<br/>

<div align="center">

| Token | Value | Usage |
|:-----:|:-----:|:------|
| `--bg` | `#04080f` | Page background |
| `--accent` | `#60a5fa` | Primary — electric blue |
| `--accent-2` | `#34d399` | Secondary — emerald |
| `--accent-3` | `#f472b6` | Tertiary — pink |
| `--text` | `#f1f5f9` | Primary text |
| `--text-2` | `#94a3b8` | Secondary text |
| `--font-display` | `Unbounded` | Headings + labels |
| `--font-body` | `Plus Jakarta Sans` | Body text |

</div>

<br/>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

<br/>

## &nbsp;07 &nbsp;/&nbsp; Getting Started

<br/>

```bash
git clone https://github.com/hell-codes/prabinyadav-portfolio.git
cd prabinyadav-portfolio
open index.html
```

```
Deploy targets
──────────────
GitHub Pages   →  Settings → Pages → main branch
Netlify        →  app.netlify.com/drop → drag folder
Vercel         →  npx vercel --prod
Firebase       →  firebase init hosting && firebase deploy
```

<br/>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

<br/>

## &nbsp;08 &nbsp;/&nbsp; Admin Panel

<br/>

> `/admin/login.html` — Protected by Firebase Authentication

<details>
<summary><b>&nbsp;Expand — Firebase setup</b></summary>
<br/>

```
1.  console.firebase.google.com → create project
2.  Firestore Database → production mode
3.  Authentication → Email/Password → enable
4.  Authentication → Users → add yourself
5.  Replace firebaseConfig in login.html + dashboard.html
```

```javascript
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

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

<br/>

## &nbsp;09 &nbsp;/&nbsp; GitHub Stats

<br/>

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=hell-codes&show_icons=true&count_private=true&bg_color=0a0a0a&title_color=f8fafc&icon_color=94a3b8&text_color=64748b&border_color=1a1a1a&ring_color=f8fafc&hide_border=false&include_all_commits=true" height="175"/>
&nbsp;&nbsp;
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=hell-codes&layout=compact&bg_color=0a0a0a&title_color=f8fafc&text_color=64748b&border_color=1a1a1a&hide_border=false&langs_count=6" height="175"/>

<br/><br/>

<img src="https://streak-stats.demolab.com?user=hell-codes&theme=transparent&background=0a0a0a&ring=f8fafc&fire=94a3b8&currStreakLabel=f8fafc&sideLabels=64748b&dates=94a3b8&stroke=1a1a1a&currStreakNum=94a3b8&sideNums=f8fafc" height="175"/>

<br/><br/>

<img width="95%" src="https://github-readme-activity-graph.vercel.app/graph?username=hell-codes&bg_color=0a0a0a&color=f8fafc&line=94a3b8&point=64748b&area=true&area_color=f8fafc&hide_border=false&border_color=1a1a1a&title_color=f8fafc&custom_title=Contribution+Graph"/>

</div>

<br/>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

<br/>

## &nbsp;10 &nbsp;/&nbsp; Contact

<br/>

<div align="center">

| Platform | Link |
|:--------:|:-----|
| Website | [prabinyadav.dev](https://prabinyadav.dev) |
| Email | [prabin.yadav.0.0.18@gmail.com](mailto:prabin.yadav.0.0.18@gmail.com) |
| LinkedIn | [linkedin.com/in/prabinyadav](https://linkedin.com/in/prabinyadav) |
| GitHub | [github.com/hell-codes](https://github.com/hell-codes) |
| Instagram | [@crazy.prabin\_18](https://instagram.com/crazy.prabin_18) |
| WhatsApp | [+91 72508 54792](https://wa.me/917250854792) |

</div>

<br/>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

<br/>

## &nbsp;11 &nbsp;/&nbsp; License

Open source under the **[MIT License](LICENSE)** — use freely, credit appreciated.

<br/>

---

<br/>

<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:1a1a1a,30:111111,60:080808,100:000000&height=220&section=footer&text=Made%20with%20%E2%9D%A4%EF%B8%8F%20by%20Prabin%20Yadav&fontSize=26&fontColor=f8fafc&fontAlignY=50&desc=1st%20Year%20CSE%20%C2%B7%20Amrita%20Vishwa%20Vidyapeetham%20%C2%B7%20Chennai&descSize=14&descColor=94a3b8&descAlignY=72&animation=fadeIn"/>

<br/>

![HTML](https://img.shields.io/badge/HTML5-f8fafc?style=flat-square&logo=html5&logoColor=111111&labelColor=111111)
![CSS](https://img.shields.io/badge/CSS3-94a3b8?style=flat-square&logo=css3&logoColor=111111&labelColor=111111)
![JS](https://img.shields.io/badge/JavaScript-64748b?style=flat-square&logo=javascript&logoColor=f8fafc&labelColor=111111)
![Firebase](https://img.shields.io/badge/Firebase-f8fafc?style=flat-square&logo=firebase&logoColor=111111&labelColor=111111)
![Deps](https://img.shields.io/badge/Dependencies-Zero-94a3b8?style=flat-square&labelColor=111111)
![MIT](https://img.shields.io/badge/License-MIT-64748b?style=flat-square&labelColor=111111)

<br/><br/>

**⭐ &nbsp;Star this repo if it impressed you — it means the world.**

</div>
