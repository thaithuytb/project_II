import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

const ProtectRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {/* {isAuthenticated ? (
        <Navigate to="/dashboard" />
      ) : (
        <Navigate to="/login" />
      )} */}
      <Navigate to="/homePage" />
    </>
  );
};

export default ProtectRoute;
