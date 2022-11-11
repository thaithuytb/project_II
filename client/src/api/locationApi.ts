import axiosClient from "./axiosClient";

class LocationApi {
  getAll() {
    const url = "/location_monitorings";
    return axiosClient.get(url);
  }
}
const locationApi = new LocationApi();

export default locationApi;
