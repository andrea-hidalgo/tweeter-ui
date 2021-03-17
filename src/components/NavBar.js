import { Link } from 'react-router-dom';


function NavBar () {
    return (
            <div className="container">
                <p>Twitter Side Bar</p>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>    
                    <li>
                        <Link to="/about">About the Goat Squad</Link>
                    </li>
                    <li>
                        <Link to="/">Discover</Link>
                    </li>
                    <li>
                        <Link to="/">Search</Link>
                    </li>
                    <li>
                        <Link to="/">My Profile</Link>
                    </li>
                    <li>
                        <Link to="/">The DMs</Link>
                    </li>
                </ul>
            </div>
            
    )
}

export default NavBar;