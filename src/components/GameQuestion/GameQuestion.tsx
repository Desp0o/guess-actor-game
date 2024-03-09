// import React from 'react'
import "./GameQuestion.css"
import GameQuestionNumber from './GameQuestionNumber'
import QuestuinImage from './QuestuinImage'
import cover from "../../assets/icons/quest.png"
import AnswerComponent from './AnswerComponent'
import { Timer } from './Timer'
import { questionDataBase } from "./DataBaseQuestion"
import { useEffect, useState } from "react"

const GameQuestion = () => {

  const [correctAnswer, setCorrectAnswer] = useState('')
  const [answIndex, setAnswIndex] = useState(0)

  useEffect(()=>{
    setCorrectAnswer(questionDataBase[answIndex].correctAnswer)
  },[])
 
  const selectAnswer = (e: any) =>{
    console.log(e.target.textContent);

    if(e.target.textContent === correctAnswer){
      console.log('correct');
    }else{
      console.log('incorrect');
      
    }
    
  }

  return (
    <div className='question_card'>
        <GameQuestionNumber currentNum={answIndex} length={65}/>
       
       <div className='q_image_container'>
            <QuestuinImage image={cover} />
       </div>

        <div className='answers'>
          {
            
           questionDataBase[0].answers.map((answer: string, index)=>{
            
            return <AnswerComponent key={index} answer={answer} funName={selectAnswer}/>
           })
          }
            
        </div>

        <div className='timer_container'>
            <Timer />
        </div>
    </div>
  )
}

export default GameQuestion