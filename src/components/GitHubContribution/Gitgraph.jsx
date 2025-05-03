import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import '../GitHubContribution/Gitgraph.css'
import { useEffect, useState } from "react";


function Gitgraph() {

 
  return (
    <>
   <div className='graph-div'>
   <GitHubCalendar
     username="rohitrpatil45" 
     blockSize={15} 

     blockMargin={4} 
     fontSize={19} 
     theme={{
        light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
        dark: ["#161b22", "#8250df", "#a371f7", "#bf9fff", "#d2bfff"]
      }}
     colorScheme="dark" 
     responsive={true}
     />

   </div>

    </>
  )
}

export default Gitgraph