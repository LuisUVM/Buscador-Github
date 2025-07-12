import React, { useState, useEffect, useCallback } from "react";
import SearchInput from "./components/SearchInput";
import UserCard from "./components/UserCard";
import ThemeToggle from "./components/ThemeToggle";
import { debounce } from "./utils/debounce";

export default function App() {
  const [users, setUsers] = useState([]);
  const [theme, setTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const fetchUsers = useCallback(
    debounce(async (query) => {
      if (!query) {
        setUsers([]);
        setError(null);
        setLoading(false); 
        return;
      }

      setLoading(true); 
      try {
        const response = await fetch(
          `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=3`
        );
        if (!response.ok) {
          throw new Error("Error en la búsqueda");
        }
        const data = await response.json();
        const detailedUsers = await Promise.all(
          data.items.map(async (user) => {
            const resUser = await fetch(user.url);
            return await resUser.json();
          })
        );
        setUsers(detailedUsers);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUsers([]);
      } finally {
        setLoading(false); 
      }
    }, 500),
    []
  );

  function toggleTheme() {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }

  return (
    <div className="app-container">
      <header>
        <h1>Buscador de Usuarios GitHub</h1>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </header>
      <main>
        <SearchInput onSearch={fetchUsers} />
        {loading && <p className="loading-indicator">Buscando...</p>}
        {error && <p className="error">{error}</p>}
        <section className="users-list">
          {!loading && users.length === 0 && <p>No hay resultados</p>}
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </section>
      </main>
    </div>
  );
}
