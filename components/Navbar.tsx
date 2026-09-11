"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Batagor", href: "#batagor" },
  { label: "Kitchen", href: "#kitchen" },
  { label: "Catering", href: "#catering" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="brand">
          <span className="brand-wordmark">
            booyah<span>!</span>
            </span>
        </a>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://wa.me/628157031751"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-order"
          >
            Pesan Sekarang
            
          </a>
        </nav>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}