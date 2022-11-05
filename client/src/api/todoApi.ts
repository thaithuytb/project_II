import axiosClient from "./axiosClient";

class TodoApi {
  getAll = () => {
    const url = "/todos";
    return axiosClient.get(url);
  };
}
const todoApi = new TodoApi();

export default todoApi;
