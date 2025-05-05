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
    const gettingdata = async () => {
      try {
        const response = await fetch(
          'https://github-contributions-api.jogruber.de/v4/rohitrpatil45?y=2025'
        );
        const data = await response.json();
        console.log(data)
  
        const formattedData = data.contributions.map(({ date, count, level }) => ({
          date,
          count,
          level,
        }));
  
        setgitdata(formattedData);
      } catch (error) {
        console.log("The error is:", error);
      }
    };
  
    gettingdata();
  }, []);


  useEffect(() => {
    console.log("Updated gitdata:", gitdata);
  }, [gitdata]);
  
  const demodata = [
    {
      date: '2024-06-23',
      count: 2,
      level: 1,
    },
    {
      date: '2024-08-02',
      count: 16,
      level: 4,
    },
    {
      date: '2024-11-29',
      count: 11,
      level: 3,
    },
  ]

  return (
    <>
      <div className="graph-div">
       <ActivityCalendar data={gitdata.length > 0 ? gitdata : demodata} />    
      </div>
    </>
  );
}

export default Gitgraph;
