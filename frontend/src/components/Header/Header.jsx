import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, User, Plus } from 'lucide-react';
import { countries } from '../../data/mockData';
import './Header.css';

const Header = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    // Mock search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="logo">
            <span className="logo-text">Machinery</span>
            <span className="logo-highlight">line</span>
          </Link>
          
          {/* Country Selector */}
          <div className="country-selector">
            <button 
              className="country-btn"
              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
            >
              <img 
                src={`https://flagcdn.com/24x18/${selectedCountry.code}.png`} 
                alt={selectedCountry.name}
                className="country-flag"
              />
              <ChevronDown size={16} />
            </button>
            {showCountryDropdown && (
              <div className="country-dropdown">
                {countries.map(country => (
                  <button
                    key={country.code}
                    className="country-option"
                    onClick={() => {
                      setSelectedCountry(country);
                      setShowCountryDropdown(false);
                    }}
                  >
                    <img 
                      src={`https://flagcdn.com/24x18/${country.code}.png`} 
                      alt={country.name}
                      className="country-flag"
                    />
                    <span>{country.name} / {country.language}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </form>

        {/* Right Section */}
        <div className="header-right">
          <button className="auth-btn">
            <User size={18} />
            <span>Sign In / Registration</span>
          </button>
          
          <button className="place-ad-btn">
            <Plus size={18} />
            <span>Place your ad</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;