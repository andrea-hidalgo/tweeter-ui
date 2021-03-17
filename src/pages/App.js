import '../App.css';
import TweetFeed from '../components/TweetFeed';
import NavBar from '../components/NavBar';

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar/>
      </nav>
      <section id="tweets-section">
        {/* Kellie - TweetFeed component */}
      </section>
      <section id="tweet-show-page-section">
        <TweetFeed />
      </section>
      <section id="news-section">
        {/* Ryan - NewsFeed component*/}
      </section>
    </div>
  )
}

export default App;
