import React, { useState } from 'react';

export default function ClientForm({ onAddClient }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Preencha os campos obrigatórios.');
      return;
    }
    onAddClient({ name, phone, note });
    setName('');
    setPhone('');
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome*</label>
      <input value={name} onChange={(e) => setName(e.target.value)} required />

      <label>Telefone*</label>
      <input value={phone} onChange={(e) => setPhone(e.target.value)} required />

      <label>Observações</label>
      <input value={note} onChange={(e) => setNote(e.target.value)} />

      <button type="submit" className="add-btn">Adicionar</button>
    </form>
  );
}
