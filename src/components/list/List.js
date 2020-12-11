import React from 'react';
import './styles.css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function List() {
  
  const [ list, setList] = useState([]);

  const [ item, setItem ] = useState(null);

  const [ display, setDisplay ] = useState('all');

  const [ completed, setCompleted ] = useState([]);
  const [ active, setActive ] = useState([]);

  let itemsLeft = list.length - completed.length;

  useEffect(() => {
    showActive();
    showCompleted();
  }, [list])

  function addItem (e) {
    e.preventDefault()
    setList([...list, {item: item, completed: false}])
  }

  function deleteItem (index) {
    const deleted = list.filter((_, ind) => {
      return ind !== index
    });
    setList(deleted);
  }

  function completeTodo(index) {
    
    const res = list.map((el, ind) => {

      return ind === index ? { ...el, completed: !el.completed }: el;
    }
    )
    setList(res)
    console.log(res)
  }

  function showActive () {

    const res = list.filter((el => !el.completed));

    setActive(res);
    console.log(res)

  }

  function showCompleted () {

    const res = list.filter((el => el.completed));

    setCompleted(res);
    console.log(res)

  }

  function clearCompleted () {

    const res = list.filter(el => !el.completed);

    setList(res)
  }

  function showAll () {

    setDisplay('all')

  }

  return (
    <div className='listWrapper'>
      <form onSubmit={addItem}>
        <input type='text' placeholder='Create a new todo...' onChange={(e) => {
         setItem(e.target.value); }} >
         </input>
         <button type='submit'>ICON</button>
      </form>
      <div className='todoListContainer'>

        {display === 'all' ? list.map((item, index) => 
        <div key={uuidv4()} className={item.completed ? 'todoItem completed' : 'todoItem'} >
          <button className='complete' onClick={ () => completeTodo(index)}>
            C
          </button>
          {item.item}
          <button onClick={() => deleteItem(index)}>
            Delete
          </button>
          </div>) : display === 'active' 
          ? 
          active.map((item, index) => 
        <div key={uuidv4()} className={item.completed ? 'todoItem completed' : 'todoItem'} >
          <button className='complete' onClick={ () => completeTodo(index)}>
            C
          </button>
          {item.item}
          <button onClick={() => deleteItem(index)}>
            Delete
          </button>
          </div>)
          :
          completed.map((item, index) => 
        <div key={uuidv4()} className={item.completed ? 'todoItem completed' : 'todoItem'} >
          <button className='complete' onClick={ () => completeTodo(index)}>
            C
          </button>
          {item.item}
          <button onClick={() => deleteItem(index)}>
            Delete
          </button>
          </div>)
          }

      </div>
      <div className='footer'>
        <p>{itemsLeft} Items left</p>
        <div className='filters'>
        <button onClick ={() => {
          showAll();
          setDisplay('all')
        }}>All</button>
        <button onClick={() => {
          
          setDisplay('active');
        }}>Active</button>
        <button onClick={() => {
          
          setDisplay('completed');
        }}>Completed</button>
        </div>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
      
    </div>
  )
}
