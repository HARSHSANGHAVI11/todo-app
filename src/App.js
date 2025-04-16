import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput('');
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    if (editIndex === index) {
      setEditIndex(null);
      setEditText('');
    }
  };

  const toggleCompletion = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(todos[index].text);
  };

  const saveEdit = () => {
    if (editText.trim() === '') return;
    const updatedTodos = todos.map((todo, i) =>
      i === editIndex ? { ...todo, text: editText } : todo
    );
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditText('');
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
          <li
            key={i}
            className={`todo-card ${todo.completed ? 'completed' : ''}`}
          >
            {editIndex === i ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input"
                />
                <button onClick={saveEdit}>💾</button>
              </>
            ) : (
              <>
                <span onClick={() => toggleCompletion(i)}>{todo.text}</span>
                <div className="action-buttons">
                  <button onClick={() => startEdit(i)}>✏️</button>
                  <button onClick={() => removeTodo(i)}>❌</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
