import React from 'react';

export default function ClientList({ clients }) {
  if (clients.length === 0) {
    return <p>Nenhum cliente cadastrado.</p>;
  }

  return (
    <ul>
      {clients.map((client, index) => (
        <li key={index}>
          <strong>{client.name}</strong> <br /> Telefone {client.phone}
          {client.note && <p>Observações: {client.note}</p>}
        </li>
      ))}
    </ul>
  );
}
