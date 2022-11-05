import axiosClient from "./axiosClient";

class AuthApi {
  login(loginInput: { email: string; password: string }) {
    const url = "/auth/login";
    return axiosClient.post(url, { loginInput });
  }

  register(registerInput: {
    email: string;
    password: string;
    confirm_password: string;
  }) {
    const url = "/auth/register";
    return axiosClient.post(url, { registerInput });
  }
}
const authApi = new AuthApi();

export default authApi;
