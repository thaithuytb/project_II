import axiosClient from "./axiosClient";

class MeasureApi {
  getLatestMeasureById(id: number) {
    const url = `/measures/${id}`;
    console.log(id);
    return axiosClient.get(url);
  }
}
const measureApi = new MeasureApi();

export default measureApi;
