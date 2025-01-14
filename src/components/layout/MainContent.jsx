import React from 'react';
import MetricCards from '../metrics/MetricCards';
import CampaignsList from '../charts/CampaignsList';
import MetricChart from '../charts/MetricChart';
import InvestmentStats from '../stats/InvestmentStats';
import MetricsStats from '../stats/MetricsStats';
import EngagementStats from '../stats/EngagementStats';
import TrendingTopics from '../stats/TrendingTopics';

const MainContent = () => {
  return (
    <main className="main-content">
      <h1 className="dashboard-title">SECOM</h1>
      
      <MetricCards />

      <div className="charts-row">
        <CampaignsList />
        <MetricChart />
      </div>

      <div className="stats-grid">
        <InvestmentStats />
        <MetricsStats />
        <EngagementStats />
        <TrendingTopics />
      </div>
    </main>
  );
};

export default MainContent;