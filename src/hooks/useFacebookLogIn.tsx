import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAvatar, setUser } from "../store/userSlice";
import { app } from "../components/FirebaseConfig";

export const useFacebookLogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const facebookLogIn = async () => {
    const auth = getAuth(app);
    const facebookProvider = new FacebookAuthProvider();
    facebookProvider.setCustomParameters({
      display: "popup",
    });

    try {
      const signIn = await signInWithPopup(auth, facebookProvider);
      dispatch(setUser(signIn.user.displayName));
      dispatch(setAvatar(signIn.user.photoURL));
      navigate("/");
      return signIn;
    } catch (error) {
      console.error(error);
    }
  };

  return facebookLogIn
};
