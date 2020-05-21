import React, { Component } from 'react';
import Todos from './components/Todos';
import AddForm from './components/AddForm';

class App extends Component {
  state = {
    todos: [
      
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.floor(Math.random() * 101);
    let todos = [...this.state.todos, todo];
    this.setState({
      todos:todos
    })
  }

  render(){
    return(
      <div className="App container">
        <div className="todos row d-flex justify-content-center px-4 py-4 mt-5">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
              <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
              <AddForm addTodo={this.addTodo} />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
