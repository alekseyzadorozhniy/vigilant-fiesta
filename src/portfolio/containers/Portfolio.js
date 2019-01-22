import React from 'react';

import Positions from '../components/Positions';
import '../styles/styles.css';

const Portfolio = () => {
  return (
    <div>
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="portfolio-layout">
        <div className="portfolio-main">
          <Positions />
        </div>
        <div className="portfolio-right-side" />
      </div>
    </div>
  );
};

export default Portfolio;
