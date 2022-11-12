import { useContext } from "react";
import { MonitoringContext } from "../../contexts/monitoringContext";

export default function InfoMeasure() {
  const { infoMeasureOfLocation } = useContext(MonitoringContext);
  console.log(infoMeasureOfLocation);
  return (
    infoMeasureOfLocation && (
      <>
        <div>
          Thời gian quan trắc (mới nhất): {infoMeasureOfLocation.createdAt}{" "}
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
