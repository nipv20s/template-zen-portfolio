import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import PortfolioPage from './components/PortfolioPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'portfolio'>('landing');

  const navigateToPortfolio = () => {
    setCurrentPage('portfolio');
  };

  const navigateToLanding = () => {
    setCurrentPage('landing');
  };

  return (
    <div className="min-h-screen transition-all duration-1000 ease-in-out">
      {currentPage === 'landing' && (
        <LandingPage onNavigateToPortfolio={navigateToPortfolio} />
      )}
      {currentPage === 'portfolio' && (
        <PortfolioPage onNavigateBack={navigateToLanding} />
      )}
    </div>
  );
}

export default App;