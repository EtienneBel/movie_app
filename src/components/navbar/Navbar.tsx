import React, { useState } from "react";

function Navbar({ onSearch }) {
  const [isSearching, setIsSearching] = useState(true);

  function handleClick() {
    setIsSearching(!isSearching);
    onSearch(isSearching);
  }

  return (
    <>
      <nav className="navbar">
        <a href="/" className="netflix_title">
          NETFLIX
        </a>
        <div className="nav_right">
          <p className="mt-1 mr-4">UNLIMITED TV SHOWS & MOVIES</p>
          <div className="nav_buttons">
            <button className="nav_join_button" onClick={handleClick}>
              SEARCH
            </button>
            <button className="nav_sign_in_button">SIGN IN</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
