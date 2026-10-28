
import { useState } from "react";
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
        <a href="/" onClick={() => setIsOpen(false)}>Home</a>
        <a href="/about" onClick={() => setIsOpen(false)}>About</a>
        <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}


export default MobileNavbar;