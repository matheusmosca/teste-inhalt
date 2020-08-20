import React from 'react';

import '../../../assets/styles/global.scss';
import './mainInput.scss';

export function MainInput({ inputType, labelName, saveInputValue, required }) {
  return (
    <div className="input-container">
      <label>{ labelName }</label>
      <input required={ required } onChange={ (e) => saveInputValue(e.target.value) } className="form-input" type={ inputType }/>
    </div>
  )
}