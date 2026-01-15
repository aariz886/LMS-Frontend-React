import React, { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    // Get user info from localStorage (set on login/signup)
    const userData = JSON.parse(localStorage.getItem("user")) || { name: "Student", email: "student@example.com" };
    setUser(userData);
  }, []);

  return (
    <div className="form-container" style={{ maxWidth: 500, background: "#fff", color: "#222", border: "2px solid #d90429" }}>
      <h2 style={{ color: "#d90429" }}>User Profile</h2>
      <div style={{ textAlign: "left", margin: "0 auto", maxWidth: 350, fontSize: 18 }}>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> Student</p>
        <p><strong>Member Since:</strong> Jan 2026</p>
      </div>
    </div>
  );
}
