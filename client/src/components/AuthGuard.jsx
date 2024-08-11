import { Navigate } from "react-router-dom";
import { useAuthentContext } from "../contexts/AuthentContext";

const AuthGuard = ({ children }) => {
  const { token } = useAuthentContext();

  // Rediriger vers /login si le token est absent
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Si le token est présent, afficher les enfants
  return children;
};

export default AuthGuard;
