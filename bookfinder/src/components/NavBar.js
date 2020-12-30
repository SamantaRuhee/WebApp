import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-light" style={{backgroundColor: `#63D1F4`}}>
      <div class="nav-wrapper">
      <Link to="#" class="brand-logo right">Your Books</Link>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><Link to="sass.html">Popular Books</Link></li>
        <li><Link to="badges.html">Writers</Link></li>
        <li><Link to="collapsible.html">Profile</Link></li>
      </ul>
    </div>
      </nav>
    </div>
  );
};

export default NavBar;