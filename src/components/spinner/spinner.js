import React from 'react';
import './spinner.css';

import bangSVG from '../../img/icons/bang.svg';
import wowSVG from '../../img/icons/wow.svg';
import powSVG from '../../img/icons/pow.svg';
import boomSVG from '../../img/icons/boom.svg';
import zapSVG from '../../img/icons/zap.svg';
import kapoowSVG from '../../img/icons/kapow.svg';

const Spinner = () => {
  return (
    <div className="comics-loader">
      <img src={bangSVG} alt="bang" />
      <img src={wowSVG} alt="wow" />
      <img src={powSVG} alt="pow" />
      <img src={boomSVG} alt="boom" />
      <img src={zapSVG} alt="zap" />
      <img src={kapoowSVG} alt="kapow" />
    </div>
  );
};

export default Spinner;
