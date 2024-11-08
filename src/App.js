import React, { useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Destinsation from './components/Destinations';
import Slide from './components/Slide';
import Block from './components/Block';
import Story from './components/Story';
import Featured from './components/Featured';
import Explore from './components/Explore';
import Footer from './components/Footer';

function App() {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [commenterName, setCommenterName] = useState('');
  const [blogId, setBlogId] = useState('');

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  const fetchContent = (contentUrl, cssFile) => {
    fetch(contentUrl)
      .then(response => response.text())
      .then(htmlContent => {
        let newWindow = window.open("", "_blank");
        newWindow.document.write(htmlContent);
        let linkElement = newWindow.document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.type = 'text/css';
        linkElement.href = cssFile;
        newWindow.document.head.appendChild(linkElement);
      })
      .catch(error => console.error('Error fetching document:', error));
  };

  // Comment submission
  const addComment = () => {
    fetch("/add_comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        blog_id: blogId,
        commenter_name: commenterName,
        comment_text: commentText
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log(data.message);
      })
      .catch(error => {
        console.error("There was a problem with your fetch operation:", error);
      });
  };

  const getComments = (blog_id) => {
    fetch(`/get_comments/${blog_id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setComments(data);
      })
      .catch(error => {
        console.error("There was a problem with your fetch operation:", error);
      });
  };

  return (
    <div className="App">
      <div className="top-bar">
        <div className="h">
          <h1>We`blog</h1>
        </div>
        <div id="input3">
          <button type="button" onClick={() => openLink('/register')}>Register</button>
          <button type="button" onClick={() => openLink('/login')}>Log in</button>
        </div>
      </div>
       
      <div id="Tab-bar">
        <div className="Search1">
          <section className="search-button">
            <input type="text" id="input" placeholder="Search..." />
            <button type="button"><i className="fa fa-search"></i></button>
          </section>
        </div>

        <div className="mainbuttons">
          <button className="b1" type="button" onClick={() => openLink('/')}>Home</button>
          <button className="b1" type="button" onClick={() => openLink('/about')}>About</button>
          <button className="b1" type="button">Travel</button>
          <button className="b1" type="button">Relax</button>
          <button className="b1" type="button">Eat</button>
        </div>

        <div className="fa">
          <button className="b2" type="button" onClick={() => openLink('https://www.instagram.com/')}><i className="fa fa-instagram"></i></button>
          <button className="b2" type="button" onClick={() => openLink('https://www.pinterest.com/')}><i className="fa fa-pinterest"></i></button>
          <button className="b2" type="button" onClick={() => openLink('https://www.facebook.com/')}><i className="fa fa-facebook"></i></button>
          <button className="b2" type="button" onClick={() => openLink('https://twitter.com/')}><i className="fa fa-twitter"></i></button>
        </div>
      </div>

      <div className="imgcontainer">
        <img src="images/Denmark-GettyImages-587892190.webp" alt="Front" className="FrontImg1" />
        <div className="imgcontent">
          <h2>Travel Blogs</h2>
        </div>
      </div>

      <div className="ct">
        <p> terrace bar beckons you to indulge in an evening of refined relaxation and exquisite enjoyment.
            Step into our haven of tranquility, where the soft glow of ambient lighting and the gentle rustle of foliage
            create an inviting atmosphere. Whether you're seeking a quiet retreat or a lively soirée, our terrace bar
            offers the perfect setting. Sip on handcrafted cocktails expertly crafted by our skilled bartenders, or
            tantalize your taste buds with our delectable menu of small bites and snacks....</p>
      </div>

    <Slide />

     <Featured />
     
      <Router>
      <Routes>
        <Route path="/" element={<Block />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </Router> 
      
      <div className="Arena">
        <div className="line-above"></div>
        <div className="ted">Destination Guides</div>
     
      </div>

      <Destinsation />

     
     
    <div class="Arena2">
        <div class="line-above"></div>
       
      
<Explore />
    </div>
     <Footer/>
     </div>
     
  );
}

export default App;
