import React, { useState } from "react";

export default function SearchInput({ onSearch }) {
  const [input, setInput] = useState("");

  function handleChange(e) {
    const value = e.target.value.trim();
    setInput(e.target.value);
    onSearch(value);
  }

  return (
    <input
      type="text"
      placeholder="Buscar usuario GitHub..."
      value={input}
      onChange={handleChange}
      aria-label="Buscar usuario GitHub"
    />
  );
}
