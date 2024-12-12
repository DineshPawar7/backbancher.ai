import React from "react";
import '../styles/SummaryCard.css';


const SummaryCard = () => {
  const data = {
    totalCourses: 120,
    enrolledStudents: 4500,
    allTimeCertified: 3200,
    trustedPartners: 50,
    successRate: "98%"
  };

  return (
    <div className="summary-card">
      <h2 className="card-heading">Summary</h2>
      <div className="summary-details">
        <div className="summary-item">
          <h3>Total Courses</h3>
          <p>{data.totalCourses}</p>
        </div>
        <div className="summary-item">
          <h3>Currently Enrolled Students</h3>
          <p>{data.enrolledStudents}</p>
        </div>
        <div className="summary-item">
          <h3>All-Time Certified</h3>
          <p>{data.allTimeCertified}</p>
        </div>
        <div className="summary-item">
          <h3>Total Trusted Partners</h3>
          <p>{data.trustedPartners}</p>
        </div>
        <div className="summary-item">
          <h3>Success Rate</h3>
          <p>{data.successRate}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
