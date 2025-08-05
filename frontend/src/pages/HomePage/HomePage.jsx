import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import CategoryGrid from '../../components/CategoryGrid/CategoryGrid';
import EquipmentSections from '../../components/EquipmentSections/EquipmentSections';
import SparePartsSection from '../../components/SparePartsSection/SparePartsSection';
import FeaturedListings from '../../components/FeaturedListings/FeaturedListings';
import ClientReviews from '../../components/ClientReviews/ClientReviews';
import RelatedProjects from '../../components/RelatedProjects/RelatedProjects';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <CategoryGrid />
      <EquipmentSections />
      <SparePartsSection />
      <FeaturedListings />
      <ClientReviews />
      <RelatedProjects />
    </div>
  );
};

export default HomePage;