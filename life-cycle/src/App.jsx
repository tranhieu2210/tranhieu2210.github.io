import React, { Component, useState } from 'react'

const FuncChild = (props) => {
  console.log("Constructor");
  const [time, setTime] = useState(new Date());

  // const timer 
}



class Child extends React.Component {
  constructor() {
    console.log("Child Constructor");
    super();
    this.state = {
      time : new Date(),
    };
  }

}




class App extends React.Component {
  // khoi tao cac gia tri ban dau
  constructor() {
    console.log("Constructor");
    super();

    this.state = {
      count : 1,
    }
  }

  handleClick = () => {
    this.setState({count :this.state.count + 1})
  }

  render () {
    console.log("render");
    return (
      <div>
        <h1>Life Cycle</h1>
        <p>Count : {this.state.count}</p>
        <button onClick={this.handleClick}>
          Click me !!
        </button>
      </div>
    );
  }

  componentDidMount() {
    console.log("Did Mount");
  }

  ComponentdidUpdate() {
    console.log("Did Update");
  }
}



export default App
