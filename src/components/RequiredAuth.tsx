import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

interface RootState {
  userStore: {
    name: string;
  };
}

const RequiredAuth = () => {
  const user = useSelector((state: RootState) => state.userStore.name);
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default RequiredAuth;
