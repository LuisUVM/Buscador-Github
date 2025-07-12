import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="user-card" tabIndex="0">
      <img src={user.avatar_url} alt={`${user.login} avatar`} />
      <div className="user-info">
        <h3>{user.name || user.login}</h3>
        <p><strong>Usuario:</strong> {user.login}</p>
        <p><strong>Empresa:</strong> {user.company || "No especificada"}</p>
        <p><strong>Repositorios:</strong> {user.public_repos}</p>
        <a href={user.html_url} target="_blank" rel="noreferrer">Ver Perfil</a>
      </div>
    </div>
  );
}
