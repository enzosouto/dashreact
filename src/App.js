// App.js
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './App.css';

function App() {
  const [selectedCampaigns, setSelectedCampaigns] = useState(new Set());
  const [selectedMetricCard, setSelectedMetricCard] = useState('impressions');

  // Valores iniciais
  const [metrics, setMetrics] = useState({
    investment: 553000,
    impressions: 122300,
    views: 73052,
    clicks: 13000,
    engagement: 17000
  });
  const metricCards = [
    {
      type: 'investment',
      title: 'Investimento',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v12m-4-4h8"/>
        </svg>
      )
    },
    {
      type: 'impressions',
      title: 'Impressões',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      )
    },
    {
      type: 'views',
      title: 'Visualizações',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      )
    },
    {
      type: 'clicks',
      title: 'Cliques',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m8 13 2.9 2.9 5.7-5.7"/>
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"/>
        </svg>
      )
    },
    {
      type: 'engagement',
      title: 'Engajamento',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/>
          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
        </svg>
      )
    }
  ];
  
  // Então, na parte do return do seu componente, substitua a seção dos cartões de métricas por:
  <div className="metrics-cards">
  {metricCards.map((card) => (
    <div 
      key={card.type}
      className={`metric-card ${selectedMetricCard === card.type ? 'selected' : ''}`}
      onClick={() => setSelectedMetricCard(card.type)}
    >
      <div>
        <div>{card.title}</div>
        <div className="metric-value">
          {card.type === 'investment' ? 'R$ ' : ''}
          {metrics[card.type].toLocaleString()}
        </div>
      </div>
      <div className="metric-icon">
        {card.icon}
      </div>
    </div>
  ))}
