import React from 'react'
import "./menu.scss"
import {AiFillHome} from 'react-icons/ai';
import {BiStopwatch} from 'react-icons/bi';
import {RiCommunityFill , RiCompassDiscoverLine} from 'react-icons/ri';


function Menu() {
  return (
    <div className='menu'>
       <h1>Menu</h1>
      <ul>
        <li><AiFillHome />Home</li>
        <li><RiCommunityFill />Community</li>
        <li><RiCompassDiscoverLine />Discovery</li>
        <li><BiStopwatch />Comming Soon</li>
      </ul>
    </div>
  )
}

export default Menu