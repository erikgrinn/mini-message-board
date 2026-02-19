import { useState } from "react";
import "../App.css";

function New() {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload (optional?)
    // Send data to backend
    await fetch("http://localhost:8080/api/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    setInput(""); // Clear input after submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="message" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message" />
      <button type="submit">Send</button>
    </form>
  );
}

export default New;
