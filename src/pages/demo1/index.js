import React, { useState } from 'react';
import './App.css';
import DemoC from './DemoC';
import DemoF from './DemoF';
import { Context } from '../../context/themecontext';
import { Link } from 'react-router-dom';


function Demo1() {
  const [theme, settheme] = useState('light');

  function toggleTheme() {
    (theme === 'light') ? settheme('dark') : settheme('light');
  }

  return (
    <Context.Provider value={{
      theme,
      toggleTheme
    }}>
      <div className="App">
        <header>
          <h2>React Hooks Demo 1</h2>
        </header>
        <div style={{ display: 'flex' }}>
          <div style={{ fontSize: '24px', border: '1px solid black', padding: '15px', margin: '15px' }}><Link to='/home'>Home</Link></div>
          <div style={{ fontSize: '24px', border: '1px solid black', padding: '15px', margin: '15px' }}><Link to='/login'>Demo 2</Link></div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <h3>Class Implementation</h3>
            <DemoC />
          </div>
          <div style={{ flex: 1 }}>
            <h3>Function Implementation</h3>
            <DemoF />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default Demo1;
