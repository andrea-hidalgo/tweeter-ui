import '../css/TweetFeed.css'
import '../css/TweetShowPage.css'

export default function TweetShowPage(props) {

    return (
        <div className="tweet-show-page-container">
            <div className="tweet-header">
                <div className="back-arrow-container" onClick={props.toggleShowPageHide}>
                    <div className="back-icon-container">
                        <div className="back-arrow-icon"></div>
                    </div>
                </div>
                <span className="bold">Tweet</span>
            </div>
            
            <div className="tweet-container"> 
                <div className="tweet-profile-section">
                    <img className="tweet-profile-pic" src={props.showTweet.profile} alt="profile"></img>
                    <div className="tweet-author">
                        <p className="bold">{props.showTweet.title}</p> 
                        <p className="username">@{props.showTweet.author}</p>  
                    </div>
                </div>

            <div className="tweet-information">
                <div className="tweet-text"> {props.showTweet.content}</div>
                <div className="tweet-date">8:53 PM &#183; Mar 17, 2021 &#183; Twitter Web App</div>
                <div className="tweet-stats"> 
                    <p><span className="bold">2,389</span> <span className="username">Retweets</span></p>
                    <p><span className="bold">147</span> <span className="username">Quote Tweets</span></p>
                    <p><span className="bold">54.2K</span> <span className="username">Likes</span></p>
                </div>
                <div className="tweet-icons-container">
                    <div className="tweet-icons">
                        <div className="comment-icon-container">
                            <div className="comment-icon"></div>
                        </div>
                        <div className="retweet-icon-container">
                            <div className="retweet-icon"></div>
                        </div>
                        <div className="like-icon-container">
                            <div className="like-icon"></div>
                        </div>
                        <div className="share-icon-container">
                            <div className="share-icon"></div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}