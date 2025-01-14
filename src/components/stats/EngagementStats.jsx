import React from 'react';
import ProgressBar from '../shared/ProgressBar';

const EngagementStats = () => {
  const engagementMetrics = [
    { type: 'Curtidas', icon: 'like', value: 356465, percentage: 85 },
    { type: 'Comentários', icon: 'comment', value: 242112, percentage: 65 },
    { type: 'Visualizações', icon: 'view', value: 3567570, percentage: 95 },
    { type: 'Compartilhamentos', icon: 'share', value: 100332, percentage: 75 }
  ];

  return (
    <div className="stats-card">
      <h3>Engajamento (Semanal)</h3>
      <div className="engagement-metrics">
        {engagementMetrics.map((metric) => (
          <div key={metric.type}>
            <span>{metric.type}</span>
            <img 
              src={`https://cdn-icons-png.flaticon.com/512/${
                metric.icon === 'like' ? '739/739231' :
                metric.icon === 'comment' ? '2462/2462719' :
                metric.icon === 'view' ? '709/709612' : '929/929539'
              }.png`} 
              alt={metric.type} 
              className="engagement-icon" 
            />
            <div className="metric-value">{metric.value.toLocaleString()}</div>
            <ProgressBar percentage={metric.percentage} />
            <div className="media-semanal">Media semanal</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EngagementStats;