import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign } from 'lucide-react';
import { featuredListings } from '../../data/mockData';
import './FeaturedListings.css';

const FeaturedListings = () => {
  const formatPrice = (price, currency) => {
    return `${currency === 'USD' ? '$' : '€'}${price.toLocaleString()}`;
  };

  return (
    <section className="featured-listings">
      <div className="featured-container">
        <div className="featured-header">
          <h2 className="section-title">Featured Equipment</h2>
          <p className="section-subtitle">High-quality machinery from trusted sellers</p>
        </div>

        <div className="listings-grid">
          {featuredListings.map((listing) => (
            <Link
              key={listing.id}
              to={`/equipment/${listing.id}`}
              className="listing-card"
            >
              <div className="listing-image">
                <img src={listing.image} alt={listing.title} />
                <div className="listing-category">{listing.category}</div>
              </div>
              
              <div className="listing-content">
                <h3 className="listing-title">{listing.title}</h3>
                
                <div className="listing-details">
                  <div className="detail-item">
                    <Clock size={16} />
                    <span>Year: {listing.year}</span>
                  </div>
                  <div className="detail-item">
                    <Clock size={16} />
                    <span>{listing.hours.toLocaleString()} hours</span>
                  </div>
                </div>

                <div className="listing-location">
                  <MapPin size={16} />
                  <span>{listing.location}</span>
                </div>

                <div className="listing-footer">
                  <div className="listing-price">
                    <DollarSign size={18} />
                    <span>{formatPrice(listing.price, listing.currency)}</span>
                  </div>
                  <div className="listing-seller">{listing.seller}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="featured-cta">
          <Link to="/equipment" className="view-all-btn">
            View All Equipment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;