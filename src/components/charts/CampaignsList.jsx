import React from 'react';
import { useMetrics } from '../../hooks/useMetrics';
import { campaigns } from '../../data/campaigns';

const CampaignsList = () => {
  const { selectedCampaigns, setSelectedCampaigns } = useMetrics();

  const handleCampaignClick = (campaign) => {
    const newSelected = new Set(selectedCampaigns);
    if (newSelected.has(campaign.id)) {
      newSelected.delete(campaign.id);
    } else {
      newSelected.add(campaign.id);
    }
    setSelectedCampaigns(newSelected);
  };

  return (
    <div className="chart-container">
      <h3>Campanhas Secom</h3>
      <div className="status-legend">
        <span><span className="dot active"></span> Ativas</span>
        <span><span className="dot paused"></span> Pausada/Cancelada</span>
        <span><span className="dot concluded"></span> Concluída</span>
      </div>
      
      <div className="campaigns-list">
        {campaigns.map((campaign) => (
          <div 
            key={campaign.id}
            className={`campaign-item ${selectedCampaigns.has(campaign.id) ? 'selected' : ''}`}
            onClick={() => handleCampaignClick(campaign)}
          >
            <span className={`dot ${campaign.status}`}></span>
            <span>{campaign.name}</span>
            <img src={campaign.image} alt={campaign.name} />
          </div>
        ))}

        <div className="date-filter">
          <div className="date-inputs">
            <input type="date" id="start-date" className="date-input" />
            <span className="date-separator">até</span>
            <input type="date" id="end-date" className="date-input" />
          </div>
          <button className="apply-filter">Aplicar</button>
        </div>
      </div>
    </div>
  );
};

export default CampaignsList;