import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import "./dashboard.css";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return <div className="dashboard">Hello: {user.username}</div>;
};

export default Dashboard;
