import React, { createContext, useState, useEffect, useContext } from "react";

// Créer le contexte
export const CountryContext = createContext();

// Créer le fournisseur de contexte
export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/leagues")
      .then((response) => response.json())
      .then((data) => {
        const uniqueCountries = [
          ...new Set(data.map((league) => league.country)),
        ];
        setCountries(uniqueCountries);
      });
  }, []);

  return (
    <CountryContext.Provider value={countries}>
      {children}
    </CountryContext.Provider>
  );
};

// Créer un hook personnalisé pour utiliser le contexte
export const useCountries = () => {
  return useContext(CountryContext);
};
