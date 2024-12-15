import React from "react";
import "../styles/Courses.css"; // External CSS file for styling
import { FaRobot, FaChartLine, FaSitemap, FaCheckCircle, FaLaptopCode } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { PiStudentBold } from "react-icons/pi";
import { PiCertificateLight } from "react-icons/pi";






const FeaturedCourses = () => {
    // Array of course objects with icons and text
    const courses = [
        { icon: <FaCheckCircle />, text: "80% Free" },
        { icon: <PiStudentBold />, text: "Career Suggestions" },
        { icon: <FaRobot />, text: "AI Assistant" },
        { icon: <FaChartLine />, text: "Progress Tracking" },
        { icon: <CgWorkAlt />, text: "Job Board" },
        { icon: <FaSitemap />, text: "Roadmap" },
        { icon: <PiCertificateLight />, text: "Free Certification" },
        { icon: <FaLaptopCode/>, text: "Dedicated to Developers" }
    ];

    return (
        <div className="featured-courses">
            <h2>Features</h2>
            <div className="course-cards">
                {courses.map((course, index) => (
                    <div key={index} className="card">
                        <span className="icon">{course.icon}</span>
                        <p>{course.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    
};

export default FeaturedCourses;
