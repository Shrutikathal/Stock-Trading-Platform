import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    // Clean border bottom and pure white background
    <nav className="navbar navbar-expand-lg border-bottom bg-white py-3">
      <div className="container p-2">
        
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="Logo" style={{ width: "25%" }} />
        </Link>

        {/* Mobile View Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links Container - Pushed to the right using ms-auto */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Changed me-auto to ms-auto and added gap-4 for spacing */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/products">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;