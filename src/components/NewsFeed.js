import '../css/NewsFeed.css'
import '../css/App.css'

export default function NewsFeed(props) {
  return (
      <>
    <div className="news-container">
        <div><h2 className="section-head bold">What's happening</h2></div>
        <div className="news-item"><h5 className="news-item-trending">Software Downloads - Trending</h5>
        <h4 className="news-item-headline">Big Poppa Code is the greatest thing ever, says all General Assembly students</h4>
        <h5 className="news-item-footer">40K Tweets</h5>
    </div>
  
  <div className="news-item">
    <div className="img-text">
      <div className="text">
        <h5 className="news-item-trending">Trending in Sesame Street</h5>
        <h4 className="news-item-headline">#NeedMoreCookies</h4>
        <h5 className="news-item-footer">Promoted by Cookie Monster</h5>
      </div>
      <img src="https://s.abcnews.com/images/US/cookie-monster-file-ap-jef-191104_hpMain_4x5_992.jpg" alt="Cookie Monster" className="news-img" />
    </div>
    </div>
    <div className="news-item"><h5 className="news-item-trending">News of the Weird</h5>
        <h4 className="news-item-headline">Tennessee man leaves $5 million to pet border collie</h4>
         <p className="news-item-body">It won’t be a dog’s life for a Tennessee canine whose owner recently died.

Lulu, an 8-year-old border collie, will be living the good life in Nashville after inheriting $5 million in her owner’s will, WTVF-TV reported.</p>
        <h5 className="news-item-footer">3K Tweets</h5>
    </div>
  
  
  <div className="news-item">
    <div className="img-text">
      <div className="text">
        <h5 className="news-item-trending">Grammys</h5>
        <h4 className="news-item-headline">Beyonce won all the Grammys</h4>
      </div>
      <img src="https://static01.nyt.com/images/2021/03/14/arts/Grammys-Beyonce-02/Grammys-Beyonce-02-superJumbo.jpg" alt="Beyonce" className="news-img" />
    </div>
    </div>
  <div className="news-item"><h5 className="news-item-trending">Trending - Sports</h5>
    <h4 className="news-item-headline">#BracketChallenge</h4>
    <p className="news-item-body">Everyone in the U.S. is filling out their NCAA tournament brackets.</p>
    <h5 className="news-item-footer">110K Tweets</h5>
</div>
</div>

<div className="news-container">
  <div><h2 className="section-head bold">Who to follow</h2></div>
  
  <div className="news-item follow">
    <img src="https://cdn11.bigcommerce.com/s-6zp1m7t9y2/images/stencil/500x659/products/155/490/mondo-mitchell-wolverine-xmen-yellow-blue-ssite__04112.1490648023.jpg?c=2" alt="Wolverine" className="follow-img" />
    <div className="follow-text">
      <h4 className="follow-name bold">Wolverine</h4>
      <p className="follow-handle bold">@Wolverine</p>
    </div>
    <div className="follow-button-container">
   <button className="follow-button">Follow</button>
    </div>
  </div>
  
  <div className="news-item follow">
    <img src="https://cdn.shopify.com/s/files/1/0558/2081/articles/Mitchell_KyloRen_Square_grande_c339d7c9-6c42-49b2-96eb-e182cb7505b9.jpg?v=1581592699" alt="Kylo Ren" className="follow-img" />
    <div className="follow-text">
      <h4 className="follow-name bold">Kylo Ren</h4>
      <p className="follow-handle bold">@Kylo</p>
    </div>
    <div className="follow-button-container">
   <button className="follow-button">Follow</button>
    </div>
  </div>
  
  <div className="news-item follow">
    <img src="https://www.designbolts.com/wp-content/uploads/2014/06/Captain-america.jpg" alt="Captain America" className="follow-img" />
    <div className="follow-text">
      <h4 className="follow-name bold">Captain America</h4>
      <p className="follow-handle bold">@Cap</p>
    </div>
    <div className="follow-button-container">
   <button className="follow-button">Follow</button>
    </div>
  </div>
</div>
</>
  );
}