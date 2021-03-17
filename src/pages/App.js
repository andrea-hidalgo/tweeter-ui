import '../App.css';
import TweetFeed from '../components/TweetFeed';

function App() {
  return (
    <div className="App">
      <nav>
        {/* Marsallis - NavBar component*/}
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
