import React from 'react'
import "./general.scss"
import {FiSettings} from 'react-icons/fi';
import {RiLogoutBoxRLine} from 'react-icons/ri';

function General() {
  return (
    <div className='general'>
          <h1>General</h1>
        <ul>
        <li><FiSettings />Setings</li>
        <li><RiLogoutBoxRLine />Log Out</li>
      </ul>
    </div>
  )
}

export default General