"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored === "light" || stored === "dark") {
      applyTheme(stored);
      setTheme(stored);
      return;
    }
    const prefersLight =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    const initial: "light" | "dark" = prefersLight ? "light" : "dark";
    applyTheme(initial);
    setTheme(initial);
  }, []);

  function applyTheme(next: "light" | "dark") {
    const root = document.documentElement;
    root.classList.remove("theme-light", "theme-dark");
    root.classList.add(next === "light" ? "theme-light" : "theme-dark");
    localStorage.setItem("theme", next);
  }

  function toggle() {
    const next: "light" | "dark" = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
  }

  const label = theme === "light" ? "Oscuro" : "Claro";

  return (
    <button
      type="button"
      aria-label="Cambiar tema"
      onClick={toggle}
      className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 text-white shadow-soft"
      title={`Cambiar a tema ${label}`}
    >
      {theme === "light" ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 2v2m0 16v2M4 12H2m20 0h-2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}
