import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchPopularMovie = async (page?: number) => {
  const response = await (
    await axios(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko&page=${page}`
    )
  ).data;
  return response;
};

export const fetchNowPlayingMovie = async (page?: number) => {
  const response = await (
    await axios(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko&page=${page}`
    )
  ).data;
  return response;
};

export const fetchUpcomingMovie = async (page?: number) => {
  const response = await (
    await axios(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ko&page=${page}`
    )
  ).data;
  return response;
};

export const fetchTopRatedMovie = async (page?: number) => {
  const response = await (
    await axios(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko&page=${page}`
    )
  ).data;
  return response;
};
