import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
      </div>
    )
  }
}


