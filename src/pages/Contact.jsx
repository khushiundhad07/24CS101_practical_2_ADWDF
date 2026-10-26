import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="page">
      <h1>Contact Me</h1>

      <label htmlFor="name">Your Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name..."
      />

      <p className="greeting">Hello, {name || "Guest"}</p>

      <label htmlFor="message">Your Message:</label>
      <textarea
        id="message"
        rows="5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
      />

      <p>
        <strong>Character Count:</strong> {message.length}
      </p>
    </div>
  );
}

export default Contact;
