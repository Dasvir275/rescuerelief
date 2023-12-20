import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'
import bGimg from './bGimg.jpg';
function Main() {
  return (
    <>

<div className="bg-image">
      <img src={bGimg} alt="" />
      </div>

    <div class="main">
    <h1><Link to="/login">Welcome TO Matysa Portal Real Time</Link><div class="roller">
      <span id="rolltext">Flood Indundation<br/>
      Live Alerts<br/>
      Rescue,Relief<br/>
      <h1 id="spare-time">Want you Try?Seamless Experience</h1><br/>
      </span>
      </div>
      </h1>
      
    </div>
    </>
  )
}

export default Main
