import React from 'react'
import "./continue.scss"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Onecomp from './onecomp/onecomp';

function Continue() {
  return (
    <div className='continue'>
      <div className="heading">
        <h1>Continue Watching</h1>
        <div className="icons">
          <div className="icon1">
            <IoIosArrowBack className="i"/>
          </div>
          <div className="icon2">
            <IoIosArrowForward className="i"/>
          </div>
        </div>
      </div>
      <div className="compone">
      <Onecomp />
      <Onecomp />
      <Onecomp />
      </div>

    </div>
  )
}

export default Continue