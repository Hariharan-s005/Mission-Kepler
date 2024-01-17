import { userDetails } from "../constants/userDetails";

export const loginAuthHandler = () => {
  const login = JSON.parse(localStorage.getItem("userName"));
  return login ? login : { isLoggedIn: false, name: "" };
};

export const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

export const verifyUser = (userEmail, password) => {
  const isAuthorised = userDetails.some((user) => {
    if (user.userEmail === userEmail && user.password === password) {
      return true;
    }
    return false;
  });
  return isAuthorised;
};

export const getUserName = (userEmail) => {
  const user = userDetails.find((user) => user.userEmail === userEmail);
  return user.userName;
};
