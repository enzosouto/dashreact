import React from 'react';
import MetricCard from './MetricCard';
import { useMetrics } from '../../hooks/useMetrics';

const MetricCards = () => {
  const { metrics, selectedMetricCard, setSelectedMetricCard, metricCards } = useMetrics();

  return (
    <div className="metrics-cards">
      {metricCards.map((card) => (
        <MetricCard
          key={card.type}
          type={card.type}
          title={card.title}
          value={metrics[card.type]}
          icon={card.icon}
          selected={selectedMetricCard === card.type}
          onClick={setSelectedMetricCard}
        />
      ))}
    </div>
  );
};

export default MetricCards;