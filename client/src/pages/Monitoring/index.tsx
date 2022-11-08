import Conversation from "../../components/conversation";
import Info from "../../components/info";
import Location from "../../components/location";
import "./monitoring.css";

const Monitoring = () => {
  return (
    <div className="monitoring">
      <Location />
      <Info />
      <Conversation />
    </div>
  );
};

export default Monitoring;
