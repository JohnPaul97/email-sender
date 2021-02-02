import React from 'react';
import './App.css';
import Login from './components/Login.js';
import MainPage from './components/MainPage.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>

        <Route path="/email">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
