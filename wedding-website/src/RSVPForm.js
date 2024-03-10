// src/RSVPForm.js
import React, { useState } from "react";

function RSVPForm() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAttendanceChange = (e) => {
    setAttendance(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(`RSVP submitted - Name: ${name}, Attendance: ${attendance}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Name:
        <input type="text" value={name} onChange={handleNameChange} required />
      </label>
      <br />
      <label>
        Will you attend?
        <select value={attendance} onChange={handleAttendanceChange} required>
          <option value="">Select</option>
          <option value="yes">Yes, I will be there!</option>
          <option value="no">Sorry, I can't make it.</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit RSVP</button>
    </form>
  );
}

export default RSVPForm;
