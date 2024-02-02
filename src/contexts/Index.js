import React from "react";
import { CountryProvider } from "./CountryContext";
import { LeagueProvider } from "./LeagueContext";
import { SelectedLeagueProvider } from "./SelectedLeagueContext";

export const ContextProvider = ({ children }) => {
  return (
    <CountryProvider>
      <LeagueProvider>
        <SelectedLeagueProvider>{children}</SelectedLeagueProvider>
      </LeagueProvider>
    </CountryProvider>
  );
};
