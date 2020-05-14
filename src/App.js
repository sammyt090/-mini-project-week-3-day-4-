import React, { Component } from 'react';
import Citizen from './components/Citizen'
import './App.css';
import data from './data';

class App extends Component{
  constructor(){
    super()

    this.state ={
      citizens: []
    }
  }


  componentDidMount(){
    this.setState({
      citizens: data
    })
  }
  render(){

    console.log(this.state)
    const citizens= this.state.citizens.map(e=> <div><Citizen citizens={e}/></div>)
  return (
    <div className="App">
     {citizens}
    </div>
  );
}
}
export default App;
