import React from 'react';

const MetricsStats = () => {
  const metrics = [
    { name: 'CTR', value: '1,11%' },
    { name: 'VTR', value: '6,13%' },
    { name: 'Taxa de Engajamento', value: '1,49%' },
    { name: 'CPM', value: 'R$1,80', negative: true },
    { name: 'CPC', value: 'R$2,52', negative: true },
    { name: 'CPE', value: 'R$3,13', negative: true },
    { name: 'CPV', value: 'R$0,08' }
  ];

  return (
    <div className="stats-card">
      <div className="metrics-header">
        <h3>Métricas</h3>
        <div className="active-campaigns">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor">
            <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          4 Campanhas ativas
        </div>
      </div>
      <div className="metrics-list">
        <div className="metric-item">
          {metrics.map((metric) => (
            <div key={metric.name}>
              {metric.name} <span className={`metric-trend ${metric.negative ? 'negative' : ''}`}>({metric.value})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricsStats;