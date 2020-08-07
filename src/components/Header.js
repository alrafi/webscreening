import React from 'react';
import '../styles/header.scss';
import Button from './Button';

const Header = () => {
  return (
    <header>
      <div className="title">
        <img
          src={require('../assets/img/WEBP/logotype copy 2@2x.webp')}
          alt="TapTalk Logo"
        />
      </div>
      <div className="hamburger-menu">
        <img src={require('../assets/img/PNG/icon - menu@2x.png')} alt="menu" />
      </div>
      <div className="navigation">
        <nav>
          <ul>
            <li className="features">
              Features{' '}
              <img
                src={require('../assets/img/SVG/icon - chevron-down.svg')}
                alt=""
              />
              <div className="features-dropdown">
                <a href="/" className="features-dropdown-item">
                  Inbox
                </a>
                <a href="/" className="features-dropdown-item">
                  Disposition
                </a>
                <a href="/" className="features-dropdown-item">
                  User Session Synch
                </a>
              </div>
            </li>
            <li>Pricing</li>
            <li className="features">
              Developer{' '}
              <img
                src={require('../assets/img/SVG/icon - chevron-down.svg')}
                alt=""
              />
              <div className="features-dropdown">
                <a href="/" className="features-dropdown-item">
                  Documentation
                </a>
                <a href="/" className="features-dropdown-item">
                  iOS SDK
                </a>
                <a href="/" className="features-dropdown-item">
                  Android SDK
                </a>
              </div>
            </li>
            <li>Blog</li>
            <li>Help</li>
          </ul>
        </nav>
        <div className="button-container">
          <Button type="primary" size="medium">
            Log in
          </Button>
          <Button type="secondary" size="medium">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
