import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Apple, Play } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Section */}
          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/help">Help</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
            </ul>
          </div>

          {/* Information Section */}
          <div className="footer-section">
            <h4 className="footer-title">Information</h4>
            <ul className="footer-links">
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy policy</Link></li>
              <li><Link to="/safety">Safety tips</Link></li>
              <li><Link to="/reviews">Reviews for Machineryline</Link></li>
            </ul>
          </div>

          {/* Our Offers Section */}
          <div className="footer-section">
            <h4 className="footer-title">Our offers</h4>
            <ul className="footer-links">
              <li><Link to="/advertise">Advertise on Machineryline</Link></li>
              <li><Link to="/place-ad">Place your ad</Link></li>
              <li><Link to="/banners">Place a banner</Link></li>
              <li><Link to="/affiliate">Affiliate program</Link></li>
            </ul>
          </div>

          {/* Our Projects Section */}
          <div className="footer-section">
            <h4 className="footer-title">Our projects</h4>
            <ul className="footer-links">
              <li><a href="https://autoline24.pk/" target="_blank" rel="noopener noreferrer">Autoline™</a></li>
              <li><span className="current-project">Machineryline™</span></li>
              <li><a href="https://agroline-pk.com/" target="_blank" rel="noopener noreferrer">Agroline™</a></li>
              <li><a href="https://forkliftonline.pk/" target="_blank" rel="noopener noreferrer">Forkliftonline™</a></li>
            </ul>
          </div>

          {/* Mobile Apps Section */}
          <div className="footer-section">
            <h4 className="footer-title">Download our Apps</h4>
            <div className="app-links">
              <a href="#" className="app-link google-play">
                <Play size={24} />
                <div className="app-info">
                  <span className="app-text">Get it on</span>
                  <span className="app-name">Google Play</span>
                </div>
              </a>
              <a href="#" className="app-link app-store">
                <Apple size={24} />
                <div className="app-info">
                  <span className="app-text">Download on the</span>
                  <span className="app-name">App Store</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Country Selector */}
        <div className="footer-country">
          <img 
            src="https://flagcdn.com/24x18/pk.png" 
            alt="Pakistan"
            className="country-flag"
          />
          <span>Pakistan / English</span>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-stats">
            <div className="stat-item">
              <span className="stat-number">23</span>
              <span className="stat-label">years on the market</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6.6k</span>
              <span className="stat-label">clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">7M</span>
              <span className="stat-label">monthly users</span>
            </div>
          </div>
          
          <div className="footer-branding">
            <div className="logo">
              <span className="logo-text">Machinery</span>
              <span className="logo-highlight">line</span>
            </div>
            <p className="tagline">Machineryline is an online marketplace for construction equipment, industrial machinery, and spare parts.</p>
          </div>
          
          <div className="footer-copyright">
            <p>&copy; {currentYear} Linemedia. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;