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
        <div className="contact-started">
          <h2>We'd love to talk about how we can work together. Interested?</h2>
          <div className="button-contact">
            <Button type="primary" size="large">
              Get Started Now!
            </Button>
            <Button type="secondary" size="large">
              See Pricing
            </Button>
          </div>
        </div>
        <footer>
          <ul>
            <li>Pricing</li>
            <li>
              <div className="menu-separator"></div>Blog
            </li>
            <li>
              <div className="menu-separator"></div>Help
            </li>
            <li>
              <div className="menu-separator"></div>Documentations
            </li>
            <li>
              <div className="menu-separator"></div>iOS SDK
            </li>
            <li>
              <div className="menu-separator"></div>Android SDK
            </li>
            <li>
              <div className="menu-separator"></div>Privacy Policy
            </li>
          </ul>
          <div className="icon-list">
            <img
              src={require('../assets/img/SVG/icon-facebook copy@2x.svg')}
              alt="facebook icon"
              className="icon-item"
            />
            <img
              src={require('../assets/img/SVG/icon-twitter copy@2x.svg')}
              alt="twitter icon"
              className="icon-item"
            />
            <img
              src={require('../assets/img/SVG/icon-gitlab copy@2x.svg')}
              alt="gitlab icon"
              className="icon-item"
            />
            <img
              src={require('../assets/img/SVG/icon-instagram copy@2x.svg')}
              alt="instagram icon"
              className="icon-item"
            />
            <img
              src={require('../assets/img/SVG/icon-linkedin copy@2x.svg')}
              alt="linkedin icon"
              className="icon-item"
            />
          </div>
          <p className="address">
            Jl. Kyai Maja No.25c, RT.12/RW.2, Gunung, Kec.Kby.Baru,
            <br /> Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12120
          </p>
          <p className="copyright">© 2020 TapTalk.io (PT Tap Talk Teknologi)</p>
          <img
            src={require('../assets/img/PNG/TapTalk.io_logo_mark Copy@2x.png')}
            alt="taptalk icon"
            className="taptalk-icon"
          />
        </footer>
      </section>
    </div>
  );
};

export default Home;
