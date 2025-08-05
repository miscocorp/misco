import React from 'react';
import { ExternalLink } from 'lucide-react';
import { relatedProjects } from '../../data/mockData';
import './RelatedProjects.css';

const RelatedProjects = () => {
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <section className="related-projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title">Our projects</h2>
          <p className="section-subtitle">Explore our family of specialized marketplaces</p>
        </div>

        <div className="projects-grid">
          {relatedProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-logo">
                  <img src={project.logo} alt={project.name} />
                </div>
                <div className="project-info">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <div className="project-stats">
                {project.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="stat-row">
                    <span className="stat-name">{stat.name}</span>
                    <span className="stat-count">{formatNumber(stat.count)}</span>
                  </div>
                ))}
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-all-link"
                >
                  view all
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="trust-indicator">
          <h3 className="trust-title">More than 6600+ companies trust us</h3>
          <div className="trust-logos">
            {/* Mock company logos */}
            <div className="trust-logo">🏢</div>
            <div className="trust-logo">🏭</div>
            <div className="trust-logo">🚛</div>
            <div className="trust-logo">🏗️</div>
            <div className="trust-logo">⚙️</div>
            <div className="trust-logo">🔧</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;