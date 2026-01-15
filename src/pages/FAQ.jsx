import React from "react";

export default function FAQ() {
  return (
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
  );
}
