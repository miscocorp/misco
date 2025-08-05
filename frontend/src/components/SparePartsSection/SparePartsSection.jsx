import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Package } from 'lucide-react';
import { spareParts } from '../../data/mockData';
import './SparePartsSection.css';

const SparePartsSection = () => {
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <section className="spare-parts-section">
      <div className="spare-parts-container">
        <div className="spare-parts-header">
          <h2 className="section-title">
            <Package size={32} />
            Spare parts
          </h2>
          <div className="parts-stats">
            <span className="parts-count">{formatNumber(spareParts.total)}</span>
            <span className="parts-label">spare parts available</span>
          </div>
        </div>

        <div className="spare-parts-content">
          <div className="search-section">
            <h3 className="search-title">Search for spare parts</h3>
            <div className="search-container">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Example: Caterpillar 416E234-4440, Hitachi final drive"
                className="search-input"
              />
              <button className="search-btn">Order spare part</button>
            </div>
          </div>

          <div className="brands-section">
            <h3 className="brands-title">Popular spare parts brands</h3>
            <div className="brands-grid">
              {spareParts.brands.map((brand, index) => (
                <Link
                  key={index}
                  to={`/spare-parts/${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="brand-card"
                >
                  <div className="brand-info">
                    <span className="brand-name">{brand.name}</span>
                    <span className="brand-count">{formatNumber(brand.count)}</span>
                  </div>
                  <div className="brand-arrow">→</div>
                </Link>
              ))}
            </div>
            <Link to="/spare-parts" className="show-all-brands">
              show all brands
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SparePartsSection;