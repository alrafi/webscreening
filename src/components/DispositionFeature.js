import React from 'react';
import '../styles/dispositionfeature.scss';
import '../styles/arrow-right.scss';

const DispositionFeature = () => {
  return (
    <div className="disposition-wrapper">
      <div className="disposition-image">
        <img
          src={require('../assets/img/PNG/disposition alternative design-02@2x.png')}
          alt="disposition features"
        />
      </div>
      <div className="disposition-info">
        <p className="disposition-title">DISPOSITION</p>
        <h2>Generate business insight through Disposition</h2>
        <p className="disposition-content">
          Create and compile Disposition from every case to help you gain a
          business insight about what your customer say.
        </p>
        <div className="disposition-more-wrapper">
          <p>Learn More About Our Features</p>
          <img
            src={require('../assets/img/SVG/icon - arrow-right@1x.svg')}
            alt="arrow right"
            className="arrow-right white"
          />
        </div>
      </div>
    </div>
  );
};

export default DispositionFeature;
