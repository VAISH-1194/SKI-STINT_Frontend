import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { SidebarProvider, Sidebar } from './components/Sidebar';
import LandingPage from './components/LandingPage';
import Task from './components/Tasks';
import Users from './components/Users';
import UserSB from './components/Users';
import Userid from './components/Userid';
import Navbar from './components/Navbar';
// import WebLayout from './components/PrinciComp'; 

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
    {/* <WebLayout> */}
      <SidebarProvider>
        <div className={`app-wrapper ${sidebarOpen ? 'sidebar-open' : ''}`}>
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="main-content">
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="content">
              <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/landingpage' element={<LandingPage />} />
                <Route path='/alltasks' element={<Task />} />
                <Route path='/pendingtasks' element={<Task filterType="progress" />} />
                <Route path='/completedtasks' element={<Task filterType="completed" />} />
                <Route path='/yettasks' element={<Task filterType="yet" />} />
                <Route path='/users' element={<UserSB />} />
                <Route path='/user/:userName' element={<Userid />} />
                <Route path='/allusers' element={<Users />} />
              </Routes>
            </div>
          </div>
        </div>
      </SidebarProvider>
       {/* </WebLayout> */}
    </Router>
  );
}












