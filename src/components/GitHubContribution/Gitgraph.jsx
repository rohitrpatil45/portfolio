import React, { useState } from 'react'
import GitHubCalendar from 'react-github-calendar'
import '../GitHubContribution/Gitgraph.css'

function Gitgraph() {
  const [year, setYear] = useState("2025");

  const transformData = (contributions) =>
    contributions.filter(day => day.date.startsWith(year));

  return (
    <div className="github-section">
      <h2>GitHub Contribution Graph</h2>
      <div className='graph-div'>
        <GitHubCalendar
          username="rohitrpatil45"
          blockSize={15}
          blockMargin={4}
          fontSize={16}
          theme={{
            dark: ["#161b22", "#8250df", "#a371f7", "#bf9fff", "#d2bfff"]
          }}
          colorScheme="dark"
          responsive
          transformData={transformData}
        />
        <div className="year-toggle">
          <button
            className={year === "2025" ? "active" : ""}
            onClick={() => setYear("2025")}
          >
            2025
          </button>
          <button
            className={year === "2024" ? "active" : ""}
            onClick={() => setYear("2024")}
          >
            2024
          </button>
        </div>
      </div>
    </div>
  )
}

export default Gitgraph
