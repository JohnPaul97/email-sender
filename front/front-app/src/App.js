import React, { useState } from 'react';
import './App.css';
import Login from './components/Login.js';
import MainPage from './components/MainPage.js';

const TOKEN = 'token;'

function App() {
  const token = localStorage.getItem(TOKEN);

  const setToken = (token) => {
    localStorage.setItem(TOKEN, token);
  }

  console.log(token);

  if (token === null) {
    return <Login setToken={setToken} />
  }

  else {
    return <MainPage />;
  }
}

export default App;
