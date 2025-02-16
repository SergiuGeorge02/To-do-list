'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Support() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // For success or error messages
  const router = useRouter();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !message) {
      setStatus("Please fill out both fields.");
      return;
    }

    // Example of submitting data (this can be changed to your preferred service)
    try {
      // Simulate form submission (You can replace this with your email sending logic or API call)
      console.log("Submitting form with", { email, message });

      // If submission is successful
      setStatus("Your message has been submitted. We'll get back to you soon.");
      setEmail("");
      setMessage(""); // Clear the form
    } catch (error) {
      setStatus("There was an error submitting the form. Please try again later.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "linear-gradient(to right,rgb(129, 10, 255), #2575fc)",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 20px",
          background: "linear-gradient(to right,rgb(255, 255, 255),rgb(170, 183, 205))",
          color: "#fff",
          borderBottom: "2px solid #333",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
        </h1>
        <div style={{ display: "flex", gap: "15px" }}>
          <button
            onClick={() => router.push("/")}  // Redirect to the To-Do List page
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            To-Do List
          </button>
          <button
            onClick={() => router.push("/login")} // Redirect to login page (logout)
            style={{
              padding: "10px 20px",
              backgroundColor: "#ff4d4d",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
              color: "black",
            }}
          >
            Support
          </h2>

          {/* Display status message */}
          {status && (
            <div
              style={{
                padding: "10px",
                backgroundColor: status.includes("success") ? "#28a745" : "#dc3545",
                color: "#fff",
                borderRadius: "6px",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              {status}
            </div>
          )}

          {/* Form for support */}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  fontSize: "16px",
                  color: "#333",
                }}
                required
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  fontSize: "16px",
                  color: "#333",
                  minHeight: "150px",
                }}
                required
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px 20px",
                backgroundColor: "#00CC33",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
