import React, { useState } from 'react';
import './styles.css'
import UseLocalStorage from './useLocalStorage';

const LightDarkMode = () => {

  const [theme, setItem] = UseLocalStorage('theme',"dark")
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleToggle =()=>{
    setIsTransitioning(true);
    setTimeout(() => {
      setItem(theme === 'light' ? 'dark' : 'light');
      setIsTransitioning(false);
    }, 700);
  }

  console.log(theme);
  

  return (
    <div className={`light_dark_mode ${isTransitioning ? (theme === 'light' ? 'transition-dark' : 'transition-light') : ''}`} data-theme={theme}>
      <div className="container">
        <p>hello World</p>
        <button onClick={()=>handleToggle()}>Change Theme</button>
      </div>
      
    </div>
  );
}

export default LightDarkMode;
