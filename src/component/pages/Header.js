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
                <nav>
                    <Link className="menu" to={'/Feed'}>피드 보기</Link>
                    <Link className="menu" to={'/Post'}>업로드</Link>
                </nav>
                <div className="login-box">
                    <Link className="login" to={'/Login'}>Login</Link>
                    <div className="profile-box">
                        <img src={profile} className="icon profile"/>
                        <img src={menu} className="icon bar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;