import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./Login"
import OutletLayOut from "./components/OutletLayOut"
import Home from "./pages/Home"
import RequiredAuth from "./components/RequiredAuth"
import PageNotFound from "./components/404/PageNotFound"
import HowToPlay from "./pages/howToPlay"
import { useLayoutEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { app } from "./components/FirebaseConfig"
import { setAvatar, setUser } from "./store/userSlice"
import { useDispatch } from "react-redux"

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

      <Route element={<RequiredAuth />}>
        <Route path="/pages/Home" element={<Home />} />
        <Route path="/pages/howToPlay" element={<HowToPlay />} />
      </Route>
      
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  )
}

export default App
