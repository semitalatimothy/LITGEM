import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.scss";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/" onClick={closeNavbar}>
          <img src="/images/logo2.png" alt="Lit Gem Inc" className="logo me-2" />
        </NavLink>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link" onClick={closeNavbar}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" onClick={closeNavbar}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link" onClick={closeNavbar}>
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" onClick={closeNavbar}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
