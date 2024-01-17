import {createContext } from "react";
import {loginAuthHandler} from '../services/authorisationService';

export const loginContext = createContext(loginAuthHandler);