import { useContext } from "react";
import { LocationsList } from "../../components/locationsList";
import { MonitoringContext } from "../../contexts/monitoringContext";
import "./location.css";

export default function Location() {
  const { locationsList } = useContext(MonitoringContext);
  return (
    <div className="location">
      <div className="location-title">Địa điểm quan trắc</div>
      {locationsList &&
        locationsList.map((location, index) => {
          return <LocationsList key={index} locationInfo={location} />;
        })}
    </div>
  );
}
