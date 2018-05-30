import React, { Component } from 'react';
import routes from './routes.js'
import { HashRouter } from 'react-router-dom';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className='App'>
        <HashRouter>
          {routes}
        </HashRouter>
      </div>
    )
  }
}