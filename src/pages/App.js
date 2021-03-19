import {useState, useEffect} from 'react';

import '../css/App.css';
import TweetFeed from '../components/TweetFeed';
import NavBar from '../components/NavBar';
import NewsFeed from '../components/NewsFeed';
import TweetShowPage from '../components/TweetShowPage';

function App() {

  const [showPageHidden, setShowPageHidden] = useState({ showPageHidden: true });
  
	const toggleShowPageHide = () => {
		setShowPageHidden({ showPageHidden: !showPageHidden.showPageHidden });
	};

  return (
    <div className="App">
      <nav>
        <NavBar/>
      </nav>
      <div className="app-right">
        <section id="tweets-section">
          <TweetFeed toggleShowPageHide={toggleShowPageHide}/>
        </section>
        {showPageHidden.showPageHidden === false ? (
          <section id="tweet-show-page-section">
            <TweetShowPage 
              toggleShowPageHide={toggleShowPageHide}
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
