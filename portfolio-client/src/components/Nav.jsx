import React, { useContext } from "react";
import "../styles/Nav.css"
import { NavigationContext } from "../Context/Navigation";

function Nav(){
    const { setNavNumber, contactPopUp, setContactPopUp } = useContext(NavigationContext)

    console.log(contactPopUp)

    return(
        <nav className="Nav-div">
            <div className="nav-section" id="nav-initials-section">
                <h1>Jared Becker</h1>
            </div>
            <div className="nav-section" id="nav-projects-section">
                <a onClick={()=>setNavNumber(0)} className="nav-title" >Home</a>
                <a onClick={()=>setNavNumber(1)} className="nav-title" >Projects</a>
                <a onClick={()=>setNavNumber(2)} className="nav-title" >Resume</a>
            </div>
            <div className="nav-section" id="nav-social-section">
                <a href="https://www.linkedin.com/in/jaredbecker-se/">
                    <i className="fa-brands fa-linkedin fa-inverse fa-3x"></i>
                </a>
                <a href="https://github.com/Jbecker9">
                    <i className="fa-brands fa-square-github fa-inverse fa-3x"></i>
                </a>
            </div>
            <div className="nav-section" id="nav-contact-section">
                <a className="nav-section-contact-button" onClick={() => setContactPopUp(!contactPopUp)}> Contact </a>
            </div>
        </nav>
    )
}

export default Nav