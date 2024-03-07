import React, { useState } from 'react'
import "./GameQuestion.css"

export const Timer = () => {

    const [seconds, setSeconds] = useState(30)

  return (
    <div className='Timer'>
        <div className='timer_time'>
            <p>00 : {seconds}</p>
        </div>
        <div className='timer_bar'>
            <div className='timer_progress' style={{width:'70%'}}/>
        </div>
    </div>
  )
}
