import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/Sidebar';
import TaskSB from './components/TaskSB';
import UserSB from "./components/UserSB";

export default function App() {
  return (
    <Router>
      <div className='sub-container'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/landingpage' element={<LandingPage />} />
          <Route path='/alltasks' element={<TaskSB />} />
          <Route path='/users' element={<UserSB />} />
        </Routes>
      </div>
    </Router>
  );
}