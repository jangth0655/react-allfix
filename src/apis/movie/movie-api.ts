import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchPopularMovie = async (page?: number) => {
  console.log(page);
  const response = await (
    await axios(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko&page=${page}`
    )
  ).data;
  return response;
};
