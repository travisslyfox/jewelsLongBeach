import { useState } from "react";
import { Link } from "react-router-dom"
import "../public/css/mobile-navbar.css";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mobile-navbar hamburger-spotlight">
      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        id="mobile-menu"
        className={`mobile-menu ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
            <Link to="" onClick={() => setIsOpen(false)}>HOME </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link>
      </div>
    </nav>
  );
}


export default MobileNavbar;