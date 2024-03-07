import React from 'react'
import "./GameQuestion.css"

interface GameQuestionNumberProps{
    length: number;
    currentNum: number;
}

const GameQuestionNumber:React.FC<GameQuestionNumberProps> = ({length,currentNum}) => {
  return (
    <div className='game_question_number'>
        {currentNum} / {length}
    </div>
  )
}

export default GameQuestionNumber