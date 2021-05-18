import React from 'react';
import './Widgets.css';

function Widgets() {
  return (
    <div className="widgets">
      <div
        className="fb-page"
        data-href="https://www.facebook.com/Weightloss.healthmotivation/"
        data-tabs="timeline"
        data-width="340"
        data-height="100%"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/Weightloss.healthmotivation/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/Weightloss.healthmotivation/">
            Weight loss and Health motivation
          </a>
        </blockquote>
      </div>
    </div>
  );
}

export default Widgets;
