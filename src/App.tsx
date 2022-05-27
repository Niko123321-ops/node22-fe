import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path={'/login'} element = {<Login />} />
            <Route path={'/register'} element = {<Register />} />
            <Route path={'/'} element = {<Home />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
