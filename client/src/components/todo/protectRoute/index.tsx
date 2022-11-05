import { Navigate } from "react-router-dom";

const ProtectRoute = ({ user }: { user: boolean }) => {
  return <>{user ? <Navigate to="/todo" /> : <Navigate to="/login" />}</>;
};

export default ProtectRoute;
