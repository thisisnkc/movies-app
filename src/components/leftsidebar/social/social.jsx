import React from 'react'
import "./social.scss"
import {BsPerson} from 'react-icons/bs';
import {GiPartyPopper} from 'react-icons/gi';
import {CgMediaLive} from 'react-icons/cg';


function Social() {
  return (
    <div className='social'>
          <h1>Social</h1>
        <ul>
        <li><BsPerson />Friends</li>
        <li><GiPartyPopper />Parties</li>
        <li><CgMediaLive />Media</li>
      </ul>
    </div>
  )
}

export default Social