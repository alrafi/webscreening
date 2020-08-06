import React from 'react';
import '../styles/home.scss';
import Header from '../components/Header';
import ShowcaseContent from '../components/ShowcaseContent';
import Weather from '../components/Weather';

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
    </div>
  );
};

export default Home;
