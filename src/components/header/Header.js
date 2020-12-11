import React from 'react';
import './styles.css';
import lightIcon from '../../images/icon-sun.svg';

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="title">
        <p>TODO</p>
        {' '}
        <button type="button"><img src={lightIcon} alt="Sun Icon" /></button>
      </div>
    </div>
  );
}
