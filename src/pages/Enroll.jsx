import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Enroll() {
  const { state } = useLocation(); // Get course from navigation
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you could send to backend if needed
    // For now, just navigate to confirm
    navigate("/confirm", { state: { course: state.course, details } });
  };

  return (
    <div className="form-container">
      <h2>Enroll in {state?.course?.title || "Course"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={details.name}
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={details.email}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={details.phone}
          onChange={(e) => setDetails({ ...details, phone: e.target.value })}
          required
        />
        <textarea
          placeholder="Address"
          value={details.address}
          onChange={(e) => setDetails({ ...details, address: e.target.value })}
          required
        />
        <button type="submit">Submit Enrollment</button>
      </form>
    </div>
  );
}