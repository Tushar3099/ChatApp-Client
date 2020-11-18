import axios from "axios";
import { LOGIN_URL, SIGN_URL } from "../common/constants";

export const login = ({ username, password }) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(`${LOGIN_URL}`, { username, password })
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};
export const signin = ({ username, password, name, phoneNumber }) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(`${SIGN_URL}`, { username, password, name, phoneNumber })
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};
