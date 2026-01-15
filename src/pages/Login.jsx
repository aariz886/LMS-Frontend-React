import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
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
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Login failed");

      // ✅ SAME TOKEN LOGIC (UNCHANGED)
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // ✅ NEW: success sign + auto redirect
      setSuccessMsg("Login successful! Redirecting...");
      setLoading(true);

      setTimeout(() => {
        navigate("/home");
      }, 2500); // 2.5 seconds delay

    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>

      {/* Error message (UNCHANGED) */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* ✅ Success sign + loader */}
      {loading && (
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <div className="spinner"></div>
          <p style={{ color: "green" }}>{successMsg}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
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
          {loading ? "Please wait..." : "Login"}
        </button>

        <br />

        <button
          type="button"
          onClick={() => navigate("/signup")}
          disabled={loading}
        >
          Don't have an account? Signup
        </button>
      </form>
    </div>
  );
}
