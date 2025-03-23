import React from 'react';
import './TableauDashboard.css';

const TableauDashboard = ({ title, description, embedCode }) => {
  return (
    <div className="tableau-container">
      <h3>{title}</h3>
      <p>{description}</p>
      <div 
        className="tableau-embed"
        dangerouslySetInnerHTML={{ __html: embedCode }}
      />
    </div>
  );
};

export default TableauDashboard;