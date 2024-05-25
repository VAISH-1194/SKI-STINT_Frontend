import "../assets/css/tasks.css";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';

function Tasks({ filterType, title }) 
{ 
  const data = [
    {
      title: "Mr.Jack Sparrow",
      description: "Submission of CIA results",
      date: "25-04-2024",
      type: "progress",
    },
    {
      title: "Mr.Jack Sparrow",
      description: "Spread this info to students",
      date: "29-04-2024",
      type: "yet",
    },
    {
      title: "Dr.Jackie Chan",
      description: "Awareness on civil exams",
      date: "23-04-2024",
      type: "completed",
    },
    {
      title: "Dr.Jack Sparrow",
      description: "Spread this info to students",
      date: "29-04-2024",
      type: "yet",
    },
    {
      title: "Dr.Jackie Chan",
      description: "Submission of CIA results",
      date: "25-04-2024",
      type: "progress",
    },
    {
      title: "Dr.Jack Sparrow",
      description: "Awareness on civil exams",
      date: "23-04-2024",
      type: "completed",
    },
    {
      title: "Dr.Jack Sparrow",
      description: "Spread this info to students",
      date: "29-04-2024",
      type: "yet",
    },
    {
      title: "Dr.Jack Sparrow",
      description: "Submission of CIA results",
      date: "25-04-2024",
      type: "progress",
    },
    {
      title: "Dr.Jack Sparrow",
      description: "Awareness on civil exams",
      date: "23-04-2024",
      type: "completed",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (filterType) {
      setFilteredData(data.filter((item) => item.type === filterType));
    } else {
      setFilteredData(data);
    }
  }, [filterType]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getTaskStatusColor = (type) => {
    switch (type) {
      case "yet":
        return "var(--yettostart)";
      case "progress":
        return "var(--progress)";
      case "completed":
        return "var(--completed)";
      default:
        return "inherit";
    }
  };

  const displayedData = filteredData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="land-container4">
        <div className="main-bar4">
          <div className="search4">
            <input
              type="text"
              className="main-search4"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <SearchIcon
              style={{
                position: "absolute",
                left: "70px",
                top: "25%",
                transform: "translateY(-50%)",
                color: "black",
                fontSize: "18px",
                width: "20px",
                fontWeight: "bold",
              }}
            />
          </div>
        </div>
        <div className="taskbar4">
          <h3>{title}</h3> 
          <div className="task-list4">
            {displayedData.map((item, index) => (
              <div key={index} className="task-item5" id={item.type}>
                <div className="task-details4" style={{ height: "5.5rem" }}>
                  <h3 style={{ fontWeight: "500" }}>
                    Task assigned by {item.title}
                  </h3>
                  <div className="task-info4">
                    <p>Task Description: {item.description}</p>
                    <p style={{ marginRight: "1rem" }}>Date: {item.date}</p>
                  </div>
                </div>
                <div
                  className="task-status4"
                  style={{ backgroundColor: getTaskStatusColor(item.type) }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tasks;
