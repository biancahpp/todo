import React from 'react';
import './styles.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function List() {
  
  const [ list, setList] = useState([]);

  const [ item, setItem ] = useState(null);

  const [ completed, setCompleted ] = useState([]);

  const [ active, setActive ] = useState([]);

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

    setActive([...active, res]);
    console.log(res)

  }

  function showCompleted () {

    const res = list.filter((el => el.completed));

    setCompleted([...completed, res]);
    console.log(res)

  }

  function clearCompleted () {

    const res = list.filter(el => !el.completed);

    setList(res)
  }

  function showAll () {

    
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
        {list ? 
        list.map((item, index) => 
        <div key={uuidv4()} className={item.completed ? 'todoItem completed' : 'todoItem'} >
          <button className='complete' onClick={ () => completeTodo(index)}>
            C
          </button>
          {item.item}
          <button onClick={() => deleteItem(index)}>
            Delete
          </button>
          </div>) : 
        <div> Loading </div>}
      </div>
      <div className='footer'>
        <p>items left</p>
        <div className='filters'>
        <button onClick ={showAll}>All</button>
        <button onClick={showActive}>Active</button>
        <button onClick={showCompleted}>Completed</button>
        </div>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
      
    </div>
  )
}
