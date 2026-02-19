import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function New() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload (optional?)
    // Send data to backend
    await fetch("http://localhost:8080/api/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: { messageText: input, messageUser: user } }),
    });
    setInput(""); // Clear input after submit
    setUser("");

    navigate("/");
  };

  return (
    // probably method and action would also work without onSubmit
    // but this way is more common for better control
    // and also can do e.preventDefault()
    <form onSubmit={handleSubmit}>
      <input
        name="messageText"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message"
      />
      <br></br>
      <input name="messageUser" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Type your name" />
      <br></br>
      <button type="submit">Send</button>
    </form>
  );
}

export default New;
