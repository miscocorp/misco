import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Construction, 
  Factory, 
  Pickaxe, 
  Settings, 
  Wrench, 
  Calendar, 
  Building2 
} from 'lucide-react';
import { mainCategories } from '../../data/mockData';
import './CategoryGrid.css';

const CategoryGrid = () => {
  const getIcon = (iconName) => {
    const icons = {
      'Construction': Construction,
      'Factory': Factory,
      'Pickaxe': Pickaxe,
      'Settings': Settings,
      'Wrench': Wrench,
      'Calendar': Calendar,
      'Building2': Building2
    };
    return icons[iconName] || Construction;
  };

  return (
    <section className="category-grid-section">
      <div className="category-container">
        <h2 className="category-title">Go to category</h2>
        
        <div className="category-grid">
          {mainCategories.map((category) => {
            const IconComponent = getIcon(category.icon);
            return (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="category-card"
              >
                <div className="category-icon">
                  <IconComponent size={28} />
                </div>
                <span className="category-name">{category.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;