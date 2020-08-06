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
      <div className="navigation">
        <nav>
          <ul>
            <li>
              Features{' '}
              <img
                src={require('../assets/img/SVG/icon - chevron-down.svg')}
                alt=""
              />
            </li>
            <li>Pricing</li>
            <li>
              Developer{' '}
              <img
                src={require('../assets/img/SVG/icon - chevron-down.svg')}
                alt=""
              />
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
