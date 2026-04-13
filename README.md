<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:04080f,30:071428,60:0d1f42,100:1a3a6e&height=260&section=header&text=Prabin%20Yadav&fontSize=72&fontColor=60a5fa&fontAlignY=42&desc=Full-Stack%20Portfolio%20%E2%80%94%20HTML%20%C2%B7%20CSS%20%C2%B7%20Vanilla%20JS%20%C2%B7%20Firebase&descAlignY=64&descSize=16&descColor=94a3b8&animation=fadeIn" />

<br/>

<a href="https://prabinyadav.dev">
  <img src="https://img.shields.io/badge/%F0%9F%8C%90%20Live%20Site-prabinyadav.dev-60a5fa?style=for-the-badge&labelColor=04080f" />
</a>
&nbsp;
<a href="https://github.com/hell-codes">
  <img src="https://img.shields.io/badge/GitHub-hell--codes-34d399?style=for-the-badge&logo=github&logoColor=white&labelColor=04080f" />
</a>
&nbsp;
<a href="https://linkedin.com/in/prabinyadav">
  <img src="https://img.shields.io/badge/LinkedIn-prabinyadav-0077b5?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=04080f" />
</a>
&nbsp;
<img src="https://visitor-badge.laobi.icu/badge?page_id=hell-codes.prabinyadav-portfolio&style=for-the-badge&color=60a5fa&labelColor=04080f" />

<br/><br/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=15&pause=1200&color=60A5FA&center=true&vCenter=true&width=600&lines=Dark+luxury+aesthetic+%C2%B7+Zero+frameworks;Canvas+animations+on+every+page;Admin+dashboard+%2B+Firebase+backend;Built+from+scratch+%E2%80%94+pure+vanilla+JS" alt="Typing SVG" />

<br/>

> **"A developer portfolio that feels like a product — not a template."**

<br/>

<img width="90%" src="images/portfolio.png" alt="Portfolio Preview" />

</div>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ◈ &nbsp;What Makes This Different

<br/>

<div align="center">

```
 No React.  No Vue.  No Tailwind.  No build step.
 Just HTML, CSS, and JavaScript — doing things you didn't think were possible without a framework.
```

</div>

<br/>

<table>
<tr>
<td width="50%" valign="top">

### 🎨 &nbsp;Design
- Dark luxury color system with deep navy + electric blue accents
- Custom animated cursor with magnetic hover ring
- Every single page has its **own unique canvas animation**
- Scroll progress bar that tracks reading position live
- Dark ↔ Light mode toggle with localStorage memory
- Glassmorphism cards with gradient borders

</td>
<td width="50%" valign="top">

### ⚙️ &nbsp;Engineering
- Zero dependencies — pure vanilla JavaScript
- `IntersectionObserver` for all scroll-reveal animations
- Firebase Firestore as a real-time cloud database
- Image compression pipeline before upload (canvas → JPEG)
- Firebase Auth–protected admin dashboard
- Mobile-optimised canvas (fewer particles, no `shadowBlur`)

</td>
</tr>
</table>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ◈ &nbsp;Features at a Glance

<br/>

<div align="center">

| &nbsp; | Feature | What it does |
|:------:|---------|-------------|
| 🖱️ | **Custom Cursor** | Dot + trailing ring with magnetic hover enlarge effect |
| 📊 | **Scroll Progress Bar** | Thin gradient bar at top — fills as you read |
| 🌊 | **Canvas Backgrounds** | Unique animated scene on every page (see table below) |
| 💡 | **Scroll-Reveal** | Elements fade + slide in via `IntersectionObserver` |
| ⌨️ | **Typing Animation** | Cycles through developer roles character by character |
| 📈 | **Animated Skill Bars** | Width animates to percentage when scrolled into view |
| 🌙 | **Dark / Light Mode** | One-click toggle, persists across all pages and sessions |
| 📱 | **Fully Responsive** | Fixed floating hamburger menu, fluid typography, reflowing grids |
| ⭐ | **Featured Projects** | Choose exactly which 3 projects appear on the home page |
| 🔐 | **Admin Dashboard** | Firebase Auth login → add / delete / feature projects |
| 🖼️ | **Image Compression** | Auto-compresses uploads via canvas before saving to Firestore |
| 📬 | **Contact Form** | Opens Gmail compose with visitor's message pre-filled |
| ⚡ | **Zero Build Step** | Open `index.html` — it just works |

