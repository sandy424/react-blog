import React from "react";
import '../style/Style.css';
import search from '../../img/search button.png';

function Home() {
    return(
        <nav className="nav">
            <div className="top-wrapper">
                <h2>오늘의 Top</h2>

                <div className="boxs">
                    <div className="feed-box">
                        {/* <div className="thumb"></div> */}
                        <p><strong>title</strong><br/>내용</p>
                    </div>
                    <div className="feed-box">
                        <div className="thumb"></div>
                        <p><strong>title</strong><br/>내용</p>
                    </div>
                    <div className="feed-box">
                        <div className="thumb"></div>
                        <p><strong>title</strong><br/>내용</p>
                    </div>
                
                    <div className="search-bar">
                        <input type="text" placeholder="search"/>
                        <button className="search-btn">
                            <img src={search}/>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Home;