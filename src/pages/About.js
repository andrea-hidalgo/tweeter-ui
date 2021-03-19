import React, { useState, useEffect } from 'react';
import '../css/AboutPage.css'

function About() {
	const [offsetY, setOffsetY] = useState(0);
	const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
		window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
	}, []);

  return (

<div className='aboutContainer'>
<div className="About_Page__background"
					style={{ transform: `translateY(-${offsetY * 0.9}px)` }}
				/>
<br /> 
  <br />
  <br />
<div className="about">
    <img className='aboutImage' src='https://i.imgur.com/YKsNYUX.gif' ></img>
  </div>

  <br /> 
  <br />
  <br />
  <br />
  <div className="company"><h1>Our Company</h1>
    <hr />
    <br />
    <h4>Tweeter is a service committed to diversity in its many forms. Tweeter is a community oriented platform that is home to a variety of opinions, people, insights and backgrounds. It was founded by Team Goat in 2021 in the SEIR-Ruth Cohort of General Assembly by  Kellie, Parker, Kevin, Allegra, Joseph, Andrea, Marsallis, and Ryan.</h4>
  </div> 
<br />
  <br />
  <div className="principles"><h1>Our Principles</h1>
    <hr />
    <br />
    <h2>Creating a community</h2>
    <h4>The purpose of Tweeter is to create a community that contributes their <br /> own unique perspectives and ideas through our consinstently improving technology.</h4>
    <br />
    <h2>Promoting Health</h2>
    <h4>Healthy conversations are a part of Tweeter. Converse about sports, daily <br />happenings or anything that you can think of which can be healthy for users.</h4>
    <br />
    <h2>Being Fun</h2>
    <h4>Tweeter values being fun for its users, and Team Goat values having fun<br /> while creating this project as a group.</h4>
  </div>
  <div className="mission">
    <h1>Our Mission</h1>
    <hr />
    <br />
    <h4>The Mission of Team Goat is to work as a team, execute our vision, and continue the legacy of Goats that have come before us.</h4>
  </div>
  <br />

  <div className="meetteam"><h1>Meet Team GOAT</h1>
  <hr />
  </div>
  <br />
  <br />
  <div className='kelliepicdiv'>
  <h2>Kellie Matteson</h2>
  <hr></hr>
  <br />
  <img className='kelliepic' src='https://i.imgur.com/F9OeeGQ.jpg'></img>
  </div>
  <div className='kellieInfo'>
  <h4> Kellie is an actor who codes. It is an easy fit for her because the two require a similar approach. Acting allows Kellie to find her own way into a character. With programming, she can step into challenges with an open mind and leverage the tools available to creatively problem solve and breathe life into products.</h4>
  </div>
  <br /> 
  <br /> 
  <br />
  <br /> 
  <br /> 
  <br />
  <div className='parkerpicdiv'>
  <h2>Parker Doyle</h2>
  <hr />
  <br />
<img className='parkerpic' src='https://i.imgur.com/wHVNXZh.jpg'></img>
  </div>
  <div className='parkerInfo'>
  <h4>Parker functions with an exemplary work ethic and resolve to complete tasks proffesionally and timely. While remaining focused on the task at hand, he remains open to increasing his knowledge, experience and honing his skillset as an entrepreneur and developer.</h4>
  </div>
  <br /> 
  <br /> 
  <br />
  <br /> 
  <br /> 
  <br />
  <div className='kevinpicdiv'>
  <h2>Kevin Mathews</h2>
  <hr />
  <br />
  <img className='kevinpic' src='https://i.imgur.com/lXAtY9U.jpg'></img>
  </div>
  <div className='kevinInfo'>
  <h4>Kevin is a web developer with a background in sales and entrepreneurship. As a business owner, Kevin learned how to handle and resolve a wide range of issues which now enables him to approach projects with confidence and creativity. He brings his passion for a clean and organized work product into each project, and he loves nothing more then working as a team to find the most efficient and elegant solutions to complex problems.</h4>
  </div>
  <br /> 
  <br /> 
  <br />
  <br /> 
  <br /> 
  <br />
  <div className='allegrapicdiv'>
  <h2>Allegra Hilburger</h2>
  <hr />
  <br />
  <img className='allegrapic' src='https://i.imgur.com/T8Gur99.jpg'></img>
  </div>
  <div className='allegraInfo'>
  <h4>My core values are Honesty, Integrity, Compassion, and Commitment. As a mother, entrepreneur and software engineer, I strive to make the world a better place. Whether it is something within the home or software that can impact the world, I bring a positive and inspired attitude to all that I do. I believe that problems are solved best when everyone collaborates together, and as an individual I have the strong work ethic and motivation to do my part.</h4>
  </div>
  <br /> 
  <br /> 
  <br />
  <br /> 
  <br /> 
  <br />
  <div className='josephpicdiv'>
  <h2>Joseph Hatzilazaridis</h2>
  <hr />
  <br />
  <img className='josephpic' src='https://i.imgur.com/oALwdkP.jpg'></img>
  </div>
  <div className='josephInfo'>
  <h4>Joseph is an experienced Electrical Project Engineer with a demonstrated work history in major public works & infrastructure projects in NYC. </h4>
  </div>
  <br /> 
  <br /> 
  <br />
  <br /> 
  <br /> 
  <br />
  <br /> 
  <br />
  <br /> 
  <br />
  <div className='andreapicdiv'>
  <h2>Andrea Hidalgo</h2>
  <hr />
  <br />
  <img className='andreapic' src='https://i.imgur.com/FL9wJTq.jpg'></img>
  </div>
  <div className='andreaInfo'>
  <h4>Andrea is a Software Engineer Fellow with a strong background in technical customer service.</h4>
  </div>
  <br /> 
  <br /> 
  <br />
  <br /> 
  <br /> 
  <br />
  <br /> 
  <br />
  <br /> 
  <br />
  <br /> 
  <br />
  <div className='marsallispicdiv'>
  <h2>Marsallis Faircloth</h2>
  <hr />
  <br />
  <img className='marsallispic' src='https://i.imgur.com/qqcLQ2a.jpg'></img>
  </div>
  <div className='marsallisInfo'>
  <h4>Marsallis is a Software Engineer who is strong-willed, determined, team-oriented, focused and willing to learn. His passion for development stems from helping others, especially his family- to help grow their businesses into successful modern day corporations. Marsallis fell in love with development once he realized he had all the tools to set other people up for success and to be able to see a smile on someone's face, as they see an application or a website customizable and personable to them.</h4>
  </div>
  <br /> 
  <br /> 
  <br />
  <br /> 
  <br /> 
  <br />
  <div className='ryanpicdiv'>
  <h2>Ryan Reiterman</h2>
  <hr />
  <br />
  <img className='ryanpic' src='https://i.imgur.com/KhX9ckv.jpg'></img>
  </div>
  <div className='ryanInfo'>
  <h4>Ryan is an experienced digital producer, content creator and problem-solver for companies like Golf Channel, Disney World and Red Hat. He loves creating great user experiences through web production and coding.</h4>
  </div>
	
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

<div className="footer">
    <div className="footer-item">
      
    </div>
    <a className="footer-item">
      Help Center
    </a>
    <a className="footer-item">
      Terms of Service
    </a>
    <a className="footer-item">
      Privacy Policy
    </a>
    <a className="footer-item">
      Cookie Policy
    </a>
    <a className="footer-item">
      Ads info
    </a>
    <a className="footer-item">
      Blog
    </a>
    <a className="footer-item">
      Status
    </a>
    <a className="footer-item">
      Careers
    </a>
    <a className="footer-item">
      Brand Resources
    </a>
    <a className="footer-item">
      Advertising
    </a>
    <a className="footer-item">
      Marketing
    </a>
    <a className="footer-item">
      Tweeter for Business
    </a>
    <a className="footer-item">
      Developers
    </a>
    <a className="footer-item">
      Directory
    </a>
    <a className="footer-item">
      Settings
    </a>
    <a className="footer-item">
      © 2021 Tweeter, Inc.
    </a>
  </div>
  <br />

  <div
					className="background-triangles"
					style={{ transform: `translateY(${offsetY * .75}px)` }}
				/>
  </div>

  )}
export default About;