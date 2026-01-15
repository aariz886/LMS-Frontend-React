import React from "react";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-widget">
        1200+
        <div className="dashboard-widget-title">Active Students</div>
      </div>
      <div className="dashboard-widget">
        30+
        <div className="dashboard-widget-title">Courses</div>
      </div>
      <div className="dashboard-widget">
        15
        <div className="dashboard-widget-title">Expert Instructors</div>
      </div>
      <div className="dashboard-widget">
        98%
        <div className="dashboard-widget-title">Satisfaction Rate</div>
      </div>
    </div>
  );
}
