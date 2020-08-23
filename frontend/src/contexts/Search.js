import React, { createContext, useContext, useState } from 'react';

const searchContext = createContext();

export function SearchProvider({ children }) {
  const [searchValue, setSearchValue] = useState('');

  const changeSearchValue = input => setSearchValue(input.toLowerCase());

  function filterProducts(productsList) {
    if (searchValue !== '' && productsList) {
      return productsList.filter((product) => product.name.toLowerCase().includes(searchValue));
    } else {
      return productsList;
    }
  }

  return (
    <searchContext.Provider value={{ searchValue, changeSearchValue, filterProducts }}>
      { children }
    </searchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(searchContext);
  return context;
}