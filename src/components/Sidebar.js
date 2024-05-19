
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { useContext, createContext, useState } from "react";
import "../assets/css/sidebar.css";
import "../App.css";
import namelogo from "../assets/img/namelogo.png";
import LandingPage from "./LandingPage";
import {useNavigate} from 'react-router-dom'

const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      <div className="body">
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

function Sidebar() {
  const { expanded} = useContext(SidebarContext);

  const navigate = useNavigate();

  const handleUsers = () => {
    navigate('/users')
  }

  return (
    <nav className={`sidebar ${expanded ? "" : "close"}`}>
      <header>
        <div className="image-text">
          <span className="image" style={{marginTop: '0.7rem'}}>
             <img src={namelogo} alt="logo"/>
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
            <li className="nav-link">
              <a onClick={() => console.log('Navigate to Dashboard')}>
                <HomeIcon className="icon" />
                <span className="text nav-text">Home</span>
              </a>
            </li>
            <li className="nav-link">
              <a onClick={() => console.log('Navigate to Revenue')}>
                <AssignmentIcon className="icon" />
                <span className="text nav-text">Assigned Task</span>
              </a>
            </li>
            <li className="nav-link">
              <a onClick={() => console.log('Navigate to Notifications')}>
                <AssignmentTurnedInIcon className="icon" />
                <span className="text nav-text">Task Completed</span>
              </a>
            </li>
            <li className="nav-link">
              <a onClick={() => console.log('Navigate to Analytics')}>
                <AssignmentLateIcon className="icon" />
                <span className="text nav-text">Task Pending</span>
              </a>
            </li>
            <li className="nav-link">
              <a onClick={() => console.log('Navigate to Likes')}>
                <NotStartedIcon className="icon" />
                <span className="text nav-text">Task yet to start</span>
              </a>
            </li>
            <li className="nav-link">
              <a onClick={handleUsers}>
                <AssignmentIndIcon className="icon" />
                <span className="text nav-text">View users</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom-content">
          <li>
            <a onClick={() => console.log('Logout')}>
              <LogoutIcon className="icon" />
              <span className="text nav-text">Logout</span>
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}

function Dashboard() {
  return (
    <section className="home">
      <div>
        <LandingPage />
      </div>
    </section>
  );
}

export default function App() {
  return (
    <SidebarProvider>
      <Sidebar />
      <Dashboard />
    </SidebarProvider>
  );
}
