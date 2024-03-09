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
  },[answIndex,correctAnswer])
 
  const selectAnswer = (e: any) =>{
    console.log(e.target.textContent);

    if(e.target.textContent === correctAnswer){
      console.log('correct');
      
      if(answIndex === questionDataBase.length -1){
        return console.log('you win');
        
      }
      
      setAnswIndex(prev => prev + 1)
    }else{
      console.log('incorrect');
      
    }
    
  }

  return (
    <div className='question_card'>
        <GameQuestionNumber currentNum={answIndex + 1} length={questionDataBase.length}/>
       
       <div className='q_image_container'>
            <QuestuinImage image={cover} />
       </div>

        <div className='answers'>
          {
            
           questionDataBase[answIndex].answers.map((answer: string, index)=>{
            
            return <AnswerComponent key={index} answer={answer} funName={selectAnswer}/>
           })
          }
            
        </div>

        <div className='timer_container'>
            <Timer timerTrigger={answIndex}/>
        </div>
    </div>
  )
}

export default GameQuestion