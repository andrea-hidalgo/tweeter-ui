import '../css/TweetFeed.css'
import '../css/TweetShowPage.css'

export default function TweetShowPage(props) {

    return (
        <div className="tweet-show-page-container">
            <div className="show-page-header">
                <div className="back-arrow" onClick={props.toggleShowPageHide}>
                    <p>back</p>
                </div>
            </div>
        </div>
    )
}