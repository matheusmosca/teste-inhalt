import React from 'react';

import '../../assets/styles/global.scss';
import './searchInput.scss';

export function SearchInput() {
  return (
   <div className="search-container">
     <form action="" className="search-form">
       <button><img src={ require('../../assets/svgs/glass.svg') } alt="glass"/></button>
       <input type="text" placeholder="Procure um produto"/>
     </form>
   </div>
  )
}