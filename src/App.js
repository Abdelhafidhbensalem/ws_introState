import React, { Component, useEffect, useState } from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';

//functional component
export function App() {
  const [show,setShow]=useState(false)
  const [timer1, setTimer1] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    console.log("app did mount")
    setInterval(() => {
      setTimer1(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
console.log("App unmount")    }
  }, [])
  
  return (
    <div className="App">
      <button onClick={()=>setShow(!show)}>{show?"hide":"show"}</button>
      <h1>App component</h1>
      {show&&<Counter x="youssef" />}
      <h3>timer1:{timer1}</h3>
    </div>
  );
}

//component based class
/*
class App extends Component {
  state = { show: false, timer1: new Date().toLocaleTimeString()}

  componentDidMount() {
    console.log("component app mounted")
    setInterval(() => {
      this.setState({timer1:new Date().toLocaleTimeString() });
    }, 1000);
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
export default App;*/