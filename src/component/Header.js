import React from "react";
import {Link} from 'react-router-dom';
import '../style/Style.css';

function Header() {
    return(
        <div>
            <div className="navbar">
                <div className="mainLogo">
                    <Link className="menu" to={'/'}>URBlog</Link>
                </div>
                <div className="menu-group">
                    <Link className="menu" to={'/Login'}>Login</Link>
                    <Link className="menu" to={'/Diary'}>Diary</Link>
                    <Link className="menu" to={'/Mypage'}>Mypage</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;