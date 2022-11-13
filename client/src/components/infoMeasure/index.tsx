import { useContext } from "react";
import moment from "moment";
import { MonitoringContext } from "../../contexts/monitoringContext";

export default function InfoMeasure() {
  const { infoMeasureOfLocation } = useContext(MonitoringContext);
  console.log(infoMeasureOfLocation);
  return (
    infoMeasureOfLocation && (
      <>
        <div>
          Thời gian quan trắc (mới nhất):
          <span
            style={{
              color: "blue",
              paddingLeft: "10px",
            }}
          >
            {moment(infoMeasureOfLocation.createdAt).format(
              "HH:mm:ss - MM/DD/YYYY"
            )}
          </span>
        </div>
        <div>- Độ Ph: {infoMeasureOfLocation.ph} </div>
        <div>- DO: {infoMeasureOfLocation._do}</div>
        <div>- Độ mặn: {infoMeasureOfLocation.salinity}</div>
        <div>- Clorua: {infoMeasureOfLocation.clorua}</div>
        <div>- Ammonia: {infoMeasureOfLocation.amoni}</div>
        <div>- Nhiệt độ: {infoMeasureOfLocation.temperature}3</div>
      </>
    )
  );
}
