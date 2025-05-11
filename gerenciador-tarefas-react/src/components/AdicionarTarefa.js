import React, { useState } from 'react';

function AdicionarTarefa({ onAdicionar }) {
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState('baixa');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (descricao.trim()) {
      onAdicionar({ descricao, prioridade, concluida: false });
      setDescricao('');
      setPrioridade('baixa');
    }
  };

  return (
    <div>
      <h2>Adicionar Nova Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ textAlign: 'center' }}>
          <label htmlFor="descricao">Descrição:</label>
          <input
            type="text"
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <label htmlFor="prioridade">Prioridade:</label>
          <select
            id="prioridade"
            value={prioridade}
            onChange={(e) => setPrioridade(e.target.value)}
          >
            <option value="baixa">Baixa</option>
            <option value="media">Média</option>
            <option value="alta">Alta</option>
          </select>
        </div>
        <button type="submit">Adicionar Tarefa</button>
      </form>
    </div>
  );
}

export default AdicionarTarefa;