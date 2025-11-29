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
