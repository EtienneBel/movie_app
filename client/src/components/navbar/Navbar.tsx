import React, { useState } from "react";
import Logo from "../logo/Logo";

function Navbar({ onSearch }) {
  const [isSearching, setIsSearching] = useState(true);

  function handleClick() {
    setIsSearching(!isSearching);
    onSearch(isSearching);
  }

  return (
    <>
      <nav className="navbar">
        <Logo />
        <div className="nav_right">
          <p className="mt-2 mr-4 text_unlimited_tv">
            UNLIMITED TV SHOWS & MOVIES
          </p>
          <div className="nav_buttons">
            <button className="nav_join_button" onClick={handleClick}>
              Join Now
            </button>
            <button className="nav_sign_in_button">Sign In</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
