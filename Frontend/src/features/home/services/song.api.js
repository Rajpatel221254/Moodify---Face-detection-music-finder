import axios from 'axios'

const api = axios.create({
  baseURL: "https://moodify-cynx.onrender.com",
  withCredentials: true,
});

export async function getSongs({mood}) {
  const response = await api.get("/api/songs?mood=" + mood);

  return response.data;
}