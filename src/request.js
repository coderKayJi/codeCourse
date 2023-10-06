import axios from "axios";
import { apiUrl } from "./settings";
import {
  fullBrowserVersion,
  browserName,
  osVersion,
  osName,
} from "react-device-detect";
let authAxios = axios.create({
  baseURL: apiUrl,
});

let authAxios1 = axios.create({
  baseURL: apiUrl,
});

authAxios1.interceptors.request.use(
  function (request) {
    request.responseType = "blob";
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const getToken = () => {
  return {
    headers: {
      Authorization: localStorage.getItem("token"),
      type: "WEB",
      fullbrowserversion: fullBrowserVersion,
      browsername: browserName,
      osversion: osVersion,
      osname: osName,
    },
  };
};
class Request {
  error = (err) => {
    try {
      if (err.response.status === 401) {
        localStorage.clear();
        window.location.href = "";
      }
    } catch (e) {}
  };

  // ------------------------------------------- API Start from here --------------------------------------------- //
  signup(data) {
    return new Promise((next, error) => {
      authAxios
        .post("/signup", data)
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({
            error: err.response.data.error,
            message: err.response.data.message,
          });
          this.error(err);
        });
    });
  }
  login(data) {
    return new Promise((next, error) => {
      authAxios
        .post("/login", data)
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({
            error: err.response.data.error,
            message: err.response.data.message,
          });
          this.error(err);
        });
    });
  }
  getProfile() {
    return new Promise((next, error) => {
      authAxios
        .post("/details", {}, getToken())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({
            error: err.response.data.error,
            message: err.response.data.message,
          });
          this.error(err);
        });
    });
  }
  plan(data) {
    return new Promise((next, error) => {
      authAxios
        .post("/plan", data)
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({
            error: err.response.data.error,
            message: err.response.data.message,
          });
          this.error(err);
        });
    });
  }
  updateBooks(id, data) {
    return new Promise((next, error) => {
      authAxios
        .put(`/books/${id}`, { ...data })
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({
            error: err.response.data.error,
            message: err.response.data.message,
          });
          this.error(err);
        });
    });
  }
  logout(data) {
    return new Promise((next, error) => {
      authAxios
        .post("/logout", data)
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }
}

export default new Request();
