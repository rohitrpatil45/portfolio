import React from 'react'
import '../Buttons/btn.css'

function Btn({btntext, icon}) {
  return (
   <>
   <button> {btntext} <span className='icon-element'>{icon}</span></button>
   </>
  )
}

export default Btn