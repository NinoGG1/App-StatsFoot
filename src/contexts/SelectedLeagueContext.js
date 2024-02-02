import React, { createContext, useState, useContext } from "react";

// Créer le contexte
export const SelectedLeagueContext = createContext();

// Créer le fournisseur de contexte
export const SelectedLeagueProvider = ({ children }) => {
  const [selectedLeague, setSelectedLeague] = useState(null);

  return (
    <SelectedLeagueContext.Provider
      value={{ selectedLeague, setSelectedLeague }}
    >
      {children}
    </SelectedLeagueContext.Provider>
  );
};

// Créer un hook personnalisé pour utiliser le contexte
export const useSelectedLeague = () => {
  return useContext(SelectedLeagueContext);
};
