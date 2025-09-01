import React from 'react'
import '../Buttons/btn.css'
import { Link } from 'react-router-dom'

function Btn({ btntext, icon, links }) {
  return (
    <>
      <Link to={links}>
        <button> {btntext} <span className='icon-element'>{icon}</span></button>
      </Link>
    </>
  )
}

export default Btn