</div>

<br/>

### 🎬 &nbsp;Canvas Backgrounds by Page

<div align="center">

| Page | Effect | Description |
|------|:------:|-------------|
| `index.html` | 🔵 | **Particle network** — 90 dots connected by proximity lines, all animated |
| `about.html` | 🌊 | **Sine wave fill** — two layered waves scrolling in opposite phase |
| `projects.html` | ⬡ | **Hex grid pulse** — teal hexagons rippling from center like sonar |
| `services.html` | 🟢 | **Glowing orbs** — 18 radial-gradient blobs drifting and bouncing |
| `resume.html` | 🟣 | **Falling lines** — 35 horizontal streaks raining downward |
| `contact.html` | 🟡 | **Rising dots** — 65 particles floating upward and looping |
| `admin/*` | 🔷 | **Particle web + wave** — network with mouse-repel + sine wave |

</div>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ◈ &nbsp;Project Structure

<br/>

```
📦 prabinyadav-portfolio
│
├── 📂 admin/                        ← Protected admin panel
│   ├── login.html                   ← Firebase Auth login
│   ├── dashboard.html               ← Project manager (add/delete/feature)
│   ├── admin.css                    ← Admin-only styles
│   └── bg.js                        ← Admin canvas background + cursor
│
├── 📂 css/
│   └── style.css                    ← Master design system (variables, layout, animations)
│
├── 📂 js/
│   ├── nav.js                       ← Shared: cursor · scroll bar · theme · nav · animations
│   ├── script.js                    ← Home: typing · particles · Firestore featured projects
│   ├── about.js                     ← About: wave canvas background
│   ├── projects.js                  ← Projects: hex grid · all Firestore projects
│   ├── services.js                  ← Services: floating orbs canvas
│   ├── resume.js                    ← Resume: falling lines canvas
│   └── contact.js                   ← Contact: rising dots · Gmail form handler
│
├── 📂 images/                       ← All image assets (logo, profile, project screenshots)
├── 📂 certificates/                 ← PDF certificates (android, ibm, java, python)
│
├── index.html                       ← Home page
├── about.html                       ← About page
├── projects.html                    ← Projects page
├── services.html                    ← Services page
├── resume.html                      ← Resume page
├── contact.html                     ← Contact page
└── resume.pdf                       ← Downloadable resume
```

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ◈ &nbsp;Tech Stack

<br/>

<div align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />
<img src="https://img.shields.io/badge/Canvas_API-04080f?style=for-the-badge&logo=html5&logoColor=60a5fa" />
<img src="https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white" />
<img src="https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white" />

<br/><br/>

| Layer | Technology | Purpose |
|:-----:|-----------|---------|
| Structure | HTML5 | Semantic markup across 6 pages |
| Styling | CSS3 | Custom properties, grid, flexbox, keyframes |
| Logic | Vanilla JS (ES6+) | All interactivity, canvas, Firestore calls |
| Animations | Canvas 2D API | Per-page animated backgrounds |
| Database | Firebase Firestore | Cloud storage for projects |
| Auth | Firebase Authentication | Admin login protection |
| Persistence | localStorage | Theme preference memory |
| Icons | Font Awesome 6 | Social + UI icons |
| Fonts | Google Fonts | Unbounded (display) · Plus Jakarta Sans (body) |

</div>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ◈ &nbsp;Design System

<br/>

```css
/* ━━━━━━━━━━━━━━━━━━  Color Palette  ━━━━━━━━━━━━━━━━━━ */
--bg:          #04080f;   /* Deep space black             */
--bg-2:        #080e1a;   /* Slightly lifted navy         */
--accent:      #60a5fa;   /* Electric blue — primary      */
--accent-2:    #34d399;   /* Emerald green — secondary    */
--accent-3:    #f472b6;   /* Pink — highlight             */
--text:        #f1f5f9;   /* Near white                   */
--text-2:      #94a3b8;   /* Muted slate                  */

/* ━━━━━━━━━━━━━━━━━━  Typography  ━━━━━━━━━━━━━━━━━━━━ */
--font-display: 'Unbounded';          /* All headings & labels */
--font-body:    'Plus Jakarta Sans';  /* All paragraph text    */

/* ━━━━━━━━━━━━━━━━━━  Spacing & Shape  ━━━━━━━━━━━━━━━━ */
--radius:    14px;   /* Cards, inputs       */
--radius-lg: 22px;   /* Sections, modals    */
--nav-h:     68px;   /* Sticky header height */
```

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ◈ &nbsp;Responsive Design

