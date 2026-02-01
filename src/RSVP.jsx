import { useState } from "react";

export function RSVP() {

  // ===== FORM STATE =====
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  // ===== SUBMIT HANDLER =====
  async function submitTest() {

    setStatus("Sending...");

    try {

      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: message // TODO: Replace with real RSVP fields later
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Success ✅ (Email sent)");
      } else {
        setStatus("Failed ❌");
      }

    } catch (error) {
      console.error("RSVP error:", error);
      setStatus("Network error ❌");
    }
  }

  // ===== UI =====
  return (
    <div style={{ padding: "40px" }}>

      <h3>RSVP Test</h3>

      <input
        type="text"
        placeholder="Test message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br />
      <br />

      <button onClick={submitTest}>
        Send RSVP
      </button>

      <p>{status}</p>

    </div>
  );
}
