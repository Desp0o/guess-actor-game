// import React from 'react'
import "./GameQuestion.css"
import GameQuestionNumber from './GameQuestionNumber'
import QuestuinImage from './QuestuinImage'
import AnswerComponent from './AnswerComponent'
import { Timer } from './Timer'
import { questionDataBase } from "./DataBaseQuestion"
import { useEffect, useState } from "react"
import { Looser } from "../LoserComponent/Looser"
import FeedBack from "./FeedBack"

const GameQuestion = () => {

  const [correctAnswer, setCorrectAnswer] = useState('')
  const [isLooser, setIsLooser] = useState(false)
  const [isTime, setTime] = useState(true)
  const [answIndex, setAnswIndex] = useState(0)
  const [isFeedback, seTFeedback] = useState(false)


  useEffect(()=>{
    setCorrectAnswer(questionDataBase[answIndex].correctAnswer)
  },[answIndex,correctAnswer])
 
  const selectAnswer = (e: any) =>{
    console.log(e.target.textContent);

    if(e.target.textContent !== correctAnswer){
      setIsLooser(true)
    }

    if(e.target.textContent === correctAnswer){
      console.log('correct');
      
      if(answIndex === questionDataBase.length -1){
        return console.log('you win');
        
      }

      seTFeedback(true) //if answer is correct open feedback modal
    }else{
      console.log('incorrect');
    }
    
  }

  const likedQuestion = () => {
    seTFeedback(false)
    setAnswIndex(prev => prev + 1) //next question
  }

  const dislkedQuestion = () => {
    seTFeedback(false)
    setAnswIndex(prev => prev + 1) //next question
  }


  const TryAgain = () => {
    setIsLooser(false)
    setTime(true)
    setAnswIndex(0)
  }

  if(isLooser || !isTime){
    return <Looser
              currentQuestionNumber={answIndex + 1}
              totalQuestionLength={questionDataBase.length}
              funcName={()=>TryAgain()}
            />
  }

  return (
    <div className='question_card'>
        <GameQuestionNumber currentNum={answIndex + 1} length={questionDataBase.length}/>
       
       <div className='q_image_container'>
            <QuestuinImage image={questionDataBase[answIndex].image} />
       </div>

        {
          isFeedback 
            ?
          <FeedBack 
            image={questionDataBase[answIndex].correctImage}
            funcDisliked={dislkedQuestion}
            funcLiked={likedQuestion}
          />
            :
          <div className='answers'>
            {
              
             questionDataBase[answIndex].answers.map((answer: string, index)=>{
              
              return <AnswerComponent key={index} answer={answer} funName={selectAnswer}/>
             })
            }
              
          </div>
        }

        <div className='timer_container'>
            <Timer 
              isTimeVisible={!isFeedback}
              timerTrigger={answIndex}
              noTime={()=>setTime(false)}
            />
        </div>
    </div>
  )
}

export default GameQuestion