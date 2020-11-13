import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CountriesContext } from '../context/countriesContext'

export default function TriggerCloseButton () {
  const { isGameClosed, setIsGameClosed } = useContext(CountriesContext)
  
  function triggercloseButton () {
    setIsGameClosed(prevState => !prevState)
  }
  console.log(isGameClosed);
  return (
    <>
      {isGameClosed ? 
        <Link to="/">
          <button 
            className="triggerCloseButton"
            onClick={triggercloseButton}
          >
            <span>open country quiz game</span>
          </button>
        </Link> : 
        <Link to="/gameClosed">
          <button 
            className="triggerCloseButton"
            onClick={triggercloseButton}
          >
            <span>close country quiz game</span>
          </button>
        </Link>
      }
      {
        isGameClosed && <h2 className="header__gameclosed">You can open the country quiz game by clicking the top left icon</h2>
      }
    </>
  )
}
