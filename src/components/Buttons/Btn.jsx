import React from 'react'
import '../Buttons/btn.css'

function Btn({btntext, icon}) {
  return (
   <>
   <button> {btntext} {icon}</button>
   </>
  )
}

export default Btn