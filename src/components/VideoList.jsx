import React, { useState } from "react";

export default function VideoList() {
  const [videos, setVideos] = useState([]);
  const [form, setForm] = useState({
    title: "",
    episode: "",
    status: "Lengkap",
    location: "",
    note: ""
  });

  const addVideo = () => {
    if (!form.title.trim()) return;
    setVideos([...videos, { ...form, id: Date.now() }]);
    setForm({ title: "", episode: "", status: "Lengkap", location: "", note: "" });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Video List</h2>

      {/* Form Input */}
      <div className="bg-gray-800 p-4 rounded-lg mb-5 space-y-3">
        <input
          className="w-full p-2 rounded bg-gray-700"
          placeholder="Judul video..."
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <input
          className="w-full p-2 rounded bg-gray-700"
          placeholder="Episode (cth: 12)"
          value={form.episode}
          onChange={e => setForm({ ...form, episode: e.target.value })}
        />
        <select
          className="w-full p-2 rounded bg-gray-700"
          value={form.status}
          onChange={e => setForm({ ...form, status: e.target.value })}
        >
          <option value="Lengkap">Lengkap</option>
          <option value="Tidak Lengkap">Tidak Lengkap</option>
        </select>
        <input
          className="w-full p-2 rounded bg-gray-700"
          placeholder="Lokasi penyimpanan..."
          value={form.location}
          onChange={e => setForm({ ...form, location: e.target.value })}
        />
        <textarea
          className="w-full p-2 rounded bg-gray-700"
          placeholder="Catatan (opsional)"
          value={form.note}
          onChange={e => setForm({ ...form, note: e.target.value })}
        />
        <button
          onClick={addVideo}
          className="w-full p-2 mt-1 bg-blue-600 hover:bg-blue-700 rounded"
        >+ Tambahkan ke List</button>
      </div>

      {/* Display Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.length === 0 && <p className="opacity-70">Belum ada video. Tambahkan dari form di atas.</p>}

        {videos.map(v => (
          <div key={v.id} className="p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-lg font-bold mb-1">{v.title}</h3>
            <p className="text-sm opacity-80">Episode: {v.episode}</p>
            <p className="text-sm opacity-80">Status: {v.status}</p>
            <p className="text-sm opacity-80">Lokasi: {v.location}</p>
            {v.note && <p className="text-sm mt-2 p-2 bg-gray-700 rounded">📝 {v.note}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
