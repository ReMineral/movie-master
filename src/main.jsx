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