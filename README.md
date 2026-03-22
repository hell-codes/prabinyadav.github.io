<div align="center">

# 🚀 Prabin Yadav — Portfolio

[![Live Site](https://img.shields.io/badge/Live%20Site-prabinyadav.dev-60a5fa?style=for-the-badge&logo=google-chrome&logoColor=white)](https://prabinyadav.dev)
[![GitHub](https://img.shields.io/badge/GitHub-hell--codes-34d399?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hell-codes)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-prabinyadav-0077b5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/prabinyadav)

<br/>

**Personal portfolio website built with HTML, CSS & Vanilla JavaScript.**  
Dark luxury tech aesthetic · Sticky navbar · Canvas animations · Admin dashboard

<br/>

![Portfolio Preview](images/portfolio.png)

</div>

---

## 🌐 Live Site

> **[prabinyadav.dev](https://prabinyadav.dev)**

---

## ✨ Features

- 🎨 **Dark Luxury Tech** design with custom color system
- 📌 **Sticky navbar** on every page while scrolling
- 🖱️ **Custom cursor** with magnetic hover effect (desktop)
- 📊 **Scroll progress bar** at the top
- 🌊 **Unique canvas animations** — different on every page
- 💡 **Scroll-reveal animations** using IntersectionObserver
- 📈 **Animated skill bars** that trigger on scroll
- 🌙 **Dark / Light mode** toggle with localStorage persistence
- 📱 **Fully responsive** mobile menu with smooth slide-in
- 🔐 **Admin dashboard** with Firebase authentication
- 📬 **Contact form** that opens Gmail directly
- ⚡ **Zero dependencies** — pure vanilla JS, no frameworks

---

## 🗂️ File Structure

```
prabinyadav-portfolio/
│
├── 📁 admin/                    # Admin panel (Firebase auth)
│   ├── 📁 assets/               # Admin page assets
│   │   ├── bg-image.png         # Admin background image
│   │   └── logo.png             # Admin panel logo
│   ├── login.html               # Admin login page
│   ├── dashboard.html           # Project manager dashboard
│   ├── admin.js                 # Add / delete projects logic
│   └── admin.css                # Admin panel styles
│
├── 📁 certificates/             # PDF certificates
│   ├── android.pdf
│   ├── ibm.pdf
│   ├── java.pdf
│   └── python.pdf
│
├── 📁 css/
│   └── style.css                # Master design system & all styles
│
├── 📁 images/                   # All image assets
│   ├── logo.png                 # Site logo
│   ├── profile.jpg              # Profile photo
│   ├── todo.png                 # Project thumbnails
│   ├── tictactoe.png
│   ├── portfolio.png
│   └── deathclock.png
│
├── 📁 js/
│   ├── nav.js                   # Shared: cursor, sticky nav, theme,
│   │                            #         scroll progress, animations
│   ├── script.js                # Home page: typing effect, particles
│   ├── about.js                 # About page: wave canvas
│   ├── projects.js              # Projects page: hex grid + card inject
│   ├── services.js              # Services page: orb canvas
│   ├── resume.js                # Resume page: falling lines canvas
│   └── contact.js               # Contact page: floating dots + form
│
├── index.html                   # Home page
├── about.html                   # About page
├── projects.html                # Projects page
├── services.html                # Services page
├── resume.html                  # Resume page
├── contact.html                 # Contact page
├── resume.pdf                   # Downloadable resume
└── README.md                    # This file
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure & semantic markup |
| CSS3 | Design system, animations, responsive layout |
| Vanilla JavaScript | Interactivity, canvas animations, IntersectionObserver |
| Canvas API | Unique background animations per page |
| Firebase Auth | Admin login & session management |
| LocalStorage | Theme persistence & project management |
| Google Fonts | Unbounded + Plus Jakarta Sans |
| Font Awesome | Social & UI icons |

---

## 📄 Pages

| Page | Description | Canvas Effect |
|---|---|---|
| `index.html` | Home — hero, projects, contact | Particle network |
| `about.html` | Skills, stats, career goals | Wave animation |
| `projects.html` | Project cards grid | Hex grid pulse |
| `services.html` | Services offered | Glowing orbs |
| `resume.html` | Education, skills, certificates | Falling lines |
| `contact.html` | Contact form + social links | Floating dots |

---

## ⚙️ Setup & Usage

### 1. Clone the repository
```bash
git clone https://github.com/hell-codes/prabinyadav-portfolio.git
cd prabinyadav-portfolio
```

### 2. Add your assets
```
images/logo.png        ← your logo
images/profile.jpg     ← your photo
resume.pdf             ← your resume
certificates/          ← your PDF certificates
```

### 3. Open locally
```bash
# Just open in browser — no build step needed
open index.html
```

### 4. Deploy
Upload all files to any static host:
- [GitHub Pages](https://pages.github.com)
- [Netlify](https://netlify.com) — drag & drop the folder
- [Vercel](https://vercel.com)

---

## 🔐 Admin Panel

The admin dashboard at `/admin/login.html` is protected by **Firebase Authentication**.

- Login with your Firebase email/password
- Add projects with title, description & image
- Delete projects — changes reflect live on the site instantly
- Projects are stored in `localStorage`

To set up your own Firebase project, update the config in `admin/login.html` and `admin/dashboard.html`.

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `> 768px` | Full desktop nav, two-column hero |
| `≤ 768px` | Hamburger menu, single column |
| `≤ 480px` | Single column cards, compact hero |

---

## 🎨 Design System

```css
/* Primary Colors */
--bg:       #04080f    /* Deep navy background  */
--accent:   #60a5fa    /* Electric blue         */
--accent-2: #34d399    /* Emerald green         */
--accent-3: #f472b6    /* Pink highlight        */

/* Typography */
--font-display: 'Unbounded'         /* Headings  */
--font-body:    'Plus Jakarta Sans' /* Body text */
```

---

## 📬 Contact

| Platform | Link |
|---|---|
| 🌐 Website | [prabinyadav.dev](https://prabinyadav.dev) |
| 📧 Email | [prabin.yadav.0.0.18@gmail.com](mailto:prabin.yadav.0.0.18@gmail.com) |
| 💼 LinkedIn | [linkedin.com/in/prabinyadav](https://linkedin.com/in/prabinyadav) |
| 🐙 GitHub | [github.com/hell-codes](https://github.com/hell-codes) |
| 📸 Instagram | [@crazy.prabin_18](https://instagram.com/crazy.prabin_18) |

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by **Prabin Yadav**

⭐ **Star this repo if you found it helpful!**

</div>
