import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

const ListingsContext = createContext();

export const ListingsProvider = ({ children }) => {
  const [listings, setListings] = useState([]);

  const addProduct = (obj) => {
    setListings(prevListings => [...prevListings, obj]);
  };
  const value = {
    listings,
    addProduct,
  };

  return (
    <ListingsContext.Provider value={value}>{children}</ListingsContext.Provider>
  );
};

export const useListings = () => {
  const context = useContext(ListingsContext);
  if (!context) {
    throw new Error("useListing must be used within a ListingsProvider");
  }
  return context;
};
