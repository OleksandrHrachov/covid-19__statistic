import React from 'react';
import logo from './logo.svg';
import './Logo.scss';

export const Logo: React.FC = () => {
  return (
    <div className="logo__content">
      <div className="logo__img-box">
        <img
          className="logo__img"
          src={logo}
          alt="logo"
        />
      </div>
      <span className="logo__text">STATISTIC</span>
    </div>
  );
};
