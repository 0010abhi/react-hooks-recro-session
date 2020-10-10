import React from 'react';
import '../App.css';

function HomeLayout(props) {
  return (
    <div className="App background-image">
      {props.children}
    </div>
  );
}

export default HomeLayout;
