import React from 'react';
import { MetricsProvider } from './context/MetricsContext';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <MetricsProvider>      
      <Container fluid className="p-0 min-vh-100">
        <Sidebar />
        <Row className="g-0 min-vh-100">          
          <Col xs={12} className="p-3">
            <MainContent />
          </Col>
        </Row>
      </Container>
    </MetricsProvider>
  );
}

export default App;