import React, { useEffect, useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaInstagram, FaPinterest, FaFacebook, FaTwitter } from 'react-icons/fa';
import Destinations from './components/Destinations';
import Slide from './components/Slide';
import Block from './components/Block';
import Story from './components/Story';
import Featured from './components/Featured';
import Explore from './components/Explore';
import Footer from './components/Footer';

function App() {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the loader timing

    return () => clearTimeout(timer);
  }, []);

  const SocialIcons = () => (
    <div className="social-icons">
      <button className="b2" type="button" onClick={() => openLink('https://www.instagram.com/')}>
        <FaInstagram />
      </button>
      <button className="b2" type="button" onClick={() => openLink('https://www.pinterest.com/')}>
        <FaPinterest />
      </button>
      <button className="b2" type="button" onClick={() => openLink('https://www.facebook.com/')}>
        <FaFacebook />
      </button>
      <button className="b2" type="button" onClick={() => openLink('https://twitter.com/')}>
        <FaTwitter />
      </button>
    </div>
  );

  return (
    <Router>
      <div className="App">
        {/* Loader */}
        <div id="loading-screen" className={loading ? 'show' : 'hide'}>
          <div className="loading-container">
            <div className="loading-circle"></div>
          </div>
        </div>

       
        <nav className="top-bar">
  <div className="h">
    <h1>We`blog</h1>
  </div>
  <div className="nav-menu">
    <div className="mainbuttons">
      <Link className="b1" to="/">Home</Link>
      <Link className="b1" to="/about">About</Link>
      <button className="b1" type="button">Travel</button>
      <button className="b1" type="button">Relax</button>
      <button className="b1" type="button">Eat</button>
    </div>
  </div>
  <div className="right-section">
  <div className="social-icons">
  <button className="b2" type="button" onClick={() => openLink('https://www.instagram.com/')}>
    <FaInstagram />
  </button>
  <button className="b2" type="button" onClick={() => openLink('https://www.pinterest.com/')}>
    <FaPinterest />
  </button>
  <button className="b2" type="button" onClick={() => openLink('https://www.facebook.com/')}>
    <FaFacebook />
  </button>
  <button className="b2" type="button" onClick={() => openLink('https://twitter.com/')}>
    <FaTwitter />
  </button>
</div>

    <div className="Search1">
      <section className="search-button">
        <input type="text" id="input" placeholder="Search..." />
        <button type="button">
          <i className="fa fa-search"></i>
        </button>
      </section>
    </div>
  </div>
</nav>


     
        <div className="imgcontainer">
          <img src="images/Denmark-GettyImages-587892190.webp" alt="Front" className="FrontImg1" />
          <div className="imgcontent">
            <h2>Travel Blogs</h2>
          </div>
        </div>

    
        <div className="ct">
          <p>
            Terrace bar beckons you to indulge in an evening of refined relaxation and exquisite enjoyment...
          </p>
        </div>
        <Slide />
        <Featured />

        
        <Routes>
          <Route path="/" element={<Block />} />
          <Route path="/story" element={<Story />} />
        </Routes>

        {/* Destinations Section */}
        <div className="Arena">
          <div className="line-above"></div>
          <div className="ted">Destination Guides</div>
        </div>
        <Destinations />

     
        <div className="Arena2">
          <div className="line-above"></div>
          <Explore />
        </div>

       
        <Footer />
      </div>
    </Router>
  );
}

export default App;
