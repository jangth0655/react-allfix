import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_API_KEY;

type MovieArg = {
  id?: number;
  page?: number;
  keyword?: string;
};

export const fetchPopularMovie = async ({ page }: MovieArg) => {
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

/* */

export const fetchMovieDetail = async (id?: number) => {
  const response = await (
    await axios(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko`)
  ).data;
  return response;
};

export const fetchMovieRecommendation = async (id?: number) => {
  const response = await (
    await axios(
      `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=ko`
    )
  ).data;
  return response;
};

export const fetchMovieCasts = async (id?: number) => {
  const response = await (
    await axios(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=ko`
    )
  ).data;
  return response;
};

export const fetchMovieVideos = async (id?: number) => {
  const response = await (
    await axios(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=ko`)
  ).data;
  return response;
};

export const fetchMovieReviews = async ({ id, page }: MovieArg) => {
  try {
    const response = await (
      await axios(
        `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en&page=${page}`
      )
    ).data;
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchMovieKeywords = async (id?: number) => {
  const response = await (
    await axios(`${BASE_URL}/movie/${id}/keywords?api_key=${API_KEY}`)
  ).data;
  return response;
};

export const fetchMovieSearch = async ({ keyword }: MovieArg) => {
  const response = await (
    await axios(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=ko&query=${keyword}`
    )
  ).data;
  return response;
};
