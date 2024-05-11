// import React from 'react'
// import Users from './components/Users'
// // import LandingPage from './components/LandingPage'
// // import { Route, Routes } from "react-router-dom"

// export default function App() {
//   return (
//     <div className='sub-container'>
//     <Users/>
//     </div>
//   )
// }







import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import LandingPage from './components/LandingPage';
import Users from './components/Users';

export default function App() {
  return (
    <Router>
      <div className='sub-container'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </div>
    </Router>
  )
}
