import Policy from "../components/Policy";
import Button from "../components/button/Button";
import UserAvatarName from "../components/userAvtarName/UserAvatarName";
import "./Home.css";
import { useLogOut } from "../hooks/useLogOut";
import { useUser } from "../hooks/UseUser";

const Home = () => {
  const handleLogut = useLogOut()
  const {user} = useUser()

  return (
    <div className="home_page">
      <div className="user_avatar_info">
        <UserAvatarName />
      </div>

      <div className="home_page_btns">
        <Button title="NEW GAME" path="/pages/Game"/>
        <Button title="HOW TO PLAY" path="/pages/GameRules" />
        <Button title="RATINGS" path="/pages/Rating" />
        {
          user 
            ? 
              <Button title="LOG OUT" funName={handleLogut}/> 
            : 
              <Button title="LOG IN" path="/pages/Login" />
        }
      </div>

      <div className="home_page_policy">
        <Policy />
      </div>
    </div>
  );
};  

export default Home;
