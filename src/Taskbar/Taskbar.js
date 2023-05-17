import React, { useState } from 'react';
import { NavLink  } from 'react-router-dom';
import "./module.css";



const Taskbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (

    <nav className='navbar'>
 <div className='nav-container'>
  <NavLink exact to="/" className="nav-logo">
    <div className='company-name'>
  Lumbini <h6> Water Solution Pvt. ltd. </h6>
  </div>
  <i className= "fas fa-code"></i>
    </NavLink> 
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className='nav-item'>
          <NavLink
           exact
            to="/" 
            activeClassName='active'
             className="nav-links" 
          onClick={handleClick}
          >
Home
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink
           exact 
           to="/about" 
           activeClassName='active'
            className='nav-links'
          onClick={handleClick}
          >
About
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink
           exact 
           to="/projects" 
           activeClassName='active'  
           className='nav-links'
          onClick={handleClick}
          >
Projects
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink 
          exact 
          to="/videos"
           activeClassName='active' 
            className='nav-links'
          onClick={handleClick}
          >
Videos
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink 
          exact 
          to="/login" 
          activeClassName='active' 
          className='nav-links'
          onClick={handleClick}
          >
Login
          </NavLink>
        </li>
      </ul>
      <div className="nav-icon" onClick={handleClick}>
      <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </div>
    </nav>
  );
};

export default Taskbar
