import React from 'react';
import '../styles/home.scss';
import Header from '../components/Header';
import ShowcaseContent from '../components/ShowcaseContent';
import Weather from '../components/Weather';
import InboxFeature from '../components/InboxFeature';
import DispositionFeature from '../components/DispositionFeature';

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
      <section className="disposition-features">
        <DispositionFeature />
      </section>
    </div>
  );
};

export default Home;