</div>
  // Dados do gráfico
  const chartData = {
    investment: [
      { month: 'Jan', value: 553000 },
      { month: 'Fev', value: 425000 },
      { month: 'Mar', value: 680000 },
      { month: 'Abr', value: 490000 },
      { month: 'Mai', value: 895000 },
      { month: 'Jun', value: 690000 },
      { month: 'Jul', value: 720000 },
      { month: 'Ago', value: 880000 },
      { month: 'Set', value: 750000 },
      { month: 'Out', value: 920000 },
      { month: 'Nov', value: 830000 }
    ],
    impressions: [
      { month: 'Jan', value: 122300 },
      { month: 'Fev', value: 134500 },
      { month: 'Mar', value: 156700 },
      { month: 'Abr', value: 178900 },
      { month: 'Mai', value: 198200 },
      { month: 'Jun', value: 167800 },
      { month: 'Jul', value: 189400 },
      { month: 'Ago', value: 210500 },
      { month: 'Set', value: 234600 },
      { month: 'Out', value: 256800 },
      { month: 'Nov', value: 278900 }
    ],
    views: [
      { month: 'Jan', value: 73052 },
      { month: 'Fev', value: 82145 },
      { month: 'Mar', value: 93256 },
      { month: 'Abr', value: 104367 },
      { month: 'Mai', value: 115478 },
      { month: 'Jun', value: 126589 },
      { month: 'Jul', value: 137690 },
      { month: 'Ago', value: 148801 },
      { month: 'Set', value: 159912 },
      { month: 'Out', value: 171023 },
      { month: 'Nov', value: 182134 }
    ],
    clicks: [
      { month: 'Jan', value: 13000 },
      { month: 'Fev', value: 15600 },
      { month: 'Mar', value: 18200 },
      { month: 'Abr', value: 20800 },
      { month: 'Mai', value: 23400 },
      { month: 'Jun', value: 26000 },
      { month: 'Jul', value: 28600 },
      { month: 'Ago', value: 31200 },
      { month: 'Set', value: 33800 },
      { month: 'Out', value: 36400 },
      { month: 'Nov', value: 39000 }
    ],
    engagement: [
      { month: 'Jan', value: 17000 },
      { month: 'Fev', value: 19800 },
      { month: 'Mar', value: 22600 },
      { month: 'Abr', value: 25400 },
      { month: 'Mai', value: 28200 },
      { month: 'Jun', value: 31000 },
      { month: 'Jul', value: 33800 },
      { month: 'Ago', value: 36600 },
      { month: 'Set', value: 39400 },
      { month: 'Out', value: 42200 },
      { month: 'Nov', value: 45000 }
    ]
  };

  const metricInfo = {
    investment: {
      title: "Investimento",
      prefix: "R$",
      color: "#FF6B6B"
    },
    impressions: {
      title: "Impressões",
      prefix: "",
      color: "#4ECDC4"
    },
    views: {
      title: "Visualizações",
      prefix: "",
      color: "#45B7D1"
    },
    clicks: {
      title: "Cliques",
      prefix: "",
      color: "#96CEB4"
    },
    engagement: {
      title: "Engajamento",
      prefix: "",
      color: "#FF9F1C"
    }
  };

  // Dados das campanhas
  const campaigns = [
    {
      id: 1,
      name: "Programa Acredita",
      status: "active",
      image: "https://www.gov.br/secom/pt-br/assuntos/noticias/2024/09/programa-acredita-e-aprovado-pelo-senado-federal-e-agora-vai-a-sancao-presidencial/acredita.jpg",
      investment: 150000,
      impressions: 35000,
      views: 20000,
      clicks: 3500,
      engagement: 4500
    },
    {
      id: 2,
      name: "Plano Safra",
      status: "active",
      image: "https://www.gov.br/agricultura/pt-br/assuntos/noticias/governo-lanca-campanha-publicitaria-do-plano-safra-e-incentiva-agro-produtivo-e-sustentavel/3b55d4402c754a0e8d775cec52e0e893.jpeg",
      investment: 180000,
      impressions: 42000,
      views: 25000,
      clicks: 4000,
      engagement: 5000
    },
    {
      id: 3,
      name: "Balanço 2024",
      status: "active",
      image: "https://www.gov.br/agricultura/pt-br/assuntos/noticias/politicas-sustentaveis-para-o-agronegocio-foram-destaque-nas-acoes-do-mapa/SDISecretariadeInovaoDesenvolvimentobannersite1150x700.png",
      investment: 120000,
      impressions: 28000,
      views: 15000,
      clicks: 3000,
      engagement: 4000
    },
    {
      id: 4,
      name: "Conheça o Brasil",
      status: "active",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_koFE0-nCqPOcbvFhVeR4LVBSoaHDTUKDcA&s",
      investment: 103000,
      impressions: 17300,
      views: 13052,
      clicks: 2500,
      engagement: 3500
    }
  ];

  // Menu items
  const menuItems = [
    { name: 'Início', icon: 'https://cdn-icons-png.flaticon.com/512/25/25694.png', path: 'index.html' },
    { name: 'Instagram', icon: 'https://static.vecteezy.com/system/resources/thumbnails/023/986/521/small_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png', path: 'instagram.html' },
    { name: 'Facebook', icon: 'https://img.icons8.com/ios11/512/facebook-new.png', path: 'facebook.html' },
    { name: 'Pinterest', icon: 'https://cdn-icons-png.flaticon.com/512/25/25698.png', path: 'pinterest.html' },
    { name: 'LinkedIn', icon: 'https://img.icons8.com/ios11/512/linkedin.png', path: 'linkedin.html' },
    { name: 'Google', icon: 'https://cdn4.iconfinder.com/data/icons/picons-social/57/09-google-3-512.png', path: 'google.html' },
    { name: 'TikTok', icon: 'https://cdn-icons-png.flaticon.com/512/3046/3046120.png', path: 'tiktok.html' }
  ];

  // Funções auxiliares
  const formatValue = (value, type) => {
    if (type === 'investment') {
      return `R$ ${value.toLocaleString()}`;
    }
    return value.toLocaleString();
  };

  const getTrendInfo = (data) => {
    const lastMonth = data[data.length - 1].value;
    const previousMonth = data[data.length - 2].value;
    const difference = lastMonth - previousMonth;
    const percentage = ((difference / previousMonth) * 100).toFixed(1);
    
    return `${difference > 0 ? '+' : ''}${percentage}%`;
  };

  // Manipulador de clique nas campanhas
  const handleCampaignClick = (campaign) => {
    const newSelected = new Set(selectedCampaigns);
    if (newSelected.has(campaign.id)) {
      newSelected.delete(campaign.id);
    } else {
      newSelected.add(campaign.id);
    }
    setSelectedCampaigns(newSelected);
  };

  // Atualizar métricas baseado nas campanhas selecionadas
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
          newMetrics.investment += campaign.investment;
          newMetrics.impressions += campaign.impressions;
          newMetrics.views += campaign.views;
          newMetrics.clicks += campaign.clicks;
          newMetrics.engagement += campaign.engagement;
        }
      });

      setMetrics(newMetrics);
    }
  };

  useEffect(() => {
    updateMetrics();
  }, [selectedCampaigns]);

  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo-container">
          <img 
            src="https://logodownload.org/wp-content/uploads/2023/01/governo-federal-2023-logo-lula.png" 
            alt="Logo Governo Federal" 
            className="logo" 
          />
        </div>
        <nav>
          <ul className="menu">
            {menuItems.map((item, index) => (
              <li key={index} className={`menu-item ${index === 0 ? 'active' : ''}`}>
                <a 
                  href={item.path} 
                  style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '12px' }}
                >
                  <img src={item.icon} alt={item.name} className="icon" />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="dashboard-title">SECOM</h1>
        
        {/* Metric Cards */}
        <div className="metrics-cards">
  <div 
    className={`metric-card ${selectedMetricCard === 'investment' ? 'selected' : ''}`} 
    onClick={() => setSelectedMetricCard('investment')}
  >
    <div>
      <div>Investimento</div>
      <div className="metric-value">R$ {metrics.investment.toLocaleString()}</div>
    </div>
    <div className="metric-icon">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.41 16.09V17H10.74V16.07C9.03 15.71 7.58 14.61 7.47 12.67H9.43C9.53 13.72 10.31 14.49 12.08 14.49C13.93 14.49 14.41 13.59 14.41 12.97C14.41 12.25 13.97 11.44 11.87 10.95C9.45 10.37 7.91 9.29 7.91 7.34C7.91 5.68 9.16 4.56 10.74 4.17V3.25H13.41V4.19C15.09 4.65 16.18 5.92 16.24 7.47H14.28C14.23 6.42 13.55 5.76 12.08 5.76C10.69 5.76 9.93 6.4 9.93 7.19C9.93 7.86 10.45 8.45 12.33 8.92C14.37 9.44 16.43 10.32 16.43 12.94C16.43 14.7 15.13 15.76 13.41 16.09Z" fill="currentColor"/>
    </svg>
    </div>
  </div>

  <div 
    className={`metric-card ${selectedMetricCard === 'impressions' ? 'selected' : ''}`}
    onClick={() => setSelectedMetricCard('impressions')}
  >
    <div>
      <div>Impressões</div>
      <div className="metric-value">{metrics.impressions.toLocaleString()}</div>
    </div>
    <div className="metric-icon">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.5 18.5L9.5 12.5L13.5 16.5L22 6.92L20.59 5.5L13.5 13.5L9.5 9.5L2 17L3.5 18.5Z" fill="currentColor"/>
  <path d="M22 12V20H4V4H12V2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H22C23.1 22 24 21.1 24 20V12H22Z" fill="currentColor"/>
</svg>
    </div>
  </div>

  <div 
    className={`metric-card ${selectedMetricCard === 'views' ? 'selected' : ''}`}
    onClick={() => setSelectedMetricCard('views')}
  >
    <div>
      <div>Visualizações</div>
      <div className="metric-value">{metrics.views.toLocaleString()}</div>
    </div>
    <div className="metric-icon">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 4C7 4 2.73 7.11 1 12C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12C21.27 7.11 17 4 12 4ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="currentColor"/>
</svg>
    </div>
  </div>

  <div 
    className={`metric-card ${selectedMetricCard === 'clicks' ? 'selected' : ''}`}
    onClick={() => setSelectedMetricCard('clicks')}
  >
    <div>
      <div>Cliques</div>
      <div className="metric-value">{metrics.clicks.toLocaleString()}</div>
    </div>
    <div className="metric-icon">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 5v10l5-5h6L9 5zm8.66 13A7.95 7.95 0 0112 20c-4.41 0-8-3.59-8-8 0-2.19.89-4.19 2.34-5.66l1.41 1.41A5.98 5.98 0 006 12c0 3.31 2.69 6 6 6 1.66 0 3.14-.69 4.22-1.78l1.44 1.44z" fill="currentColor"/>
</svg>

    </div>
  </div>

  <div 
    className={`metric-card ${selectedMetricCard === 'engagement' ? 'selected' : ''}`}
    onClick={() => setSelectedMetricCard('engagement')}
  >
    <div>
      <div>Engajamento</div>
      <div className="metric-value">{metrics.engagement.toLocaleString()}</div>
    </div>
    <div className="metric-icon">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V18H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V18H23V16.5C23 14.17 18.33 13 16 13Z" fill="currentColor"/>
</svg>
    </div>
  </div>
</div>

        {/* Charts Row */}
        <div className="charts-row">
          {/* Campaigns Container */}
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

          {/* Chart Container */}
          <div className="chart-container">
            <div id="chart-header">
              <h3>{metricInfo[selectedMetricCard].title}</h3>
              <div className="trend-info">
                {`${getTrendInfo(chartData[selectedMetricCard])} no último mês`}
              </div>
            </div>
            <div style={{ width: '100%', height: '400px', marginTop: '15px' }}>
              <ResponsiveContainer>
                <LineChart data={chartData[selectedMetricCard]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#666"
                    tick={{ fill: '#666', fontSize: 12 }}
                  />
                  <YAxis 
                    stroke="#666"
                    tick={{ fill: '#666', fontSize: 12 }}
                    tickFormatter={(value) => formatValue(value, selectedMetricCard)}
                  />
                  <Tooltip 
                    formatter={(value) => formatValue(value, selectedMetricCard)}
                    labelFormatter={(label) => `Mês: ${label}`}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke={metricInfo[selectedMetricCard].color}
                    strokeWidth={2}
                    dot={{ r: 4, fill: metricInfo[selectedMetricCard].color }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {/* Investimento por veículo */}
          <div className="stats-card">
            <h3>Investimento por veículo</h3>
            <div className="social-metrics">
              <div className="social-metric">
                <span>
                  <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" className="social-icon" />
                  Instagram
                </span>
                <span>R$258.800,00</span>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '73%' }}></div>
                </div>
              </div>
              <div className="social-metric">
                <span>
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="social-icon" />
                  Facebook
                </span>
                <span>R$342.112,00</span>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="social-metric">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Pinterest" className="social-icon" />
                  Pinterest
                </span>
                <span>R$112.570,00</span>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div className="social-metric">
                <span>
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="social-icon" />
                  LinkedIn
                </span>
                <span>R$51.332,00</span>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div className="social-metric">
                <span>
                  <img src="https://img.icons8.com/?size=512&id=17949&format=png" alt="Google" className="social-icon" />
                  Google
                </span>
                <span>R$351.332,00</span>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Métricas */}
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
                <div>CTR <span className="metric-trend">(1,11%)</span></div>
                <div>VTR <span className="metric-trend">(6,13%)</span></div>
                <div>Taxa de Engajamento <span className="metric-trend">(1,49%)</span></div>
                <div>CPM <span className="metric-trend negative">(R$1,80)</span></div>
                <div>CPC <span className="metric-trend negative">(R$2,52)</span></div>
                <div>CPE <span className="metric-trend negative">(R$3,13)</span></div>
                <div>CPV <span className="metric-trend">(R$0,08)</span></div>
              </div>
            </div>
          </div>

          {/* Engajamento */}
          <div className="stats-card">
            <h3>Engajamento (Semanal)</h3>
            <div className="engagement-metrics">
              <div>
                <span>Curtidas</span>
                <img src="https://cdn-icons-png.flaticon.com/512/739/739231.png" alt="Curtidas" className="engagement-icon" />
                <div className="metric-value">356.465</div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '85%' }}></div>
                </div>
                <div className="media-semanal">Media semanal</div>
              </div>
              <div>
                <span>Comentários</span>
                <img src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png" alt="Comentários" className="engagement-icon" />
                <div className="metric-value">242.112</div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '65%' }}></div>
                </div>
                <div className="media-semanal">Media semanal</div>
              </div>
              <div>
                <span>Visualizações</span>
                <img src="https://cdn-icons-png.flaticon.com/512/709/709612.png" alt="Visualizações" className="engagement-icon" />
                <div className="metric-value">3.567.570</div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '95%' }}></div>
                </div>
                <div className="media-semanal">Media semanal</div>
              </div>
              <div>
                <span>Compartilhamentos</span>
                <img src="https://cdn-icons-png.flaticon.com/512/929/929539.png" alt="Compartilhamentos" className="engagement-icon" />
                <div className="metric-value">100.332</div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '75%' }}></div>
                </div>
                <div className="media-semanal">Media semanal</div>
              </div>
            </div>
          </div>

          {/* Trending Topics */}
          <div className="stats-card">
            <h3>Trending Topics</h3>
            <div className="trending-sections">
              {/* X (Twitter) Section */}
              <div className="trending-section">
                <div className="platform-header">
                  <img src="https://cdn-icons-png.flaticon.com/512/5969/5969020.png" alt="X" className="platform-icon" />
                  <h4>X (Twitter)</h4>
                </div>
                <div className="trending-item">
                  <span className="trending-number">1</span>
                  <span className="trending-hashtag">#BrasilUnido</span>
                  <span className="trending-count">125.5K tweets</span>
                </div>
                <div className="trending-item">
                  <span className="trending-number">2</span>
                  <span className="trending-hashtag">#GovernoBR</span>
                  <span className="trending-count">98.2K tweets</span>
                </div>
                <div className="trending-item">
                  <span className="trending-number">3</span>
                  <span className="trending-hashtag">#NovoBrasil</span>
                  <span className="trending-count">76.8K tweets</span>
                </div>
              </div>

              {/* Instagram Section */}
              <div className="trending-section">
                <div className="platform-header">
                  <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" className="platform-icon" />
                  <h4>Instagram</h4>
                </div>
                <div className="trending-item">
                  <span className="trending-number">1</span>
                  <span className="trending-hashtag">#BrasilEmFoco</span>
                  <span className="trending-count">89.3K posts</span>
                </div>
                <div className="trending-item">
                  <span className="trending-number">2</span>
                  <span className="trending-hashtag">#GovBR</span>
                  <span className="trending-count">67.1K posts</span>
                </div>
                <div className="trending-item">
                  <span className="trending-number">3</span>
                  <span className="trending-hashtag">#BrasilForte</span>
                  <span className="trending-count">45.9K posts</span>
                </div>
              </div>

              {/* Google Trends Section */}
              <div className="trending-section">
                <div className="platform-header">
                  <img src="https://img.icons8.com/?size=512&id=17949&format=png" alt="Google" className="platform-icon" />
                  <h4>Google Trends</h4>
                </div>
                <div className="trending-item">
                  <span className="trending-number">1</span>
                  <span className="trending-hashtag">Governo Federal</span>
                  <span className="trending-count">+250% buscas</span>
                </div>
                <div className="trending-item">
                  <span className="trending-number">2</span>
                  <span className="trending-hashtag">Brasil Governo</span>
                  <span className="trending-count">+180% buscas</span>
                </div>
                <div className="trending-item">
                  <span className="trending-number">3</span>
                  <span className="trending-hashtag">Gov BR</span>
                  <span className="trending-count">+150% buscas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;