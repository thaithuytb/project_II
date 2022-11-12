import "./info.css";
import A from "../../assets/a.jpg";
import { useContext } from "react";
import { MonitoringContext } from "../../contexts/monitoringContext";
import InfoMeasure from "../../components/infoMeasure";

export default function ResultMeasure() {
  const {
    locationIsDisplayedMeasure,
    getInfoMeasureOfLocation,
    infoMeasureOfLocation,
  } = useContext(MonitoringContext);

  if (locationIsDisplayedMeasure && !infoMeasureOfLocation) {
    getInfoMeasureOfLocation(locationIsDisplayedMeasure.id);
  }

  return (
    locationIsDisplayedMeasure && (
      <div className="info">
        <div className="info__title">
          <div>
            Các thông số đo được từ việc quan trắc chất lượng nước ở{" "}
            {locationIsDisplayedMeasure.name}
          </div>
          <img alt="" src={A} />
        </div>
        <div className="info__content">
          <InfoMeasure />
        </div>
      </div>
    )
  );
}
