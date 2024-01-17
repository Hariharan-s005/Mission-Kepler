import axios from "axios";
import { URLConstants } from "../constants/URLConstants";

export const getShortTeasers = async () => {
  try {
    const teasers = await axios.get(URLConstants.shortTeasers);
    return teasers.data;
  } catch (error) {
    console.log(URLConstants.SHORT_TEASERS_FETCH_ERROR);
  }
};

export const getMovies = async (pageNo) => {
  try {
    const movies = await axios.get(URLConstants.movies);
    const startIndex = pageNo === 1 ? 0 : (pageNo - 1) * 6;
    const endIndex = pageNo * 6;
    return movies.data.slice(startIndex, endIndex);
  } catch (error) {
    console.log(URLConstants.MOVIES_FETCH_ERROR);
  }
};
