"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { navLinks, profile } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav surface">
      <a href="#top" className="brand" aria-label={`${profile.name}, back to top`}>
        <span className="brand-mark">SP</span>
        <span className="brand-name">{profile.name}</span>
      </a>
      <nav aria-label="Main" className={`nav-links ${open ? "open" : ""}`}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>
      <div className="nav-end">
        <ThemeToggle />
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>
      </div>
    </header>
  );
}
