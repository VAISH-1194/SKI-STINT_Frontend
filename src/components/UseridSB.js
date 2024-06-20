// import React, { useContext, createContext, useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import LogoutIcon from '@mui/icons-material/Logout';
// import HomeIcon from '@mui/icons-material/Home';
// import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
// import NotStartedIcon from '@mui/icons-material/NotStarted';
// import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
// import namelogo from '../assets/img/namelogo.png';
// import Userid from './Userid';
// import '../assets/css/sidebar.css';
// import '../App.css';

// const SidebarContext = createContext();

// function SidebarProvider({ children }) {
//   const [expanded, setExpanded] = useState(true);
//   const [filterType, setFilterType] = useState(null);

//   return (
//     <SidebarContext.Provider value={{ expanded, setExpanded, filterType, setFilterType }}>
//       <div className="body">
//         {children}
//       </div>
//     </SidebarContext.Provider>
//   );
// }

// function Sidebar() {
//   const { expanded, setFilterType } = useContext(SidebarContext);
//   const navigate = useNavigate();

//   const handleHomeClick = () => {
//     navigate("/landingpage");
//   };

//   return (
//     <nav className={`sidebar ${expanded ? '' : 'close'}`}>
//       <header>
//         <div className="image-text">
//           <span className="image" style={{ marginTop: '0.7rem' }}>
//             <img src={namelogo} alt="logo" />
//           </span>
//           <div className="text logo-text">
//             <span className="name">SKI-STINT</span>
//             <span className="profession">Task Management</span>
//           </div>
//         </div>
//       </header>
//       <div className="menu-bar">
//         <div className="menu">
//           <ul className="menu-links">
//             <li className="nav-link" onClick={handleHomeClick}>
//               <HomeIcon className="icon" />
//               <span className="text nav-text">Home</span>
//             </li>
//             <li className="nav-link" onClick={() => setFilterType(null)}>
//               <AssignmentIcon className="icon" />
//               <span className="text nav-text">All Tasks</span>
//             </li>
//             <li className="nav-link" onClick={() => setFilterType('completed')}>
//               <AssignmentTurnedInIcon className="icon" />
//               <span className="text nav-text">Task Completed</span>
//             </li>
//             <li className="nav-link" onClick={() => setFilterType('progress')}>
//               <AssignmentLateIcon className="icon" />
//               <span className="text nav-text">Task Pending</span>
//             </li>
//             <li className="nav-link" onClick={() => setFilterType('yet')}>
//               <NotStartedIcon className="icon" />
//               <span className="text nav-text">Task yet to start</span>
//             </li>
//             <li className="nav-link" onClick={() => navigate("/users")}>
//               <AssignmentIndIcon className="icon" />
//               <span className="text nav-text">All users</span>
//             </li>
//           </ul>
//         </div>
//         <div className="bottom-content">
//           <li className="nav-link" onClick={() => console.log('Logout')}>
//             <LogoutIcon className="icon" />
//             <span className="text nav-text">Logout</span>
//           </li>
//         </div>
//       </div>
//     </nav>
//   );
// }

// function Users() {
//   const { filterType } = useContext(SidebarContext);
//   const getTitle = () => {
//     switch (filterType) {
//       case 'completed':
//         return 'Tasks Completed';
//       case 'progress':
//         return 'Tasks Pending';
//       case 'yet':
//         return 'Tasks yet to start';
//       default:
//         return 'All Tasks';
//     }
//   };

//   return (
//     <section className="home">
//       <Userid filterType={filterType} title={getTitle()} />
//     </section>
//   );
// }

// export default function UseridSB() {
//   return (
//     <SidebarProvider>
//       <Sidebar />
//       <Users />
//     </SidebarProvider>
//   );
// }



















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
import Userid from './Userid';
import '../assets/css/sidebar.css';
import '../App.css';

const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [filter, setFilter] = useState({ type: "", value: "" }); // Add default filter state

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded, filter, setFilter }}>
      <div className="body">
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

function Sidebar() {
  const { expanded, setExpanded } = useContext(SidebarContext);
  const [profileExpanded, setProfileExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleProfileExpand = () => {
    setProfileExpanded(!profileExpanded);
  };

  return (
    <nav className={`sidebar ${expanded ? '' : 'close'}`}>
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
            <li className="nav-link" onClick={() => navigate('/')}>
              <HomeIcon className="icon" />
              <span className="text nav-text">Home</span>
            </li>
            <li className="nav-link" onClick={toggleProfileExpand}>
              <PersonIcon className="icon" />
              <span className="text nav-text">My Profile</span>
              <KeyboardArrowDownIcon style={{ marginTop: ".5rem", marginLeft: "1.6rem", color: "var(--text-color)", cursor: "pointer" }} className={`dropdown-icon ${profileExpanded ? 'expanded' : ''}`} />
            </li>
            {profileExpanded && (
              <ul className="sub-menu-links">
                <li className="nav-link" onClick={() => navigate("/alltasks")}>
                  <AssignmentIcon className="icon" />
                  <span className="text nav-text">Assigned Tasks</span>
                </li>
                <li className="nav-link" onClick={() => navigate("/completedtasks")}>
                  <AssignmentTurnedInIcon className="icon" />
                  <span className="text nav-text">Tasks Completed</span>
                </li>
                <li className="nav-link" onClick={() => navigate("/yettasks")}>
                  <AssignmentLateIcon className="icon" />
                  <span className="text nav-text">Tasks Pending</span>
                </li>
                <li className="nav-link" onClick={() => navigate("/progresstasks")}>
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

function UsersSB() {
  return (
    <section className="home">
      <Userid />
    </section>
  );
}

export { SidebarContext, SidebarProvider };
export default function App() {
  return (
    <SidebarProvider>
      <Sidebar />
      <UsersSB />
    </SidebarProvider>
  );
}
