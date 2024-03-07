import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import OutletLayOut from "./components/OutletLayOut"
import Home from "./pages/Home"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<OutletLayOut />} />
      <Route index element={<Login />} />

      <Route path="/pages/Home" element={<Home />} />
    </Routes>
    </>
  )
}

export default App
