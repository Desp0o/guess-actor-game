import Policy from "../components/Policy";
import Button from "../components/button/Button";
import "./Home.css";

const Home = () => {
  return (
    <div className="home_page">
      <div className="user_avatar_info">

      </div>

      <div className="home_page_btns">
        <Button title="NEW GAME" />
        <Button title="HOW TO PLAY" />
        <Button title="RATINGS" />
        <Button title="LOG OUT" />
      </div>

      <div className="home_page_policy">
        <Policy />
      </div>
    </div>
  );
};

export default Home;
