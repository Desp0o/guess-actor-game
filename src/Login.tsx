import { useLayoutEffect, useState } from "react";
import EmailSVG from "./components/SVG/EmailSVG";
import FacebookSVG from "./components/SVG/FacebookSVG";
import GoogleSVG from "./components/SVG/GoogleSVG";
import EyeIcon from "./components/eyeIcon/EyeIcon";
import LoginButtonComp from "./components/loginButtons/LoginButtonComp";
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  getAuth,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { app } from "./components/FirebaseConfig";
import { useDispatch } from "react-redux";
import { setAvatar, setUser } from "./store/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);

  const googleLogIn = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    try {
      await setPersistence(auth, browserLocalPersistence);
      const signIn = await signInWithPopup(auth, provider);
      console.log(signIn);
      dispatch(setUser(signIn.user.displayName));
      dispatch(setAvatar(signIn.user.photoURL));

      return signIn;
    } catch (error) {
      console.error(error);
    }
  };

  useLayoutEffect(() => {
    setLoading(true)

    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        
        console.log(user);
        dispatch(setUser(user.displayName));
        dispatch(setAvatar(user.photoURL));
        setLoading(false);
        navigate("/pages/home");
      }else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  if (isLoading) {
    return <div className="">loading</div>;
  }

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
