import { useState } from "react";
import "../assets/css/users.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Navbar from "./Navbar";
import {useNavigate} from 'react-router-dom'


function Users() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/')
  }
  
  const data = [
    {
      name: "Dr.YYYYYYY",
      designation: "CSE HOD"
    },
    {
      name: "Dr.SASASAS",
      designation: "ECE HOD"
    },
    {
      name: "Dr.qwerty",
      designation: "Ass.Prof"
    },
    {
      name: "Dr.SASASAS",
      designation: "Ass.Prof"
    },
    {
      name: "Dr.SASASAS",
      designation: "Ass.Prof"
    },
    {
      name: "Dr.SASASAS",
      designation: "Ass.Prof"
    },
    {
      name: "Dr.SASASAS",
      designation: "Ass.Prof"
    },
    {
      name: "Dr.SASASAS",
      designation: "Ass.Prof"
    },
    {
      name: "Dr.SASASAS",
      designation: "Ass.Prof"
    },
    {
      name: "Dr.qwerty",
      designation: "Ass.Prof"
    },
  ];

  const [activeTab] = useState("all");

  const filteredData = activeTab === "all" ? data : data.filter((item) => item.type === activeTab);

  return (
    <>
    <Navbar/>
      <div className="land-container1">
      <div className="main-bar1">
      <div className="search">
      <input type="text" className="main-search1" placeholder="🔎 Search..." />
      </div>
      <div className="home1">
      <h2 onClick={handleHome}>Home</h2>
      </div>
      </div>

        <div className="taskbar1">
          <div className="task-list1">
            {filteredData.map((item, index) => (
              <div key={index} id={item.type}>
            
              <div className="content1">
                  <div className="icn1">
                      <AccountCircleIcon sx={{ fontSize: '2.5rem'}}/>
                  </div>
                  
                  <div className="det1-btn1">
                  <div className="det1">
                  <h3>{item.name}</h3>
                  <p>Designation: {item.designation}</p>
                  </div>
                  
                  <div className="btn1">
                  <button style={{borderRadius:"25px" , border:"none", width:"120px", height:"40px", fontWeight:"bolder"}}>View</button>
                  </div>
                  </div>
              </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;