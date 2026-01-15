import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Enroll from "./pages/Enroll";
import Confirm from "./pages/Confirm";
import Profile from "./pages/Profile";
import FAQ from "./pages/FAQ";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function WithSidebar({ children }) {
  return (
    <>
      <Navbar />
      <div className="lms-header">
        <span className="lms-logo">LMS</span> Learning Management System
      </div>
      <div className="main-content">{children}</div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<WithSidebar><Home /></WithSidebar>} />
        <Route path="/courses" element={<WithSidebar><Courses /></WithSidebar>} />
        <Route path="/enroll" element={<WithSidebar><Enroll /></WithSidebar>} />
        <Route path="/confirm" element={<WithSidebar><Confirm /></WithSidebar>} />
        <Route path="/profile" element={<WithSidebar><Profile /></WithSidebar>} />
        <Route path="/faq" element={<WithSidebar><FAQ /></WithSidebar>} />
        <Route path="/dashboard" element={<WithSidebar><Dashboard /></WithSidebar>} />
      </Routes>
    </BrowserRouter>
  );
}
