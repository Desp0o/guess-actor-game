import { useEffect, useState } from 'react'
import "./GameQuestion.css"

export const Timer = () => {

    const [seconds, setSeconds] = useState(30)

    useEffect(()=>{
        const timer = setInterval(()=>{
            setSeconds(seconds - 1)
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
            <div className='timer_progress'/>
        </div>
    </div>
  )
}
