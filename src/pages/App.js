<<<<<<< HEAD
import {useState, useEffect} from 'react';
import '../css/SplashPage.css';
=======
import {useState} from 'react';

>>>>>>> 59ce4e593e96aa1598f9b2a0749c5e1e2e9750af
import '../css/App.css';
import TweetFeed from '../components/TweetFeed';
import NavBar from '../components/NavBar';
import NewsFeed from '../components/NewsFeed';
import TweetShowPage from '../components/TweetShowPage';
import SplashPage from '../components/SplashPage';

function App() {

  const [showPageHidden, setShowPageHidden] = useState({ showPageHidden: true });
  
	const toggleShowPageHide = () => {
		setShowPageHidden({ showPageHidden: !showPageHidden.showPageHidden });
	};

<<<<<<< HEAD
=======
  const [showTweet, setShowTweet] = useState({});
  const handleTweetShowPage = async (id) => {
    try {
    const res = await fetch(`https://tweeter-api-goat.herokuapp.com/tweets/${id}`);  
    const data = await res.json();
    setShowTweet(data.tweet);
    toggleShowPageHide();
    } catch (err) {
      console.error(err)
    }
  }
>>>>>>> 59ce4e593e96aa1598f9b2a0749c5e1e2e9750af

  return (
    <div className="App">
      
      <nav>
        <NavBar/>
      </nav>
      <div className="app-right">
        <section id="tweets-section">
          <TweetFeed handleTweetShowPage={handleTweetShowPage}/>
        </section>
        {showPageHidden.showPageHidden === false ? (
          <section id="tweet-show-page-section">
            <TweetShowPage 
              toggleShowPageHide={toggleShowPageHide}
              showTweet={showTweet}
            />
          </section>
				) : (
					''
				)}
        <section id="news-section">
          <NewsFeed />
        </section>
      </div>
    </div>
  )
}

export default App;
