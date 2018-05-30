import React, { Component } from 'react';
import Header from './component/Header.js';
import routes from './routes.js'
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className='App'>
        <Header />
        {routes}
      </div>
    )
  }
}