import { useState, useEffect } from 'react';
export default function TweetFeed(props) {
    
    const [tweets, setTweets] = useState([]);
    useEffect( () => {
        const makeAPICall = async () => {
          try {
          const res = await fetch('http://localhost:3000/tweets');  
          const data = await res.json();
          setTweets(data.tweets);
          } catch (err) {
             console.error(err)
          }
        }
        makeAPICall()
      }, [])
    
   
    return (   
        
        <div className="tweeter">
           
            <form className="tweet_form">
            {/* <label className="label_form">
                <input type="text" name="title" />
            </label> */}
                <label className="label_form">
                    <input type="text" name="content" placeholder="What's happening?" />
                </label>
            {/* <label className="label_form">
                <input type="text" name="author" />
            </label> */}
            <button className="tweet_button" type="submit" value="Submit">Tweet</button>
            </form>
            <div className="tweet_feed">
                <ul>
                    {tweets.map(tweet => {
                        return (          
                            <li key={tweet.id}>
                                {tweet.author}
                                {tweet.title}
                                {tweet.content}
                            </li>)
                    })}      
                </ul>
            </div>
            
        </div>
    )
}