import React from 'react'
import "./fav.scss"
import Singlecomponent from '../singlecomponent/singlecomponent'

function Fav() {
  return (
    <div className='fav'>
        <h1>Favorites</h1>
        <Singlecomponent />
        <Singlecomponent />
        <Singlecomponent />
        <button className="btn">See More</button>
    </div>
  )
}

export default Fav