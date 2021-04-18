import {useState} from 'react';
import '../css/App.css';
import TweetFeed from '../components/TweetFeed';
import NavBar from '../components/NavBar';
import NewsFeed from '../components/NewsFeed';
import TweetShowPage from '../components/TweetShowPage';
import SplashPage from '../components/SplashPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid, Row, Col } from 'react-bootstrap';

function App() {

  const [showPageHidden, setShowPageHidden] = useState({ showPageHidden: true });
  
	const toggleShowPageHide = () => {
		setShowPageHidden({ showPageHidden: !showPageHidden.showPageHidden });
	};

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

  return (
    <div className="App">
      <Row>
      <Col className='d-lg-none d-md-none d-sm-none d-xs-none'>
      <nav>
        <NavBar/>
      </nav>
      </Col>
      <div className="app-right">
      <Col md='auto'>
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
        </Col> 
        <Col className='d-lg-block d-md-none d-sm-none d-xs-none'>
        <section id="news-section">
          <NewsFeed />
        </section>
        </Col>
      </div>
     
      </Row>
    </div>
    
  )
}

export default App;
