import '../css/TweetFeed.css'

export default function TweetFeed(props) {
    return (   
        <div className="tweeter">
            <form className="tweet_form">
            {/* <label>
                <input type="text" name="title" />
            </label> */}
                <label>
                    <input type="text" name="content" placeholder="What's happening?" />
                </label>
            {/* <label>
                <input type="text" name="author" />
            </label> */}
            </form>
            <button className="tweet_button" type="submit" value="Submit">Tweet</button>
        </div>
    )
}