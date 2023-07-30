import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {

    const [time, setTime] = useState(new Date());
    // setTime every 1s
    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000);
    }, []);


  return (
    <div className='navbar-container'>
        <div id='nav-items'>
            <div>About</div>
            <div>Project</div>
        </div>
        <div id='time-container'>
            <div id='clock-item'>{time.toLocaleTimeString()}</div>
            <div id='date-item'>{time.toDateString()}</div>
        </div>
    </div>
  )
}

export default Navbar