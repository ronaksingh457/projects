# ⚔️ KATANA — Interactive 3D Landing Page

A premium, cinematic single-page site inspired by those viral 3D sword reels —
built with the exact professional stack:

**React + Vite · Three.js · React Three Fiber · @react-three/drei · GSAP + ScrollTrigger · Framer Motion · Tailwind CSS · Leva**

## ✨ What's inside

- ⚔️ A glowing 3D katana (procedurally modeled in code — **no external 3D asset required**)
- 🖱️ Mouse-follow: sword & camera subtly track your cursor
- ✨ Bloom glow on the hamon temper line + kissaki tip
- 🎥 Cinematic camera dolly driven by scroll
- 💨 Floating animation + drifting particles + starfield
- 🌌 Custom GLSL gradient/nebula background shader
- 📜 GSAP ScrollTrigger reveals; the sword glides left/right between sections
- 🌑 Dark glassmorphism UI (navbar, cards, CTA)
- ⏳ Cinematic loading screen
- 🖱️ Custom cursor (desktop only)
- 🎛️ Live Leva tuning panel (top-right): glow color, bloom, float, parallax…
- 📱 Responsive + 60 FPS optimized (adaptive DPR, lightweight geometry)

## 🚀 Quick start

```bash
npm install
npm run dev
```

Open the printed URL (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages as-is.

## 🗡️ Using your own 3D model (optional)

1. Drop your `katana.glb` into `public/models/`.
2. In `src/config.js`, set `useModel: true` (adjust `modelPath` / `modelScale`).
3. If the file is missing or fails to load, the site automatically falls back
   to the built-in procedural katana.

## 🗂️ Structure

```
src/
├── config.js               # live settings + shared scroll state
├── App.jsx                 # GSAP setup, Leva panel, layout
├── components/
│   ├── Scene.jsx           # R3F Canvas
│   ├── Katana.jsx          # procedural sword + scroll/mouse choreography
│   ├── Lights.jsx          # lights + procedural env-map reflections
│   ├── CameraRig.jsx       # cinematic scroll camera + parallax
│   ├── Background.jsx      # GLSL nebula sky + stars
│   ├── Particles.jsx       # drifting motes
│   ├── Effects.jsx         # bloom + vignette post-processing
│   ├── Loader.jsx          # loading screen
│   ├── Cursor.jsx          # custom cursor
│   ├── Navbar.jsx  Hero.jsx  Craft.jsx  Features.jsx  Legacy.jsx  Footer.jsx
```

## 🎛️ Tuning

- **Leva panel** (top-right, while developing): change glow color, bloom intensity,
  float strength, mouse parallax and auto-rotation in real time.
- **Scroll choreography**: edit `swordTargets()` in `src/components/Katana.jsx`
  and the camera keyframes in `src/components/CameraRig.jsx`.
- **Colors / fonts**: `tailwind.config.js` (`ink`, `glow`, `gold`) and `index.html`
  (Google Fonts: Cinzel + Manrope).

> Note: Google Fonts load from a CDN at runtime; the page still works offline
> with system-font fallbacks.
