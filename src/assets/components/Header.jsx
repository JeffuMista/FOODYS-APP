import React from "react";
import Logo from "/src/images/app-logo.jpg"

const Header = () => {
    return (
        
            <div className="header">
                <div className="header-logo-container">
                    <img className="logo" src={Logo} alt="Foody App Logo" />
                    <h1>FOODYS'</h1>
                </div>
                <div className="nav-items">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Cart</a></li>
                    </ul>
                </div>
            </div>
        
    )
}

export default Header;