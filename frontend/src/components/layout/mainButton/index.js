import React from 'react';

import '../../../assets/styles/global.scss';
import "./mainButton.scss";

export function MainButton({ buttonText }) {
  return (
    <button className="main-button">{ buttonText }</button>
  )
}