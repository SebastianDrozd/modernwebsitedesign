import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import logo2 from '../../assets/logo2.png'
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
    return (
        <>
          <div className="navbar-outer-flex-container" style={{display: 'flex',justifyContent: 'space-around',alignItems: 'center'}}>
              <div className="navbar-brand"><img src={logo} alt="" /></div>
              <div className="navbar-links">
              
                  <a className="navbar-links-item active" href="">Home</a>
                  <a className="navbar-links-item" href=""><Link
    activeClass="active"
    to="section1"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>Faq</Link></a>
                  <a className="navbar-links-item" href=""><Link
    activeClass="active"
    to="section2"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>Details</Link></a>
                  <a className="navbar-links-item" href=""><Link
    activeClass="active"
    to="section3"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>About</Link></a>
              </div>
              </div>  
        </>
    )
}

export default Navbar
