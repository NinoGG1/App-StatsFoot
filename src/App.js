import React from "react";
import Fixtures from "./components/Fixtures";
import Teams from "./components/Teams";

const App = () => {
  return (
    <div className="app-container">
      <h1>Stats Foot App</h1>
      <Teams />
      <Fixtures />
    </div>
  );
};

export default App;
