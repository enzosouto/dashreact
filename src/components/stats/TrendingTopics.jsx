import React from 'react';

const TrendingSection = ({ platform, icon, topics }) => (
  <div className="trending-section">
    <div className="platform-header">
      <img src={icon} alt={platform} className="platform-icon" />
      <h4>{platform}</h4>
    </div>
    {topics.map((topic, index) => (
      <div key={index} className="trending-item">
        <span className="trending-number">{index + 1}</span>
        <span className="trending-hashtag">{topic.hashtag}</span>
        <span className="trending-count">{topic.count}</span>
      </div>
    ))}
  </div>
);

const TrendingTopics = () => {
  const platforms = [
    {
      name: 'X (Twitter)',
      icon: 'https://cdn-icons-png.flaticon.com/512/5969/5969020.png',
      topics: [
        { hashtag: '#BrasilUnido', count: '125.5K tweets' },
        { hashtag: '#GovernoBR', count: '98.2K tweets' },
        { hashtag: '#NovoBrasil', count: '76.8K tweets' }
      ]
    },
    {
      name: 'Instagram',
      icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384063.png',
      topics: [
        { hashtag: '#BrasilEmFoco', count: '89.3K posts' },
        { hashtag: '#GovBR', count: '67.1K posts' },
        { hashtag: '#BrasilForte', count: '45.9K posts' }
      ]
    },
    {
      name: 'Google Trends',
      icon: 'https://img.icons8.com/?size=512&id=17949&format=png',
      topics: [
        { hashtag: 'Governo Federal', count: '+250% buscas' },
        { hashtag: 'Brasil Governo', count: '+180% buscas' },
        { hashtag: 'Gov BR', count: '+150% buscas' }
      ]
    }
  ];

  return (
    <div className="stats-card">
      <h3>Trending Topics</h3>
      <div className="trending-sections">
        {platforms.map((platform) => (
          <TrendingSection
            key={platform.name}
            platform={platform.name}
            icon={platform.icon}
            topics={platform.topics}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;