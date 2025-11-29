# 📦 PWA React Complete Structure (Vercel Ready)

Berikut **struktur lengkap PWA** untuk aplikasi list video, dalam satu dokumen. Kamu cukup menyalin file-file ini ke project React (Vite) dan push ke GitHub untuk deploy ke **Vercel**.

---
# 📂 Struktur Folder
```
project/
 ├─ public/
 │   ├─ manifest.json
 │   ├─ icon-192.png
 │   ├─ icon-512.png
 │   └─ robots.txt
 │
 ├─ src/
 │   ├─ App.jsx
 │   ├─ main.jsx
 │   ├─ theme.js
 │   ├─ components/
 │   │     ├─ VideoList.jsx
 │   │     ├─ VideoDetailMode.jsx
 │   │     └─ Login.jsx
 │   ├─ db/
 │   │     └─ indexedDB.js
 │   └─ sw.js (Service Worker)
 │
 ├─ index.html
 ├─ package.json
 ├─ vite.config.js
```

---
# 📄 `public/manifest.json`
```json
{
  "name": "Video List PWA",
  "short_name": "VideoList",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#000000",
  "icons": [
    { "src": "icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

---
# 📄 `index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="manifest" href="/manifest.json" />
    <title>Video List PWA</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---
# 📄 `src/main.jsx`
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js");
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

---
# 📄 `src/theme.js`
```jsx
export const themes = {
  dark: {
    bg: "bg-gray-900",
    text: "text-white",
    card: "bg-gray-800"
  },
  light: {
    bg: "bg-gray-100",
    text: "text-black",
    card: "bg-white"
  }
};
```

---
# 📄 `src/App.jsx`
```jsx
import React, { useState } from "react";
import { themes } from "./theme";
import VideoList from "./components/VideoList";
import VideoDetailMode from "./components/VideoDetailMode";
import Login from "./components/Login";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [page, setPage] = useState("list");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const active = themes[theme];

  return (
    <div className={`min-h-screen ${active.bg} ${active.text} p-4`}>
      <header className="flex justify-between mb-4">
        <button
          onClick={() => setPage("list")}
          className="px-3 py-1 rounded bg-gray-700"
        >List</button>
        <button
          onClick={() => setPage("detail")}
          className="px-3 py-1 rounded bg-gray-700"
        >Detail Mode</button>
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded bg-gray-700"
        >{theme === "dark" ? "Light" : "Dark"}</button>
      </header>

      {page === "list" && <VideoList theme={theme} />}
      {page === "detail" && <VideoDetailMode theme={theme} />}
    </div>
  );
}
```

---
# 📄 `src/components/VideoList.jsx`
```jsx
import React, { useState } from "react";

export default function VideoList() {
  const [videos, setVideos] = useState([]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Video List</h2>
      <p>Form input + list tampil di sini…</p>
    </div>
  );
}
```

---
# 📄 `src/components/VideoDetailMode.jsx`
```jsx
import React from "react";

export default function VideoDetailMode() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Detail Video Mode</h2>
      <p>UI full episode detail di sini…</p>
    </div>
  );
}
```

---
# 📄 `src/components/Login.jsx`
```jsx
export default function Login() {
  return <div>Login UI (untuk Supabase)</div>;
}
```

---
# 📄 `src/db/indexedDB.js`
```jsx
import Dexie from "dexie";

const db = new Dexie("videoDB");

db.version(1).stores({
  videos: "++id, title, episode, status, location, note, detailed, episodes"
});

export default db;
```

---
# 📄 `src/sw.js` (Service Worker)
```js
self.addEventListener("install", e => {
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  console.log("SW Activated");
});

self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request));
});
```

---
# 📄 `package.json`
```json
{
  "name": "video-list-pwa",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "dexie": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "vite": "latest"
  }
}
```

---
# 📄 `vite.config.js`
```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

---
# 📄 `public/robots.txt`
```
User-agent: *
Allow: /
```

---
# 🚀 Siap Deploy ke Vercel
1. Push semua file ini ke GitHub
2. Buka Vercel → Import Project → pilih repo
3. Framework: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist/`

---
Ingin saya lanjutkan ke:
✔ implementasi form input video?
✔ fitur detailed episode mode?
✔ sistem login Supabase + cloud sync?

Kamu tinggal pilih!