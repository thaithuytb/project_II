import React, { useContext } from "react";
import { MonitoringContext } from "../../contexts/monitoringContext";
import "./locationList.css";

export interface ILocation {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
}

interface PropsLocationsList {
  locationInfo: ILocation;
}

export const LocationsList: React.FC<PropsLocationsList> = ({
  locationInfo,
}) => {
  const {
    getLocationFocusToShowMeasure,
    locationIsDisplayedMeasure,
    getInfoMeasureOfLocation,
  } = useContext(MonitoringContext);

  const handleClick = async (event: React.MouseEvent<HTMLElement>) => {
    console.log(locationInfo);
    await getLocationFocusToShowMeasure(locationInfo);
    await getInfoMeasureOfLocation(locationInfo.id);
  };

  return (
    <div
      className={
        locationIsDisplayedMeasure?.id === locationInfo.id
          ? "info__location-active"
          : ""
      }
      onClick={handleClick}
    >
      {locationInfo.name}
    </div>
  );
};
