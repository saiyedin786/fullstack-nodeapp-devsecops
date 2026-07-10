import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching message:", err));
  }, []);

  return (
    <div className="App">
      <h1>Full-Stack React + Node App</h1>

      <p>
        Backend says: <strong>{message}</strong>
      </p>
    </div>
  );
}

export default App;