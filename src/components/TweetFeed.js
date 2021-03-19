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
        <>
        <div className="tweeter">
            <form className="tweet_form" onSubmit={handleSubmit}>
                <label className="label_form">
                    <input type="text" name="content" ref={input} placeholder="What's happening?" />
                </label>
            <input className="tweet_button" type="submit" value="Tweet" />
            </form>
            <div className="tweet_feed">
                <ul>
                    {tweets.map((tweet, id) => {
                        return (          
                            <li key={id}>
                                {tweet.author}
                                {tweet.title}
                                {tweet.content}
                            </li>
                        )
                    })}      
                </ul>
            </div>
            
        </div>
        </>
    )
}