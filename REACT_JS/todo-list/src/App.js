import React, { Component } from 'react';
import TodoList from './components/TodoList';

// function App() {
//   return (
//     <div>
//       <h1>Lista de Tarefas</h1>
//       <TodoList />
//     </div>
//   );
// }

class App extends Component {
  render(){
    return (
      <div>
        <h1>Lista de Tarefas</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
