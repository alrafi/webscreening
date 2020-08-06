import React from 'react';
import '../styles/home.scss';
import Header from '../components/Header';
import ShowcaseContent from '../components/ShowcaseContent';
import Weather from '../components/Weather';
import InboxFeature from '../components/InboxFeature';

const Home = () => {
  return (
    <div className="container">
      <section className="showcase">
        <Header />
        <ShowcaseContent />
      </section>
      <section className="weather">
        <Weather />
      </section>
      <section className="inbox-features">
        <InboxFeature />
      </section>
      <section className="disposition-features"></section>
    </div>
  );
};

export default Home;
