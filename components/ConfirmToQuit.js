import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ConfirmToQuit () {
  function quit (e) {
    
  }

  return (
    <>
      <h2>Are You Sure You Want To Quit</h2>
      <Link to="/bye">
        <button onClick={quit}>Yes</button>
      </Link>
      <Link to="/">
        <button>No</button>
      </Link>
    </>
  )
}