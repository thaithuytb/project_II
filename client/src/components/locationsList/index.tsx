import React from "react";

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
  return <div>{locationInfo.name}</div>;
};
