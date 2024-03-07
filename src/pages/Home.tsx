import Policy from "../components/Policy";
import Button from "../components/button/Button";
import UserAvatarName from "../components/userAvtarName/UserAvatarName";
import "./Home.css";

const Home = () => {
  return (
    <div className="home_page">
      <div className="user_avatar_info">
        <UserAvatarName name="Despo" avatar="" />
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
