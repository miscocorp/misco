import React from 'react';
import { Star, Quote } from 'lucide-react';
import { clientReviews } from '../../data/mockData';
import './ClientReviews.css';

const ClientReviews = () => {
  return (
    <section className="client-reviews">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2 className="section-title">Our clients' reviews</h2>
          <p className="section-subtitle">What our trusted partners say about us</p>
        </div>

        <div className="reviews-grid">
          {clientReviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="company-info">
                  <div className="company-logo">
                    <img 
                      src={`https://flagcdn.com/32x24/${review.countryCode}.png`}
                      alt={review.country}
                      className="company-flag"
                    />
                  </div>
                  <div className="company-details">
                    <h4 className="company-name">{review.company}</h4>
                    <p className="reviewer-name">{review.name}</p>
                  </div>
                </div>
                <div className="review-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="star filled" />
                  ))}
                </div>
              </div>

              <div className="review-content">
                <Quote className="quote-icon" size={24} />
                <p className="review-text">{review.review}</p>
                {review.fullReview !== review.review && (
                  <details className="full-review">
                    <summary>read more</summary>
                    <p>{review.fullReview}</p>
                  </details>
                )}
              </div>

              <div className="review-footer">
                <div className="country-info">
                  <img 
                    src={`https://flagcdn.com/16x12/${review.countryCode}.png`}
                    alt={review.country}
                    className="country-flag"
                  />
                  <span className="country-name">{review.country}</span>
                </div>
                <span className="usage-duration">
                  using the website for {review.yearsUsing} years
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-stats">
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
      </div>
    </section>
  );
};

export default ClientReviews;