import React from 'react'
import ToBackComp from "../components/toBack/ToBackComp"
import "./Rating.css"
import Policy from '../components/Policy'

const Rating = () => {
  return (
    <div className="ratings">
        <ToBackComp path="/pages/home" />

        <div className='rating_board'>

        </div>

        <div className='rating_policy'>
            <Policy />
        </div>
    </div>
  )
}

export default Rating