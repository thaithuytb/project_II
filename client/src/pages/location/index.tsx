import { useContext } from "react";
import { LocationsList } from "../../components/locationsList";
import { MonitoringContext } from "../../contexts/monitoringContext";
import "./location.css";
import LimitValue from "../../components/limitValue/index";

export default function Location() {
  const { locationsList } = useContext(MonitoringContext);
  return (
    <div className="sidebar">
      <div className="location">
        <div className="location-title">Địa điểm quan trắc</div>
        {locationsList &&
          locationsList.map((location, index) => {
            return <LocationsList key={index} locationInfo={location} />;
          })}
      </div>
      <div className="value_limit">
        <div className="value_limit-title">Giới hạn giá trị</div>
        <LimitValue />
        <p>
          Hướng dẫn đánh giá và cách sử dụng nước:{" "}
          <a
            href="https://cem.gov.vn/storage/documents/5d6f3ecb26484qcvn-08-mt2015btnmt.pdf"
            target="_blank"
          >
            Xem chi tiết
          </a>
        </p>
      </div>
    </div>
  );
}
