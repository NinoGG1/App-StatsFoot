import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <table>
        <thead>
          <tr>
            {leagues.map((league) => (
              <th key={league.id}>
                <button onClick={() => handleButtonClick(league.id)}>
                  {league.name}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: maxTeams }).map((_, i) => (
            <tr key={i}>
              {leagues.map((league) => (
                <td key={league.id}>
                  {teamsByLeague[league.id] && teamsByLeague[league.id][i]
                    ? teamsByLeague[league.id][i].name
                    : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaguesList;
