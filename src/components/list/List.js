/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import './styles.css';

import { v4 as uuidv4 } from 'uuid';

export default function List() {
  const [list, setList] = useState([]);

  const [item, setItem] = useState(null);

  const [display, setDisplay] = useState('all');

  const [completed, setCompleted] = useState([]);
  const [active, setActive] = useState([]);

  const itemsLeft = list.length - completed.length;

  function addItem(e) {
    e.preventDefault();
    setList([...list, { item, completed: false }]);
  }

  function deleteItem(index) {
    const deleted = list.filter((_, ind) => ind !== index);
    setList(deleted);
  }

  function completeTodo(index) {
    const res = list.map((el, ind) => (ind === index ? { ...el, completed: !el.completed } : el));
    setList(res);
  }

  function showActive() {
    const res = list.filter(((el) => !el.completed));

    setActive(res);
  }

  function showCompleted() {
    const res = list.filter(((el) => el.completed));

    setCompleted(res);
  }

  function clearCompleted() {
    const res = list.filter((el) => !el.completed);

    setList(res);
  }

  function showAll() {
    setDisplay('all');
  }

  useEffect(() => {
    showActive();
    showCompleted();
  }, [list]);

  return (
    <div className="listWrapper">
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Create a new todo..."
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button type="submit">ICON</button>
      </form>
      <div className="todoListContainer">

        {display === 'all' ? list.map((el, index) => (
          <div key={uuidv4()} className={el.completed ? 'todoItem completed' : 'todoItem'}>
            <button type="button" className="complete" onClick={() => completeTodo(index)}>
              C
            </button>
            {el.item}
            <button type="button" onClick={() => deleteItem(index)}>
              Delete
            </button>
          </div>
        )) : display === 'active'
          ? active.map((el, index) => (
            <div key={uuidv4()} className={el.completed ? 'todoItem completed' : 'todoItem'}>
              <button type="button" className="complete" onClick={() => completeTodo(index)}>
                C
              </button>
              {el.item}
              <button type="button" onClick={() => deleteItem(index)}>
                Delete
              </button>
            </div>
          ))
          : completed.map((el, index) => (
            <div key={uuidv4()} className={el.completed ? 'todoItem completed' : 'todoItem'}>
              <button type="button" className="complete" onClick={() => completeTodo(index)}>
                C
              </button>
              {el.item}
              <button type="button" onClick={() => deleteItem(index)}>
                Delete
              </button>
            </div>
          ))}

      </div>
      <div className="footer">
        <p>
          {itemsLeft}
          {' '}
          Items left
        </p>
        <div className="filters">
          <button
            type="button"
            onClick={() => {
              showAll();
              setDisplay('all');
            }}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => {
              setDisplay('active');
            }}
          >
            Active
          </button>
          <button
            type="button"
            onClick={() => {
              setDisplay('completed');
            }}
          >
            Completed
          </button>
        </div>
        <button type="button" onClick={clearCompleted}>Clear Completed</button>
      </div>

    </div>
  );
}
