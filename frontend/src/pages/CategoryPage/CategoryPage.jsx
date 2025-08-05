import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { categoryId } = useParams();

  return (
    <div style={{ padding: '80px 24px', textAlign: 'center' }}>
      <h1>Category: {categoryId}</h1>
      <p>This page will show equipment listings for the {categoryId} category.</p>
      <p style={{ color: '#64748b', marginTop: '24px' }}>
        This is a mock page. In the backend implementation, this will show filtered equipment listings.
      </p>
    </div>
  );
};

export default CategoryPage;