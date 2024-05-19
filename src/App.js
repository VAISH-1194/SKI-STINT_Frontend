import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Sidebar from './components/Sidebar';
import Users from './components/Users';

export default function App() {
  return (
    <Router>
      <div className='sub-container'>
        <Routes>
          <Route path='/' element={<Sidebar />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </div>
    </Router>
  )
}
