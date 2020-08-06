import React from 'react';
import '../styles/testimonial.scss';

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-arrow">
        <img
          src={require('../assets/img/PNG/icon - left arrow@2x.png')}
          alt="prev testimonial"
        />
      </div>
      <div className="testimonial-content">
        <div className="testimonial-wrapper">
          <div className="testimonial-image">
            <img
              src={require('../assets/img/PNG/Path Copy@2x.png')}
              alt="background-user"
              className="background-image"
            />
            <img
              src={require('../assets/img/PNG/Path Copy 2@2x.png')}
              alt="Alice Krejcova"
              className="image"
            />
          </div>
          <div className="testimonial-message">
            <h2>Company Logo</h2>
            <p className="message">
              "Our welcome message prompts conversations we might not have had
              without the inbox. Now, 30% of paid signups are attributed to
              TapTalk.io Omnichannel Customer Service!"
            </p>
            <div className="user-name">
              <h3>Alice Krejcova</h3>
              <p>Head of Things</p>
            </div>
          </div>
        </div>
        <div className="carousel">
          <div className="carousel-default carousel-item-active"></div>
          <div className="carousel-default carousel-item"></div>
          <div className="carousel-default carousel-item"></div>
          <div className="carousel-default carousel-item"></div>
        </div>
      </div>
      <div className="testimonial-arrow">
        <img
          src={require('../assets/img/PNG/icon - arrow-right@2x.png')}
          alt="next testimonial"
        />
      </div>
    </div>
  );
};

export default Testimonial;
