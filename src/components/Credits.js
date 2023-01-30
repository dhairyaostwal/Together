import React from 'react';
import './Credits.scss';

const Credits = () => {
  return (
    <div className="Credits">
      <p>
        Build with ❤️ by{' '}
        <span>
          <a target="_blank" rel="noreferrer" href="https://github.com/dhairyaostwal">
            {' '}
            Dhairya Ostwal
          </a>
        </span>
      </p>
    </div>
  );
};

export default Credits;
