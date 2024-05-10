import React, { useState } from 'react';
import styles from './Todolist.module.css';

export function TodoList() {
  const [todos, setTodos] = useState([
    'Play videogame',
    'Watch a movie',
    'Read a book'
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleResetTodos = () => {
    setTodos([]);
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className={styles.container}>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Add a new todo" />
      <button className={styles.button} onClick={handleAddTodo}>Add Todo</button>
      <button className={styles.button} onClick={handleResetTodos}>Reset</button>
      <ul className={styles.list}>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
