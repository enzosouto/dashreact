// CampaignItem.js
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function CampaignItem({ campaign, isSelected, onClick }) {
  return (
    <div 
      className={`campaign-item ${isSelected ? 'selected' : ''}`} 
      onClick={onClick}
    >
      <span className={`dot ${campaign.status}`}></span>
      <span>{campaign.name}</span>
      {campaign.image && (
        <img 
          src={campaign.image} 
          alt={campaign.name} 
          className="campaign-image"
        />
      )}
    </div>
  );
}

CampaignItem.propTypes = {
  campaign: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CampaignItem;