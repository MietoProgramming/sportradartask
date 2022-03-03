import React, { useState, useEffect } from "react";
import { baseURI, ApiKeyURI } from "../services/settingApi";
import { useParams } from "react-router-dom";
import {
  MainContainer,
  Card,
  Ul,
  StatsContainer,
} from "../styledComponents/MatchDetails";
// import { matchRes } from "../apiResponsesMocks/match";
import { formatDate } from "../services/formats";

const MatchDetails = () => {
  const [isLoading, setLoading] = useState(true);
  const [matchData, setMatchData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, [id]);

  const fetchData = async () => {
    const matchRes = await fetch(
      baseURI + `soccer/trial/v4/en/sport_events/${id}/lineups.json` + ApiKeyURI
    )
      .then((res) => res.json())
      .catch((error) => console.log(error));
    console.log(matchRes);
    setMatchData(matchRes);
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <MainContainer>
          <Card style={{ color: "white" }}>
            <h1>{matchData.sport_event?.competitors[0].name}</h1>
            <h2>{matchData.sport_event?.competitors[0].country}</h2>
            <p>
              {matchData.sport_event?.competitors[0].qualifier.toUpperCase()}
            </p>
            <h1>Active players</h1>
            <div style={{ width: "100%", fontSize: "1.1em" }}>
              <Ul>
                {matchData.lineups?.competitors[0].players
                  .filter((player) => player.order)
                  .map((player) => (
                    <li key={player.id}>
                      {player.name} - {player.order}
                    </li>
                  ))}
              </Ul>
            </div>
          </Card>
          <StatsContainer>
            <h1>Stats</h1>
            <h2>{matchData.sport_event_status?.match_status.toUpperCase()}</h2>
            <h4>{formatDate(matchData.sport_event?.start_time)}</h4>
            <p>
              {matchData.sport_event_status?.period_scores &&
                (matchData.sport_event?.competitors[0].qualifier === "home"
                  ? `${matchData.sport_event_status.home_score} : ${matchData.sport_event_status.away_score}`
                  : `${matchData.sport_event_status.away_score} : ${matchData.sport_event_status.home_score}`)}
            </p>
            <h3>First half</h3>
            <p>
              {matchData.sport_event_status?.period_scores &&
                (matchData.sport_event.competitors[0].qualifier === "home"
                  ? `${matchData.sport_event_status.period_scores[0].home_score} : ${matchData.sport_event_status.period_scores[0].away_score}`
                  : `${matchData.sport_event_status.period_scores[0]?.away_score} : ${matchData.sport_event_status.period_scores[0].home_score}`)}
            </p>
            <h3>Second half</h3>
            <p>
              {matchData.sport_event_status?.period_scores &&
                (matchData.sport_event.competitors[0].qualifier === "home"
                  ? `${matchData.sport_event_status.period_scores[1].home_score} : ${matchData.sport_event_status.period_scores[1].away_score}`
                  : `${matchData.sport_event_status.period_scores[1]?.away_score} : ${matchData.sport_event_status.period_scores[1].home_score}`)}
            </p>
          </StatsContainer>
          <Card style={{ color: "white" }}>
            <h1>{matchData.sport_event?.competitors[1].name}</h1>
            <h2>{matchData.sport_event?.competitors[1].country}</h2>
            <p>
              {matchData.sport_event?.competitors[1].qualifier.toUpperCase()}
            </p>
            <h1>Active players</h1>
            <div style={{ width: "100%", fontSize: "1.1em" }}>
              <Ul>
                {matchData.lineups?.competitors[1].players
                  .filter((player) => player.order)
                  .map((player) => (
                    <li key={player.id}>
                      {player.name} - {player.order}
                    </li>
                  ))}
              </Ul>
            </div>
          </Card>
        </MainContainer>
      )}
    </>
  );
};

export default MatchDetails;
