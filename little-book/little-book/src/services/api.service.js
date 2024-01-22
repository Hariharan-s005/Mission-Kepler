import axios from "axios";
import { apiConstants } from "../constants/apiConstants";

export const getMembers = async () => {
  try {
    const users = await axios.get(apiConstants.MEMBERS_URL);
    return users.data;
  } catch (error) {
    console.log(apiConstants.MEMBERS_FETCH_ERROR);
  }
};

export const getBlogs = async () => {
  try {
    const blogs = await axios.get(apiConstants.BLOGS_URL);
    return blogs.data;
  } catch (error) {
    console.log(apiConstants.BLOGS_FETCH_ERROR);
  }
};
