
import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {

  const [commenterName, setCommenterName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (commenterName && commentText) {
      const newComment = {
        commenter_name: commenterName,
        comment_text: commentText,
      };
      setComments([...comments, newComment]);
      setCommenterName('');
      setCommentText('');
    } else {
      alert('Please fill in both fields');
    }
  };

  const instalink = () => {
    window.open('https://www.instagram.com', '_blank');
  };

  const pinlink = () => {
    window.open('https://www.pinterest.com', '_blank');
  };

  const facelink = () => {
    window.open('https://www.facebook.com', '_blank');
  };
  const xlink = () => {
    window.open('https://www.twitter.com', '_blank'); 
  };

  return (
    <div className="footer">
      <div className="comment-section">
        <h2>Leave a Comment</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={commenterName}
          onChange={(e) => setCommenterName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your Comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button onClick={addComment}>Post Comment</button>
<div className='r'>
        <h3>Comments ~</h3>
        {comments.length === 0 ? (
          <p>No comments yet</p>
        ) : (
          <ul className="comment-list">
            {comments.map((comment, index) => (
              <li key={index}>
                <strong>{comment.commenter_name} : <i>{comment.comment_text}</i></strong>
              </li>
            ))}
          </ul>
        )}
        </div>
      </div>

      <div className="footer-center">
        <h3>Follow Us On</h3>
        <div className="social-i">
          <button onClick={instalink}>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </button>
          <button onClick={pinlink}>
            <i className="fa fa-pinterest" aria-hidden="true"></i>
          </button>
          <button onClick={facelink}>
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </button>
          <button onClick={xlink}>
            <i className="fa fa-twitter" aria-hidden="true" style={{ color: 'white' }}></i>
          </button>
        </div>
      </div>

      <div className="footer-left">
        <h3>Contact Us On</h3>
        <p>Email: <a href="mailto:weblog@outlook.com">weblog@outlook.com</a></p>
        <p className='we'>Phone: +91 9080970408</p>
        <p className='we'>Address: Hello Home, Appu's Mansion</p>
      </div>

      <div className="footer-bottom">
        &copy; 2024 We`Blog. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;