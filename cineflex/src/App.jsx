import { useState} from "react";
import { Routes, Route } from "react-router-dom";
import {loginAuthHandler} from './services/authorisationService';
import { loginContext } from "./contexts/login-context";
import HomePage from "./pages/HomePage/HomePage";
import AllMoviesPage from "./pages/AllMoviesPage/AllMoviesPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NowShowingPage from "./pages/NowShowingPage/NowShowingPage";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { navigationConstants } from "./constants/navigationConstants";


const App = () => {
  const [loginStatus, setLoginStatus] = useState(loginAuthHandler);
  return (
    <loginContext.Provider value={{ loginStatus, setLoginStatus }}>
      <Routes>
        <Route path={navigationConstants.backSlash} element={<HomePage />} />
        <Route
          path={`${navigationConstants.backSlash}${navigationConstants.allMovies}`}
          element={<AllMoviesPage />}
        />
        <Route
          path={`${navigationConstants.backSlash}${navigationConstants.login}`}
          element={
            <LoginPage
              setLoginStatus={setLoginStatus}
              loginStatus={loginStatus}
            />
          }
        />
        <Route
          path={`${navigationConstants.backSlash}${navigationConstants.nowShowing}`}
          element={
            <ProtectedRoutes
              isAuthorised={loginStatus.isLoggedIn}
              redirectedPath={`${navigationConstants.backSlash}${navigationConstants.login}`}
            >
              <NowShowingPage />
            </ProtectedRoutes>
          }
        />
        <Route path={navigationConstants.asterix} element={<PageNotFound />} />
      </Routes>
    </loginContext.Provider>
  );
};

export default App;
