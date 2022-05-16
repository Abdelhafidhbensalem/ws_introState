import React, { Component } from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';

//functional component
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
//component based class

class App extends Component {
  state = { show: false, timer1: 0 }

  componentDidMount() {
    console.log("component app mounted")
  }
  componentWillUnmount() {
    console.log("app unmounted")
  }
  render() {
    return (<div className="App">
      <button onClick={() => this.setState({ show: !this.state.show })}>{this.state.show ? "hide" : "show"}</button>
      <h1>App component</h1>
      {this.state.show && <Counter x="youssef" />}
      <h3>timer1:{this.state.timer1}</h3>
    </div>);
  }

}
export default App;