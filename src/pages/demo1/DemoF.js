import React, { useContext, useEffect, useState, useReducer } from 'react';
import { Context } from '../../context/themecontext';


const initialState = {
  count: 0
}

function reducer(state, action) {
  switch (action.type) {
    case 'inc':
      return { ...state, count: action.payload }
    case 'dec':
      return { ...state, count: action.payload }
    default:
      alert('No action found');
  }
}

function useDocumentTitle (firstName, lastName) {
  useEffect(() => {
    document.title = `${firstName} ${lastName}`;
  })
}

function useScreenWidth() {
  const [screenWidth, setscreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setscreenWidth(window.innerWidth);
    }
    
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return screenWidth;
}

export default function DemoF() {
  const [firstName, setfirstName] = useState('Abhishek');
  const [lastName, setlastName] = useState('Abhishek');
  const screenWidth = useScreenWidth()
  const { theme, toggleTheme } = useContext(Context);

  const [reducerState, dispatch] = useReducer(reducer, initialState);

  useDocumentTitle(firstName,lastName);

  // componentDidMount, 
  

  function handleFirstNameChange(e) {
    setfirstName(e.target.value)
  }

  function handleLastNameChange(e) {
    setlastName(e.target.value)
  }



  return (
    <div>
      <div>
        <label>First Name</label>
        <br />
        <input type='text' value={firstName} onChange={handleFirstNameChange} />
      </div>
      <div>
        <label>Last Name</label>
        <br />
        <input type='text' value={lastName} onChange={handleLastNameChange} />
      </div>

      <hr />
      <div>
        Screen Width: {screenWidth}
      </div>
      <hr />
      <button style={{ width: '300px', height: '40px', color: '#fff', backgroundColor: theme === 'light' ? 'grey' : 'black' }} onClick={() => { toggleTheme() }}>{theme}</button>

      <div style={{ border: '1px solid red' }}>
        <button onClick={() => {
          dispatch({ type: 'dec', payload: reducerState.count - 1 })
        }}>-</button>
        {reducerState.count}
        <button onClick={() => {
          dispatch({ type: 'inc', payload: reducerState.count + 1 })
        }}>+</button>
      </div>
      {/* <Context.Consumer>
          {({ theme, toggleTheme }) => ()}
        </Context.Consumer> */}
    </div>
  )
}