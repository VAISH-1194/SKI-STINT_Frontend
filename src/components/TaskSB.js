import React, { useContext, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import namelogo from '../assets/img/namelogo.png';
import Tasks from './Tasks';
import '../assets/css/sidebar.css';
import '../App.css';

const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const [filterType, setFilterType] = useState(null);
  const [profileExpanded, setProfileExpanded] = useState(true);

  return (
    <SidebarContext.Provider value={{ filterType, setFilterType, profileExpanded, setProfileExpanded }}>
      <div className="body">
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

function Sidebar() {
  const { setFilterType, profileExpanded, setProfileExpanded } = useContext(SidebarContext);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/landingpage");
  };

  const toggleProfileExpand = () => {
    setProfileExpanded(!profileExpanded);
  };

  return (
    <nav className="sidebar">
      <header>
        <div className="image-text">
          <span className="image" style={{ marginTop: '0.7rem' }}>
            <img src={namelogo} alt="logo" />
          </span>
          <div className="text logo-text">
            <span className="name">SKI-STINT</span>
            <span className="profession">Task Management</span>
          </div>
        </div>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link" onClick={handleHomeClick}>
              <HomeIcon className="icon" />
              <span className="text nav-text">Home</span>
            </li>
            <li className="nav-link" onClick={toggleProfileExpand}>
              <PersonIcon className="icon" />
              <span className="text nav-text">My Profile</span>
              <KeyboardArrowDownIcon
                style={{ marginTop: ".5rem", marginLeft: "1.6rem", color: "var(--text-color)", cursor: "pointer" }}
                className={`dropdown-icon ${profileExpanded ? 'expanded' : ''}`}
              />
            </li>
            {profileExpanded && (
              <ul className="sub-menu-links">
                <li className="nav-link" onClick={() => setFilterType(null)}>
                  <AssignmentIcon className="icon" />
                  <span className="text nav-text">Assigned Tasks</span>
                </li>
                <li className="nav-link" onClick={() => setFilterType('completed')}>
                  <AssignmentTurnedInIcon className="icon" />
                  <span className="text nav-text">Tasks Completed</span>
                </li>
                <li className="nav-link" onClick={() => setFilterType('progress')}>
                  <AssignmentLateIcon className="icon" />
                  <span className="text nav-text">Tasks Pending</span>
                </li>
                <li className="nav-link" onClick={() => setFilterType('yet')}>
                  <NotStartedIcon className="icon" />
                  <span className="text nav-text">Tasks Yet to Start</span>
                </li>
              </ul>
            )}
            <li className="nav-link" onClick={() => navigate('/users')}>
              <AssignmentIndIcon className="icon" />
              <span className="text nav-text">View Users</span>
            </li>
          </ul>
        </div>
        <div className="bottom-content">
          <li className="nav-link" onClick={() => console.log('Logout')}>
            <LogoutIcon className="icon" />
            <span className="text nav-text">Logout</span>
          </li>
        </div>
      </div>
    </nav>
  );
}

function Task() {
  const { filterType } = useContext(SidebarContext);
  const getTitle = () => {
    switch (filterType) {
      case 'completed':
        return 'Tasks Completed';
      case 'progress':
        return 'Tasks Pending';
      case 'yet':
        return 'Tasks Yet to Start';
      default:
        return 'Assigned Tasks';
    }
  };

  return (
    <section className="home">
      <Tasks filterType={filterType} title={getTitle()} />
    </section>
  );
}

export default function App() {
  return (
    <SidebarProvider>
      <Sidebar />
      <Task />
    </SidebarProvider>
  );
}
