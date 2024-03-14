import React, { useEffect, useState } from 'react'
import "./GameQuestion.css"

interface TimerProps{
    timerTrigger: number;
    noTime: () => void;
}

export const Timer:React.FC<TimerProps> = ({timerTrigger, noTime}) => {
    
    const [seconds, setSeconds] = useState(3000)
    const [anim, setAnim] = useState(true)

    useEffect(()=>{
        setSeconds(3000)
        setAnim(!anim)
    },[timerTrigger])

    useEffect(()=>{
        console.log(anim);
    },[anim])

    useEffect(()=>{    
        const timer = setInterval(()=>{
            setSeconds((prev: number) => prev - 1)
        },1000)

        if(seconds <= 0){
            clearInterval(timer)
        }

        if(seconds === 0){
            console.log('you lost game');
            noTime()
        }

        return () => clearInterval(timer)
    },[seconds])

  return (
    <div className='Timer'>
        <div className='timer_time'>
            <p>00 : {seconds < 10 ? `0${seconds}` : seconds }</p>
        </div>
        <div className='timer_bar'>
            <div className={anim ? 'timer_progress' : 'timer_progress1'}/>
        </div>
    </div>
  )
}
