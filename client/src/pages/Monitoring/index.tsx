import Conversation from "../../components/conversation";
import ResultMeasure from "../resultMeasure";
import Location from "../location";
import "./monitoring.css";

const Monitoring = () => {
  return (
    <div className="monitoring">
      <Location />
      <ResultMeasure />
      <Conversation />
    </div>
  );
};

export default Monitoring;
