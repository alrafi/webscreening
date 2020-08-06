import React from 'react';
import '../styles/home.scss';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="container">
      <section className="showcase">
        <Header />

        <div className="content">
          <h1>
            Omnichannel Messaging Platform for sales, marketing, and support
          </h1>
          <p>
            Elevate your customer engagement experience by allowing your
            customers to reach you from WhatsApp, Twitter, FB Messenger,
            Telegram, LINE, and email, and also easily manage it from a single
            dashboard.
          </p>
          <div className="button-content">
            <button>See Pricing</button>
            <button>Get Started Now!</button>
          </div>
          <img
            src={require('../assets/img/PNG/Group - assets@2x.png')}
            alt="TapTalk"
            className="showcase-image"
          />
        </div>
      </section>
      <section className="weather"></section>
    </div>
  );
};

export default Home;
