import { createContext, useState, useContext} from "react";
import { errorMesssageConstants } from "../constants/errorMessageConstants";

const ThemeContext = createContext();

export const useTheme=()=>{
    const context=useContext(ThemeContext);
    if(!context) {
        throw new Error(errorMesssageConstants.USE_THEME_ERROR)
    }
    return context;
}
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
