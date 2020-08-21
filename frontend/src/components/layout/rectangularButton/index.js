import React from 'react';

import '../../../assets/styles/global.scss';
import "./rectangularButton.scss";

export function RectangularButton({ buttonText, hide=false, onClickEffect }) {
  const hideButton = hide ? { display: 'None' } : { display: 'initial' };
  return (
    <button onClick={ onClickEffect } className="rectangular-button" style={ hideButton }>{ buttonText }</button>
  )
}