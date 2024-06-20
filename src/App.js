import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import WebLayout from './components/PrinciComp'; 
import LandingPage from './components/Sidebar'; 
import TaskSB from './components/TaskSB';
import UserSB from './components/UserSB';
import Users from './components/Users';
import UseridSB from './components/UseridSB';

export default function App() {
  return (
    <Router>
      {/* <WebLayout> */}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/landingpage' element={<LandingPage />} />
          <Route path='/alltasks' element={<TaskSB />} />
          <Route path='/pendingtasks' element={<TaskSB filterType="progress" />} />
          <Route path='/completedtasks' element={<TaskSB filterType="completed" />} />
          <Route path='/yettasks' element={<TaskSB filterType="yet" />} />
          <Route path='/users' element={<UserSB />} />
          <Route path='/user/:userName' element={<UseridSB />} /> 
          <Route path='/allusers' element={<Users />} />
        </Routes>
      {/* </WebLayout> */}
    </Router>
  );
}









