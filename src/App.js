// src/App.js
import React from 'react';
import { MetricsProvider } from './context/MetricsContext';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import './styles/App.css';

function App() {
  return (
    <MetricsProvider>
      <div style={{ fontFamily: 'Roboto, sans-serif' }}>
        <Sidebar />
        <MainContent />
      </div>
    </MetricsProvider>
  );
}

export default App;