import { useState, useEffect } from "react";
import "./App.css";
import { Table, Td } from "./styledComponents/Home";
import { baseURI, ApiKeyURI } from "./services/settingApi";
import { schedulesRes } from "./apiResponsesMocks/schedules";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [schedulesData, setSchedulesData] = useState({});

  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  const fetchData = async () => {
    // await fetch(baseURI + 'soccer/trial/v4/en/seasons/sr:season:77453/schedules.json' + ApiKeyURI)
    //   .then(res => res.json())
    //   .then(data => {
    //     setData(data);
    //     console.log(data);
    //   })
    //   .catch(error => console.log(error))
    console.log(schedulesRes.schedules[0]);
    setSchedulesData(schedulesRes);
  };

  const formatDate = (date) => {
    const TIndex = date.indexOf("T");
    return date.slice(0, TIndex);
  };

  const setTeamColor = (team, winner) => {
    return winner === undefined ? "orange" : winner === team ? "green" : "red";
  };

  return (
    <div className="App">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
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
            {schedulesData?.schedules?.map((match, index) => (
              <tr key={match.sport_event.id}>
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
      )}
    </div>
  );
}

export default App;
