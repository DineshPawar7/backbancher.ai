import React from "react";
import "../styles/homepage.css";
import "../App.css";

const App = () => {
  return (
    <div className="homepage">
      {/* Heading */}
      <div className="center-content">
        <h1 className="heading">
          Grow Your Skills And<h1 className="heading-2">Advance Carrer</h1>
        </h1>
        <div className="discription-lines">
        <p className="description">
          Revolutionizing education through AI: Discover personalized,
          interactive,
          </p>
          <p className="description-2nd">
            and adaptive learning experiences designed to meet your unique goals
            and needs
          </p>
          </div>

        {/* Search Bar */}
        <div className="search-bar">
          <img
            src="https://via.placeholder.com/20" // Replace with your image icon
            alt="search"
            className="search-icon"
          />
          <input
            type="text"
            placeholder="Search courses here..."
            className="search-input"
          />
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>

        {/* Search Suggestions */}
        <div className="suggestions">
          <div className="suggestion-item">
            <i className="fa fa-book"></i> Best courses for me
          </div>
          <div className="suggestion-item">
            <i className="fa fa-fire"></i> Trending courses
          </div>
          <div className="suggestion-item">
            <i className="fa fa-star"></i> Free courses
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default App;
