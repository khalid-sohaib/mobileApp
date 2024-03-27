import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

const ListingsContext = createContext();

export const ListingsProvider = ({ children }) => {
  const [listings, setListings] = useState([
    {
      category: "",
      description:
        "Iftar deal with the basic process and specific operation of the position",
      imgUrl:
        "file:///data/user/0/com.firstapp/cache/rn_image_picker_lib_temp_791701f7-5e22-4acf-ac79-5894e04e1c39.jpg",
      location: "31.483996, 74.3945499",
      price: "252",
      title: "Aftari",
    },
    {
      category: "Construction",
      description: " injected humour, or non-characteristic words ",
      imgUrl:
        "file:///data/user/0/com.firstapp/cache/rn_image_picker_lib_temp_c1dcde83-6869-4e1d-81a9-b07fffa21a15.jpg",
      location: "",
      price: "858",
      title: "Lorem Ipsum",
    },
    {
      category: "",
      description: "Dddd 580wattss bhchcggg hhghhhh ggtyyy gyydggtt",
      imgUrl:
        "file:///data/user/0/com.firstapp/cache/rn_image_picker_lib_temp_695d680c-58f1-48d9-ba63-62064484b577.jpg",
      location: "",
      price: "8586",
      title: "Solar panels",
    },
    {
      category: "",
      description: " injected humour, or non-characteristic words ",
      imgUrl:
        "file:///data/user/0/com.firstapp/cache/rn_image_picker_lib_temp_c1dcde83-6869-4e1d-81a9-b07fffa21a15.jpg",
      location: "",
      price: "858",
      title: "Lorem Ipsum",
    },
  ]);

  const addProduct = (obj) => {
    setListings((prevListings) => [...prevListings, obj]);
  };
  const value = {
    listings,
    addProduct,
  };

  return (
    <ListingsContext.Provider value={value}>
      {children}
    </ListingsContext.Provider>
  );
};

export const useListings = () => {
  const context = useContext(ListingsContext);
  if (!context) {
    throw new Error("useListing must be used within a ListingsProvider");
  }
  return context;
};
