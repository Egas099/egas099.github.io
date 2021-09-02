import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path={'/'} exact>
          <HomePage />
        </Route>
        <Route path={'/projects'} exact>
          <Projects />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
