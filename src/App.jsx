import React, { useState } from 'react';
import ClientForm from './components/ClientForm';
import ClientList from './components/ClientList';
import './styles/form.css';

export default function App() {
  const [clients, setClients] = useState([]);
  const [tab, setTab] = useState('form');

  const addClient = (client) => {
    setClients([...clients, client]);
  };

  return (
    <div className="container">
      <h1>Registro de Cliente</h1>
      <div className="tabs">
        <button onClick={() => setTab('form')} className={tab === 'form' ? 'active' : ''}>
          Registrar Clientes
        </button>
        <button onClick={() => setTab('list')} className={tab === 'list' ? 'active' : ''}>
          Ver clientes
        </button>
      </div>
      {tab === 'form' ? (
        <ClientForm onAddClient={addClient} />
      ) : (
        <ClientList clients={clients} />
      )}
    </div>
  );
}
