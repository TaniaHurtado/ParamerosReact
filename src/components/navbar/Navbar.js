import React from 'react'
import './Navbar.css';

const Navbar = ({isScrolling}) => {


    const totheTop = () => {
        window.scrollTo({top:0, left:0, behavior: 'smooth'});
    }

  return (
    <div className={`navbar ${isScrolling > 20 ? 'scrolling' : null}`}> 
    <div className='navbar-logo' onClick={totheTop}>
        something
    </div>
    </div>
  )
}

export default Navbar