import axios from "axios";
import { URL_CONSTANTS } from "../constants/URLConstants";

export const getShortTeasers = async () => {
  try {
    const teasers = await axios.get(URL_CONSTANTS.shortTeasers);
    return teasers.data;
  } catch (error) {
    console.log("Error while fetching short Teasers from the API");
  }
};

export const getMovies = async (pageNo) => {
  try {
    const movies = await axios.get(URL_CONSTANTS.movies);
    const startIndex = pageNo === 1 ? 0 : (pageNo - 1) * 6;
    const endIndex = pageNo * 6;
    return movies.data.slice(startIndex, endIndex);
  } catch (error) {
    console.log("Error while fetching movies from the API");
  }
};
