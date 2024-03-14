import React, { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState('all');


  
  const value = {
    filter,
    setFilter,
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
