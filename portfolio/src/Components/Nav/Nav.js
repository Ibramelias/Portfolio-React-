import React from "react";
import { Link } from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link 
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contacts"
              className={window.location.pathname === "/contacts" ? "nav-link active" : "nav-link"}
            >
              Contacts 
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;