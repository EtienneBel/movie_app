import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <p className="netflix_title">NETFLIX</p>
        <div className="nav_right">
          <p className="mt-1 mr-4">UNLIMITED TV SHOWS & MOVIES</p>
          <div className="nav_buttons">
            <button className="nav_join_button">SEARCH</button>
            <button className="nav_sign_in_button">SIGN IN</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
