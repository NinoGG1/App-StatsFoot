import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";

function LeaguesList() {
  const [leagues, setLeagues] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/leagues")
      .then((response) => {
        setLeagues(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5001/teams")
      .then((response) => {
        setTeams(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleButtonClick = async (id) => {
    const response = await axios.get(`http://localhost:5001/api/teams/${id}`);
    console.log(response.data);
  };

  const teamsByLeague = {};
  for (const team of teams) {
    if (!teamsByLeague[team.league_id]) {
      teamsByLeague[team.league_id] = [];
    }
    teamsByLeague[team.league_id].push(team);
  }

  const maxTeams = Math.max(
    ...Object.values(teamsByLeague).map((teams) => teams.length)
  );

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          {leagues.map((league) => (
            <Th key={league.id}>
              <Button onClick={() => handleButtonClick(league.id)}>
                {league.name}
              </Button>
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {Array.from({ length: maxTeams }).map((_, i) => (
          <Tr key={i}>
            {leagues.map((league) => (
              <Td key={league.id}>
                {teamsByLeague[league.id] && teamsByLeague[league.id][i]
                  ? teamsByLeague[league.id][i].name
                  : ""}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default LeaguesList;
