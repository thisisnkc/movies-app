import React from 'react'
import "./rightsidebar.scss"
import Popular from './popular/popular'
import Fav from './fav/fav'

function Rightsidebar() {
  return (
    <div className='rightsidebar'>
      <Popular />
      <Fav />
    </div>
  )
}

export default Rightsidebar