import React from "react";

function NavBar() {
  return (
    // Clean border bottom and pure white background
    <nav className="navbar navbar-expand-lg border-bottom bg-white py-3">
      <div className="container p-2">
        
        {/* Brand Logo */}
        <a className="navbar-brand" href="#">
          <img src="media/images/logo.svg" alt="Logo" style={{ width: "25%" }} />
        </a>

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
              <a className="nav-link text-muted" href="#">Signup</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">Support</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;