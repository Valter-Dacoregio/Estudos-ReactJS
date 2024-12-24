import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState('');

  // EQUIVALENTE AO componentDidMount()
  useEffect(()=>{
    console.log(2);
    const tarefasStorage = localStorage.getItem('tarefas');
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }

    // EXECUTADO AO SAIR DESTE COMPONENTE
    // return () => {};

  }, []);

  // EQUIVALENTE AO componentDidUpdate()
  useEffect(()=> {
    console.log(1);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  },[tarefas]);


  const handleAdd = useCallback(()=>{
    console.log(input);
    setTarefas([...tarefas, input]);
    setInput('');
  },[input, tarefas]);

  // function getTotalTarefas(){
  //   console.log(3);
  //   return tarefas.length;
  // }

  const totalTarefas = useMemo(()=> tarefas.length, [tarefas]);

  return (
    <div>
      <ul>
        {tarefas.map(tarefa =>
          <li key={tarefa}>{tarefa}</li>
        )}
      </ul>
      <br/>
      <strong>Você tem {totalTarefas} tarefas! </strong>
      <br/>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
