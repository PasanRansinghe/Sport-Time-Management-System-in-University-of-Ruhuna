import React from "react";
import "./HeaderContent.css";
import logo from "../../assets/University_of_Ruhuna_logo.png";
import MenuLink from "../MenuLink/MenuLink";

function HeaderContent({ user, setUser }) {
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div id="navcontent">
      <div className="logo-container">
        <a href="https://www.eng.ruh.ac.lk/" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="University of Ruhuna Logo" />
        </a>
        <span className="logo-text">University of Ruhuna Faculty of Engineering</span>
      </div>
      
      <div className="menu-links">
        <MenuLink linkname="Home" url="/" />
        <MenuLink linkname="About" url="/about" />
        <MenuLink linkname="Contact" url="/contact" />
        <MenuLink linkname="Resources" url="/resources" />
      </div>

      <div className="right-links">
        {user ? (
          <>
            <span className="welcome-text">Welcome {user.username}!</span>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <MenuLink linkname="Login" url="/login" />
            <MenuLink linkname="SignUp" url="/signup" />
          </>
        )}
      </div>
    </div>
  );
}

export default HeaderContent;
