import Policy from "../components/Policy";
import Button from "../components/button/Button";
import UserAvatarName from "../components/userAvtarName/UserAvatarName";
import "./Home.css";
import { useLogOut } from "../hooks/useLogOut";

const Home = () => {
  const handleLogut = useLogOut()

  return (
    <div className="home_page">
      <div className="user_avatar_info">
        <UserAvatarName />
      </div>

      <div className="home_page_btns">
        <Button title="NEW GAME" />
        <Button title="HOW TO PLAY" path="/pages/GameRules"/>
        <Button title="RATINGS" />
        <Button title="LOG OUT" funName={handleLogut}/>
      </div>

      <div className="home_page_policy">
        <Policy />
      </div>
    </div>
  );
};  

export default Home;
