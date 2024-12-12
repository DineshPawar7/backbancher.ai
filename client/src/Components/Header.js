import React from "react";
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__left">
          <a href="#home" className="header__link">Home</a>
          <a href="#about" className="header__link">About</a>
          <a href="#blog" className="header__link">Blog</a>
          <a href="#features" className="header__link">Features</a>
        </div>

        <div className="header__center">
          <h1 className="header__logo">Backbencher.ai</h1>
        </div>

        <div className="header__right">
          <button className="header__icon">
            <i className="fas fa-search"></i>
          </button>
          <button className="header__icon">
            <i className="fas fa-shopping-cart"></i>
          </button>
          <button className="header__btn">Login</button>
          <button className="header__btn header__btn--signup">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
