import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
   render() {
      return (
         <div className="App">
            <h1>See Our Todos!</h1>
            <p>
               <Link to="/todos">See my todos</Link>
            </p>
            <p>
               <Link to="/todos/new">Add a todos</Link>
            </p>
            <Route path="/todos" component={TodoList} />
            <Route exact path="/" render={() => <Redirect to="/todos" />} />
         </div>
      );
   }
}

export default App;
