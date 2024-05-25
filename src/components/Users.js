import { useState, useContext, useEffect, useMemo } from "react";
import "../assets/css/users.css";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Navbar from "./Navbar";
import { SidebarContext } from './UserSB';

function Users() {
  const { filter } = useContext(SidebarContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const data = useMemo(() => [
    { name: "Dr.M.Mickey Mouse", department: "CSE", designation: "HOD" },
    { name: "Dr.B.Bugs Bunny", department: "CSE", designation: "HOD" },
    { name: "Mr.S.SpongeBob", department: "Civil", designation: "Asst.Prof" },
    { name: "Ms.D.Dora", department: "CSE", designation: "Asst.Prof" },
    { name: "Ms.S.D.Scooby-Doo", department: "Mech", designation: "Asst.Prof" },
    { name: "Mr.V.Tom", department: "CSE", designation: "Asst.Prof" },
    { name: "Mr.S.Jerry", department: "CSE", designation: "Asst.Prof" },
    { name: "Ms.D.Donald Duck", department: "CSE", designation: "Asst.Prof" },
    { name: "Dr.Charlie Brown", department: "EEE", designation: "HOD" },
    { name: "Dr.Pikachu", department: "ECE", designation: "HOD" },
  ], []);

  useEffect(() => {
    let newData = [...data];

    if (filter.type === "designation" && filter.value !== "All") {
      newData = newData.filter((item) => item.designation === filter.value);
    } else if (filter.type === "department" && filter.value !== "All") {
      newData = newData.filter((item) => item.department === filter.value);
    }

    newData = newData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.designation.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredData(newData);
  }, [searchQuery, filter, data]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const getTitle = () => {
    if (!filter.type) {
      return "All Users";
    }
    if (filter.type === "designation") {
      return `Users by Designation: ${filter.value}`;
    }
    if (filter.type === "department") {
      return `Users by Department: ${filter.value}`;
    }
    return "All Users";
  };

  return (
    <>
      <Navbar />
      <div className="land-container1">
        <div className="main-bar1">
          <div className="search">
            <input
              type="text"
              className="main-search1"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <SearchIcon style={{ position: 'absolute', left: '70px', top: '25%', transform: 'translateY(-50%)', color: 'black', fontSize:'18px',width:'20px',fontWeight: 'bold'}} />
          </div>
        </div>

        <div className="taskbar1">
          <h3>{getTitle()}</h3>
          <div className="task-list1">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div key={index}>
                  <div className="content1">
                    <div className="icn1">
                      <AccountCircleIcon
                        sx={{ fontSize: "2.5rem", color: "var(--user-text)" }}
                      />
                    </div>

                    <div className="det1-btn1">
                      <div className="det1">
                        <h3 style={{ fontWeight: "500", color: "var(--user-text)" }}>
                          {item.name}
                        </h3>
                        <p className="user-des" style={{ color: "var(--user-text)" }}>
                          Designation: {item.designation}
                        </p>
                      </div>

                      <div className="btn1">
                        <button
                          style={{
                            borderRadius: "25px",
                            border: "none",
                            width: "120px",
                            height: "40px",
                            fontWeight: "bolder",
                          }}
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', marginTop: '150px', justifyContent:"center" , background:"none", color:"var(--text-side)"}}>
                We didn't find any users. Perhaps another search term?
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;