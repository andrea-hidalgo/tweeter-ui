

export default function Tweet(props) {
    
    
    return (   
        <div className="tweeter">
            <form className="tweet_form" >
            {/* <label>
                <input type="text" name="title" />
            </label> */}
                <label>
                    <input type="text" name="content" placeholder="What's happening?" />
                </label>
            {/* <label>
                <input type="text" name="author" />
            </label> */}
            <button className="tweet_button" type="submit" value="Submit">Tweet</button>
            </form>
            
        </div>
    )
}