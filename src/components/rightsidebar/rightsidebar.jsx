import React from 'react'
import "./rightsidebar.scss"
import Popular from './popular/popular'
import Fav from './fav/fav'
import {FiSearch} from 'react-icons/fi';

function Rightsidebar() {
  return (
    <div className='rightsidebar'>
       <div className="right">
      <FiSearch className="icon"/>
      <input type="text" className="btn" placeholder="Search"></input>
      </div>
      <Popular />
      <Fav />
    </div>
  )
}

export default Rightsidebar