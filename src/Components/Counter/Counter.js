import React, { Component, useEffect, useState } from 'react';



const Counter = () => {
    const [counter, setCounter]=useState(0)
    const [timer2, setTimer2] = useState(0)
    const [text, setText] = useState("")
    
   const increment = () => {
        setCounter(counter + 1 )
    }

   const decrement= () => {
        return counter > 0 ? setCounter( counter - 1) : null
    }

  const reset = () => {
        setCounter( 0 )
    }
useEffect(() => {
    setInterval(() => {
        setTimer2(timer2=>timer2+1)
      }, 1000);

  return () => {
    console.log("counter will unmout")

  }
}, [])


    return (
        <div style={{ backgroundColor: 'gold', width: '400px', boxShadow: "10px 10px #edebe1", borderRadius: "5px", padding: "10px", margin: "10px auto" }}>
        <div >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={increment}>+</button>
                <p>{counter}</p>
                <button onClick={decrement} >-</button>
            </div>
            <button onClick={reset}>reset</button>
        </div>
        <input type="text" onChange={(e) => setText( e.target.value)} />
        {text && <h4>{text}</h4>}
        <h1>CounterAge:{timer2}</h1>
    </div>
    )
  }
  
  export default Counter


/*
class Counter extends Component {
    constructor(props) {
        super(props)
        console.log("constructor")
        this.decrement=this.decrement.bind(this)
    }
    state = { counter: 0, timer2: 0, text: "" }
    componentDidMount() {
        setInterval(() => {
            this.setState({timer2:this.state.timer2+1})
        }, 1000);
        console.log("component counter mounted")
    }

    componentWillUnmount() {
        console.log("counter unmounted")
    }

    increment = () => {
        //console.log(this);
        this.setState({ counter: this.state.counter + 1 })
    }

    decrement() {
        console.log(this);
        return this.state.counter > 0 ? this.setState({ counter: this.state.counter - 1 }) : null
    }

    reset = () => {
        this.setState({ counter: 0 })
    }
    render() {
        return (<div style={{ backgroundColor: 'gold', width: '400px', boxShadow: "10px 10px #edebe1", borderRadius: "5px", padding: "10px", margin: "10px auto" }}>
            <div >
                <div style={{ display: 'flex', justifyContent: 'center' }}><button onClick={this.increment}>+</button>
                    <p>{this.state.counter}</p>
                    <button onClick={this.decrement} >-</button>
                </div>
                <button onClick={this.reset}>reset</button>
            </div>
            <input type="text" onChange={(e) => this.setState({ text: e.target.value })} />
            {this.state.text && <h4>{this.state.text}</h4>}
            <h1>CounterAge:{this.state.timer2}</h1>
        </div>);
    }
}

export default Counter;
*/
