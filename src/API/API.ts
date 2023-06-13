import axios from "axios";
import { ProfileType } from "../Redux/profile-reducer";
//
const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "c8b5690e-3205-4318-a67c-ffb518bbb575",
  },
});

export const userAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
  },
  unfollow(id: string) {
    return instanse.delete(`follow/${id}`).then((response) => response.data);
  },
  follow(id: string) {
    return instanse.post(`follow/${id}`).then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId: string) {
    return instanse.get(`profile/` + userId).then((response) => response.data);
  },
  getStatus(userId: string) {
    return instanse.get(`profile/status/` + userId).then((response) => response.data);
  },
  updateStatus(status: string) {
    return instanse.put(`profile/status/`, { status: status }).then((response) => response.data);
  },
  savePhoto(photo: File) {
    const formData = new FormData();
    formData.append("image", photo);
    return instanse.put(`profile/photo/`, formData, { headers: { "Content-Type": "multipart/from-data" } }).then((response) => response.data);
  },
  saveProfile(profile: UpdateProfileType) {
    return instanse.put(`profile`, profile).then((response) => response.data);
  },
};

export const authAPI = {
  me() {
    return instanse.get(`auth/me`).then((response) => response.data);
  },
  login(email: string, password: string, rememberMe: boolean = false) {
    return instanse.post(`auth/login`, { email, password, rememberMe }).then((response) => response.data);
  },
  logout() {
    return instanse.delete(`auth/login`).then((response) => response.data);
  },
};

export type UpdateProfileType = {
  fullName: string;
  aboutMe: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
};
