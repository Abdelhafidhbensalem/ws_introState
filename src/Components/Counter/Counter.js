import React, { Component } from 'react';

class Counter extends Component {

    state = { counter: 0, timer2: 0, text: "" }
    componentDidMount() {
        console.log("component counter mounted")
    }

    componentWillUnmount() {
        console.log("counter unmounted")
    }

    increment = () => {
        //console.log(this);
        this.setState({ counter: this.state.counter + 1 })
    }

    decrement = () => {
        //console.log(this);
        return this.state.counter > 0 ? this.setState({ counter: this.state.counter - 1 }) : null
    }

    reset = () => {
        this.setState({ counter: 0 })
    }
    render() {
        return (<div style={{backgroundColor:'gold',width:'400px',boxShadow:"10px 10px #edebe1",borderRadius:"5px",padding:"10px",margin:"10px auto"}}>
            <div >
            <div style={{display: 'flex',justifyContent: 'center'}}><button onClick={this.increment}>+</button>
                <p>{this.state.counter}</p>
                <button onClick={this.decrement} >-</button>
            </div>
            <button onClick={this.reset}>reset</button>
            </div>
            <input type="text" onChange={(e)=>this.setState({text:e.target.value})} />
            {this.state.text&&<h4>{this.state.text}</h4>}
            </div>);
    }
}

export default Counter;