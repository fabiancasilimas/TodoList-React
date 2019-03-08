import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*import Navigation from './components/navigation';*/
import {ToDo} from './ToDo.json';


class App extends Component {
  constructor() {
    super();
    this.state = {
      ToDo
    }
  }
  render() {
    const ToDo = this.state.ToDo.map((ToDo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{ToDo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
              {ToDo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{ToDo.description}</p>
              <p><mark>{ToDo.responnsible}</mark></p>
            </div>
          </div>
        </div>
      )
    }
  )
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">Tasks 
            <span className="badge badge-pill badge-light ml-2">  
              { this.state.ToDo.length }
            </span>
          </a>
        </nav>
        <header className="App-header">
        <div className="container">
          <div className="row mt-4">
            {ToDo}
          </div>
        </div>
        
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
      </div>
    );
  }
}

export default App;
