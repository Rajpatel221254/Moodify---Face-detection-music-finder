import axios from 'axios'

const api = axios.create({
  baseURL: process.env.BACKEND_URL || "http://localhost:3000",
  withCredentials: true,
});

export async function getSongs({mood}) {
  const response = await api.get("/api/songs?mood=" + mood);

  return response.data;
}