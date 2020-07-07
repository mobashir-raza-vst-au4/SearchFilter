import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import React, { Component } from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Body}/>
          {/* <Route exact path='/next' component={Next}/> */}
        </Switch>
        </Router>
      </div>
    )
  }
}