<br/>

<div align="center">

| Breakpoint | Layout Behaviour |
|:----------:|-----------------|
| `> 768px` | Full desktop nav · Two-column hero · Multi-column grids |
| `≤ 768px` | **Fixed floating hamburger** · Dropdown menu · Single column |
| `≤ 480px` | Compact hero · Single-column cards · Smaller typography |

</div>

<br/>

**Key mobile decisions:**
- Hamburger button is `position: fixed` — always visible no matter how far you scroll
- Nav becomes a compact **dropdown** directly below the button (not a full-screen overlay)
- Canvas animations automatically use fewer particles and skip `shadowBlur` on mobile to prevent lag
- Custom cursor is hidden on touch devices — normal cursor restores automatically
- Typography uses `clamp()` — scales fluidly between sizes without breakpoints

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ◈ &nbsp;Getting Started

<br/>

### `1` &nbsp; Clone

```bash
git clone https://github.com/hell-codes/prabinyadav-portfolio.git
cd prabinyadav-portfolio
```

### `2` &nbsp; Add your assets

```
images/logo.png       ←  your logo
images/profile.jpg    ←  your photo
resume.pdf            ←  your resume PDF
certificates/         ←  your PDF certificates
```

### `3` &nbsp; Run locally

```bash
# No build step — just open the file
open index.html

# Or serve with any local server (recommended for module imports)
npx serve .
```

### `4` &nbsp; Deploy

| Platform | Steps |
|----------|-------|
| **GitHub Pages** | Push to `main` → Settings → Pages → Deploy from branch |
| **Netlify** | Drag & drop the entire folder on netlify.com |
| **Vercel** | `vercel --prod` or import repo on vercel.com |
| **Firebase Hosting** | `firebase deploy` after `firebase init hosting` |

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ◈ &nbsp;Admin Panel

<br/>

> Access at `/admin/login.html` — protected by Firebase Authentication

<br/>

<details>
<summary><b>&nbsp;&nbsp;🔐 &nbsp;Click to expand — Admin setup & features</b></summary>

<br/>

**What you can do from the dashboard:**

| Action | Description |
|--------|-------------|
| ➕ Add project | Upload title, description, and image — auto-compressed before saving |
| ⭐ Feature project | Mark up to 3 projects to appear on the home page |
| 🗑️ Delete project | Removes from Firestore — disappears from site instantly |

<br/>

**Firebase setup (for your own fork):**

1. Go to [console.firebase.google.com](https://console.firebase.google.com) and create a project
2. Enable **Firestore Database** and **Authentication** (Email/Password)
3. Create an admin user under Authentication → Users
4. Replace the `firebaseConfig` object in `admin/login.html` and `admin/dashboard.html`
5. Set Firestore rules:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /projects/{docId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

6. Create a Firestore **composite index**: `featured (ASC)` + `createdAt (DESC)` on the `projects` collection

</details>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ◈ &nbsp;Contact

<br/>

<div align="center">

| &nbsp; | Platform | Link |
|:------:|----------|------|
| 🌐 | **Website** | [prabinyadav.dev](https://prabinyadav.dev) |
| 📧 | **Email** | [prabin.yadav.0.0.18@gmail.com](mailto:prabin.yadav.0.0.18@gmail.com) |
| 💼 | **LinkedIn** | [linkedin.com/in/prabinyadav](https://linkedin.com/in/prabinyadav) |
| 🐙 | **GitHub** | [github.com/hell-codes](https://github.com/hell-codes) |
| 📸 | **Instagram** | [@crazy.prabin_18](https://instagram.com/crazy.prabin_18) |

</div>

<br/>

<img width="100%" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" />

<br/>

## ◈ &nbsp;License

<br/>

This project is open source under the [MIT License](LICENSE) — use it freely, credit appreciated.

<br/><br/>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:1a3a6e,50:0f1f3d,100:04080f&height=160&section=footer&text=Made%20with%20%E2%9D%A4%EF%B8%8F%20by%20Prabin%20Yadav%20%C2%B7%20Amrita%20Vishwa%20Vidyapeetham&fontSize=16&fontColor=60a5fa&fontAlignY=55&animation=fadeIn" />

<div align="center">

<br/>

**If this project impressed you, a ⭐ means a lot!**

<br/>

</div>
