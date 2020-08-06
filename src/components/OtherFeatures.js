import React from 'react';
import '../styles/otherfeatures.scss';

const OtherFeatures = () => {
  return (
    <div className="other-features-wrapper">
      <h1>Explore our other features!</h1>
      <div className="features-container">
        <div className="feature-item">
          <img
            src={require('../assets/img/PNG/icon - clock@2x.png')}
            alt="office hour icon"
          />
          <h2>Office Hour & Automated Messages</h2>
          <p>
            Let your customers know when your agents are available to chat and
            respond with automated messages outside of the office hours.
          </p>
        </div>
        <div className="feature-item">
          <img
            src={require('../assets/img/PNG/icon - tag@2x.png')}
            alt="topic icon"
          />
          <h2>Topics</h2>
          <p>Assign incoming cases to agents based on their departments.</p>
        </div>
        <div className="feature-item">
          <img
            src={require('../assets/img/PNG/icon - star@2x.png')}
            alt="ratings icon"
          />
          <h2>Customer Ratings</h2>
          <p>
            Measure the quality of your customer service by allowing your
            customers to rate their customer service experience.
          </p>
        </div>
      </div>
      <div className="features-more-wrapper">
        <p className="features-more">Learn More About Our Features</p>
        <img
          src={require('../assets/img/SVG/icon - arrow-right@1x.svg')}
          alt="features more"
          className="arrow-right primary"
        />
      </div>
    </div>
  );
};

export default OtherFeatures;
