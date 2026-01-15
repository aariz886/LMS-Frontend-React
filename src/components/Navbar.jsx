import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Student" };
  const initials = user.name ? user.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0,2) : "S";
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <aside className="sidebar">
      <div className="sidebar-logo" onClick={() => navigate("/home")}>
        LMS
      </div>
      <div className="sidebar-avatar" title={user.name}>
        <div className="avatar-circle">{initials}</div>
        <div className="avatar-name">{user.name}</div>
      </div>
      <ul className="sidebar-links">
        <li className={location.pathname === "/home" ? "active" : ""}>
          <Link to="/home">Home</Link>
        </li>
        <li className={location.pathname === "/dashboard" ? "active" : ""}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className={location.pathname === "/courses" ? "active" : ""}>
          <Link to="/courses">Courses</Link>
        </li>
        <li className={location.pathname === "/profile" ? "active" : ""}>
          <Link to="/profile">Profile</Link>
        </li>
        <li className={location.pathname === "/faq" ? "active" : ""}>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
      <button className="sidebar-logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </aside>
  );
}
