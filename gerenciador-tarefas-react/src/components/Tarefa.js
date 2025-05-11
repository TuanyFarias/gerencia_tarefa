import React from 'react';

function Tarefa({ tarefa, onConcluir }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
      <h3>{tarefa.descricao}</h3>
      <p>Prioridade: {tarefa.prioridade}</p>
      <p>Status: {tarefa.concluida ? 'Concluída' : 'Pendente'}</p>
      {!tarefa.concluida && (
        <button onClick={() => onConcluir(tarefa.descricao)}>Marcar como Concluída</button>
      )}
    </div>
  );
}

export default Tarefa;