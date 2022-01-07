import React, { useState, useContext } from 'react';
import useFetch from './useFetch';
// make sure to use https
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState('Batman');
  const { isLoading, movies, isError } = useFetch(`s=${search}`);

  return (
    <AppContext.Provider
      value={{
        setSearch,
        movies,
        isError,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
