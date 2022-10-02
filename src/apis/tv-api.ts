import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_API_KEY;

type Arg = {
  id?: number;
  page?: number;
};

export const fetchPopularTV = async ({ page }: Arg) => {
  const response = await (
    await axios(
      `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=ko&page=${page}`
    )
  ).data;
  return response;
};

export const fetchCurrentTV = async ({ page }: Arg) => {
  const response = await (
    await axios(
      `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=ko&page=${page}`
    )
  ).data;
  return response;
};

export const fetchTopRatedTV = async ({ page }: Arg) => {
  const response = await (
    await axios(
      `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
    )
  ).data;
  return response;
};

export const fetchTVDetail = async ({ id }: Arg) => {
  const response = await (
    await axios(`${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=ko`)
  ).data;
  return response;
};

export const fetchTVKeywords = async ({ id }: Arg) => {
  const response = await (
    await axios(`${BASE_URL}/tv/${id}/keywords?api_key=${API_KEY}`)
  ).data;
  return response;
};

export const fetchTVVideos = async ({ id }: Arg) => {
  const response = await (
    await axios(`${BASE_URL}/tv/${id}/videos?api_key=${API_KEY}&language=ko`)
  ).data;
  return response;
};

export const fetchTVCasts = async ({ id }: Arg) => {
  const response = await (
    await axios(`${BASE_URL}/tv/${id}/credits?api_key=${API_KEY}&language=ko`)
  ).data;
  return response;
};

export const fetchTVReviews = async ({ id, page }: Arg) => {
  try {
    const response = await (
      await axios(
        `${BASE_URL}/tv/${id}/reviews?api_key=${API_KEY}&language=en&page=${page}`
      )
    ).data;
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchTVRecommendation = async ({ id }: Arg) => {
  const response = await (
    await axios(
      `${BASE_URL}/tv/${id}/recommendations?api_key=${API_KEY}&language=ko&page=1`
    )
  ).data;
  return response;
};
