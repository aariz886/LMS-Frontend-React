import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");
    setLoading(false);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Signup failed");

      // ✅ Store token safely
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // ✅ Show professional success message + spinner
      setSuccessMsg("Signup successful! Redirecting to home...");
      setLoading(true);

      // ✅ Auto redirect after 2.5 seconds
      setTimeout(() => {
        navigate("/home");
      }, 2500);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>

      {/* Error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Success message + spinner */}
      {loading && (
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <div className="spinner"></div>
          <p style={{ color: "green" }}>{successMsg}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={loading}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Signup"}
        </button>
        <br />
        <button
          type="button"
          onClick={() => navigate("/")}
          disabled={loading}
        >
          Already have an account? Login
        </button>
      </form>
    </div>
  );
}
