<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,3,12,20,24&height=300&section=header&text=Prabin%20Yadav&fontSize=80&fontColor=fff&fontAlignY=42&desc=Personal%20Portfolio%20%E2%80%94%20HTML%20%C2%B7%20CSS%20%C2%B7%20Vanilla%20JS%20%C2%B7%20Firebase&descAlignY=64&descSize=17&descColor=c7d2fe&animation=fadeIn" />

</div>

<div align="center">

<br/>

[![Live Site](https://img.shields.io/badge/🌐%20Live%20Site-prabinyadav.dev-4f46e5?style=for-the-badge&labelColor=0f172a)](https://prabinyadav.dev)
&nbsp;
[![GitHub](https://img.shields.io/badge/GitHub-hell--codes-22c55e?style=for-the-badge&logo=github&logoColor=white&labelColor=0f172a)](https://github.com/hell-codes)
&nbsp;
[![LinkedIn](https://img.shields.io/badge/LinkedIn-prabinyadav-0ea5e9?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=0f172a)](https://linkedin.com/in/prabinyadav)
&nbsp;
[![Stars](https://img.shields.io/github/stars/hell-codes/prabinyadav-portfolio?style=for-the-badge&logo=github&color=f59e0b&labelColor=0f172a&label=Stars)](https://github.com/hell-codes/prabinyadav-portfolio/stargazers)

<br/><br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=15&duration=2600&pause=1000&color=818CF8&center=true&vCenter=true&width=660&lines=Zero+frameworks.+Zero+build+step.+Zero+compromises.;7+unique+canvas+animations+%E2%80%94+one+on+every+page.;Firebase+Firestore+%2B+Auth+%2B+admin+dashboard.;Built+from+scratch+by+a+1st+year+CS+student.)](https://git.io/typing-svg)

<br/>

</div>

<div align="center">
<img width="90%" src="images/portfolio.png" alt="prabinyadav.dev — Portfolio Preview" />
</div>

<br/>

<div align="center">

> **"A developer portfolio that feels like a product — not a template."**
>
> *Dark luxury aesthetic &nbsp;·&nbsp; Real cloud database &nbsp;·&nbsp; Zero dependencies*

</div>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ✦ &nbsp;What Makes This Different

<br/>

<table>
<tr>
<td width="50%" valign="top">

### 🎨 &nbsp;Design

Every page has its own **unique animated canvas background** — particles, sine waves, hexagons, orbs, falling lines, rising dots. The custom cursor, scroll progress bar, magnetic hover effects, and animated skill bars are all handcrafted in pure vanilla JS.

**Not a single line borrowed from any UI library.**

</td>
<td width="50%" valign="top">

### ⚙️ &nbsp;Engineering

Firebase Firestore as a real cloud backend. Images auto-compress via Canvas API before upload. `IntersectionObserver` drives every scroll animation. `clamp()` for fluid typography. Mobile canvas auto-downgrades to prevent lag. Zero npm packages. Zero build tools.

</td>
</tr>
</table>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ✦ &nbsp;Features

<br/>

<div align="center">

| &nbsp; | Feature | Description |
|:------:|:--------|:------------|
| 🖱️ | **Custom Cursor** | Dot + lagging ring · Expands on hover · Auto-hidden on touch devices |
| 📊 | **Scroll Progress Bar** | Gradient bar at page top · Fills as you read |
| 🌊 | **Canvas Backgrounds** | 7 unique hand-coded animated scenes · One per page |
| 👁️ | **Scroll Reveal** | `IntersectionObserver` — elements animate when entering the viewport |
| ⌨️ | **Typing Animation** | 4 roles cycling with natural character-by-character erase + retype |
| 📈 | **Animated Skill Bars** | Fill to percentage only after scrolling into view |
| 🌙 | **Dark / Light Mode** | One click · Preference persists via `localStorage` across sessions |
| 📱 | **Fully Responsive** | Fixed floating hamburger · Compact dropdown · `clamp()` typography |
| ⭐ | **Featured Projects** | Pin exactly 3 projects to the home page from the admin dashboard |
| 🔐 | **Admin Dashboard** | Firebase Auth · Add · feature · delete projects live |
| 🖼️ | **Image Compression** | Canvas → JPEG · Auto-compresses before Firestore upload |
| 📬 | **Contact Form** | Opens Gmail compose with visitor message pre-filled · No server |
| ⚡ | **Zero Dependencies** | No React · No Tailwind · No webpack · Just open `index.html` |

</div>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ✦ &nbsp;Canvas Backgrounds — One Per Page

<br/>

<div align="center">

| Page | Scene | How It Works |
|:----:|:-----:|:-------------|
| **Home** | 🔵 Particle Network | 90 velocity-driven dots · Lines fade with distance · Vanish at 130px |
| **About** | 🌊 Dual Sine Waves | Two waves at different frequencies filling to canvas bottom |
| **Projects** | ⬡ Hex Grid Pulse | Trig-drawn hexagons · Brightness pulses outward like sonar |
| **Services** | 🟢 Glowing Orbs | 18 radial-gradient blobs with random hue · Drift + bounce |
| **Resume** | 🟣 Falling Lines | 35 horizontal streaks at varied speeds · Reset above canvas |
| **Contact** | 🟡 Rising Dots | 65 particles floating upward · Loop endlessly |
| **Admin** | 🔷 Particle Web | Particle network with mouse-repel + sine wave overlay |

</div>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ✦ &nbsp;Project Structure

<br/>

```
📦 prabinyadav-portfolio/
│
├── 📂 admin/                        ← Firebase-protected admin panel
│   ├── login.html                   ← Email + password sign-in via Firebase Auth
│   ├── dashboard.html               ← Add · feature · delete projects
│   ├── admin.css                    ← Admin design system
│   └── bg.js                        ← Particle canvas + custom cursor (admin only)
│
├── 📂 css/
│   └── style.css                    ← Master design system
│                                       Variables · Grid · Flexbox · Animations · Responsive
│
├── 📂 js/
│   ├── nav.js                       ← Shared across ALL pages
│   │                                   Cursor · Scroll progress · Sticky header
│   │                                   Active nav · Hamburger · Dark/light mode
│   │                                   Scroll-reveal · Skill bars · Canvas resize helper
│   │
│   ├── script.js                    ← Home: Typing · Particles · Firestore featured projects
│   ├── about.js                     ← Dual sine wave canvas
│   ├── projects.js                  ← Hex grid · Loads ALL Firestore projects
│   ├── services.js                  ← Glowing orbs canvas
│   ├── resume.js                    ← Falling lines canvas
│   └── contact.js                   ← Rising dots · Gmail form handler
│
├── 📂 images/                       ← logo · profile · project screenshots
├── 📂 certificates/                 ← android · ibm · java · python PDFs
│
├── index.html                       ← Home
├── about.html                       ← About
├── projects.html                    ← Projects
├── services.html                    ← Services
├── resume.html                      ← Resume + certificates
├── contact.html                     ← Contact form + socials
├── resume.pdf                       ← Downloadable CV
└── README.md
```

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ✦ &nbsp;Tech Stack

<br/>

<div align="center">

<img src="https://skillicons.dev/icons?i=html,css,js,firebase,git,github,vscode&theme=dark" />

<br/><br/>

| Technology | Purpose |
|:----------:|:--------|
| **HTML5** | Semantic structure · 6 public pages + admin panel |
| **CSS3** | Custom properties · Flexbox · Grid · `@keyframes` · `clamp()` · `backdrop-filter` |
| **Vanilla JavaScript ES6+** | All logic · Canvas API · DOM · Firestore queries · `IntersectionObserver` |
| **Firebase Firestore** | Cloud database — real-time project storage and retrieval |
| **Firebase Authentication** | Email + password admin login |
| **Canvas 2D API** | All 7 animated backgrounds — pure 2D, zero WebGL |
| **Google Fonts** | Unbounded (headings) · Plus Jakarta Sans (body) |
| **Font Awesome 6** | Social links and UI icons |

</div>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ✦ &nbsp;Design System

<br/>

<div align="center">

| Token | Value | Role |
|:-----:|:-----:|:-----|
| `--bg` | `#04080f` | Deep space black — page background |
| `--accent` | `#60a5fa` | Electric blue — primary highlight |
| `--accent-2` | `#34d399` | Emerald green — secondary highlight |
| `--accent-3` | `#f472b6` | Pink — tertiary accent |
| `--text` | `#f1f5f9` | Near-white — primary text |
| `--text-2` | `#94a3b8` | Slate — secondary text |
| `--font-display` | `Unbounded` | All headings · labels · nav |
| `--font-body` | `Plus Jakarta Sans` | All paragraph text |
| `--radius` | `14px` | Cards · inputs · buttons |
| `--radius-lg` | `22px` | Sections · panels |

</div>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ✦ &nbsp;Responsive Design

<br/>

<div align="center">

| Breakpoint | Layout |
|:----------:|:-------|
| `> 768px` | Full navbar · Two-column hero · Multi-column grids |
| `≤ 768px` | Fixed floating hamburger · Dropdown nav · Single column |
| `≤ 480px` | Compact hero · Single-column cards · Smaller clamped type |

</div>

<br/>

- **Hamburger is `position: fixed`** — always visible in top-right no matter how far you scroll · Opens a compact dropdown right below it
- **CSS Grid `auto-fill`** reflows project cards automatically to any screen width
- **`clamp()` typography** — font sizes scale fluidly with no sudden jumps between breakpoints
- **Canvas auto-downgrades on mobile** — particles 100 → 35, `shadowBlur` removed, wave steps every 4px
- **Custom cursor skipped on touch** — `(hover: none)` media query detects touch devices automatically

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ✦ &nbsp;Getting Started

<br/>

**1 — Clone**
```bash
git clone https://github.com/hell-codes/prabinyadav-portfolio.git
cd prabinyadav-portfolio
```

**2 — Add your assets**
```
images/logo.png        ←  your logo
images/profile.jpg     ←  your profile photo
resume.pdf             ←  your resume PDF
certificates/          ←  your PDF certificates
```

**3 — Open locally**
```bash
open index.html
# or for ES module support:
npx serve .
```

**4 — Deploy**

| Platform | Method |
|:--------:|:-------|
| **GitHub Pages** | Settings → Pages → Deploy from `main` branch |
| **Netlify** | Drag folder to [app.netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel** | `npx vercel --prod` |
| **Firebase Hosting** | `firebase init hosting` → `firebase deploy` |

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ✦ &nbsp;Admin Panel

<br/>

> 🔐 &nbsp;Access at `/admin/login.html` — Protected by Firebase Authentication

<details>
<summary><b>&nbsp;&nbsp;Expand — Dashboard features &amp; Firebase setup guide</b></summary>

<br/>

**Dashboard capabilities:**

| Action | Result |
|:-------|:-------|
| ➕ **Add project** | Title + description + image → auto-compressed → saved to Firestore |
| ⭐ **Feature project** | Star to pin on home page · Max 3 at once |
| 🗑️ **Delete project** | Removed from Firestore → disappears from live site instantly |

<br/>

**Firebase setup for your own fork:**

1. Create a project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Firestore Database** and **Authentication → Email/Password**
3. Add yourself under **Authentication → Users**
4. Replace `firebaseConfig` in `admin/login.html` and `admin/dashboard.html`
5. Apply Firestore security rules:

```js
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

6. Create a composite index: `featured` (ASC) + `createdAt` (DESC) on the `projects` collection
   *(Firebase shows a direct link in the console on first load — one click to create it)*

</details>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ✦ &nbsp;GitHub Stats

<br/>

<div align="center">

<img height="175" src="https://github-readme-stats.vercel.app/api?username=hell-codes&show_icons=true&bg_color=0f172a&title_color=818cf8&icon_color=34d399&text_color=94a3b8&border_color=1e293b&ring_color=6366f1&count_private=true&hide_border=false" />
&nbsp;
<img height="175" src="https://github-readme-stats.vercel.app/api/top-langs/?username=hell-codes&layout=compact&bg_color=0f172a&title_color=818cf8&text_color=94a3b8&border_color=1e293b&hide_border=false" />

</div>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ✦ &nbsp;Contact

<br/>

<div align="center">

| &nbsp; | Platform | Link |
|:------:|:--------:|:-----|
| 🌐 | **Website** | [prabinyadav.dev](https://prabinyadav.dev) |
| 📧 | **Email** | [prabin.yadav.0.0.18@gmail.com](mailto:prabin.yadav.0.0.18@gmail.com) |
| 💼 | **LinkedIn** | [linkedin.com/in/prabinyadav](https://linkedin.com/in/prabinyadav) |
| 🐙 | **GitHub** | [github.com/hell-codes](https://github.com/hell-codes) |
| 📸 | **Instagram** | [@crazy.prabin\_18](https://instagram.com/crazy.prabin_18) |
| 💬 | **WhatsApp** | [+91 72508 54792](https://wa.me/917250854792) |

</div>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ✦ &nbsp;License

Open source under the **[MIT License](LICENSE)** — use freely, credit appreciated.

<br/>

---

<div align="center">

<br/>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,3,12,20,24&height=200&section=footer&text=Made%20with%20%E2%9D%A4%EF%B8%8F%20by%20Prabin%20Yadav&fontSize=26&fontColor=fff&fontAlignY=52&desc=1st%20Year%20CSE%20%C2%B7%20Amrita%20Vishwa%20Vidyapeetham%20%C2%B7%20Chennai&descSize=14&descColor=c7d2fe&descAlignY=74&animation=fadeIn" />

<br/>

**⭐ If this project impressed you, a star on the repo means the world!**

<br/>

![HTML CSS JS](https://img.shields.io/badge/Made%20with-HTML%20·%20CSS%20·%20JS-6366f1?style=flat-square&labelColor=0f172a)
&nbsp;
![Firebase](https://img.shields.io/badge/Backend-Firebase-f59e0b?style=flat-square&logo=firebase&labelColor=0f172a)
&nbsp;
![Zero Deps](https://img.shields.io/badge/Dependencies-Zero-22c55e?style=flat-square&labelColor=0f172a)
&nbsp;
![MIT](https://img.shields.io/badge/License-MIT-ec4899?style=flat-square&labelColor=0f172a)

</div>
