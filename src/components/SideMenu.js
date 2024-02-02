import React from "react";
import CountriesList from "./SideMenu/CountriesList";
import TopLeagues from "./SideMenu/TopLeagues";

const SideMenu = () => {
  return (
    <div>
      <TopLeagues />
      <CountriesList />
    </div>
  );
};

export default SideMenu;
