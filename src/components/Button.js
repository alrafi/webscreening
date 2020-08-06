import React from 'react';
import '../styles/button.scss';

const Button = ({ type, size, children }) => {
  if (type === 'secondary') {
    if (size === 'medium') {
      return (
        <button className="button button-secondary medium">{children}</button>
      );
    } else if (size === 'large') {
      return (
        <button className="button button-secondary large">{children}</button>
      );
    }
  }

  if (size === 'medium') {
    return <button className="button button-primary medium">{children}</button>;
  }

  return <button className="button button-primary large">{children}</button>;
};

export default Button;
