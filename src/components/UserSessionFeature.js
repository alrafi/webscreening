import React from 'react';
import '../styles/usersessionfeature.scss';

const UserSessionFeature = () => {
  return (
    <div className="usersession-wrapper">
      <div className="usersession-info">
        <p className="usersession-title">USER SESSION SYNC</p>
        <h2>User Session Synchronization</h2>
        <p className="usersession-content">
          Speeding up the workflow by helping your customers to start a
          conversation with you. Once your customers has logged in and need to
          get in touch with you, they don't need to fill their information
          again.
        </p>
        <div className="usersession-more-wrapper">
          <p className="usersession-more">Learn More About Our Features</p>
          <img
            src={require('../assets/img/SVG/icon - arrow-right@1x.svg')}
            alt="inbox more"
            className="arrow-right primary"
          />
        </div>
      </div>
      <div className="usersession-image">
        <img
          src={require('../assets/img/PNG/User Sync Illustration - FINAL-01@2x.png')}
          alt="Inbox Features"
        />
      </div>
    </div>
  );
};

export default UserSessionFeature;
