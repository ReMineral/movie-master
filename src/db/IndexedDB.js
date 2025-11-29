```jsx
import Dexie from "dexie";

const db = new Dexie("videoDB");

db.version(1).stores({
  videos: "++id, title, episode, status, location, note, detailed, episodes"
});

export default db;
```
