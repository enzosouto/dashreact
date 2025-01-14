// StatsCard.js
import React from 'react';
import '../App.css';

function StatsCard() {
  const stats = [
    { platform: 'Instagram', value: 258800, percentage: 73 },
    { platform: 'Facebook', value: 342112, percentage: 85 },
    { platform: 'Pinterest', value: 112570, percentage: 45 },
    { platform: 'LinkedIn', value: 51332, percentage: 25 },
    { platform: 'Google', value: 351332, percentage: 90 },
  ];

  return (
    <div className="stats-card">
      <h3>Investimento por veículo</h3>
      <div className="social-metrics">
        {stats.map((stat) => (
          <div key={stat.platform} className="social-metric">
            <span>
              <img 
                src={`https://cdn-icons-png.flaticon.com/512/${stat.platform.toLowerCase()}.png`} 
                alt={stat.platform} 
                className="social-icon"
              />
              {stat.platform}
            </span>
            <span>R${stat.value.toLocaleString()}</span>
            <div className="progress-bar">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${stat.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsCard;