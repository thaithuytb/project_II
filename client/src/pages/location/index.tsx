import { useEffect, useState } from "react";
import locationApi from "../../api/locationApi";
import { LocationsList } from "../../components/locationsList";
import "./location.css";

export interface ILocation {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
}

export default function Location() {
  const [locationsList, setLocationsList] = useState<ILocation[] | null>(null);

  const getAllLocation = async () => {
    const { getAll } = locationApi;
    try {
      const { data } = await getAll();
      if (data.success) {
        setLocationsList([...data.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllLocation();
  }, []);

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
