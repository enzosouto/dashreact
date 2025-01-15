import React from 'react';

const MetricCard = ({ type, title, value, icon, selected, onClick }) => {
  return (
    <div 
      className={`metric-card ${selected ? 'selected' : ''}`}
      data-type={type}
      onClick={() => onClick(type)}
    >
      <div>
        <div>{title}</div>
        <div className="metric-value">
          {type === 'investment' ? 'R$ ' : ''}
          {value.toLocaleString()}
        </div>
      </div>
      <div className="metric-icon">
        {icon}
      </div>
    </div>
  );
};

export default MetricCard;