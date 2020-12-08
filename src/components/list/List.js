import React from 'react';
import './styles.css'
import { useState } from 'react';

export default function List() {
  
  const [ list, setList] = useState([]);

  function addItem (e) {
    
  }

  return (
    <div className='listWrapper'>
      <header>
      <input type='text' placeholder='Create a new todo...'></input>
      </header>
      
    </div>
  )
}
