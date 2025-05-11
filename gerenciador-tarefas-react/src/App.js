import React, { useState } from 'react';
import './App.css';
import ListaTarefas from './components/ListaTarefa';
import AdicionarTarefa from './components/AdicionarTarefa';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (novaTarefa) => {
    setTarefas([...tarefas, novaTarefa]);
  };

  const marcarConcluida = (descricao) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.descricao === descricao ? { ...tarefa, concluida: true } : tarefa
      )
    );
  };

  return (
    <div style={{ fontFamily: 'Noto sans, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px'}}>
      <h1>Gerenciador de Tarefas</h1>
      <AdicionarTarefa onAdicionar={adicionarTarefa} />
      <ListaTarefas tarefas={tarefas} onConcluir={marcarConcluida} />
    </div>
  );
}

export default App;