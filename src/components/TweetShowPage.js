import '../css/TweetFeed.css'
import '../css/TweetShowPage.css'

export default function TweetShowPage(props) {

    return (
        <div className="tweet-show-page-container">
            <div className="tweet-header">
                <div className="back-arrow" onClick={props.toggleShowPageHide}>
                    <p>back</p>
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
                <div className="tweet-icons"></div>
            </div>

            </div>
        </div>
    )
}