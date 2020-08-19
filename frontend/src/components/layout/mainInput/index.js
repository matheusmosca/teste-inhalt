import React from 'react';

import '../../../assets/styles/global.scss';
import './mainInput.scss';

export function MainInput({ inputType, labelName, required }) {
  return (
    <div className="input-container">
      <label>{ labelName }</label>
      <input required={ required } className="form-input" type={ inputType }/>
    </div>
  )
}