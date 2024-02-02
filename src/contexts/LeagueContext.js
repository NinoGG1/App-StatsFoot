import React, { createContext, useState, useEffect, useContext } from "react";

// Créer le contexte
export const LeagueContext = createContext();

// Créer le fournisseur de contexte
export const LeagueProvider = ({ children }) => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/leagues")
      .then((response) => response.json())
      .then((data) => {
        const leaguesData = data.map((league) => ({
          id: league.id,
          name: league.name,
          country: league.country,
          logo: league.logo,
        }));
        setLeagues(leaguesData);
      });
  }, []);

  return (
    <LeagueContext.Provider value={leagues}>{children}</LeagueContext.Provider>
  );
};

// Créer un hook personnalisé pour utiliser le contexte
export const useLeagues = () => {
  return useContext(LeagueContext);
};
