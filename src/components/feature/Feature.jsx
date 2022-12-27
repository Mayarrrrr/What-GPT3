import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (      /*a5lehom props bttb3t mn al page al tanya*/ 
  <div className="gpt3__features-container__feature">

    <div className="gpt3__features-container__feature-title">
        <div />       {/*al div di self closed di al h3ml feha al bar al gradient */}
        <h1>{title}</h1>
    </div>

    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>

  </div>
);

export default Feature;