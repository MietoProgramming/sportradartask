import React, { useState, useEffect } from "react";
import { Table, Td } from "../styledComponents/Home";
import { baseURI, ApiKeyURI } from "../services/settingApi";
// import { schedulesRes } from "../apiResponsesMocks/schedules";
// import { seasonsRes } from "../apiResponsesMocks/seasons";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../services/formats";

const HomePage = () => {
  const [isLoading, setLoading] = useState(true);
  const [schedulesData, setSchedulesData] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [seasonFilter, setSeasonFilter] = useState("");
  const [schedulesFiltered, setSchedulesFiltered] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetchData();
    setFilters();
    setLoading(false);
  }, []);

  useEffect(() => {
    setFilters();
  }, [seasonFilter]);

  const fetchData = async () => {
    const schedulesRes = await fetch(
      baseURI +
        "soccer/trial/v4/en/seasons/sr:season:77453/schedules.json" +
        ApiKeyURI
    )
      .then((res) => res.json())
      .catch((error) => console.log(error));
    const seasonsRes = await fetch(
      baseURI +
        "soccer/trial/v4/en/competitions/sr:competition:202/seasons.json" +
        ApiKeyURI
    )
      .then((res) => res.json())
      .catch((error) => console.log(error));
    console.log(schedulesRes.schedules);
    setSchedulesData(schedulesRes.schedules);
    console.log(seasonsRes.seasons);
    setSeasons(seasonsRes.seasons);
  };

  const goToMatch = (matchId) => {
    console.log(matchId);
    navigate(`/match/${matchId}`);
  };

  const setFilters = () => {
    setSchedulesFiltered(
      seasonFilter
        ? schedulesData?.filter(
            (event) =>
              event.sport_event.sport_event_context.season.id === seasonFilter
          )
        : schedulesData
    );
    console.log(
      seasonFilter
        ? schedulesData?.filter(
            (event) =>
              event.sport_event.sport_event_context.season.id === seasonFilter
          )
        : schedulesData
    );
  };

  const setTeamColor = (team, winner) => {
    return winner === undefined ? "orange" : winner === team ? "green" : "red";
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <select
            name="seasons"
            id=""
            onChange={(e) => {
              console.log(e.target.value);
              setSeasonFilter(e.target.value);
            }}
          >
            <option value="">-</option>
            {seasons?.map((season) => (
              <option key={season.id} value={season.id}>
                {season.name}
              </option>
            ))}
          </select>

          <Table>
            <thead>
              <tr>
                <Td colSpan="2">Team Names</Td>
                <Td>Result</Td>
                <Td>Match Date</Td>
                <Td>Half Time Score</Td>
                <Td>Stadium Name</Td>
              </tr>
            </thead>
            <tbody>
              {schedulesFiltered?.map((match, index) => (
                <tr
                  key={match.sport_event.id}
                  onClick={() => goToMatch(match.sport_event.id)}
                >
                  <Td
                    bgColor={setTeamColor(
                      match.sport_event.competitors[0].id,
                      match.sport_event_status.winner_id
                    )}
                  >
                    {match.sport_event.competitors[0].name}
                  </Td>
                  <Td
                    bgColor={setTeamColor(
                      match.sport_event.competitors[1].id,
                      match.sport_event_status.winner_id
                    )}
                  >
                    {match.sport_event.competitors[1].name}
                  </Td>
                  <Td>
                    {match.sport_event_status.period_scores &&
                      (match.sport_event.competitors[0].qualifier === "home"
                        ? `${match.sport_event_status.home_score} : ${match.sport_event_status.away_score}`
                        : `${match.sport_event_status.away_score} : ${match.sport_event_status.home_score}`)}
                  </Td>
                  <Td>{formatDate(match.sport_event.start_time)}</Td>
                  <Td>
                    {match.sport_event_status.period_scores &&
                      (match.sport_event.competitors[0].qualifier === "home"
                        ? `${match.sport_event_status.period_scores[0].home_score} : ${match.sport_event_status.period_scores[0].away_score}`
                        : `${match.sport_event_status.period_scores[0]?.away_score} : ${match.sport_event_status.period_scores[0].home_score}`)}
                  </Td>
                  <Td>{match.sport_event.venue.name}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default HomePage;
