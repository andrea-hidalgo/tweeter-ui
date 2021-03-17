import '../App.css';
<<<<<<< HEAD
import NavBar from '../components/NavBar';
=======
import TweetFeed from '../components/TweetFeed';
>>>>>>> e28357bbc6f425021cec2915a02d471251756bb9

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
