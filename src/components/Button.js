import React from 'react';
import '../styles/button.scss';

const Button = ({ type, children }) => {
  if (type === 'secondary') {
    return <button className="button button-secondary">{children}</button>;
  }

  return <button className="button button-primary">{children}</button>;
};

export default Button;
