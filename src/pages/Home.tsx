import { getAuth, signOut } from "firebase/auth";
import Policy from "../components/Policy";
import Button from "../components/button/Button";
import UserAvatarName from "../components/userAvtarName/UserAvatarName";
import "./Home.css";
import { app } from "../components/FirebaseConfig";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

const Home = () => {
const dispatch = useDispatch()
  const handleLogout = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
      dispatch(setUser(''))
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="home_page">
      <div className="user_avatar_info">
        <UserAvatarName />
      </div>

      <div className="home_page_btns" onClick={handleLogout}>
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
