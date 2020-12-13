/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import './styles.css';
import {
  FiArrowRight, FiX, FiCircle, FiCheckCircle, FiPlusCircle,
} from 'react-icons/fi';

import { v4 as uuidv4 } from 'uuid';

export default function List() {
  const [list, setList] = useState([]);

  const [item, setItem] = useState('');

  const [display, setDisplay] = useState('all');

  const [completed, setCompleted] = useState([]);
  const [active, setActive] = useState([]);

  const itemsLeft = list.length - completed.length;

  function addItem(e) {
    if (item === '') {
      e.preventDefault();
      alert('Please insert a To-do');
    } else {
      e.preventDefault();
      setList([...list, { item, completed: false }]);
      setItem('');
    }
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
      <div className="formWrapper">
        <form onSubmit={addItem}>
          <FiPlusCircle size={30} color="hsl(236, 33%, 92%)" />
          <input
            type="text"
            value={item}
            placeholder="Create a new todo..."
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          <button type="submit" label="arrowRight" className="submitBtn"><FiArrowRight size={26} color="hsl(236, 33%, 92%)" /></button>
        </form>
      </div>
      <div className="todoListContainer">

        {display === 'all' ? list.map((el, index) => (
          <div key={uuidv4()} className={el.completed ? 'todoItem completed' : 'todoItem'}>
            <div className="wrapper">
              {el.completed ? (
                <button type="button" className="complete" onClick={() => completeTodo(index)}>
                  <FiCheckCircle size={26} color="hsl(236, 33%, 92%)" />
                </button>
              ) : (
                <button type="button" className="uncomplete" onClick={() => completeTodo(index)}>
                  <FiCircle size={26} color="hsl(236, 33%, 92%)" />
                </button>
              )}
              {el.item}
            </div>
            <button type="button" className="deleteBtn" onClick={() => deleteItem(index)}>
              <FiX size={26} color="hsl(236, 33%, 92%)" />
            </button>
          </div>
        )) : display === 'active'
          ? active.map((el, index) => (
            <div key={uuidv4()} className={el.completed ? 'todoItem completed' : 'todoItem'}>
              <div className="wrapper">
                {el.completed ? (
                  <button type="button" className="complete" onClick={() => completeTodo(index)}>
                    <FiCheckCircle size={26} color="hsl(236, 33%, 92%)" />
                  </button>
                ) : (
                  <button type="button" className="uncomplete" onClick={() => completeTodo(index)}>
                    <FiCircle size={26} color="hsl(236, 33%, 92%)" />
                  </button>
                )}
                {el.item}
              </div>
              <button type="button" className="deleteBtn" onClick={() => deleteItem(index)}>
                <FiX size={26} color="hsl(236, 33%, 92%)" />
              </button>
            </div>
          ))
          : completed.map((el, index) => (
            <div key={uuidv4()} className={el.completed ? 'todoItem completed' : 'todoItem'}>
              <div className="wrapper">
                {el.completed ? (
                  <button type="button" className="complete" onClick={() => completeTodo(index)}>
                    <FiCheckCircle size={26} color="hsl(236, 33%, 92%)" />
                  </button>
                ) : (
                  <button type="button" className="uncomplete" onClick={() => completeTodo(index)}>
                    <FiCircle size={26} color="hsl(236, 33%, 92%)" />
                  </button>
                )}
                {el.item}
              </div>
              <button type="button" className="deleteBtn" onClick={() => deleteItem(index)}>
                <FiX size={26} color="hsl(236, 33%, 92%)" />
              </button>
            </div>
          ))}
      </div>
      <div className="footer">
        <div className="itemsLeftWrapper">
          <p>
            {itemsLeft}
            {' '}
            items left
          </p>
          <button type="button" onClick={clearCompleted}>Clear Completed</button>
        </div>
        <div className="filters">
          <button
            type="button"
            onClick={() => {
              showAll();
              setDisplay('all');
            }}
          >
            {display === 'all' ? <p className="filterActive">All</p> : <p>All</p>}
          </button>
          <button
            type="button"
            onClick={() => {
              setDisplay('active');
            }}
          >
            {display === 'active' ? <p className="filterActive">Active</p> : <p>Active</p>}
          </button>
          <button
            type="button"
            onClick={() => {
              setDisplay('completed');
            }}
          >
            {display === 'completed' ? <p className="filterActive">Completed</p> : <p>Completed</p>}
          </button>
        </div>
      </div>

    </div>
  );
}
