// MetricCard.js
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function MetricCard({ type, title, value, isSelected, onSelect }) {
  return (
    <div 
      className={`metric-card ${isSelected ? 'selected' : ''}`} 
      onClick={onSelect}
    >
      <div>
        <div>{title}</div>
        <div className="metric-value">
          {type === 'investment' ? 'R$ ' : ''}
          {value.toLocaleString()}
        </div>
      </div>
      <div className="metric-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v12m-4-4h8" />
        </svg>
      </div>
    </div>
  );
}

MetricCard.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default MetricCard;