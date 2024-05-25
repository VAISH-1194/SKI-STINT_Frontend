import React, { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HomeIcon from "@mui/icons-material/Home";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import namelogo from "../assets/img/namelogo.png";
import Users from "./Users";
import "../assets/css/sidebar.css";
import "../App.css";

const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [filter, setFilter] = useState({ type: "", value: "" });

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded, filter, setFilter }}>
      <div className="body">{children}</div>
    </SidebarContext.Provider>
  );
}

function UserSB() {
  const { expanded, setFilter } = useContext(SidebarContext);
  const navigate = useNavigate();
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const [isDesignationSubmenuVisible, setIsDesignationSubmenuVisible] = useState(false);
  const [isDepartmentSubmenuVisible, setIsDepartmentSubmenuVisible] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuVisible(!isSubmenuVisible);
  };

  const toggleDesignationSubmenu = () => {
    setIsDesignationSubmenuVisible(!isDesignationSubmenuVisible);
  };

  const toggleDepartmentSubmenu = () => {
    setIsDepartmentSubmenuVisible(!isDepartmentSubmenuVisible);
  };

  const handleFilterChange = (type, value) => {
    if (value === "All") {
      setFilter({ type: "", value: "" }); 
    } else {
      setFilter({ type, value });
    }
  };

  return (
    <nav className={`sidebar ${expanded ? "" : "close"}`}>
      <header>
        <div className="image-text">
          <span className="image" style={{ marginTop: "0.7rem" }}>
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
            <li className="nav-link" onClick={() => navigate("/")}>
              <HomeIcon className="icon" />
              <span className="text nav-text">Home</span>
            </li>
            <li className="nav-link" onClick={toggleSubmenu}>
              <SwapVertIcon className="icon" />
              <span className="text nav-text">Sort by</span>
              <span className="dropdown-icon" style={{ marginTop: ".5rem", marginLeft: "4rem", color: "var(--text-color)" }}>
                {isSubmenuVisible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </span>
            </li>
            {isSubmenuVisible && (
              <ul className="submenu visible" style={{ marginLeft: "4rem", color: "var(--text-color)" }}>
                <li
                  onClick={toggleDesignationSubmenu}
                  className="desig"
                  style={{ marginTop: ".5rem", marginLeft: "0rem", color: "var(--text-color)", cursor: "pointer" }}
                >
                  Designation
                  <span className="dropdown-icon" style={{ marginTop: ".5rem", marginLeft: "1.6rem", color: "var(--text-color)", cursor: "pointer" }}>
                    {isDesignationSubmenuVisible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </span>
                </li>
                {isDesignationSubmenuVisible && (
                  <ul className="submenu visible">
                    <h4 className="ease" onClick={() => handleFilterChange("designation", "Asst.Prof")}>
                      Asst.Prof
                    </h4>
                    <h4 className="ease" onClick={() => handleFilterChange("designation", "HOD")}>
                      HOD
                    </h4>
                    <h4 className="ease" onClick={() => handleFilterChange("designation", "All")}>
                      All
                    </h4>
                  </ul>
                )}
                <li
                  onClick={toggleDepartmentSubmenu}
                  className="desig"
                  style={{ marginTop: ".5rem", marginLeft: "0rem", color: "var(--text-color)", cursor: "pointer" }}
                >
                  Department
                  <span className="dropdown-icon" style={{ marginTop: ".5rem", marginLeft: "1.5rem", color: "var(--text-color)", cursor: "pointer" }}>
                    {isDepartmentSubmenuVisible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </span>
                </li>
                {isDepartmentSubmenuVisible && (
                  <ul className="submenu visible" style={{ marginTop: ".5rem", marginLeft: "0rem", color: "var(--text-color)", cursor: "pointer" }}>
                    <h4 className="ease" onClick={() => handleFilterChange("department", "CSE")}>
                      CSE
                    </h4>
                    <h4 className="ease" onClick={() => handleFilterChange("department", "IT")}>
                      IT
                    </h4>
                    <h4 className="ease" onClick={() => handleFilterChange("department", "ECE")}>
                      ECE
                    </h4>
                    <h4 className="ease" onClick={() => handleFilterChange("department", "EEE")}>
                      EEE
                    </h4>
                    <h4 className="ease" onClick={() => handleFilterChange("department", "Mech")}>
                      Mech
                    </h4>
                    <h4 className="ease" onClick={() => handleFilterChange("department", "Civil")}>
                      Civil
                    </h4>
                    <h4 className="ease" onClick={() => handleFilterChange("department", "All")}>
                      All
                    </h4>
                  </ul>
                )}
              </ul>
            )}
            <li className="nav-link" onClick={() => navigate("/users")}>
              <AssignmentIndIcon className="icon" />
              <span className="text nav-text">View users</span>
            </li>
          </ul>
        </div>
        <footer>
          <div className="bottom-content">
            <li className="nav-link" onClick={() => console.log("Logout")}>
              <LogoutIcon className="icon" />
              <span className="text nav-text" style={{ position: "sticky" }}>
                Logout
              </span>
            </li>
          </div>
        </footer>
      </div>
    </nav>
  );
}
function Dashboard() {
  return (
    <section className="home">
      <div>
        <Users />
      </div>
    </section>
  );
}

export default function App() {
  return (
    <SidebarProvider>
      <UserSB />
      <Dashboard />
    </SidebarProvider>
  );
}


export { SidebarContext, SidebarProvider };