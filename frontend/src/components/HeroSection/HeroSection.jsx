import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { siteStats } from '../../data/mockData';
import './HeroSection.css';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Search for construction machinery and industrial equipment
          </h1>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">{formatNumber(siteStats.totalAds)}</span>
              <span className="stat-label">ads</span>
            </div>
            <div className="stat-actions">
              <button className="place-ad-link">
                <Plus size={18} />
                Place your ad
              </button>
            </div>
          </div>

          <form className="hero-search" onSubmit={handleSearch}>
            <div className="search-container">
              <Search className="search-icon" size={24} />
              <input
                type="text"
                placeholder="Search for machinery, equipment, parts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-btn">
                Search
              </button>
            </div>
          </form>

          <div className="hero-cta">
            <p className="cta-text">Selling machinery or vehicles?</p>
            <p className="cta-subtext">You can do it with us!</p>
            <button className="cta-button">
              <Plus size={20} />
              Place your ad
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;