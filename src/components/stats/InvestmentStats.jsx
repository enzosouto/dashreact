import React from 'react';
import ProgressBar from '../shared/ProgressBar';
import SocialIcon from '../shared/SocialIcon';

const InvestmentStats = () => {
  const socialMetrics = [
    { platform: 'Instagram', value: 258800, percentage: 73 },
    { platform: 'Facebook', value: 342112, percentage: 85 },
    { platform: 'Pinterest', value: 112570, percentage: 45 },
    { platform: 'LinkedIn', value: 51332, percentage: 25 },
    { platform: 'Google', value: 351332, percentage: 90 }
  ];

  return (
    <div className="stats-card">
      <h3>Investimento por veículo</h3>
      <div className="social-metrics">
        {socialMetrics.map((metric) => (
          <div key={metric.platform} className="social-metric">
            <span>
              <SocialIcon platform={metric.platform} />
              {metric.platform}
            </span>
            <span>R${metric.value.toLocaleString()}</span>
            <ProgressBar percentage={metric.percentage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentStats;