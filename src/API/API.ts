import axios from "axios";
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
};

export const profileAPI = {
  getProfile(userId: string) {
    return instanse.get(`profile/` + userId).then((response) => response.data);
  },
};

export const authAPI = {
  getMe() {
    return instanse.get(`auth/me`, { withCredentials: true }).then((response) => response.data);
  },
};

export const followUnfollowAPI = {
  unfollow(id: string) {
    return instanse.delete(`follow/${id}`).then((response) => response.data);
  },
  follow(id: string) {
    return instanse.post(`follow/${id}`).then((response) => response.data);
  },
};
