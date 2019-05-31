import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends  Component{

  constructor() {
    
    super();
    this.state = {
      newTodo:'',
      
      todos: [{
        id: 1,
        name: 'Play golf'
      },{
        id: 2,
        name: 'Buy some clothes'
      },{
        id:3,
        name: 'Write some code'
      }]
    }

    //this.addTodo = this.addTodo.bind(this);
    //this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      
      newTodo: event.target.value

    });
  }

  addTodo = () => {
    const newTodo = {
      name: this.state.newTodo,
      id: this.state.todos[this.state.todos.length - 1].id + 1 
    };

    const oldTodos = this.state.todos;
    oldTodos.push(newTodo);

    this.setState ({
        todos: oldTodos,
        newTodo: ''
    });
    // the state is INMUTABLE
  }

  render() {

    console.log(this.state.newTodo);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            CRUD
          </p>
        </header>
        <div className="container">
          
          <h2 className="text-center p-4">Todos App</h2>

          <input
            type="text"
            className="my-4 form-control"
            placeholder="Add new todo"
            onChange={this.handleChange}
            value={this.state.newTodo}/>

          <button
            onClick={this.addTodo} 
            className="btn-info mb-3 form-control">
            Add Todo
          </button>


          <ul className="list-group">
            {this.state.todos.map((item, index) =>{
              return <li key={item.id} className="list-group-item">{item.name}</li>
            })}
          </ul>
        </div>
      </div>
    );
  }
  
}

export default App;
