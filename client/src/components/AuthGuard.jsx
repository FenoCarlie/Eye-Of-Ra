import { Navigate } from "react-router-dom";
import { useAuthentContext } from "../contexts/AuthentContext";

const AuthGuard = ({ children }) => {
  const { token } = useAuthentContext();

  console.log("on Auth");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthGuard;
