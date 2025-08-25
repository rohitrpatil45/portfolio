import React from 'react'
import { motion } from "framer-motion";
import '../project_section/projectgrid.css'

function PorjectGrid() {
  return (
<>
<div className='motion-animation'>
  <motion.h1
      initial={{ opacity: 0, y: -50 }}   // starting state
      animate={{ opacity: 1, y: 0 , rotate : -2}}     // final state
      transition={{ duration: 1 }}       // animation timing
    className='motion-h1'
    >
      Projects 🚀
    </motion.h1>
</div>

</>
)
}

export default PorjectGrid