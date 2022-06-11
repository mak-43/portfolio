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
                <a target='blank' href='https://drive.google.com/file/d/1drbED3CnENdjBy0MjRSWOUGJ1xva75wb/view?usp=sharing'>Resume</a>
                <a  href='#projects'>Projects</a>
                {/* <a href='/skill'>Skills</a> */}
              
                
               
               <Link to='/blog'>Blogs</Link>
               
                <a href='#contact'>Contact</a>

            </div>

            <div onClick={()=>setIsOpen(!isOpen)} className={`nav-toggle ${isOpen && 'open'}`}>
                <div className="bar"></div>
            </div>

          

        </nav>
    );
};

export default Navbar;