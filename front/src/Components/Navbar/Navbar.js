import React from 'react'
import './navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-div">
                <img alt="logo of the website" src="https://via.placeholder.com/90"></img>
            </div>
            <ul className="main-navbar-ul">
                <li className="home">
                    <a href="#">HOME</a>  
                </li>
                <li className="tours">
                    <a href="$">TOURS</a>  
                </li>
                <li className="form">
                    <a href="#">FORM</a>  
                </li>
                <li className="about">
                    <a href="#">ABOUT</a>  
                </li>
            </ul>
            <div className="language">English</div>
            

        </nav>
    )
}
