import { TV, MOVIES } from "../constants/action-types";
import { API, setAuthToken } from "../config/api";

// import axios from "axios";
// // Set config defaults when creating the instance
// export const API = axios.create({
//   baseURL: "http://localhost:5000/api/v1",
// });
// // Alter defaults after instance has been created
// export const setAuthToken = (token) => {
//   API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// };

export const getTv = (user) => {
    return {
        type: TV,
        payload: async () => {
        try {
            // const {
            // data: { data },
            // } = await API.post("/register", user);

            // localStorage.setItem("token", data.token);
            // setAuthToken(data.token); //Set header token
            const {
            data: { data },
            } = await API.get("/films/1");
            return data;
        } catch (error) {   
            if (error.response) {
            const { data, status } = error.response;

            if (status > 399) throw data.error;
            }
        }
        },
    };
};

export const getMovies = (user) => {
    return {
        type: MOVIES,
        payload: async () => {
        try {
            // const {
            // data: { data },
            // } = await API.post("/register", user);

            // localStorage.setItem("token", data.token);
            // setAuthToken(data.token); //Set header token
            const {
            data: { data },
            } = await API.get("/films/2");
            return data;
        } catch (error) {
            if (error.response) {
            const { data, status } = error.response;

            if (status > 399) throw data.error;
            }
        }
        },
    };
};
