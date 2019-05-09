import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item nav-link">
            <Link to="/" style={{ color: "#eeeeee" }}>
              Bookshelf
            </Link>
          </li>
          <li className="nav-item nav-link">
            <Link to="/search" style={{ color: "#eeeeee" }}>
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
