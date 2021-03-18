import '../css/TweetFeed.css'
import { useState, useEffect } from 'react';
export default function TweetFeed(props) {
    
const [tweets, setTweets] = useState([]);
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
    }, [])
    
   
    return (   
        
        <div className="tweet-feed-container">
            <div className="home-header">
                <span className="bold">Home</span>
                <div className="home-header-icon"></div>
            </div>

            <div className="tweet-form-container">
                <div className="tweet-profile-section">
                    <div className="tweet-profile-pic"></div>
                    {/* <img className="tweet-profile-pic" src='../images/lego1.jpg'></img> */}
                </div>
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
                    <input className="tweet_button" type="submit" value="Tweet"></input>
                </form>
            </div>
            
            <div className="tweet-feed-division"></div>

            <div className="tweet_feed">
                <ul>
                    {tweets.map(tweet => {
                        return (          
                            <div className="tweet-container"> 

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