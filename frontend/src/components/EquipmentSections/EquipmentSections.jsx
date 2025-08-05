import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, Construction, HardHat, Hammer, Building, Drill,
  Mountain, ArrowUp, Box, TreePine, Recycle, Package,
  ChefHat, Zap, Flame, Wind, Droplets, Pickaxe
} from 'lucide-react';
import { constructionEquipment, industrialEquipment, miningEquipment } from '../../data/mockData';
import './EquipmentSections.css';

const EquipmentSections = () => {
  const getIcon = (iconName) => {
    const icons = {
      'Truck': Truck,
      'Construction': Construction,
      'HardHat': HardHat,
      'Hammer': Hammer,
      'Building': Building,
      'Drill': Drill,
      'Road': Construction,
      'Circle': Construction,
      'Mountain': Mountain,
      'ArrowUp': ArrowUp,
      'Box': Box,
      'Loader': Truck,
      'TreePine': TreePine,
      'Recycle': Recycle,
      'Package': Package,
      'Package2': Package,
      'GlassWater': Package,
      'ChefHat': ChefHat,
      'Zap': Zap,
      'Flame': Flame,
      'Wind': Wind,
      'Droplets': Droplets,
      'Pickaxe': Pickaxe,
      'Settings': Construction
    };
    return icons[iconName] || Construction;
  };

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  const EquipmentGrid = ({ title, equipment, sectionId }) => (
    <div className="equipment-section">
      <div className="section-header">
        <h3 className="section-title">{title}</h3>
        <Link to={`/category/${sectionId}`} className="view-all-link">
          view all
        </Link>
      </div>
      <div className="equipment-grid">
        {equipment.slice(0, 6).map((item, index) => {
          const IconComponent = getIcon(item.icon);
          return (
            <Link 
              key={index}
              to={`/category/${sectionId}/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="equipment-card"
            >
              <div className="equipment-icon">
                <IconComponent size={24} />
              </div>
              <div className="equipment-info">
                <span className="equipment-name">{item.name}</span>
                <span className="equipment-count">{formatNumber(item.count)}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className="equipment-sections">
      <div className="equipment-container">
        <h2 className="main-title">Popular types of vehicles by category</h2>
        
        <div className="sections-grid">
          <EquipmentGrid 
            title="Construction equipment"
            equipment={constructionEquipment}
            sectionId="construction"
          />
          
          <EquipmentGrid 
            title="Industrial equipment"
            equipment={industrialEquipment}
            sectionId="industrial"
          />
          
          <EquipmentGrid 
            title="Mining equipment"
            equipment={miningEquipment}
            sectionId="mining"
          />
        </div>
      </div>
    </section>
  );
};

export default EquipmentSections;