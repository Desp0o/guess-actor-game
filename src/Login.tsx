import EmailSVG from "./components/SVG/EmailSVG";
import FacebookSVG from "./components/SVG/FacebookSVG";
import GoogleSVG from "./components/SVG/GoogleSVG";
import EyeIcon from "./components/eyeIcon/EyeIcon";
import LoginButtonComp from "./components/loginButtons/LoginButtonComp";
import { useNavigate } from "react-router-dom";
import { useUser } from "./hooks/UseUser";
import { useEffect } from "react";
import { useGoogleLogIn } from "./hooks/useGoogleLogIn";
import { useFacebookLogIn } from "./hooks/useFacebookLogIn";

const Login = () => {
  const navigate = useNavigate()
  const googleLogIn = useGoogleLogIn()
  const facebookLogIn = useFacebookLogIn()
  const {user} = useUser()
  
  
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
        <LoginButtonComp 
          icon={<FacebookSVG />} 
          text="Log in with Facebook" 
          funName={facebookLogIn}
        />
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
