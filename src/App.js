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

// Placeholder components for missing routes
const About = () => <div>About Page</div>;

function App() {
  const [loading, setLoading] = useState(true);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loading screen after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  const LoadingScreen = () => (
    <div id="loading-screen">
      <div className="loading-dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        
          
      </div>
    </div>
  );

  return (
    <Router>
      {loading && <LoadingScreen />}
      {!loading && (
        <div className="App">
          <nav className="top-bar">
            <div className="h">
              <h1>We`blog</h1>
            </div>
            <div className={`nav-menu ${navbarOpen ? 'open' : ''}`}>
              <div className="mainbuttons">
                <Link className="b1" to="/">Home</Link>
                <Link className="b1" to="/about">About</Link>
                <button className="b1">Travel</button>
                <button className="b1">Relax</button>
                <button className="b1">Eat</button>
              </div>
            </div>
            <div className="right-section">
              <div className="social-icon">
                <button type="button" onClick={() => openLink('https://www.instagram.com/')}>
                  <FaInstagram />
                </button>
                <button type="button" onClick={() => openLink('https://www.pinterest.com/')}>
                  <FaPinterest />
                </button>
                <button type="button" onClick={() => openLink('https://www.facebook.com/')}>
                  <FaFacebook />
                </button>
                <button type="button" onClick={() => openLink('https://twitter.com/')}>
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
            <Route path="/about" element={<About />} />
            <Route path="/story" element={<Story />} />
          </Routes>

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
      )}
    </Router>
  );
}

export default App;
