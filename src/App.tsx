import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import OutletLayOut from "./components/OutletLayOut"
import Home from "./pages/Home"
import RequiredAuth from "./components/RequiredAuth"
import PageNotFound from "./components/404/PageNotFound"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<OutletLayOut />} />
      <Route index element={<Login />} />

      <Route element={<RequiredAuth />}>
        <Route path="/pages/Home" element={<Home />} />
      </Route>
      
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  )
}

export default App
