import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchTVImages = async (id: number) => {
  const response = await (
    await axios(`${BASE_URL}/tv/${id}/images?api_key=${API_KEY}&language=ko`)
  ).data;
  return response;
};

export const fetchTVKeywords = async (id: number) => {
  const response = await (
    await axios(`${BASE_URL}/tv/${id}/keywords?api_key=${API_KEY}`)
  ).data;
  return response;
};
