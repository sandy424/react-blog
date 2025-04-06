import React from "react";
import {Link} from 'react-router-dom';
import './Header.css';

function Header() {
    return(
        <div>
            <div className="navbar">
                <Link className="menu" to={'/Login'}>Login</Link>
                <Link className="menu" to={'/Mypage'}>Mypage</Link>
                <Link className="menu" to={'/Diary'}>Diary</Link>
            </div>
        </div>
    )
}

export default Header;