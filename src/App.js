import './App.css';
import React from 'react';
import Header from './components/header/Header';
import List from './components/list/List';

function App() {
  return (
    <div className="App">
      <div className="headerWrapper">
        <Header />
      </div>
      <div className="listWrapper">
        <List />
      </div>
    </div>

  );
}

export default App;
