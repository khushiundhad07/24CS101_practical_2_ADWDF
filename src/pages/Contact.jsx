import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Me</h1>

      <label>Enter Your Message:</label>
      <br />
      <textarea
        rows="5"
        cols="50"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
      />

      <h3>Live Preview</h3>
      <p>{message || "Your message will appear here."}</p>

      <p>
        <strong>Character Count:</strong> {message.length}
      </p>

      <button onClick={() => setShowHelp(!showHelp)}>
        {showHelp ? "Hide Help" : "Show Help"}
      </button>

      {showHelp && (
        <p style={{ marginTop: "10px" }}>
          Type your message in the box above. The preview and character count
          update automatically.
        </p>
      )}
    </div>
  );
}

export default Contact;