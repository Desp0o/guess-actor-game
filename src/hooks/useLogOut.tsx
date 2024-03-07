import { getAuth, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { app } from '../components/FirebaseConfig';
import { setUser } from '../store/userSlice';

export const useLogOut = () => {
    const dispatch = useDispatch()
    const handleLogout = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
      dispatch(setUser(''))
      localStorage.removeItem('username')
      sessionStorage.removeItem('username')
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };
  return handleLogout
}
