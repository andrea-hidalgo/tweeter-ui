import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About' ;

function App () {
    return (
        <Router>
            <div className="container">
                <p>Twitter Side Bar</p>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/about">About the Goat Squad</Link>
                        <Link to="">Discover</Link>
                        <Link to="">Search</Link>
                        <Link to="">My Profile</Link>
                        <Link to="">The DMs</Link>
                    </li>
                </ul>
            </div>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
        </Router>
    )
}