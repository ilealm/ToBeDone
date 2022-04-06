import './App.css';
import './components/Login'

import React, {Component, useEffect, useState} from 'react';
import { Routes, Route, Link, Outlet, NavLink } from 'react-router-dom';
import axios from 'axios';
import  'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import About from './components/About';
import History from './components/History';
import {RequireToken} from './Auth.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/dashboard"
          element={
            <RequireToken>
              <Dashboard />
            </RequireToken>
          } />
        <Route
          path="/logout"
          element={
            <RequireToken>
              <Logout />
            </RequireToken>
          } />
      </Routes>
    
    </div>
  );
}
export default App;


