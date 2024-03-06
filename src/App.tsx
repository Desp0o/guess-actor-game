import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import OutletLayOut from "./components/OutletLayOut"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<OutletLayOut />} />
      <Route index element={<Login />} />
    </Routes>
    </>
  )
}

export default App
