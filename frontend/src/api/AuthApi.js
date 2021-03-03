import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/auths" });

export const signUp = (formData) => API.post("/signup", formData);
export const signIn = (formData) => API.post("/signin", formData);
export const logOut = () => API.get("/logout");
export const forgotPassword = (email) => API.post("/forgotPassword", email);
export const resetPassword = (token, formData) =>
  API.patch(`/resetPassword/${token}`, formData);

export const getUser = (id) => API.get(`/${id}`);
export const updatePwd = (formData) => API.patch("/updatePassword", formData);
export const getMe = () => API.get("/me");
export const updateMi = (formData) => API.patch("/updateMe", formData);
