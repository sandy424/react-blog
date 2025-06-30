import React from "react";
import {Link} from 'react-router-dom';
import '../style/Style.css';
import logo from '../../img/URblog_logo.png';
import profile from '../../img/profile.png';
import menu from '../../img/menu.png';

function Header() {
    return(
        <div>
            <div className="navbar">
                <div>
                    <Link to={'/'}>
                        <img className="logo" src={logo} alt="URblog"/>
                    </Link>
                </div>
                
                <div className="login-box">
                    <Link to={'/Login'}>
                        <span className="login">Login</span>
                    </Link>
                    <div className="profile-box">
                        <img src={profile} className="icon profile"/>
                        <img src={menu} className="icon menu"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;