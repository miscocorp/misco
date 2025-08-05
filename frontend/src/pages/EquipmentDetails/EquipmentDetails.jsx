import React from 'react';
import { useParams } from 'react-router-dom';

const EquipmentDetails = () => {
  const { equipmentId } = useParams();

  return (
    <div style={{ padding: '80px 24px', textAlign: 'center' }}>
      <h1>Equipment Details</h1>
      <p>Equipment ID: {equipmentId}</p>
      <p style={{ color: '#64748b', marginTop: '24px' }}>
        This is a mock page. In the backend implementation, this will show detailed equipment information, 
        images, specifications, seller contact info, and similar listings.
      </p>
    </div>
  );
};

export default EquipmentDetails;