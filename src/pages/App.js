import '../App.css';

function App() {
  return (
    <div className="App">
      <nav>
        {/* Marsallis */}
      </nav>
      <section id="tweets-section">
        <h1>Latest and Greatest Tweets</h1>
        <form id="tweet_form">
            <label>Title
              <input type="text" name="title" />
            </label>
            <label>Content
              <input type="text" name="content" />
            </label>
            <label>Author
              <input type="text" name="author" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        {/* Kellie */}
      </section>
      <section id="news-section">
        {/* Ryan */}
      </section>
    </div>
  );
}

export default App;
