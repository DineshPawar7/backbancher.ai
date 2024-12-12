import React from "react";
import "../styles/Courses.css"; // External CSS file for styling
import { FaRobot, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaDatabase, FaLaptopCode } from "react-icons/fa";

const FeaturedCourses = () => {
    // Array of course objects with icons and text
    const courses = [
        { icon: <FaRobot />, text: "AI and Robotics" },
        { icon: <FaNodeJs />, text: "Node.js Development" },
        { icon: <FaHtml5 />, text: "HTML5 Basics" },
        { icon: <FaCss3Alt />, text: "CSS3 Styling" },
        { icon: <FaJsSquare />, text: "JavaScript Fundamentals" },
        { icon: <FaPython />, text: "Python Programming" },
        { icon: <FaDatabase />, text: "Database Management" },
        { icon: <FaLaptopCode />, text: "Full-Stack Development" }
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
