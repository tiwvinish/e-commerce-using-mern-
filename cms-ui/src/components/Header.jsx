import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Dashboard", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Orders", path: "/orders" },
  { name: "Customers", path: "/customers" },
  { name: "Reviews", path: "/reviews" },
  { name: "Staffs", path: "/staffs" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__brand">
          <Link to="/">MERN CMS</Link>
        </div>
        <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="header__nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <button
          className={`header__toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 