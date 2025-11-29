import React from "react";

export default function VideoDetailMode() {
  const sample = {
    title: "Sample Video Title",
    status: "Lengkap",
    episodes: [
      { no: 1, title: "Episode 1: Pembukaan", note: "Good quality" },
      { no: 2, title: "Episode 2: Lanjutannya", note: "Subtitle kurang" }
    ]
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Detail Video Mode</h2>

      <div className="p-3 rounded bg-gray-800 mb-4">
        <p><b>Judul:</b> {sample.title}</p>
        <p><b>Status:</b> {sample.status}</p>
      </div>

      <h3 className="text-lg font-semibold mb-2">Episode List</h3>

      <div className="space-y-3">
        {sample.episodes.map(ep => (
          <div key={ep.no} className="p-3 rounded bg-gray-700">
            <p><b>Episode {ep.no}:</b> {ep.title}</p>
            {ep.note && <p className="text-sm mt-1 opacity-80">📝 {ep.note}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
