import "./index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {

  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefasConcluidas, setTarefasConcluidas] = useState([]);

  return (
    <main>
      <h1>Tarefas</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          setTarefas([...tarefas, novaTarefa]);
          setNovaTarefa("");
        }}
      >
        <input
          aria-label="Informe uma tarefa para adicionar"
          name="input"
          type="text"
          placeholder="O que você precisa fazer?"
          value={novaTarefa}
          onChange={(event) => setNovaTarefa(event.target.value)}
        />
      </form>
      <hr />
      <div>
        <label htmlFor="filter">Filtrar</label>
        <select id="filter">
          <option value="all">Todas</option>
          <option value="completed">Concluídas</option>
          <option value="uncompleted">Pendentes</option>
        </select>
      </div>
      <ul>
        {tarefas.map((item, index) => {
          const estaConcluida = tarefasConcluidas.includes(index);
          return (
            <li
              style={{ textDecoration: estaConcluida ? 'line-through' : null }}
              key={index}
              onClick={() => {
                if (estaConcluida) {
                  const novasTarefasConcluidas = tarefasConcluidas.filter(
                    (indexConcluida) => {
                      return indexConcluida !== index;
                    });
                  setTarefasConcluidas(novasTarefasConcluidas);
                } else {
                  setTarefasConcluidas([...tarefasConcluidas, index])
                }
              }}
            >{item}</li>
          );

        })}
      </ul>

      <button>Remover concluídas</button>
    </main >
  );
}

const rootElement = document.querySelector("#root");

ReactDOM.render(<App />, rootElement);