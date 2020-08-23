import React from 'react';

import '../../../assets/styles/global.scss';
import './statisticCard.scss';

export function StatisticCard({ title, value }) {
  return (
   <div className="statistic-card-container">
      <div className="card-title">{ title }</div>
      <div className="card-value">{ value }</div>
   </div>
  )
}