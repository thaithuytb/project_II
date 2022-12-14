import { createContext, ReactNode, useEffect, useState } from "react";
import locationApi from "../api/locationApi";
import { ILocation } from "../pages/location/interfaces/location";
import measureApi from "../api/measureApi";

interface IMeasure {
  id: number;
  createdAt: string;
  updatedAt: string;
  ph: number;
  _do: number;
  amoni: number;
  clorua: number;
  fe: number;
}

const monitoringStateDefault = {
  locationsList: [],
  locationIsDisplayedMeasure: null,
  infoMeasureOfLocation: null,
} as IMonitoringContext;

export interface IMonitoringContext {
  locationsList: ILocation[] | [];
  locationIsDisplayedMeasure: ILocation | null;
  infoMeasureOfLocation: IMeasure | null;
  getLocationFocusToShowMeasure: (location: ILocation) => void;
  getInfoMeasureOfLocation: (location_id: number) => void;
}

export interface IMonitoringContextProviderProps {
  children: ReactNode;
}

export const MonitoringContext = createContext<IMonitoringContext>(
  monitoringStateDefault as IMonitoringContext
);

const MonitoringContextProvider = ({
  children,
}: IMonitoringContextProviderProps) => {
  const [monitoringState, setMonitoringState] = useState(
    monitoringStateDefault
  );

  const getLocationFocusToShowMeasure = (location: ILocation) => {
    setMonitoringState({
      ...monitoringState,
      locationIsDisplayedMeasure: { ...location },
    });
  };

  const getAllLocation = async () => {
    const { getAll } = locationApi;
    try {
      const { data } = await getAll();
      if (data.success) {
        setMonitoringState({
          ...monitoringState,
          locationsList: data.data,
          locationIsDisplayedMeasure: { ...data.data[0] },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getInfoMeasureOfLocation = async (location_id: number) => {
    const { getLatestMeasureById } = measureApi;
    try {
      const { data } = await getLatestMeasureById(location_id);
      if (data.success) {
        setMonitoringState((monitoringState) => {
          return {
            ...monitoringState,
            infoMeasureOfLocation: { ...data.data },
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("use Effect monitoring");
    getAllLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = {
    ...monitoringState,
    getLocationFocusToShowMeasure,
    getInfoMeasureOfLocation,
  };
  return (
    <MonitoringContext.Provider value={data}>
      {children}
    </MonitoringContext.Provider>
  );
};

export default MonitoringContextProvider;
