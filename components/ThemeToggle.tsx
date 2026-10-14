"use client";
import { useEffect, useState } from "react";

type Theme = "glass" | "clay";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("glass");

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") === "clay" ? "clay" : "glass");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "glass" ? "clay" : "glass";
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable: theme still changes for this visit */
    }
    if (!reduce) {
      // Short-lived class that enables colour/shadow transitions only while switching.
      root.classList.add("theme-anim");
      window.setTimeout(() => root.classList.remove("theme-anim"), 450);
    }
    root.setAttribute("data-theme", next);
    setTheme(next);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={theme === "clay"}
      aria-label="Claymorphism theme (off: Glassmorphism)"
      className="toggle"
      onClick={toggle}
    >
      <span className="toggle-thumb" aria-hidden="true" />
      <span className="toggle-opt">Glass</span>
      <span className="toggle-opt">Clay</span>
    </button>
  );
}
