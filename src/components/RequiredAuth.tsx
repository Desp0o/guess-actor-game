import { Navigate, Outlet } from "react-router-dom";
import {useUser} from "../components/hooks/UseUser"

const RequiredAuth = () => {
  const {user} = useUser()
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default RequiredAuth;
