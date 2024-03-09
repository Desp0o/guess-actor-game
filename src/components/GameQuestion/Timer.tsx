import React, { useEffect, useState } from 'react'
import "./GameQuestion.css"

interface TimerProps{
    timerTrigger: number
}

export const Timer:React.FC<TimerProps> = ({timerTrigger}) => {
    
    const [seconds, setSeconds] = useState(30)

    useEffect(()=>{
        setSeconds(30)
    },[timerTrigger])

    useEffect(()=>{
        const timer = setInterval(()=>{
            setSeconds((prev: number) => prev - 1)
        },1000)

        if(seconds <= 0){
            clearInterval(timer)
        }

        return () => clearInterval(timer)
    },[seconds])

  return (
    <div className='Timer'>
        <div className='timer_time'>
            <p>00 : {seconds < 10 ? `0${seconds}` : seconds }</p>
        </div>
        <div className='timer_bar'>
            <div className='timer_progress' />
        </div>
    </div>
  )
}
