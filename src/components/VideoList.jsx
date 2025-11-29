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