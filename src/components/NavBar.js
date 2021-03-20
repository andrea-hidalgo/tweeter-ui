import { Link } from 'react-router-dom';
import '../css/NavBar.css'

function NavBar () {
    return (
            <div className="navbar-container">
                <div className="nav-top">
                    <div className="twitter-logo-container">
                        <div className="twitter-logo"></div>
                    </div>
                    <ul>
                        <li className="home-list-item">
                            <Link to="/main">
                                <div className="nav-icon home-icon"></div>
                                <span>Home</span>
                            </Link>
                        </li>    
                        <li>
                            <Link to="/about">
                                <div className="nav-icon explore-icon"></div>
                                <span>GOAT squad</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/main">
                                <div className="nav-icon notifications-icon"></div>
                                <span>Notifications</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/main">
                                <div className="nav-icon messages-icon"></div>
                                <span>Messages</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/main">
                                <div className="nav-icon bookmarks-icon"></div>
                                <span>Bookmarks</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/main">
                                <div className="nav-icon lists-icon"></div>
                                <span>Lists</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/main">
                                <div className="nav-icon profile-icon"></div>
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/main">
                                <div className="nav-icon more-icon"></div>
                                <span>More</span>
                            </Link>
                        </li>
                    </ul>
                    <button>Tweet</button>
                </div>
                <div className="nav-bottom">
                    <div className="nav-profile-item">
                        <div className="nav-profile-pic"></div>
                        <div className="nav-profile-info">
                            <p><b>GA Student</b></p>
                            <p>@ga_student</p>
                        </div>
                        <div className="nav-profile-more-icon"></div>
                    </div>
                </div>
            </div>
            
    )
}

export default NavBar;