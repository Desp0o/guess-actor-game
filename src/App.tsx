import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./Login"
import OutletLayOut from "./components/OutletLayOut"
import Home from "./pages/Home"
import RequiredAuth from "./components/RequiredAuth"
import PageNotFound from "./components/404/PageNotFound"
import { useLayoutEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { app } from "./components/FirebaseConfig"
import { setAvatar, setUser } from "./store/userSlice"
import { useDispatch } from "react-redux"
import GameRules from "./pages/GameRules"
import Rating from "./pages/Rating"
import Game from "./pages/Game"
import PrivacyPolicy from "./pages/PrivacyPolicy"

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  
  useLayoutEffect(() => {
    setLoading(true)

    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.displayName));
        localStorage.setItem('username', JSON.stringify(user.displayName))
        sessionStorage.setItem('username', JSON.stringify(user.displayName))
        dispatch(setAvatar(user.photoURL));
        const userPhotoURL = user.photoURL || ""
        localStorage.setItem("userAvatar", userPhotoURL)
        sessionStorage.setItem("userAvatar", userPhotoURL)
        setLoading(false);        
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
    <>
    <Routes>
      <Route path="/" element={<OutletLayOut />} />
      <Route index element={<Login />} />
      <Route path="/pages/PrivacyPolicy" element={<PrivacyPolicy />} />

      <Route element={<RequiredAuth />}>
        <Route path="/pages/Home" element={<Home />} />
        <Route path="/pages/GameRules" element={<GameRules />} />
        <Route path="/pages/Rating" element={<Rating />} />
        <Route path="/pages/Game" element={<Game />} />
      </Route>
      
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  )
}

export default App
