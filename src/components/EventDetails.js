// src/components/EventDetails.js

import React from 'react';

const EventDetails = () => {
  return (
    <div className="text-center">
      <h3>Hosted By</h3>
      <img className="host-icon" src="soarX.jpeg" alt="SoarX Logo" />
      <h3>SoarX</h3>
      <h2>Event Details</h2>
      <p>
        Date: February 1, 2024<br />
        Time: 7:00 PM - 10:00 PM<br />
        Location: Virtual Event
      </p>
    </div>
  );
};

export default EventDetails;
