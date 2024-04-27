import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState("");

  const applyFilter = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const removeFilter = () => {
    setFilter("");
  };

  return (
    <FilterContext.Provider value={{ filter, applyFilter, removeFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
