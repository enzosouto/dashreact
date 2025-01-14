import React from 'react';

const SocialIcon = ({ platform }) => {
  const getIconUrl = (platform) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return 'https://cdn-icons-png.flaticon.com/512/1384/1384063.png';
      case 'facebook':
        return 'https://cdn-icons-png.flaticon.com/512/733/733547.png';
      case 'pinterest':
        return 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png';
      case 'linkedin':
        return 'https://cdn-icons-png.flaticon.com/512/174/174857.png';
      case 'google':
        return 'https://img.icons8.com/?size=512&id=17949&format=png';
      default:
        return '';
    }
  };

  return (
    <img 
      src={getIconUrl(platform)} 
      alt={platform} 
      className="social-icon" 
    />
  );
};

export default SocialIcon;