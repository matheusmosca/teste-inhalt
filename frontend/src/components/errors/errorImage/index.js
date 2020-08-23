import React from 'react';

import '../../../assets/styles/global.scss';
import './errorImage.scss';

export function ErrorImage({ errorMessage }) {
  return (
    <div className="error-container">
      <div className="error-message">
        <img src={ require('../../../assets/svgs/undraw_no_data.svg') } alt=""/>
        <h4 className="dashboard-information">{ errorMessage }</h4>
      </div>
    </div>
  )
}