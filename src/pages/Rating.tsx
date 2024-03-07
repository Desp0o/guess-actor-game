import ToBackComp from "../components/toBack/ToBackComp"
import "./Rating.css"
import Policy from '../components/Policy'
import RatinUserComponent from "../components/ratinUserComponent/RatinUserComponent"
import test from "../assets/images/test.png"

const Rating = () => {
  return (
    <div className="ratings">
        <ToBackComp path="/pages/home" />

        <div className='rating_board'>
            <RatinUserComponent index={1} avatar={test} name="despo" score={78} />
        </div>

        <div className='rating_policy'>
            <Policy />
        </div>
    </div>
  )
}

export default Rating