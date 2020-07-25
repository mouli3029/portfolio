import React, { useState } from 'react'
import './Navbar.css'
function Navbar() {
    const [clicked,setClicked] = useState(false);
    return (
        <div className="nav">
            <div>
                <h3 className="nav__title">Mouli..❤</h3> 
            </div>
            <div>
               <ul className={clicked? "nav__menu-active":"nav__menu"}>
                   <li className="nav__item active">
                     <a
                        className="nav__link"
                        href="#home">Home</a>
                   </li>
                   <li className="nav__item">
                       <a
                       className="nav__link"
                        href="#about">About</a>
                   </li>
                   <li className="nav__item">
                       <a
                        className="nav__link"
                       href="#project">Projects</a>
                   </li>
                   <li className="nav__item">
                       <a
                        className="nav__link"
                       href="#skills">Skills</a>
                   </li>
                   <li className="nav__item">
                       <a
                        className="nav__link"
                       href="#contact"> Contact</a>
                   </li>
               </ul>
            </div>
            <div className= "icon" onClick={()=>setClicked(!clicked)}>
              <i className={clicked ? "fas fa-times":"fas fa-bars"}></i>
            </div>
        </div>
        
    )
}

export default Navbar
