import '../css/TweetFeed.css'
import { useState, useEffect, useRef } from 'react';

export default function TweetFeed(props) {
    
    const [tweets, setTweets] = useState([]);
    const input = useRef(null);
    
    useEffect( () => {
        const makeAPICall = async () => {
          try {
          const res = await fetch('https://tweeter-api-goat.herokuapp.com/tweets');  
          const data = await res.json();
          setTweets(data.tweets);
          } catch (err) {
             console.error(err)
          }
        }
        makeAPICall()
      }, []);

    const handleSubmit = async event => {
        event.preventDefault();
        const value = input.current.value;
        try {
            const response = await fetch('https://tweeter-api-goat.herokuapp.com/tweets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                     content: value
                })
            });
            const data = await response.json();
            setTweets([data.tweet,...tweets]);
            input.current.value = '';
        } catch (error) {
            console.error(error);
        }
    };
       
 return (   
        
        <div className="tweet-feed-container">
            <div className="home-header">
                <span className="bold">Home</span>
                <div className="home-header-icon"></div>
            </div>

            <div className="tweet-form-container">
                <div className="tweet-profile-section">
                    <div className="tweet-profile-pic"></div>
                </div>
                <form className="tweet_form" onSubmit={handleSubmit}>
                        <label className="label_form">
                            <input type="text" name="content" ref={input} placeholder="What's happening?" />
                        </label>
                    <input className="tweet_button" type="submit" value="Tweet"></input>
                </form>
            </div>
            
            <div className="tweet-feed-division"></div>

            <div className="tweet_feed">
                <ul>
                    {tweets.map((tweet, id) => {
                        return (          
                            <div className="tweet-container" key={id}> 

                            <div className="tweet-profile-section">
                                <img className="tweet-profile-pic" src={tweet.profile}></img>
                            </div>

                            <div className="tweet-information">
                                <div className="tweet-author"><span className="bold">{tweet.title}</span> @{tweet.author} &#183; 12m </div>
                                <div className="tweet-text"> {tweet.content}</div>
                                <div className="tweet-icons"></div>
                            </div>

                            </div>

                            )
                    })}      
                </ul>
            </div>
            
        </div>
    )
}