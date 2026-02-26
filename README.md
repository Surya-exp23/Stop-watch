# ⏱️ Stop Watch

> A clean, minimal countdown timer built with **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**.

---

## ✨ Features

- **Set custom duration** — Use `+` / `−` buttons to set your timer in 1-minute increments
- **Start / Pause / Resume** — Full playback control with a single button
- **Auto-hiding controls** — Plus and minus icons disappear once the timer starts for a distraction-free experience
- **Animated timer text** — The countdown display grows larger when running so it's always clearly visible
- **Persistent state** — Timer survives page refreshes using `localStorage`; even accounts for time elapsed while the page was away
- **Auto-reset** — Resets cleanly back to `00:00` when the countdown finishes

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | Tailwind CSS |
| Icons | Remix Icon (`remixicon`) |
| Logic | Vanilla JavaScript |

---

## 📁 Project Structure

```
stopwatch/
├── index.html       # Markup & layout
├── script.js        # Timer logic & state management
└── output.css       # Compiled Tailwind CSS
```

---

## 🚀 Getting Started

1. **Clone or download** the project files
2. Make sure `output.css` is compiled from your Tailwind config, or link a CDN version
3. Open `index.html` in any modern browser — no build step or server required

```bash
# If using Tailwind CLI to compile styles
npx tailwindcss -i ./input.css -o ./output.css --watch
```

---

## 🎮 How to Use

1. Click **`+`** to add minutes to the timer (each click = +1 minute)
2. Click **`−`** to reduce the time
3. Hit **START** to begin the countdown
   - The `+` / `−` controls hide and the timer text grows large
4. Hit **PAUSE** to freeze the timer at any point
5. Hit **RESUME** to continue from where you left off
6. The timer resets automatically when it reaches `00:00`



---

## 🎨 UI Highlights

- Dark glassmorphism card on a pure black background
- Purple accent button (`#80f`) with subtle hover lift animation
- Timer text smoothly transitions to `2rem` with letter-spacing when running
- Remix Icons for clean, consistent iconography

---

## 📄 License

This project is open source and free to use for personal or educational purposes.