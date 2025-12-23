"use client";
import { useState } from "react";

export default function FeedbackForm() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    });
    if (res.ok) {
      setStatus("Thank you for your feedback!");
      setMessage("");
      setEmail("");
    } else {
      setStatus("Failed to send feedback. Please try again later.");
    }
  };

  return (
    <div className="mt-10 border-t pt-8">
      <h3 className="text-xl font-semibold mb-2">Submit Feedback</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full border rounded p-2"
          rows={4}
          placeholder="Describe a bug, suggest a fix, or share your thoughts..."
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
        <input
          className="w-full border rounded p-2"
          type="email"
          placeholder="Your email (optional)"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit" className="btn-primary">Send Feedback</button>
        {status && <div className="text-sm mt-2">{status}</div>}
      </form>
    </div>
  );
}
