import React from "react";
import GitHubCalendar from "react-github-calendar";
import "../GitHubContribution/Gitgraph.css";
import { useEffect, useState } from "react";
import { SyntheticEvent } from "react";
import ActivityCalendar from "react-activity-calendar";
import { fetchGitHubData } from "react-activity-calendar";

// light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
//         dark: ["#161b22", "#FF8282", "#BB3E00", "#E83F25","#A62C2C"]

function Gitgraph() {
  const [gitdata, setgitdata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "https://github-contributions-api.jogruber.de/v4/rohitrpatil45"
        );
        const fetchdata = await response.json();
        console.log("this fetchdata", fetchdata);
        const mapdata = fetchdata.contributions.map((({date ,count,level}) => (
          {
            date,
            count,
            level
          }
        )))
        setgitdata(mapdata);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata(); //
  }, []);

  const data = [
    {
      date: "2025-06-23",
      count: 2,
      level: 1,
    },
    {
      date: "2025-08-02",
      count: 16,
      level: 4,
    },
    {
      date: "2025-11-29",
      count: 11,
      level: 3,
    },
  ];

  return (
    <>
      <div className="graph-div">
        <ActivityCalendar data={gitdata.length > 0 ? gitdata : data} />
      </div>
    </>
  );
}

export default Gitgraph;
