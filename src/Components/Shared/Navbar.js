import React, { useState } from 'react';
import './Navbar.css'

import { Link } from 'react-router-dom';

const Navbar = () => {
   const [isOpen,setIsOpen]=useState(false)
    return (
        <nav className='Navbar px-10'>
            <span className='nav-log text-white'>MAK</span>

            <div className={`nav-items ${isOpen && 'open'}`}>
                <a href='/'>Home</a>
                <a href='https://drive.google.com/file/d/1vu7OfEjWGji51NCsUO4c21KNvkkz76FX/view?usp=sharing'>Resume</a>
                <a href='/about'>About</a>
                <a href='/skill'>Skills</a>
                <a href='/project'>Projects</a>
                <a href='/blog'>Blogs</a>
               
                <a href='/contact'>Contact</a>

            </div>

            <div onClick={()=>setIsOpen(!isOpen)} className={`nav-toggle ${isOpen && 'open'}`}>
                <div className="bar"></div>
            </div>

          

        </nav>
    );
};

export default Navbar;