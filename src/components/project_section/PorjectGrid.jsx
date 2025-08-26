import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../project_section/projectgrid.css";
// import ProjectGirdColumns from "./ProjectCard";
import GridContainer from "./GridContainer";

function PorjectGrid() {
 const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <>
      <div className="motion-animation">
        <motion.h1
          ref={ref}
          initial={{  y: -50  }}   /* starting state */
          animate={isInView ? { y: 0, rotate: -3   } : {}} /* final state */
          transition={{ duration: 2.5 }}       /* animation timing */
          className="motion-h1"
        >
          ProJects 🚀
        </motion.h1>
      </div>
 <GridContainer />
      
    </>
  );
}

export default PorjectGrid