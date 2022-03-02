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
    console.log(schedulesRes.schedules);
    setSchedulesData(schedulesRes);
  };

  return (
    <div className="App">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Table>
          <thead>
            <tr>
              <Td>Team Name</Td>
              <Td>Result</Td>
            </tr>
          </thead>
          <tbody>
            {schedulesData?.schedules?.map((match) => (
              <tr key={match.sport_event.id}>
                <Td>{`${match.sport_event.competitors[0].name} - ${match.sport_event.competitors[1].name}`}</Td>
                <Td>
                  {match.sport_event.competitors[0].qualifier === "home"
                    ? `${match.sport_event_status.home_score} : ${match.sport_event_status.away_score}`
                    : `${match.sport_event_status.away_score} : ${match.sport_event_status.home_score}`}
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default App;
