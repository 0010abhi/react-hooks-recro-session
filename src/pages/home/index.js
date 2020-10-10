import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <div>
        <h2>React Hooks Demo 1</h2>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ fontSize: '24px', border: '1px solid black', padding: '15px', margin: '15px' }}><Link to='/demo1'>Demo 1</Link></div>
        <div style={{ fontSize: '24px', border: '1px solid black', padding: '15px', margin: '15px' }}><Link to='/login'>Demo 2</Link></div>
      </div>
    </div>
  )
}