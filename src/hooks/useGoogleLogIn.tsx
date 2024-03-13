import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../components/FirebaseConfig';
import { setAvatar, setUser } from '../store/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useGoogleLogIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

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
          navigate('/')
      
          return signIn;
        } catch (error) {
          console.error(error);
        }
      };
      
    return googleLogIn
}
