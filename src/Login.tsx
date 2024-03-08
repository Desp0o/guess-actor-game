import EmailSVG from "./components/SVG/EmailSVG";
import FacebookSVG from "./components/SVG/FacebookSVG";
import GoogleSVG from "./components/SVG/GoogleSVG";
import EyeIcon from "./components/eyeIcon/EyeIcon";
import LoginButtonComp from "./components/loginButtons/LoginButtonComp";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { app } from "./components/FirebaseConfig";
import { useDispatch } from "react-redux";
import { setAvatar, setUser } from "./store/userSlice";
import { useNavigate } from "react-router-dom";
import { useUser } from "./hooks/UseUser";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {user} = useUser()
  
  const googleLogIn = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt:"select_account"
    })

    try {
      const signIn = await signInWithPopup(auth, provider);
      dispatch(setUser(signIn.user.displayName));
      dispatch(setAvatar(signIn.user.photoURL));
      navigate('/pages/home')
      return signIn;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    if(user){
      navigate('/pages/home')
    }
  
  },[])

  return (
    <div className="login">
      <EyeIcon />

      <div className="login_page_buttons">
        <LoginButtonComp
          icon={<GoogleSVG />}
          text="Log in with Google"
          funName={googleLogIn}
        />
        <LoginButtonComp icon={<FacebookSVG />} text="Log in with Facebook" />
        <LoginButtonComp icon={<EmailSVG />} text="Log in with Email" />
      </div>

      <p className="login_privacy_txt">
        By clicking Log in, you agree to the <strong>terms of service</strong>{" "}
        and <strong>privacy policy</strong>
      </p>
    </div>
  );
};

export default Login;
