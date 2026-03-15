import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export async function getSongs({ mood }) {
  const response = await api.get("/api/songs?mood=" + mood);

  return response.data;
}
