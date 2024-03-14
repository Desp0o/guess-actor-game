import React from "react"
import GameQuestionNumber from "../GameQuestion/GameQuestionNumber"
import Button from "../button/Button"
import "./Looser.css"

interface LoserProps {
    funcName: () => void;
    currentQuestionNumber: number;
    totalQuestionLength: number;
}

export const Looser: React.FC<LoserProps> = ({funcName, currentQuestionNumber, totalQuestionLength}) => {
  return (
    <div className="Looser">
        <GameQuestionNumber currentNum={currentQuestionNumber} length={totalQuestionLength} />

        <p className="loser_p">YOU LOSE</p>

        <div className="looser_btns">
            <Button title="TRY AGAIN" path="/pages/Game" funName={funcName}/>
            <Button title="GO HOME" path="/" />
        </div>
    </div>
  )
}
