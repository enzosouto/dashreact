import React, { createContext, useState, useEffect } from 'react';
import { metricCards } from '../data/metricCards';
import { campaigns } from '../data/campaigns';

export const MetricsContext = createContext();

export const MetricsProvider = ({ children }) => {
  const [selectedCampaigns, setSelectedCampaigns] = useState(new Set());
  const [selectedMetricCard, setSelectedMetricCard] = useState('impressions');
  const [metrics, setMetrics] = useState({
    investment: 553000,
    impressions: 122300,
    views: 73052,
    clicks: 13000,
    engagement: 17000
  });

  const updateMetrics = () => {
    if (selectedCampaigns.size === 0) {
      setMetrics({
        investment: 553000,
        impressions: 122300,
        views: 73052,
        clicks: 13000,
        engagement: 17000
      });
    } else {
      const newMetrics = {
        investment: 0,
        impressions: 0,
        views: 0,
        clicks: 0,
        engagement: 0
      };

      campaigns.forEach(campaign => {
        if (selectedCampaigns.has(campaign.id)) {
          Object.keys(newMetrics).forEach(key => {
            newMetrics[key] += campaign[key];
          });
        }
      });

      setMetrics(newMetrics);
    }
  };

  useEffect(() => {
    updateMetrics();
  }, [selectedCampaigns]);

  const value = {
    metrics,
    selectedMetricCard,
    setSelectedMetricCard,
    selectedCampaigns,
    setSelectedCampaigns,
    metricCards
  };

  return (
    <MetricsContext.Provider value={value}>
      {children}
    </MetricsContext.Provider>
  );
};
