import React from 'react';
import './App.css';
import TodosContainer from './components/todos-container/todos-container.components.jsx';


function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Todo List</h1>
        <TodosContainer />
      </div>

    </div>
  );
}

export default App;
