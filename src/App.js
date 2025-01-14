// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import MetricCard from './components/metriccard';
import CampaignItem from './components/campaignItem';
import LineChartComponent from './components/lineChartComponent';
import StatsCard from './components/statsCard';

function App() {
  const [selectedCampaigns, setSelectedCampaigns] = useState(new Set());
  const [selectedMetricCard, setSelectedMetricCard] = useState('impressions');

  const metrics = {
    investment: 553000,
    impressions: 122300,
    views: 73052,
    clicks: 13000,
    engagement: 17000,
  };

  const metricCards = [
    { type: 'investment', title: 'Investimento' },
    { type: 'impressions', title: 'Impressões' },
    { type: 'views', title: 'Visualizações' },
    { type: 'clicks', title: 'Cliques' },
    { type: 'engagement', title: 'Engajamento' },
  ];

  const campaigns = [
    { id: 1, name: 'Programa Acredita', status: 'active' },
    { id: 2, name: 'Plano Safra', status: 'active' },
  ];

  useEffect(() => {
  }, [selectedCampaigns]);

  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      <Sidebar />

      <main className="main-content">
        <h1 className="dashboard-title">SECOM</h1>

        <div className="metrics-cards">
          {metricCards.map((card) => (
            <MetricCard
              key={card.type}
              type={card.type}
              title={card.title}
              isSelected={selectedMetricCard === card.type}
              onSelect={() => setSelectedMetricCard(card.type)}
              value={metrics[card.type]}
            />
          ))}
        </div>

        <div className="charts-row">
          <div className="campaigns-list">
            {campaigns.map((campaign) => (
              <CampaignItem
                key={campaign.id}
                campaign={campaign}
                isSelected={selectedCampaigns.has(campaign.id)}
                onClick={() => {
                  const newSelected = new Set(selectedCampaigns);
                  if (newSelected.has(campaign.id)) {
                    newSelected.delete(campaign.id);
                  } else {
                    newSelected.add(campaign.id);
                  }
                  setSelectedCampaigns(newSelected);
                }}
              />
            ))}
          </div>

          <LineChartComponent dataKey={selectedMetricCard} />
        </div>

        <StatsCard />
      </main>
    </div>
  );
}

export default App;