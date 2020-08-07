import React from 'react';
import '../styles/inboxfeature.scss';
import '../styles/arrow-right.scss';

const InboxFeature = () => {
  return (
    <div className="inbox-wrapper">
      <div className="bg-shape-1"></div>
      <div className="bg-shape-2"></div>
      <div className="inbox-info">
        <div className="inbox-info-wrapper">
          <p className="inbox-title">INBOX</p>
          <h2>All-in-one Inbox</h2>
          <p className="inbox-content">
            Equip your agents with the best tools to give your customers a
            world-class customer engagement experience.
          </p>
        </div>
        <div className="inbox-more-wrapper">
          <p className="inbox-more">Learn More About Our Features</p>
          <img
            src={require('../assets/img/SVG/icon - arrow-right@1x.svg')}
            alt="inbox more"
            className="arrow-right primary"
          />
        </div>
      </div>
      <div className="inbox-image">
        <img
          src={require('../assets/img/WEBP/inbox-screen-shadow@1x.webp')}
          alt="Inbox Features"
        />
      </div>
    </div>
  );
};

export default InboxFeature;
