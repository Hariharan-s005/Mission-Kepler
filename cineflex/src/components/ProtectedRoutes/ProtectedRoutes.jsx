import { Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

const ProtectedRoutes = (props) => {
  const { isAuthorised, redirectedPath, children } = props;
  return (
    <>
      {isAuthorised && (children ? children : <HomePage />)}
      {!isAuthorised && <Navigate to={redirectedPath} />}
    </>
  );
};

export default ProtectedRoutes;
