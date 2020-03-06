import React, {Component} from 'react';
import axios from 'axios';
import { Route, Link, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Titles from '../src/titles/Titles'

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
        <Link to='/'>
        <h1>Wine Review</h1>
        </Link>
      <main>
      <Route path='/'
        component={Titles}
      />
      </main>
      </div>
    )
  }
}

export default App;
