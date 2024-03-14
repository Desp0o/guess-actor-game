import GameQuestionNumber from "../GameQuestion/GameQuestionNumber"
import Button from "../button/Button"
import "./Looser.css"

export const Looser = () => {
  return (
    <div className="Looser">
        <GameQuestionNumber currentNum={1} length={2} />

        <p className="loser_p">YOU LOSE</p>

        <div className="looser_btns">
            <Button title="TRY AGAIN" path="/pages/Game" />
            <Button title="GO HOME" path="/" />
        </div>
    </div>
  )
}
