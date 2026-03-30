import { apiRequest } from "./apiClient.js";

export const getUsersData = async () => await apiRequest("users");
