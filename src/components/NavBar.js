import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/App';
import About from '../pages/About' ;


function NavBar () {
    return (
        <Router>
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
                        <Link to="">Discover</Link>
                    </li>
                    <li>
                        <Link to="">Search</Link>
                    </li>
                    <li>
                        <Link to="">My Profile</Link>
                    </li>
                    <li>
                        <Link to="">The DMs</Link>
                    </li>
                </ul>
            </div>
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
            
        </Router>
    )
}

export default NavBar;