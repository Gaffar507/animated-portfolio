import React, { useState } from 'react'
import './navbar.css'
import {Link} from 'react-scroll'
import Toggle from '../toggle/Toggle'
import { useGlobalContext } from '../../Context'
import { UilBars } from '@iconscout/react-unicons'
const Navbar = () => {
    const[toggle, setToggle]=useState(false)
    const{ state}= useGlobalContext()
    const {darkMode}=state;

  return (
    <div className='navbar-container' id='home' style={darkMode?{color:'white'}:{color:'black'}}>
        <div className="navbar-left">
            <div>
                <Link to='home' className='nav-title'>Resiliency</Link>
            </div>
            <div className="toggle-btn">
                <Toggle/>
            </div>
        </div>
        <div className="navbar-right">
            <div className="nav-icon">
                <button className='btn nav-btn' style={darkMode?{color:'white'}:{color:''}} onClick={()=>setToggle((pre)=>!pre)} >
                    <UilBars/>
                </button>
            </div>

            <ul className={toggle?'links show-links':'links' }>
                <li>
                    <a href="#home"  style={darkMode?{color:'white'}:{}}>Home</a>
                </li>
                <li>
                    <a href="#services"  style={darkMode?{color:'white'}:{}}>Services</a>
                </li>
                <li>
                    <a href="#experience" style={darkMode?{color:'white'}:{}}>Experience</a>
                </li>
                <li>
                    <a href="#portfolio" style={darkMode?{color:'white'}:{}}>Portfolio</a>
                </li>
                <li>
                    <a href="#testimonial" style={darkMode?{color:'white'}:{}}>Testimonial</a>
                </li>
                <button className='btn'>
                    <Link to='contact'  style={darkMode?{color:'white'}:{}} >
                         Contact
                    </Link>
                </button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
