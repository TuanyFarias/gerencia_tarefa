import React from 'react';
import Tarefa from './Tarefa';

function ListaTarefas({ tarefas, onConcluir }) {
  return (
    <div>
      <h2>Lista de Tarefas</h2>
      {tarefas.length === 0 ? (
        <p>Nenhuma tarefa adicionada ainda.</p>
      ) : (
        tarefas.map((tarefa, index) => (
          <Tarefa key={index} tarefa={tarefa} onConcluir={onConcluir} />
        ))
      )}
    </div>
  );
}

export default ListaTarefas;