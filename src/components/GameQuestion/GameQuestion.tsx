// import React from 'react'
import "./GameQuestion.css"
import GameQuestionNumber from './GameQuestionNumber'
import QuestuinImage from './QuestuinImage'
import cover from "../../assets/icons/quest.png"
import AnswerComponent from './AnswerComponent'
import { Timer } from './Timer'

const GameQuestion = () => {
  return (
    <div className='question_card'>
        <GameQuestionNumber currentNum={2} length={65}/>
       
       <div className='q_image_container'>
            <QuestuinImage image={cover} />
       </div>

        <div className='answers'>
            <AnswerComponent />
            <AnswerComponent />
            <AnswerComponent />
            <AnswerComponent />
            <AnswerComponent />
            <AnswerComponent />
        </div>

        <div className='timer_container'>
            <Timer />
        </div>
    </div>
  )
}

export default GameQuestion