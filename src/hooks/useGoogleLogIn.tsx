import { GoogleAuthProvider, getAuth, getRedirectResult, signInWithRedirect } from 'firebase/auth';
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
          await signInWithRedirect(auth, provider);
          const result = await getRedirectResult(auth);
          
          if (result?.user) {
            dispatch(setUser(result.user.displayName));
            dispatch(setAvatar(result.user.photoURL));
            navigate('/pages/home');
          } else {
            console.log("No user found in redirect result.");
          }
        } catch (error) {
          console.error("Error signing in with redirect:", error);
        }
      };
      
    return googleLogIn
}
