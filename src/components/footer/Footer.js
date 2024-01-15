// Footer.js

import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <div className="footer-column">
          <p className="paragraph-col">Design amazing digital experiences that create more happy in the world.</p>
        </div>
      </div>
      <div className="footer-column">
        <ul style={{ listStyle: 'none', fontSize: '16px' }}>
          <li><p>Product</p></li>
          <li>Overview</li>
          <li>Features</li>
          <li>Solutions <button className="new-button">New</button> </li>
          <li>Tutorials</li>
          <li>Pricing</li>
          <li>Releases</li>
        </ul>
      </div>

      <div className="footer-column">
        <ul style={{ listStyle: 'none', fontSize: '16px' }}>
        <li><p>Company</p></li>
          <li>About us</li>
          <li>Careers</li>
          <li>Press</li>
          <li>News</li>
          <li>Media kit</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="footer-column">
        <ul style={{ listStyle: 'none', fontSize: '16px' }}>
        <li><p>Resources</p></li>
          <li>Blog</li>
          <li>Newsletter</li>
          <li>Events</li>
          <li>Help center</li>
          <li>Tutorials</li>
          <li>Support</li>
        </ul>
      </div>

      <div className="footer-column">
        <ul style={{ listStyle: 'none', fontSize: '16px' }}>
        <li><p>Social</p></li>
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Youtube</li>
          <li>Twitter</li>
        </ul>
      </div>

      <div className="footer-column">
        <ul style={{ listStyle: 'none', fontSize: '16px' }}>
        <li><p>Legal</p></li>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Cookies</li>
          <li>Licenses</li>
          <li>Settings</li>
          <li>Contact</li>
        </ul>
      </div>

    </div>
  );
};

export default Footer;
