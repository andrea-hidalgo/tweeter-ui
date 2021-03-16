import '../App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavBar/>
        </nav>
        <section id="tweets-section">
          {/* Kellie - TweetFeed component */}
        </section>
        <section id="tweet-show-page-section">
        </section>
        <section id="news-section">
          {/* Ryan - NewsFeed component*/}
        </section>
      </div>
    </Router>
  );
}

export default App;
