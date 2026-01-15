import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    // Try to get user info from localStorage (set on login/signup)
    const userData = JSON.parse(localStorage.getItem("user")) || { name: "Student", email: "student@example.com" };
    setUser(userData);
  }, []);

  return (
    <>
      <div className="home-container" style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: "2.2rem", color: "#d90429", marginBottom: 10 }}>Welcome, {user.name || "Student"}!</h1>
        <p style={{ fontSize: "1.1rem", color: "#222", marginBottom: 10 }}>Email: {user.email}</p>
        <p style={{ fontSize: "1.2rem", color: "#222", marginBottom: 30 }}>
          Unlock your potential with our expert-led courses and innovative learning platform.
        </p>
        <div className="expertise-list">
          <div className="expertise-item">
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals with years of experience.</p>
          </div>
          <div className="expertise-item">
            <h3>Interactive Learning</h3>
            <p>Engage with hands-on projects and real-world applications.</p>
          </div>
          <div className="expertise-item">
            <h3>Flexible Schedule</h3>
            <p>Study at your own pace with 24/7 access to course materials.</p>
          </div>
          <div className="expertise-item">
            <h3>Certification</h3>
            <p>Earn recognized certificates upon course completion.</p>
          </div>
        </div>
        <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 20 }}>
          <div style={{ background: "#fff", borderRadius: 12, padding: 24, minWidth: 180, color: "#d90429", boxShadow: "0 2px 8px #d9042940", border: "1.5px solid #d90429" }}>
            <h2 style={{ margin: 0, fontSize: 32 }}>1200+</h2>
            <p style={{ margin: 0, fontSize: 16, color: "#222" }}>Students</p>
          </div>
          <div style={{ background: "#fff", borderRadius: 12, padding: 24, minWidth: 180, color: "#d90429", boxShadow: "0 2px 8px #d9042940", border: "1.5px solid #d90429" }}>
            <h2 style={{ margin: 0, fontSize: 32 }}>30+</h2>
            <p style={{ margin: 0, fontSize: 16, color: "#222" }}>Courses</p>
          </div>
          <div style={{ background: "#fff", borderRadius: 12, padding: 24, minWidth: 180, color: "#d90429", boxShadow: "0 2px 8px #d9042940", border: "1.5px solid #d90429" }}>
            <h2 style={{ margin: 0, fontSize: 32 }}>15</h2>
            <p style={{ margin: 0, fontSize: 16, color: "#222" }}>Expert Instructors</p>
          </div>
        </div>
        <button onClick={() => navigate("/courses")} style={{ marginTop: "30px", padding: "15px 30px", fontSize: "18px" }}>
          Explore Courses
        </button>
      </div>
      <div className="announcements-section">
        <h2>Announcements</h2>
        <ul className="announcement-list">
          <li>🎉 New batch for Full Stack Web Development starts Feb 2026!</li>
          <li>📝 Final exams for Data Science will be held on March 10, 2026.</li>
          <li>📢 Guest lecture on Cloud Security by AWS expert this month.</li>
        </ul>
      </div>
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <ul className="faq-list">
          <li><strong>How do I enroll in a course?</strong><br />Go to the Courses page and click "Enroll Now" on your desired course card.</li>
          <li><strong>Can I access course materials anytime?</strong><br />Yes, all materials are available 24/7 after enrollment.</li>
          <li><strong>How do I contact my instructor?</strong><br />You can message instructors via the Profile page or course dashboard.</li>
          <li><strong>Will I get a certificate?</strong><br />Yes, certificates are awarded after successful course completion.</li>
          <li><strong>How do I reset my password?</strong><br />Go to Profile &gt; Settings and click "Reset Password".</li>
        </ul>
      </div>
    </>
  );
}