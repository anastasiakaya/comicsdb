import React from 'react';
import './error-indicator.css';

import nightwingImg from '../../img/heroes/nightwing.png';
import batmanImg from '../../img/heroes/batman.png';
import superman from '../../img/heroes/superman.png';
import supergirl from '../../img/heroes/supergirl.png';

const ErrorIndicator = () => {


  const images = [nightwingImg, batmanImg, supergirl, superman];
  const rndImg = images[Math.floor(Math.random()*images.length)];

  return (
    <div className="error-indicator">
      <div className="error-indicator__img">
        <img src={rndImg} alt='Error' />
      </div>
      <div className="lead">
        Ooops, something goes wrong! <br />
        But don’t worry, our heroes are solving a&nbsp;problem.
      </div>
    </div>
  );
  };

export default ErrorIndicator;
