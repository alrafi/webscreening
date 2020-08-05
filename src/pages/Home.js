import React from 'react';
import '../styles/home.scss';

const Home = () => {
  return (
    <div className="container">
      <section className="showcase">
        <header>
          <div className="title">
            <h1>TapTalk.io</h1>
          </div>
          <div className="navigation">
            <nav>
              <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Developer</li>
                <li>Blog</li>
                <li>Help</li>
              </ul>
            </nav>
            <div className="button-container">
              <button>Log in</button>
              <button>Get Started</button>
            </div>
          </div>
        </header>
        <div className="content">
          <h1>Welcome to TapTalk.io</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            exercitationem ab ad maxime veniam saepe quod, aliquam, asperiores
            fugit aut omnis perspiciatis corrupti. Vel, facere debitis minima
            aperiam quasi nam.
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
