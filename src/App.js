import React, {Component} from 'react';
import axios from 'axios';
import { Route, Link, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

// const ax = axios.create ({
//   BaseURL: 'http://localhost:5000/'
//   });
//   ax.get('/db/WineReview.json');

// function App() {

//   const ax = axios.create ({
//     BaseURL: 'http://localhost:5000/'
//     });
//     ax.get('/');

//   return (
//     <h1>
//       Wine API
//     </h1>
// )}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Wine Review</h1>
      </div>
      
    )
  }
}

export default App;
