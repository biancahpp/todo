import { useState, React } from 'react';
import './styles.css';
import lightIcon from '../../images/icon-sun.svg';
import darkIcon from '../../images/icon-moon.svg';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [icon, setIcon] = useState(darkIcon);

  function changeMode() {
    if (!isDarkMode) {
      document.documentElement.style.setProperty('--background-img', 'var(--bg-img-dark)');
      document.documentElement.style.setProperty('--background-color', 'var(--bg-color-dark)');
      document.documentElement.style.setProperty('--font', 'var(--font-dark)');
      document.documentElement.style.setProperty('--list-bg', 'var(--list-bg-color-dark)');
      document.documentElement.style.setProperty('--box-shadow', 'var(--box-shadow-dark)');
      setIsDarkMode(true);
      setIcon(lightIcon);
    } else {
      document.documentElement.style.setProperty('--background-img', 'var(--bg-img-light)');
      document.documentElement.style.setProperty('--background-color', 'var(--bg-color-light)');
      document.documentElement.style.setProperty('--font', 'var(--font-light)');
      document.documentElement.style.setProperty('--list-bg', 'var(--list-bg-color-light)');
      document.documentElement.style.setProperty('--box-shadow', 'var(--box-shadow-light)');
      setIsDarkMode(false);
      setIcon(darkIcon);
    }
  }
  return (
    <div className="headerContainer">
      <div className="title">
        <p>TODO</p>
        {' '}
        <button type="button" onClick={changeMode}><img src={icon} alt="Sun and Moon Icon" /></button>
      </div>
    </div>
  );
}
