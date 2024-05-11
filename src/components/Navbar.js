import React from 'react'
import "../App.css"
import "../assets/css/navbar.css"
import Darkmode from './Darkmode'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import IconButton from '@mui/material/IconButton';
import {useNavigate} from 'react-router-dom'

export default function Navbar() {

  const navigate = useNavigate();

  const handleUsers = () => {
    navigate('/users')
  }

  const handleLogo = () => {
    navigate('/')
  }


  return (
    <div className='nav-container'>
    <h2 onClick={handleLogo}>SKI-STINT</h2>
    <div className='nav-icon-container' >

    <div>
    <Darkmode/>
    </div>


    <IconButton onClick={handleUsers}>
    <VerticalSplitIcon fontSize='large'  style={{marginTop:"2px",color:"var(--logo)"}}/>
    </IconButton>

    <IconButton>
    <AccountCircleIcon fontSize='large'  style={{marginTop:"2px",color:"var(--logo)"}}/>
    </IconButton>

    </div>
    </div>
  )
}

