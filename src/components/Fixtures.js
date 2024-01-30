import React, { useEffect, useState } from "react";
import axios from "axios";

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);

  const updateFixtures = () => {
    axios
      .get("http://localhost:5001/api/fixtures")
      .then((response) => {
        console.log(response.data);
        setFixtures(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getFixtures = () => {
    axios
      .get("http://localhost:5001/fixtures")
      .then((response) => {
        console.log(response.data);
        setFixtures(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getFixtures();
  }, []);

  return (
    <div className="fixture-container">
      <button onClick={updateFixtures}>Mise à jour</button>
      <h1>Fixtures</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>League</th>
            <th>Round</th>
            <th>Home</th>
            <th>Away</th>
            <th>H.Goals</th>
            <th>A.Goals</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {fixtures.map((fixture, index) => (
            <tr key={index}>
              <td>{fixture.id}</td>
              <td>{new Date(fixture.date).toLocaleDateString()}</td>
              <td>{fixture.league}</td>
              <td>{fixture.round}</td>
              <td>{fixture.homeTeam}</td>
              <td>{fixture.awayTeam}</td>
              <td>{fixture.homeGoals}</td>
              <td>{fixture.awayGoals}</td>
              <td>{fixture.status === "Match Finished" ? "Terminé" : " "}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fixtures;
