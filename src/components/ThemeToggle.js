import React from "react";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button onClick={toggleTheme} aria-label="Cambiar tema claro/oscuro">
      {theme === "light" ? "Modo Oscuro" : "Modo Claro"}
    </button>
  );
}
