import React, { Component } from 'react';
import { Context } from '../../context/themecontext';

class DemoC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Abhishek',
      lastName: 'Sachdeva',
      screenWidth: window.innerWidth,
    }
  }

  // lifecycle
  componentDidMount() {
    document.title = `${this.state.firstName} ${this.state.lastName}`;
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    document.title = `${this.state.firstName} ${this.state.lastName}`;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }


  // event handlers
  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value,
    })
  }

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value,
    })
  }

  handleResize = () => {
    this.setState({
      screenWidth: window.innerWidth
    })
  }

  render() {
    return (
      <div>
        <div>
          <label>First Name</label>
          <br />
          <input type='text' value={this.state.firstName} onChange={this.handleFirstNameChange} />
        </div>
        <div>
          <label>Last Name</label>
          <br />
          <input type='text' value={this.state.lastName} onChange={this.handleLastNameChange} />
        </div>

        <hr />
        <div>
          Screen Width: {this.state.screenWidth}
        </div>
        <hr />
        <Context.Consumer>
          {({ theme, toggleTheme }) => (<button style={{ width: '300px', height: '40px', color: '#fff', backgroundColor: theme === 'light' ? 'grey' : 'black' }} onClick={() => { toggleTheme() }}>{theme}</button>)}
        </Context.Consumer>
      </div>
    )
  }
}

export default DemoC;

