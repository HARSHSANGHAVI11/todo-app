import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, input]);
    setInput('');
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>🌟 ToDo Buddy</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, i) => (
          <li key={i} className="todo-card">
            <span>{todo}</span>
            <button onClick={() => removeTodo(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
