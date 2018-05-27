import React, { Component } from 'react';
import Dashboard from './component/Dashboard.js';
import { HashRouter } from 'react-router-dom';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <HashRouter>
        <Dashboard />
      </HashRouter>
    );
  }
}