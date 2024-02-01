import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);

  const updateFixtures = () => {
    axios
      .get("http://localhost:5001/api/fixtures")
      .then((response) => {
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
      <h2>Fixtures</h2>
      <button onClick={updateFixtures}>Mise à jour</button>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Date</Th>
              <Th>League</Th>
              <Th>Round</Th>
              <Th>Home</Th>
              <Th>Away</Th>
              <Th>H.Goals</Th>
              <Th>A.Goals</Th>
              <Th>Statut</Th>
            </Tr>
          </Thead>
          <Tbody>
            {fixtures.map((fixture, index) => (
              <Tr key={index}>
                <Td>{fixture.id}</Td>
                <Td>{new Date(fixture.date).toLocaleDateString()}</Td>
                <Td>{fixture.league}</Td>
                <Td>{fixture.round}</Td>
                <Td>{fixture.homeTeam}</Td>
                <Td>{fixture.awayTeam}</Td>
                <Td>{fixture.homeGoals}</Td>
                <Td>{fixture.awayGoals}</Td>
                <Td>{fixture.status === "Match Finished" ? "Terminé" : " "}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/* <table>
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
      </table> */}
    </div>
  );
};

export default Fixtures;
