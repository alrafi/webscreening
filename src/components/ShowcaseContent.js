import React from 'react';
import Button from '../components/Button';
import '../styles/showcasecontent.scss';

const ShowcaseContent = () => {
  return (
    <div className="content">
      <h1>Omnichannel Messaging Platform for sales, marketing, and support</h1>
      <p>
        Elevate your customer engagement experience by allowing your customers
        to reach you from WhatsApp, Twitter, FB Messenger, Telegram, LINE, and
        email, and also easily manage it from a single dashboard.
      </p>
      <div className="button-content">
        <Button type="secondary" size="large">
          See Pricing
        </Button>
        <Button type="primary" size="large">
          Get Started Now!
        </Button>
      </div>
      <img
        src={require('../assets/img/PNG/Group - assets@2x.png')}
        alt="TapTalk"
        className="showcase-image"
      />
    </div>
  );
};

export default ShowcaseContent;
