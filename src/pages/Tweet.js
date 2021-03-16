import '../scss/tweet.scss';
export default function Tweet(props) {
    return (   
        <form id="tweet_form">
            <label>Title
                <input type="text" name="title" />
            </label>
            <label>What's happening?
                <input type="text" name="content" />
            </label>
            <label>Author
                <input type="text" name="author" />
            </label>
                <input type="submit" value="Submit" />
        </form>
    )
}