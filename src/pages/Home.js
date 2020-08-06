import React from 'react';
import '../styles/home.scss';
import Header from '../components/Header';
import ShowcaseContent from '../components/ShowcaseContent';
import Weather from '../components/Weather';
import InboxFeature from '../components/InboxFeature';
import DispositionFeature from '../components/DispositionFeature';
import UserSessionFeature from '../components/UserSessionFeature';
import Testimonial from '../components/Testimonial';
import OtherFeatures from '../components/OtherFeatures';
import Button from '../components/Button';
import Contact from '../components/Contact';

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
      <section className="usersession-features">
        <UserSessionFeature />
      </section>
      <section className="testimonial">
        <Testimonial />
      </section>
      <section className="other-features">
        <OtherFeatures />
      </section>
      <section className="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
