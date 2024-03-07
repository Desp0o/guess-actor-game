import { Navigate, Outlet } from "react-router-dom";
import { UseUser } from "./hooks/UseUser";

const RequiredAuth = () => {
  const user = UseUser()
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default RequiredAuth;
